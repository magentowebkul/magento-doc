import os
import re

docs_dir = "/home/users/nadim.ahmad/Downloads/vuepress/push-notification-docs/docs"
order = [
    "introduction.md",
    "requirements.md",
    "installation.md",
    "activation.md",
    "configuration/overview.md",
    "configuration/settings.md",
    "help/troubleshooting.md",
    "help/faq.md"
]

combined_content = """---
title: Magento 2 Push Notification Guide
description: Complete user guide for Magento 2 Push Notification
---

# Magento 2 Push Notification Guide

"""

for rel_path in order:
    full_path = os.path.join(docs_dir, rel_path)
    if os.path.exists(full_path):
        with open(full_path, "r", encoding="utf-8") as f:
            content = f.read()
            # Downgrade headings: H3->H4, H2->H3, H1->H2
            # We must process them in reverse order to avoid double-replacing
            content = re.sub(r'^### ', '#### ', content, flags=re.MULTILINE)
            content = re.sub(r'^## ', '### ', content, flags=re.MULTILINE)
            content = re.sub(r'^# ', '## ', content, flags=re.MULTILINE)
            
            combined_content += content + "\n\n---\n\n"
        # We can delete the file since it's now combined
        os.remove(full_path)

# Write the combined guide
guide_path = os.path.join(docs_dir, "guide.md")
with open(guide_path, "w", encoding="utf-8") as f:
    f.write(combined_content)

print(f"Combined documentation written to {guide_path}")
