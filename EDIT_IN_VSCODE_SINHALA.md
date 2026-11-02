# VS Code එකෙන් Portfolio Content Update කරන ආකාරය 🇱🇰

**මෙම Version එකේ Admin Panel නැහැ.** Website එක සාමාන්‍ය Static React Application එකක්. ඔයාගේ Existing Original Design, Hero Background, Cards, Animations, Project Gallery සහ Mobile Layout රඳවාගෙන තිබෙනවා.

## 1. Project එක VS Code එකෙන් විවෘත කරන්න

ZIP එක Extract කරලා එහි `Udara-Portfolio-Static-Cloudflare-Ready` folder එක VS Code එකෙන් Open කරන්න.

Terminal එකේ:

```bash
npm ci
npm run dev
```

Browser එකේ `http://localhost:5173` විවෘත කරන්න. සියලුම Projects බලන්න `http://localhost:5173/projects` යන්න.

## 2. ප්‍රධාන Content එක වෙනස් කිරීම

**`src/data/siteContent.json`** ගොනුව විවෘත කරන්න. මේ එකම File එකේ පහත Field තියෙනවා:

| JSON Key | වෙනස් කළ හැකි දේ |
| --- | --- |
| `profile` | Name, Role, Email, Phone, LinkedIn, GitHub |
| `heroRoles` | Hero එකේ මාරුවෙන Roles |
| `heroIntro` | Hero Description |
| `aboutParagraphs` | About Section Paragraphs |
| `aboutImage` | වම් පැත්තේ Portrait Image (`/about.png` වැනි) |
| `aboutFeatures` | About Section Cards (title, description, icon) |
| `skillCategories` | Skills, Logo Icons, Colors සහ Custom Logo URL |
| `experiences` | Internship සහ Freelance Experience, Responsibilities |
| `education` | Academic Overview, University, Subjects, Status |
| `projectCategories` | All Projects Page එකේ Category Buttons |
| `contactContent` | Contact Headings සහ Text |
| `contactExtras` | අමතර Contact Cards / Links |

**සැලකිලිමත් වන්න:** JSON ලියන විට `"` / `,` / `[` / `]` / `{` / `}` නිවැරදිව තබන්න. VS Code JSON Validation Errors පෙන්වනවා.

### Example: Hero Text වෙනස් කරන්න

`"heroIntro"` අගය වෙනස් කරන්න:

```json
"heroIntro": "I build responsive WordPress websites and user-friendly digital experiences."
```

### Example: About Photo වෙනස් කරන්න

1. අලුත් Image එක `public/` Folder එකට Copy කරන්න. උදා: `my-photo.webp`
2. `src/data/siteContent.json` යටතේ:

```json
"aboutImage": "/my-photo.webp"
```

### Example: New Skill / Logo

`skillCategories` තුළ ඕනෑම Category එකේ `skills` List එකට පහත ආකාරයේ Item එකක් එකතු කරන්න. `logoUrl` දාන්න පුළුවන්; නැත්නම් `icon` Field එක Simple Icons හරහා ලාංඡනය ලබාගැනීමට භාවිත වෙනවා.

```json
{
  "name": "WordPress",
  "icon": "wordpress",
  "color": "21759B",
  "logoUrl": "https://cdn.simpleicons.org/wordpress/21759B"
}
```

External Logo එකක් භාවිත කරන විට `https://` Link එකක් යොදන්න. Stable Option එකක් ලෙස PNG/SVG File එක `public/` Folder එකට Copy කර Component Source එකේ Local Path භාවිත කළ හැකියි. (Current Logo Field එක custom HTTPS URLs සඳහායි.)

### Example: New Experience

`experiences` Array එකේ තිබෙන Freelance/Internship Entry එක Copy කරලා Values වෙනස් කරන්න. `description` හිස් String එකක් නම් Experience Card එකේ Short Description නැහැ. `responsibilities` List එක Details Dialog එකේ පෙන්වනවා.

### Example: Extra Contact Card එකක්

`contactExtras` තුළ Item එකක් එකතු කරන්න:

```json
"contactExtras": [
  {
    "label": "Portfolio Enquiries",
    "value": "Contact on LinkedIn",
    "url": "https://www.linkedin.com/in/p-g-udara-dilshan"
  }
]
```

## 3. Projects Add / Remove / Edit

**`src/data/projects.ts`** File එකේ `defaultProjects` Array එක තියෙනවා. දැනට තිබෙන Project එකක් Copy කරලා වෙනස් කිරීම පහසුයි:

```ts
{
  id: 'my-new-project',
  slug: 'my-new-project',
  title: 'My New Project',
  description: 'One-line summary of the project.',
  details: 'A longer explanation of the project.',
  image: '/my-new-project.png',
  category: 'Frontend Development',
  date: 'Nov 2026',
  year: '2026',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  links: [
    { label: 'Live Demo', url: 'https://example.com' },
    { label: 'GitHub', url: 'https://github.com/your-name/your-repo' },
    { label: 'LinkedIn', url: 'https://linkedin.com/posts/your-post' },
  ],
  featured: false,
},
```

- Image එක `public/my-new-project.png` ලෙස Upload කරන්න.
- Live Demo එකක් නැත්නම් `Live Demo` Link එක නොදමන්න. ඒ Icon එක පෙන්වන්නේ නැහැ.
- GitHub හෝ LinkedIn Link එකක් නැත්නම් ඒ Line එක ඉවත් කරන්න.
- Category නම **`src/data/siteContent.json` → `projectCategories`** තුළත් තියෙන්න ඕනේ.
- `featured: true` කළ පමණින් Homepage Featured Section එක වෙනස් නොවෙන්න පුළුවන්; දැනට `src/components/sections/Projects.tsx` හි default Featured Slugs තුන තියෙනවා. ඒ Slugs වෙනස් කරන්න, නැත්නම් `siteContent.json` හි `projects` Override එකක් භාවිත කළ විට Featured Flag පෙන්වයි.
- Project Delete කිරීමට එහි සම්පූර්ණ `{ ... },` Entry එක Delete කරන්න; අසල්වැසි Entry වල Commas නිවැරදිව තබන්න.

## 4. All Projects Categories

`src/data/siteContent.json` ගොනුවේ `projectCategories` List එකට අලුත් Category නමක් දාන්න. එම Exact Name එක `src/data/projects.ts` හි Project `category` Field එකට යොදන්න. Page එකේ Filter Buttons එම List එකෙන්ම නිර්මාණය වෙනවා.

## 5. Website එක Local Test කරන්න

```bash
npm run check:static
npm run build
npm run preview
```

Browser එකෙන් Main Page, `/projects`, Project Details Dialogs, Category Filters, LinkedIn/GitHub Buttons සහ Mobile Widths පරීක්ෂා කරන්න.

## 6. GitHub හරහා Cloudflare එක Update කරන්න

ඔයාගේ Local Project එක Git Repository එකේම නම්:

```bash
git status
git add -A
git commit -m "Update portfolio content"
git push origin main
```

Cloudflare Pages එකට GitHub Repository එක Connect වෙලා තියෙන නිසා Push එකෙන් Automatic Build + Deploy වෙනවා. **Build Command `npm run build`, Output Folder `dist`**.

### පරණ Admin Version එක GitHub එකේ තිබෙනවා නම්

අලුත් Files පමණක් උඩින් Copy කළාම පරණ `functions/`, `server/` Files GitHub එකේ ඉතිරි වෙන්න පුළුවන්. එය වැළැක්වීමට:

1. GitHub Repository එක PC එකට `git clone https://github.com/p-g-udara-dilshan/udara-portfolio.git` මඟින් Clone කරන්න.
2. Clone කළ Folder එකේ `.git` Folder එක **ඉවත් නොකර**, අනෙක් පැරණි Project Files සහ Folders Delete කරන්න.
3. මේ ZIP එකේ අලුත් Project Files **සියල්ල** Clone කළ Folder එකට Copy කරන්න.
4. Terminal එකෙන් `npm ci && npm run build` Run කරලා, ඉන්පසු `git add -A`, `git commit`, `git push` කරන්න.

මේ විදිහට Commit කරන විට පරණ Admin Backend Files Git Repository එකෙන්ත් Delete වෙනවා.

## 7. Cloudflare Settings පිරිසිදු කිරීම

Static Version එකේ `VITE_ADMIN_PATH`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`, D1 Binding සහ R2 Binding අවශ්‍ය නැහැ. අලුත් static deployment එක සාර්ථක බව තහවුරු කළ පසු ඒවා ඉවත් කරන්න. `functions/` folder එක නොමැති බැවින් API endpoints Deploy වෙන්නේ නැහැ.

## වියදම් / Availability

Cloudflare Pages Static Hosting එකේ සාමාන්‍ය Idle Sleep එකක් නැහැ; GitHub Repo එකේ Code + Images තියෙනවා. Free Plan Terms, Build Limits සහ Storage Limits තවම බලපානවා. Fully unlimited හෝ permanent availability කිසිසේත්ම සහතික කරන්නේ නැහැ.
