import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import assert from 'node:assert/strict'

const root = process.cwd()
const text = path => readFileSync(join(root, path), 'utf8')
const expectedMissing = [
  'server', 'functions', 'cloudflare', 'src/pages/AdminContent.tsx',
  'src/admin.tsx', 'src/config/adminRoute.ts',
  'public/_routes.json', 'manage-781c40a5ad75861d4806d89f.html',
]
for (const p of expectedMissing) assert(!existsSync(join(root, p)), `Admin/backend file still present: ${p}`)
for (const p of ['src/App.tsx','src/main.tsx','src/components/layout/Footer.tsx','vite.config.ts']) {
  assert(!/AdminContent|ADMIN_ENTRY_URL|\/api\/|adminLoginUrl|VITE_ADMIN_PATH/i.test(text(p)), `Admin/backend reference in ${p}`)
}
const content = JSON.parse(text('src/data/siteContent.json'))
for (const key of ['heroRoles','heroIntro','aboutParagraphs','aboutFeatures','education','projectCategories','contactContent','contactExtras','skillCategories','experiences'])
  assert(key in content, `Missing editable content key: ${key}`)
const projects = text('src/data/projects.ts')
const matches = [...projects.matchAll(/\bimage:\s*['"](\/[^'"\s]+)['"]/g)]
assert(matches.length >= 15, `Unexpected number of project images: ${matches.length}`)
for (const [, image] of matches) assert(existsSync(join(root, 'public', image.slice(1))), `Project image missing: ${image}`)
assert(existsSync(join(root, 'public','about.png')))
assert(existsSync(join(root,'public','herobg.png')))
assert(existsSync(join(root,'public','logo.png')))
assert(text('public/_redirects').includes('/projects /index.html 200'))
console.log(`PASS: static-only source, public assets, ${matches.length} project images, editable content, /projects routing`)
