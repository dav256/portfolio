import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const html=await fs.readFile(path.join(root,'index.html'),'utf8');
const css=await fs.readFile(path.join(root,'styles.css'),'utf8');
const content=await fs.readFile(path.join(root,'content.js'),'utf8');
new vm.Script(await fs.readFile(path.join(root,'script.js'),'utf8'));
const ctx={window:{}};vm.runInNewContext(content,ctx);const data=ctx.window.PORTFOLIO;
assert(data.projects.length>=5,'Five disciplines must be represented');
const categories=['Graphic Design','Photography','Roblox Builds','Websites','Digital Projects'];
for(const category of categories)assert(data.projects.some(p=>p.category===category),`Missing ${category}`);
assert.equal(new Set(data.projects.map(p=>p.id)).size,data.projects.length,'Project IDs must be unique');
const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
for(const [,anchor] of html.matchAll(/href="#([^"]+)"/g))assert(ids.has(anchor),`Broken anchor: ${anchor}`);
const assets=[...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(m=>m[1]).filter(s=>!s.includes(':'));
assets.push(...data.projects.map(p=>p.image),...Array.from(css.matchAll(/url\(['"]?([^)'" ]+)/g),m=>m[1]));
assets.push(data.hero.image, data.portrait.image);
for (const project of data.projects) {
  assert(project.gallery.length >= 3, 'Each project needs at least three gallery slots');
  for (const item of project.gallery) {
    assets.push(item.image);
    assert(item.alt && item.caption, 'Gallery images need alt text and captions');
    assert.equal(typeof item.placeholder, 'boolean');
  }
}
for(const asset of new Set(assets)){const stat=await fs.stat(path.join(root,asset));assert(stat.size>0,`Empty asset: ${asset}`);}
for(const project of data.projects){assert(project.alt && project.description,`Missing accessible content: ${project.id}`);assert.equal(typeof project.placeholder,'boolean','Every project needs explicit placeholder status');}
assert(/prefers-reduced-motion/.test(css),'Reduced motion support missing');
assert(data.email==='dgarner.whs@gmail.com','Public email must match the supplied address');
console.log(`PASS: ${data.projects.length} projects, all five categories, local assets, internal links, content syntax, email, and reduced motion.`);
