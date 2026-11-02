import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import assert from 'node:assert/strict'

const root = process.cwd()
for (const path of ['dist/index.html', 'dist/projects/index.html', 'dist/logo.png']) {
  assert(existsSync(join(root, path)), `Build output missing: ${path}`)
}
const main = readFileSync(join(root, 'dist/index.html'), 'utf8')
const projects = readFileSync(join(root, 'dist/projects/index.html'), 'utf8')
assert(main.includes('assets/'), 'Homepage JS/CSS missing in dist/index.html')
assert(projects.includes('assets/'), 'Project page JS/CSS missing in dist/projects/index.html')
assert(projects.includes('All Projects | Udara Dilshan'), 'Project page metadata missing')
console.log('PASS: main portfolio and physical /projects/ page built')
