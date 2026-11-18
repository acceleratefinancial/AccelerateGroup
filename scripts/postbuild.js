const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // Add cms-no-rewrite to all script and link tags with /_next/
      content = content.replace(/<(script|link)([^>]*?)(src|href)="(\/_next\/[^"]*)"([^>]*)>/g, (m, tag, pre, attr, url, post) => {
        if (m.includes('cms-no-rewrite')) return m;
        if (m.includes('class="')) {
          return `<${tag}${pre}${attr}="${url}"${post}`.replace(/class="([^"]*)"/, 'class="$1 cms-no-rewrite"');
        } else {
          return `<${tag} class="cms-no-rewrite"${pre}${attr}="${url}"${post}>`;
        }
      });
      fs.writeFileSync(fullPath, content);
    }
  }
}

const outDir = path.join(__dirname, '..', 'out');
if (fs.existsSync(outDir)) {
  processDir(outDir);
  console.log('Successfully injected cms-no-rewrite to prevent CloudCannon _cchid rewriting.');
}
