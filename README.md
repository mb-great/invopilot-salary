# InvoPilot Tools

A Next.js 14 App Router project that houses SEO-optimised tools for InvoPilot, starting with the **Salary Calculator**. It generates **63 SEO-optimised salary calculator pages** (40 hourly + 23 yearly) from a single dynamic template, strictly built using Test-Driven Development (TDD) for reliability.

---

## ✨ Features

- **Dynamic Routing** — `/tools/salary-calculator/[slug]` — one template, infinite pages.
- **Single Source of Truth** — Add a new page in `src/lib/salary-data.ts` in one line, and the system handles the rest.
- **Interactive Calculator** — Adjust hourly rate, hours/week, weeks/year, and tax rate live (computed on the server first for SSR indexability).
- **Fractional & Part-Time Support** — Pages dynamically show quarter rates ($X.25, $X.50) and part-time hour calculations (20, 25, 30, 35 hrs/wk).
- **Intelligent Cross-Linking** — Automatically pairs hourly rates to their closest yearly equivalent for internal link SEO.
- **JSON-LD Schema** — Rich `WebPage`, `FAQPage`, and `SoftwareApplication` structured data on every page.
- **Static Export Ready** — `npm run build` produces a fully static site output deployable anywhere.
- **TDD Backed** — Fully covered by Vitest to ensure mathematical accuracy and template integrity.

---

## 📁 Folder Structure

```
invopilot-tools/
├── src/
│   ├── app/
│   │   ├── layout.tsx                        ← Root layout + Google Fonts
│   │   ├── globals.css                       ← Design tokens & resets
│   │   └── salary-calculator/
│   │       ├── page.tsx                      ← Hub page index
│   │       └── [slug]/
│   │           ├── page.tsx                  ← THE template (all 63 pages)
│   │           └── page.module.css
│   ├── components/
│   │   ├── Calculator.tsx / .module.css      ← Interactive SSR salary table
│   │   ├── FractionalRates.tsx               ← Fractional calculations
│   │   ├── PartTimeHours.tsx                 ← Part time calculations
│   │   ├── CTABanner.tsx / .module.css       ← Invoice generator CTA
│   │   ├── FAQ.tsx / .module.css             ← Accordion FAQ
│   │   └── WPHeader.tsx & WPFooter.tsx       ← InvoPilot Global Nav
│   ├── lib/
│   │   ├── salary-data.ts                    ← ⭐ ADD NEW PAGES HERE
│   │   ├── cross-link.ts                     ← Hourly/Yearly linking engine
│   │   ├── json-ld.ts                        ← Schema generator
│   │   └── faq-builder.ts                    ← Auto-generates FAQ per entry
│   └── __tests__/                            ← Vitest TDD suites
├── public/                                   ← Static assets (logo.webp)
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Running Locally

### Prerequisites
- **Node.js** 18.17 or later ([download](https://nodejs.org))
- **npm** 9+ (comes with Node)

### Steps

```bash
# 1. Clone the project
git clone https://github.com/mb-great/invopilot-tools.git
cd invopilot-tools

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Run tests
npm run test
```

Open **http://localhost:3000** in your browser to view the hub page, or visit a specific slug like `/tools/salary-calculator/22.5-an-hour`.

---

## 🏗️ Building for Production

```bash
# Build + static export
npm run build
```

This generates exactly 63 static HTML pages ready for distribution.

---

## ➕ Adding More Salary Pages

Open **`src/lib/salary-data.ts`** and add one line to the `salaryData` array:

```ts
// Hourly example (supports decimals!)
{ slug: "22.5-an-hour", type: "hourly", value: 22.5, displayLabel: "$22.50 an hour" },

// Yearly example
{ slug: "90000-a-year", type: "yearly", value: 90000, displayLabel: "$90,000 a year" },
```

That's it. On the next build:
- A new static page is generated.
- It gets unique metadata, JSON-LD schema, FAQ, and calculator pre-set to the right value.
- It automatically links itself to related and cross-linked values.

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14 (App Router) | Framework + static export |
| React | 18 | UI components |
| TypeScript | 5 | Type safety |
| Vitest | 4 | Testing |
| CSS Modules | — | Scoped component styles |

No external UI libraries, no Tailwind, no runtime CSS-in-JS — purely CSS Modules for maximum performance and portability.
