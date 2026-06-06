# InvoPilot Salary Calculator Pages

A Next.js 14 project that generates **20 SEO-optimised salary calculator pages** (12 hourly + 8 yearly) from a single template, following the Pinebill model.

---

## ✨ Features

- **Dynamic routing** — `/tools/salary-calculator/[slug]` — one template, infinite pages
- **Single source of truth** — add a new page in `src/lib/salary-data.ts` in one line
- **Interactive calculator** — adjust hourly rate, hours/week, weeks/year, and tax rate live
- **JSON-LD schema** — `WebPage` + `FAQPage` structured data on every page
- **Generated metadata** — unique `<title>` and `<meta description>` per page via Next.js `generateMetadata`
- **InvoPilot branding** — orange `#f97316` accent throughout
- **Static export ready** — `next build` produces a fully static site deployable anywhere
- **Accessible** — semantic HTML, aria attributes, keyboard-navigable FAQ accordion

---

## 📁 Folder structure

```
invopilot-salary/
├── src/
│   ├── app/
│   │   ├── layout.tsx                        ← Root layout + Google Fonts
│   │   ├── globals.css                       ← Design tokens & resets
│   │   ├── page.tsx                          ← Redirects / → first salary page
│   │   └── tools/salary-calculator/[slug]/
│   │       ├── page.tsx                      ← THE template (all 20 pages)
│   │       └── page.module.css
│   ├── components/
│   │   ├── Calculator.tsx / .module.css      ← Interactive salary table
│   │   ├── CTABanner.tsx / .module.css       ← Invoice generator CTA
│   │   ├── FAQ.tsx / .module.css             ← Accordion FAQ
│   │   ├── Header.tsx / .module.css          ← Sticky nav with logo
│   │   └── RelatedLinks.tsx / .module.css    ← Chip links to other pages
│   └── lib/
│       ├── salary-data.ts                    ← ⭐ ADD NEW PAGES HERE
│       └── faq-builder.ts                    ← Auto-generates FAQ per entry
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Running locally

### Prerequisites
- **Node.js** 18.17 or later ([download](https://nodejs.org))
- **npm** 9+ (comes with Node)

### Steps

```bash
# 1. Clone or unzip the project
cd invopilot-salary

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:3000** in your browser. You'll be redirected to `/tools/salary-calculator/27-an-hour`.

Browse to any slug, e.g.:
- http://localhost:3000/tools/salary-calculator/27-an-hour
- http://localhost:3000/tools/salary-calculator/75000-a-year

---

## 🏗️ Building for production

```bash
# Build + static export (outputs to /out)
npm run build
```

The `out/` folder is a fully static site — upload it to any CDN, Vercel, Netlify, Cloudflare Pages, or S3.

> **Note:** If you plan to use Next.js server features later (ISR, API routes, etc.), remove `output: "export"` from `next.config.js` and deploy to Vercel or a Node host.

---

## ➕ Adding more salary pages (scales to hundreds)

Open **`src/lib/salary-data.ts`** and add one line to the `salaryData` array:

```ts
// Hourly example
{ slug: "50-an-hour", type: "hourly", value: 50, displayLabel: "$50 an hour" },

// Yearly example
{ slug: "90000-a-year", type: "yearly", value: 90000, displayLabel: "$90,000 a year" },
```

That's it. On the next build:
- A new static page is generated at `/tools/salary-calculator/50-an-hour`
- It gets unique metadata, JSON-LD schema, FAQ, and calculator pre-set to the right value
- It appears automatically in the Related Links section of other pages

No other files need to change.

---

## 🎨 Branding customisation

All design tokens live in `src/app/globals.css` under `:root`:

```css
--accent:       #f97316;   /* InvoPilot orange — change here for a rebrand */
--accent-hover: #ea580c;
--accent-tint:  #fff7ed;
--font-sans:    "Sora", ...;
--font-mono:    "JetBrains Mono", ...;
```

---

## 🔗 Updating the CTA link

The invoice generator CTA links to `https://invopilot.com/invoice-generator`. To change it, edit `src/components/CTABanner.tsx`:

```tsx
<a href="https://invopilot.com/invoice-generator" ...>
```

---

## 📋 All 20 pages included

| Slug | Type | Page URL |
|------|------|----------|
| `27-an-hour`    | Hourly | `/tools/salary-calculator/27-an-hour` |
| `32-an-hour`    | Hourly | `/tools/salary-calculator/32-an-hour` |
| `33-an-hour`    | Hourly | `/tools/salary-calculator/33-an-hour` |
| `26-an-hour`    | Hourly | `/tools/salary-calculator/26-an-hour` |
| `38-an-hour`    | Hourly | `/tools/salary-calculator/38-an-hour` |
| `42-an-hour`    | Hourly | `/tools/salary-calculator/42-an-hour` |
| `36-an-hour`    | Hourly | `/tools/salary-calculator/36-an-hour` |
| `45-an-hour`    | Hourly | `/tools/salary-calculator/45-an-hour` |
| `65-an-hour`    | Hourly | `/tools/salary-calculator/65-an-hour` |
| `37-an-hour`    | Hourly | `/tools/salary-calculator/37-an-hour` |
| `70-an-hour`    | Hourly | `/tools/salary-calculator/70-an-hour` |
| `75-an-hour`    | Hourly | `/tools/salary-calculator/75-an-hour` |
| `75000-a-year`  | Yearly | `/tools/salary-calculator/75000-a-year` |
| `48000-a-year`  | Yearly | `/tools/salary-calculator/48000-a-year` |
| `56000-a-year`  | Yearly | `/tools/salary-calculator/56000-a-year` |
| `53000-a-year`  | Yearly | `/tools/salary-calculator/53000-a-year` |
| `50000-a-year`  | Yearly | `/tools/salary-calculator/50000-a-year` |
| `55000-a-year`  | Yearly | `/tools/salary-calculator/55000-a-year` |
| `43000-a-year`  | Yearly | `/tools/salary-calculator/43000-a-year` |
| `150000-a-year` | Yearly | `/tools/salary-calculator/150000-a-year` |

---

## 🛠️ Tech stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14 (App Router) | Framework + static export |
| React | 18 | UI components |
| TypeScript | 5 | Type safety |
| CSS Modules | — | Scoped component styles |
| Google Fonts | Sora + JetBrains Mono | Typography |

No external UI libraries, no Tailwind, no runtime CSS-in-JS — purely CSS Modules for maximum performance and portability.

---

## 🐛 Troubleshooting

| Issue | Fix |
|-------|-----|
| `Module not found: @/*` | Make sure `tsconfig.json` has `"paths": { "@/*": ["./src/*"] }` |
| Page not found for a slug | Check the slug is in `salary-data.ts` and re-run `npm run dev` |
| Font flicker on load | Expected on first load in dev; eliminated by `display=swap` in production |
| `output: "export"` breaks API routes | Remove that line from `next.config.js` if you add server-side features |
