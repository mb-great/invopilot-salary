# InvoPilot Tools

A Next.js 14 App Router project housing a collection of SEO-optimised, high-traffic financial tools and calculators for InvoPilot. 

Currently, this repository powers multiple tool suites under the `invopilot.com/tools/` ecosystem, designed with maximum SEO visibility, fast SSR performance, and strict TDD methodology.

---

## 🧰 Available Tools

### 1. Salary Calculator (`/salary-calculator`)
A massive, programmatic SEO tool generating **63 static pages** (40 hourly + 23 yearly variants) from a single dynamic template.
- **Dynamic Routing** (`[slug]/page.tsx`): Infinite scale without duplicating templates.
- **Fractional & Part-Time Support**: Automatically calculates quarter-rates ($27.25) and part-time hours.
- **Internal Cross-Linking**: Hourly rates automatically link to their closest yearly equivalent.
- **Rich Snippets**: `WebPage`, `FAQPage`, and `SoftwareApplication` JSON-LD schema injected automatically.

### 2. MSME Interest Calculator (`/msme-interest-calculator`)
*(Documentation for this tool is pending)*

*(More tools will be added here as the ecosystem grows!)*

---

## 📁 Project Structure

```
invopilot-tools/
├── src/
│   ├── app/
│   │   ├── globals.css                       ← Global design tokens
│   │   ├── layout.tsx                        ← Root layout + Global Nav
│   │   ├── salary-calculator/                ← 🛠️ TOOL 1
│   │   │   ├── page.tsx                      ← Hub page index
│   │   │   └── [slug]/page.tsx               ← Dynamic template
│   │   └── msme-interest-calculator/         ← 🛠️ TOOL 2
│   ├── components/                           ← Shared & tool-specific UI components
│   ├── lib/                                  ← Data structures and helpers (e.g., salary-data.ts)
│   └── __tests__/                            ← Vitest TDD suites for all tools
├── public/                                   ← Static assets (logo, favicons)
├── next.config.js
└── package.json
```

---

## 🚀 Running Locally

### Prerequisites
- **Node.js** 18.17 or later
- **npm** 9+

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

Open **http://localhost:3000** to preview the tools locally.

---

## 🏗️ Building & Deploying

This repository is optimized for **Static HTML Export**.

```bash
# Build + static export
npm run build
```

The output will compile all static pages across all tools (currently 60+ pages) into highly optimized HTML files ready to be deployed to any CDN.

---

## ➕ Extending the Salary Calculator

To add new salary pages, you do **not** need to touch the UI template. Simply open **`src/lib/salary-data.ts`** and add one line to the `salaryData` array:

```ts
// Hourly example (supports decimals!)
{ slug: "22.5-an-hour", type: "hourly", value: 22.5, displayLabel: "$22.50 an hour" },
```

On the next build, the system will automatically:
1. Generate the static page.
2. Build the JSON-LD schema.
3. Hook up related links and fractional math.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|------|---------|---------|
| Core | Next.js 14 (App Router) | Static export and routing |
| Language | TypeScript 5 | Type safety |
| Testing | Vitest 4 | TDD and logic validation |
| Styling | CSS Modules | Scoped, performant component styles |
