import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import sharp from 'sharp';

const docsDir = 'docs';
const imgDir = path.join(docsDir, '.vuepress', 'public', 'images');
fs.mkdirSync(imgDir, { recursive: true });

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const protocol = url.startsWith('https') ? https : http;
        
        protocol.get(url, response => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
            }
            
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', err => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function processImages() {
    const originalMd = fs.readFileSync('../push-notification.md', 'utf-8');
    const urls = [...originalMd.matchAll(/!\[.*?\]\((http.*?)\)/g)].map(m => m[1]);
    
    for (const url of urls) {
        const filename = url.split('/').pop();
        const baseName = path.parse(filename).name;
        
        const tempPath = path.join(imgDir, filename);
        if (!fs.existsSync(tempPath)) {
            console.log(`Downloading ${url}...`);
            try {
                await downloadImage(url, tempPath);
            } catch (e) {
                console.error(`Failed to download ${url}: ${e}`);
                continue;
            }
        }
        
        const webpPath = path.join(imgDir, `${baseName}.webp`);
        const webpHalfPath = path.join(imgDir, `${baseName}@1x.webp`);
        
        try {
            const buffer = fs.readFileSync(tempPath);
            const metadata = await sharp(buffer).metadata();
            
            await sharp(buffer)
                .webp()
                .toFile(webpPath);
                
            await sharp(buffer)
                .resize(Math.round(metadata.width / 2))
                .webp()
                .toFile(webpHalfPath);
                
            console.log(`Converted ${filename} to webp`);
            
            if (path.extname(tempPath) !== '.webp') {
                fs.unlinkSync(tempPath);
            }
        } catch (e) {
            console.error(`Failed to convert ${filename}: ${e}`);
        }
    }
    
    // Update markdown files
    const walkSync = function(dir, filelist = []) {
        const files = fs.readdirSync(dir);
        files.forEach(function(file) {
            if (fs.statSync(path.join(dir, file)).isDirectory()) {
                filelist = walkSync(path.join(dir, file), filelist);
            } else {
                if (file.endsWith('.md')) {
                    filelist.push(path.join(dir, file));
                }
            }
        });
        return filelist;
    };
    
    const mdFiles = walkSync(docsDir);
    for (const file of mdFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const updated = content.replace(/(\/images\/[^)]+)\.(png|jpg|jpeg)/g, '$1.webp');
        if (content !== updated) {
            fs.writeFileSync(file, updated);
            console.log(`Updated links in ${file}`);
        }
    }
}

processImages();
