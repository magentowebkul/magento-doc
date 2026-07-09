import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = "";
const ROOT = path.resolve(__dirname, "..", "docs", ".vuepress", "dist");
const PORT = Number(process.env.PORT ?? 8080);

if (!fs.existsSync(ROOT)) {
    console.error(`[serve] dist not found: ${ROOT}`);
    console.error(`[serve] run "npm run build" first (or "npm run preview")`);
    process.exit(1);
}

const MIME = {
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".mjs": "application/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".webmanifest": "application/manifest+json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".avif": "image/avif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".eot": "application/vnd.ms-fontobject",
    ".map": "application/json",
    ".txt": "text/plain; charset=utf-8",
    ".pdf": "application/pdf",
    ".csv": "text/csv",
    ".xml": "application/xml",
};

const serve = (filePath, res) => {
    fs.readFile(filePath, (err, buf) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 Not Found");
            return;
        }
        const ext = path.extname(filePath).toLowerCase();
        const type = MIME[ext] || "application/octet-stream";
        res.writeHead(200, {
            "Content-Type": type,
            "Cache-Control": "no-store",
        });
        res.end(buf);
    });
};

const server = http.createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split("?")[0]);

    if (urlPath === "/" || urlPath === "") {
        return serve(path.join(ROOT, "index.html"), res);
    }

    let rel = urlPath;
    if (rel.startsWith(BASE)) rel = rel.slice(BASE.length) || "/";

    if (rel.endsWith("/")) rel += "index.html";
    const abs = path.join(ROOT, rel);
    const safeRoot = path.resolve(ROOT);
    const safeAbs = path.resolve(abs);
    if (!safeAbs.startsWith(safeRoot)) {
        res.writeHead(403);
        return res.end("403 Forbidden");
    }

    fs.stat(safeAbs, (err, st) => {
        if (err) {
            // try .html fallback
            if (!path.extname(safeAbs)) {
                const withHtml = safeAbs + ".html";
                return fs.stat(withHtml, (e2, s2) => {
                    if (e2 || !s2.isFile()) {
                        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
                        fs.readFile(path.join(ROOT, "404.html"), (e3, b3) => {
                            if (e3) return res.end("404 Not Found");
                            return res.end(b3);
                        });
                        return;
                    }
                    serve(withHtml, res);
                });
            }
            res.writeHead(404);
            return res.end("404 Not Found");
        }
        if (st.isDirectory()) return serve(path.join(safeAbs, "index.html"), res);
        serve(safeAbs, res);
    });
});

server.listen(PORT, () => {
    console.log(`[serve] http://localhost:${PORT}/`);
    console.log(`[serve] root: ${ROOT}`);
    console.log(`[serve] press Ctrl+C to stop`);
});
