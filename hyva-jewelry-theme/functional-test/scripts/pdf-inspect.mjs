import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { PDFParse } = require("pdf-parse");

const pdfParse = async (buf) => {
    const parser = new PDFParse({ data: new Uint8Array(buf) });
    const info = await parser.getInfo().catch(() => ({ info: {} }));
    const text = await parser.getText();
    return {
        numpages: info.numPages || text.pages?.length || 0,
        info: info.info || {},
        text: text.text || "",
    };
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "..", "artifacts", "pdf-inspect");
await fs.mkdir(OUT_DIR, { recursive: true });

const BASE = "http://127.0.0.1:8126/turnstile-captcha-for-woocommerce";
const PAGES = [
    `${BASE}/introduction.html`,
    `${BASE}/features.html`,
    `${BASE}/installation.html`,
    `${BASE}/api-settings.html`,
    `${BASE}/design-studio.html`,
    `${BASE}/analytics.html`,
    `${BASE}/filters-hooks.html`,
    `${BASE}/faq.html`,
];

/**
 * Harvest the print HTML that client.js generates.
 * We evaluate in the page after waiting for client.js to mount, then call the
 * internal export pipeline — but it triggers window.print(). Instead we
 * reconstruct the same document server-side by asking the page to produce it.
 *
 * Strategy: inject a helper that runs the sanitize+inline path, returns the
 * print HTML string, then we write it to a temp file and let Playwright
 * page.pdf() render it directly.
 */

const extractPrintHtml = async (page) => {
    return await page.evaluate(async () => {
        // Wait for client enhancements to mount
        await new Promise((r) => setTimeout(r, 800));

        const container = document.querySelector(".vp-page, .theme-default-content");
        if (!container) throw new Error("no content container");

        const clone = container.cloneNode(true);

        // Snapshot computed code-block colors from live DOM into clone inline styles
        try {
            const lw = container.querySelectorAll('div[class*="language-"]');
            const cw = clone.querySelectorAll('div[class*="language-"]');
            const nw = Math.min(lw.length, cw.length);
            for (let i = 0; i < nw; i++) {
                const s = window.getComputedStyle(lw[i]);
                if (s.backgroundColor && s.backgroundColor !== "rgba(0, 0, 0, 0)" && s.backgroundColor !== "transparent") cw[i].style.backgroundColor = s.backgroundColor;
                if (s.color && s.color !== "rgba(0, 0, 0, 0)") cw[i].style.color = s.color;
            }
            const liveCN = container.querySelectorAll("pre, pre *");
            const cloneCN = clone.querySelectorAll("pre, pre *");
            const nn = Math.min(liveCN.length, cloneCN.length);
            for (let i = 0; i < nn; i++) {
                const s = window.getComputedStyle(liveCN[i]);
                if (s.color && s.color !== "rgba(0, 0, 0, 0)") cloneCN[i].style.color = s.color;
                if (s.backgroundColor && s.backgroundColor !== "rgba(0, 0, 0, 0)" && s.backgroundColor !== "transparent") cloneCN[i].style.backgroundColor = s.backgroundColor;
                if (s.fontWeight && s.fontWeight !== "400" && s.fontWeight !== "normal") cloneCN[i].style.fontWeight = s.fontWeight;
                if (s.fontStyle && s.fontStyle !== "normal") cloneCN[i].style.fontStyle = s.fontStyle;
            }
            clone.querySelectorAll("pre").forEach((pre) => {
                if (!pre.style.backgroundColor) {
                    const wrap = pre.closest('div[class*="language-"]');
                    if (wrap && wrap.style.backgroundColor) pre.style.backgroundColor = wrap.style.backgroundColor;
                }
                if (!pre.style.color) {
                    const liveP = container.querySelector("pre");
                    if (liveP) {
                        const cs = window.getComputedStyle(liveP);
                        if (cs.color) pre.style.color = cs.color;
                    }
                }
            });
        } catch {}
        clone.querySelectorAll(
            ".doc-share-row, .doc-back-to-top, .doc-copy-btn, .doc-anchor-copy, .doc-export-panel, .doc-zoomer, .doc-skip-link, .doc-shortcut-overlay, .doc-toast, .doc-pdf-btn, .doc-reading-time, .doc-share-fab, .vp-copy-code-button, .vp-back-to-top-button"
        ).forEach((el) => el.remove());
        clone.querySelectorAll("a.header-anchor, button.header-anchor").forEach((a) => {
            const parent = a.parentNode;
            while (a.firstChild) parent.insertBefore(a.firstChild, a);
            a.remove();
        });
        clone.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((h) => {
            h.textContent = (h.textContent || "").replace(/#+\s*$/g, "").trim();
        });

        const origin = window.location.origin;
        clone.querySelectorAll("img[src]").forEach((img) => {
            const src = img.getAttribute("src");
            if (src && src.startsWith("/")) img.setAttribute("src", origin + src);
        });

        // Inline images to data URLs
        await Promise.all(
            Array.from(clone.querySelectorAll("img")).map(async (img) => {
                const src = img.getAttribute("src");
                if (!src || src.startsWith("data:")) return;
                try {
                    const res = await fetch(src, { credentials: "same-origin" });
                    if (!res.ok) return;
                    const blob = await res.blob();
                    const dataUrl = await new Promise((resolve) => {
                        const r = new FileReader();
                        r.onload = () => resolve(r.result);
                        r.readAsDataURL(blob);
                    });
                    img.setAttribute("src", dataUrl);
                } catch {}
            })
        );

        const titleH1 = clone.querySelector("h1");
        const title = (titleH1?.textContent || document.title).replace(/#+\s*$/g, "").trim();
        const sourceUrl = window.location.href;
        const stamp = new Date().toLocaleString();

        const css = `
          @page { size: A4; margin: 18mm 16mm 20mm 16mm; }
          * { box-sizing: border-box; }
          html, body { margin: 0; padding: 0; background: #fff; color: #1d2327; font-family: -apple-system, "SF Pro Text", "Segoe UI", Roboto, "Inter", sans-serif; font-size: 10.5pt; line-height: 1.55; -webkit-print-color-adjust: exact; print-color-adjust: exact; text-rendering: geometricPrecision; }
          .pdf-footer-meta { display: block; margin-top: 1.5rem; padding-top: 0.6rem; border-top: 1px solid #e5e7eb; font-size: 8pt; color: #6b7280; page-break-inside: avoid; }
          h1 { font-size: 20pt; font-weight: 700; margin: 0 0 0.4rem; }
          h2 { font-size: 15pt; font-weight: 650; margin: 1.2rem 0 0.4rem; padding-bottom: 4pt; border-bottom: 1px solid #e5e7eb; break-after: avoid; }
          h3 { font-size: 13pt; font-weight: 600; margin: 1rem 0 0.3rem; break-after: avoid; }
          h4 { font-size: 11.5pt; font-weight: 600; margin: 0.7rem 0 0.2rem; break-after: avoid; }
          p, li { orphans: 3; widows: 3; margin: 0 0 0.55rem; }
          ul, ol { padding-left: 1.4rem; margin: 0 0 0.55rem; }
          a { color: #1a73e8; text-decoration: none; word-break: break-word; }
          a[href^="http"]::after { content: " (" attr(href) ")"; font-size: 0.85em; color: #6b7280; word-break: break-all; }
          pre, code { font-family: "JetBrains Mono", "SF Mono", Consolas, Menlo, monospace; }
          pre { font-size: 8.8pt; line-height: 1.5; border: 1px solid #e5e7eb; border-radius: 6px; padding: 10px 12px; margin: 0.7rem 0; white-space: pre-wrap; word-break: break-word; break-inside: auto; orphans: 4; widows: 4; }
          pre:not([style*="background"]) { background: #f5f5f7; color: #1f2937; }
          code { font-size: 9pt; padding: 1px 5px; border-radius: 3px; }
          code:not([style*="background"]) { background: #f5f5f7; color: #1f2937; }
          pre code { background: transparent !important; padding: 0; font-size: inherit; }
          pre .line { display: block; }
          table { width: 100%; border-collapse: collapse; margin: 0.7rem 0; font-size: 9.5pt; }
          thead { display: table-header-group; }
          tr, .hint-container, blockquote, img, figure, pre { break-inside: avoid; page-break-inside: avoid; }
          th, td { border: 1px solid #e5e7eb; padding: 5pt 8pt; vertical-align: top; text-align: left; }
          th { background: #f3f4f6; font-weight: 600; }
          blockquote { border-left: 3px solid #f6821f; padding: 0.15rem 0 0.15rem 0.8rem; color: #6b7280; margin: 0.7rem 0; }
          img, svg, figure, picture { display: block; max-width: 100%; height: auto; margin: 0.8rem auto; object-fit: contain; }
          img { max-height: 235mm; }
          hr { border: 0; border-top: 1px solid #e5e7eb; margin: 1rem 0; }
          .hint-container { padding: 8pt 12pt; border: 1px solid #e5e7eb; border-left: 3px solid #f6821f; background: #fffaf3; margin: 0.7rem 0; border-radius: 4px; }
          .hint-container.tip { border-left-color: #22c55e; background: #f0fdf4; }
          .hint-container.warning { border-left-color: #f59e0b; background: #fffbeb; }
          .hint-container.danger { border-left-color: #ef4444; background: #fef2f2; }
        `;

        return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${title}</title>
<style>${css}</style>
</head>
<body>
<article>${clone.innerHTML}</article>
<aside class="pdf-footer-meta">Source: ${sourceUrl} · Exported: ${stamp}</aside>
</body>
</html>`;
    });
};

const inspectOne = async (browser, url) => {
    const slug = url.split("/").pop().replace(/\.html$/, "");
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(url, { waitUntil: "networkidle" });

    const printHtml = await extractPrintHtml(page);
    const htmlOut = path.join(OUT_DIR, `${slug}.print.html`);
    await fs.writeFile(htmlOut, printHtml, "utf8");

    const renderPage = await browser.newPage();
    await renderPage.setContent(printHtml, { waitUntil: "networkidle" });
    await renderPage.emulateMedia({ media: "print" });
    await renderPage.evaluate(async () => {
        if (document.fonts && document.fonts.ready) await document.fonts.ready;
    });

    const pdfPath = path.join(OUT_DIR, `${slug}.pdf`);
    await renderPage.pdf({
        path: pdfPath,
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
        margin: { top: "18mm", bottom: "20mm", left: "16mm", right: "16mm" },
    });

    // Parse + audit
    const buf = await fs.readFile(pdfPath);
    const parsed = await pdfParse(buf);

    const issues = [];
    if (parsed.numpages === 0) issues.push("zero pages");
    if (parsed.text.trim().length < 100) issues.push("very little extracted text — likely blank pages");
    if (parsed.text.includes("undefined")) issues.push("'undefined' found in text");
    if (!parsed.text.includes(slug.replace(/-/g, " ").toLowerCase()) && !parsed.text.toLowerCase().includes(slug.split("-")[0])) {
        // loose title presence check
    }

    const headingCount = (parsed.text.match(/^[A-Z][A-Za-z0-9 ,.'-]{4,80}\n/gm) || []).length;

    await page.close();
    await renderPage.close();

    return {
        slug,
        pdfPath,
        bytes: buf.byteLength,
        pages: parsed.numpages,
        textChars: parsed.text.length,
        textWords: parsed.text.trim().split(/\s+/).length,
        headingLikeLines: headingCount,
        info: parsed.info,
        firstChars: parsed.text.slice(0, 240).replace(/\s+/g, " "),
        issues,
    };
};

(async () => {
    const browser = await chromium.launch();
    const results = [];
    for (const url of PAGES) {
        try {
            results.push(await inspectOne(browser, url));
        } catch (err) {
            results.push({ slug: url, error: String(err) });
        }
    }
    await browser.close();

    console.log(JSON.stringify(results, null, 2));

    const report = results.map((r) => {
        if (r.error) return `❌ ${r.slug}: ${r.error}`;
        const mark = r.issues.length === 0 ? "✅" : "⚠️ ";
        return [
            `${mark} ${r.slug}`,
            `   pages: ${r.pages}   bytes: ${(r.bytes / 1024).toFixed(1)} KB   words: ${r.textWords}   text-chars: ${r.textChars}`,
            `   headings: ${r.headingLikeLines}`,
            `   first text: "${r.firstChars}${r.firstChars.length === 240 ? "…" : ""}"`,
            r.issues.length ? `   issues: ${r.issues.join(", ")}` : `   issues: none`,
            `   pdf: ${r.pdfPath}`,
        ].join("\n");
    }).join("\n\n");

    console.log("\n===== PDF AUDIT REPORT =====\n");
    console.log(report);

    await fs.writeFile(path.join(OUT_DIR, "report.txt"), report, "utf8");
})();
