# අලුත් GitHub Repository එකකට Portfolio එක Upload කර Cloudflare Pages වල Host කිරීම

මේ ZIP එකේ **සම්පූර්ණ Static React Project Source Code** තියෙනවා. Original dark purple design, content සහ 20 project images ඇතුළත්. **Admin Panel / Backend / D1 / R2 නැහැ.**

## A. ZIP Extract කරන්න

1. ZIP ගොනුව Windows Explorer හරහා **Extract All** කරන්න.
2. එහි ඇති `udara-dilshan-portfolio` Folder එක VS Code → **File → Open Folder** විවෘත කරන්න.
3. Terminal → New Terminal විවෘත කරන්න. `package.json` පෙනෙන Project Folder එකේ සිට Commands run කරන්න.

## B. PC එකේ Test කරන්න

Node.js 22 (හෝ Vite 6 සඳහා ගැළපෙන version එකක්) සහ Git install කර තිබිය යුතුයි.

```bash
node -v
npm ci
npm run check:static
npm run build
npm run dev
```

Browser එකෙන් `http://localhost:5173/` සහ `http://localhost:5173/projects/` පරීක්ෂා කරන්න. `npm run build` වල Error එකක් ඇත්නම් GitHub/Cloudflare Deploy කිරීමට පෙර නිවැරදි කරන්න.

## C. සම්පූර්ණයෙන්ම අලුත් GitHub Repository එකක් හදන්න

1. `https://github.com/new` විවෘත කරන්න.
2. Owner: `p-g-udara-dilshan`
3. Repository name: **`udara-dilshan-portfolio`** (අලුත් නමක් තෝරාගත හැකියි).
4. Visibility: Public (කැමති නම් Private).
5. **Add a README / .gitignore / license** යන තුනම Disable කරන්න. ZIP එකේ README සහ .gitignore දැනටමත් තියෙනවා.
6. **Create repository** ඔබන්න.

VS Code Terminal එකේ, `package.json` තියෙන Folder එක තුළ:

```bash
git init
git branch -M main
git add -A
git status
git commit -m "Initial commit - static Udara portfolio"
git remote add origin https://github.com/p-g-udara-dilshan/udara-dilshan-portfolio.git
git push -u origin main
```

Repository නම වෙනස් කළා නම් `git remote add origin` URL එකත් ඒ නමට වෙනස් කරන්න. GitHub login අවශ්‍ය වුණොත් Git Credential Manager / browser හරහා Authenticate කරන්න. Password හෝ Access Token Code එකට දාන්න එපා.

## D. පරණ Cloudflare Project එක භාවිත නොකර අලුත් Pages Project එකක් හදන්න

1. `https://dash.cloudflare.com` → **Workers & Pages** වෙත යන්න.
2. **Create application → Pages → Connect to Git / Import existing Git repository** තෝරන්න.
3. GitHub Account එකට අවසර දී අලුතින් Upload කළ `udara-dilshan-portfolio` Repository එක Connect කරන්න.
4. Settings:

| Setting | Value |
|---|---|
| Framework | React (Vite), Vite, හෝ None |
| Production branch | `main` |
| Root directory | හිස්ව තබන්න |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variables | **කිසිවක් අවශ්‍ය නැහැ** |

5. **Save and Deploy** ඔබන්න.
6. Cloudflare ලබාදෙන `*.pages.dev` URL එක විවෘත කරන්න. New Project Name එක ලබාගත හැකිද අනුව URL එක වෙනස් වෙයි.

⚠️ **පරණ Cloudflare Project එක Delete කරන්න ඕනෙ නැහැ** අලුත් Website එක හරියට වැඩ කරන බව තහවුරු කරන තුරු. අලුත් Project එකට පරණ `VITE_ADMIN_PATH`, `ADMIN_USERNAME`, `ADMIN_PASSWORD` Variables හෝ D1/R2 Bindings Copy කරන්න එපා.

## E. අනාගතයේ Content Update කරන්නේ කොහොමද?

| Content | VS Code File |
|---|---|
| Hero, About, Skills, Experience, Education, Contact, Categories | `src/data/siteContent.json` |
| Projects Add/Edit/Delete, Images, Links | `src/data/projects.ts` |
| Images (PNG/WebP/etc) | `public/` |
| Hero and layout styling | `src/components/` සහ `src/styles.css` |

උදාහරණයක් — අලුත් Project එකක් Add කරන්න: `public/new-project.png` දාන්න; `src/data/projects.ts` තුළ තවත් Project Object එකක් add කරන්න. එහි `image: '/new-project.png'` ලෙස reference කරන්න.

වෙනස්කම් Save කළ පසු:

```bash
npm run check:static
npm run build
git add -A
git commit -m "Update portfolio projects and content"
git push origin main
```

Cloudflare GitHub Connection එක මඟින් අලුත් Build එක Auto Deploy වේ.

## F. ප්‍රශ්නයක් ආවොත්

- `npm ci` error: Node.js version සහ internet connection පරීක්ෂා කරන්න.
- Cloudflare Build error: **Deployments → Build logs** බලන්න; `npm run build` Local PC එකේත් run කරන්න.
- `/projects/` Refresh 404: `npm run check:build` ක්‍රියාත්මක කර `dist/projects/index.html` තිබේද බලන්න. පරණ `public/_redirects` file එක ඉවත් කරන්න.
- Image missing: Path එක `/image-name.png` ලෙස නිවැරදිද සහ එම File එක `public/` තුළ තිබේද බලන්න.
- Admin panel: **මෙම Version එකේ නැහැ**; Content update කරන්නේ VS Code → GitHub Push මඟින්.

## වැදගත්

- අලුත් Repo සහ Cloudflare Deployment ඔයාගේ Account එකෙන් Create/Authorize කළ යුතුයි. මේ ZIP එක Hosting කිරීමක් නෙවෙයි.
- Website එකට Node Server එකක්, Database එකක්, Login එකක්, Admin URL එකක් අවශ්‍ය නැහැ.
- GitHub/Cloudflare Free Service Limits සහ Terms තවම අදාළ වේ. කිසිදු සේවාවක 100% අසීමිත/සදාකාලික availability සහතික කළ නොහැකියි.
