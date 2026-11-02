# Udara Dilshan — Static Developer Portfolio

A **React + TypeScript + Vite + Tailwind CSS** personal portfolio, built from the original dark indigo/violet design. This release deliberately **has no admin panel, API, database, login, or server**.

**Start with [START_HERE_SINHALA.md](START_HERE_SINHALA.md) to publish this project to a completely new GitHub repository and Cloudflare Pages site.**

## Pages

- `/` — Home with Hero, About, Skills, Experience, Education, Featured Projects, and Contact.
- `/projects/` — All Projects and category filters.
- Any unsupported route — 404 page on Cloudflare Pages.

## Run on your computer

Use Node.js 22.12+ for consistent local and Cloudflare builds (Node.js 20.19+ is also supported by this toolchain).

```bash
npm ci
npm run check:static
npm run dev
```

Open `http://localhost:5173/` or `http://localhost:5173/projects/`.

## Create production build

```bash
npm run build
npm run preview
```

The `dist/` folder is the website to publish. No server process or special secrets are required.

## Update website content in VS Code

The two primary editing locations are:

1. **`src/data/siteContent.json`** — Hero roles/introduction, About text/cards/photo, Skills and logos, Experience, Education, Contact, and project category names.
2. **`src/data/projects.ts`** — Add, remove, reorder, and edit **projects**, their links, descriptions, images, dates, categories and featured status.

All images belong in `public/` and are linked as `/filename.png` (no `public/` in the URL).

**[See `EDIT_IN_VSCODE_SINHALA.md` for step-by-step instructions and examples.](EDIT_IN_VSCODE_SINHALA.md)**

## Cloudflare Pages deployment

Connect the GitHub repository and set:

| Setting | Value |
| --- | --- |
| Framework preset | Vite (or none with equivalent settings) |
| Branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | empty |

No Cloudflare Functions or D1/R2 bindings are required. Previous admin-related Variables (`VITE_ADMIN_PATH`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`) may be removed from Cloudflare Settings after replacing the deployment. They are not used in this version.

Cloudflare Pages deploys automatically when changes are pushed to the connected GitHub repository. The site is static and does not sleep when idle like a free Node.js web service. Provider usage limits and terms still apply.

The build generates a real `dist/projects/index.html` file, so no Cloudflare rewrite is needed. `public/404.html` remains the not-found page for other routes.

## Security and usage

- **No admin URL exists.** Content is edited in local source files and then committed to GitHub.
- Never publish `.env`, API keys, passwords, or client-only information.
- Public site content and images are accessible to all visitors.
- Contact buttons open existing email/social URLs; no database-backed contact form is included.
- If you change images or resume files, only upload materials you have permission to publish.

## Developer

**Udara Dilshan** · [GitHub](https://github.com/p-g-udara-dilshan) · [LinkedIn](https://www.linkedin.com/in/p-g-udara-dilshan) · [Email](mailto:udara.profile@gmail.com)


## Cloudflare All Projects Page (Fixed)

This is a **two-entry static Vite build** with both the homepage and a dedicated projects HTML page:

- `/` — portfolio homepage
- `/projects/` — all projects and category filters

`vite.config.ts` builds `dist/index.html` and `dist/projects/index.html`. You do not need a Cloudflare SPA fallback rewrite, and should not add `/projects /index.html 200` to `_redirects`.

Check the output after building:

```bash
npm run build
npm run check:build
```

See `FIX_PROJECTS_PAGE_SINHALA.md` for GitHub/Cloudflare publishing steps.
