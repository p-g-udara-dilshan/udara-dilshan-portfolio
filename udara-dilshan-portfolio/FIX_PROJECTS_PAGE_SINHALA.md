# All Projects Page - Cloudflare Pages Fix

**Root cause:** පෙර version එකේ `/projects` path එකට සැබෑ `projects/index.html` build file එකක් තිබුණේ නැහැ. Public `404.html` නිසා Cloudflare Pages fallback එකට රඳා සිටීම විශ්වාසදායක නැහැ. පෙර `_redirects` rules `/projects` නැවත homepage `index.html` වෙත යොමු කළා.

## මේ version එකේ සිදු කළ වෙනස්කම්

- `projects/index.html` අලුතින් එකතු කරලා තියෙනවා.
- `vite.config.ts` එකෙන් Multi-Page Build එකක් කරලා `dist/index.html` සහ `dist/projects/index.html` දෙකම Generate කරනවා.
- All Projects Button දැන් `/projects/` වෙත යනවා.
- පරණ `public/_redirects` ඉවත් කළා.
- Original UI, Color Theme, Project Content, Images, Design වෙනස් කරලා නැහැ.

## VS Code Test

```bash
npm ci
npm run check:static
npm run build
npm run check:build
npm run dev
```

Open `http://localhost:5173/` and `http://localhost:5173/projects/`.

## GitHub Update (existing repository)

1. අලුත් ZIP එක Extract කරන්න.
2. එහි files ඔයාගේ **existing cloned Git repository folder** එකට Copy/Replace කරන්න. Hidden `.git` directory එක delete කරන්න එපා.
3. අවශ්‍ය නම් පැරණි `public/_redirects` file එක අතින් ඉවත් කරන්න (`git add -A` මඟින් delete එක capture වෙනවා).
4. Build checks සමත් නම්:

```bash
git add -A
git commit -m "Fix Cloudflare All Projects route with real HTML page"
git push origin main
```

5. Cloudflare Pages Deployments එකේ latest deployment Success වෙනතුරු පරීක්ෂා කරන්න.
6. Open **https://udara-dilshan-portfolio.pages.dev/projects/** (trailing slash). Incognito window එකෙන්ත් පරීක්ෂා කරන්න.

## Cloudflare settings

- Framework preset: Vite (React)
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: project root / blank
- No Workers, D1, R2, Admin Paths or secrets necessary

## Troubleshooting

If 404 continues, Cloudflare Deployment logs and artifact list check කරන්න. Deployment එක `dist/projects/index.html` emit කළ බව `npm run check:build` මඟින් තහවුරු කරන්න.

If `/projects/` works but `/projects` doesn't, use slash version in navigation and sharing (Cloudflare normally redirects the path).

Static project updates: `src/data/projects.ts` හෝ `src/data/siteContent.json` වෙනස් කරන්න -> `git add -A` -> `git commit` -> `git push`.
