import os
import re
import urllib.request
from PIL import Image

def process_images():
    docs_dir = 'docs'
    img_dir = os.path.join(docs_dir, '.vuepress', 'public', 'images')
    os.makedirs(img_dir, exist_ok=True)
    
    # We will search for image tags like ![alt](/images/filename.ext)
    # But wait, in the original markdown, the images were remote URLs or I changed them to local /images/ paths.
    # Ah, in my written markdown files, I just changed the URLs to `/images/original-name.ext`.
    # Let me actually fetch the original images from the URLs in `push-notification.md`.
    
    # Read the original source file to get the URLs
    with open('../push-notification.md', 'r') as f:
        content = f.read()
        
    urls = re.findall(r'!\[.*?\]\((http.*?)\)', content)
    
    # Download and convert each image
    for url in urls:
        filename = url.split('/')[-1]
        base_name = os.path.splitext(filename)[0]
        
        # Download
        temp_path = os.path.join(img_dir, filename)
        if not os.path.exists(temp_path):
            print(f"Downloading {url}...")
            try:
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req) as response, open(temp_path, 'wb') as out_file:
                    out_file.write(response.read())
            except Exception as e:
                print(f"Failed to download {url}: {e}")
                continue
                
        # Convert to webp
        webp_path = os.path.join(img_dir, f"{base_name}.webp")
        webp_half_path = os.path.join(img_dir, f"{base_name}@1x.webp")
        
        try:
            with Image.open(temp_path) as img:
                # Convert to RGB if it's RGBA/P
                if img.mode in ('RGBA', 'P'):
                    img = img.convert('RGB')
                    
                # Save full size
                img.save(webp_path, 'webp')
                
                # Save half size
                width, height = img.size
                half_size = (width // 2, height // 2)
                img_resized = img.resize(half_size, Image.Resampling.LANCZOS)
                img_resized.save(webp_half_path, 'webp')
                
                print(f"Converted {filename} to webp")
                
            # Remove original if it wasn't already a webp
            if not filename.endswith('.webp'):
                os.remove(temp_path)
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")
            
    # Now update all markdown files to point to .webp
    for root, _, files in os.walk(docs_dir):
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    md_content = f.read()
                    
                # Replace any image extension with .webp in markdown
                # e.g., /images/foo.png -> /images/foo.webp
                updated_content = re.sub(r'(/images/[^)]+)\.(png|jpg|jpeg)', r'\1.webp', md_content)
                
                if md_content != updated_content:
                    with open(filepath, 'w') as f:
                        f.write(updated_content)
                    print(f"Updated image links in {filepath}")

if __name__ == "__main__":
    process_images()
