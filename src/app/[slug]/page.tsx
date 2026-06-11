import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  salaryData,
  getEntryFromSlug,
  getHourlyRate,
  getAnnualSalary,
  usd,
  STANDARD_HOURS_PER_YEAR,
  STANDARD_HOURS_PER_WEEK,
  STANDARD_WEEKS_PER_YEAR,
} from "../../lib/salary-data";
import { buildFAQ } from "../../lib/faq-builder";

import Calculator  from "../../components/Calculator";
import FAQ         from "../../components/FAQ";
import CTABanner   from "../../components/CTABanner";
import RelatedLinks from "../../components/RelatedLinks";

import styles from "./page.module.css";

// ─── Static generation ────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return salaryData.map((e) => ({ slug: e.slug }));
}

// ─── Per-page metadata ────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryFromSlug(slug);
  if (!entry) return {};

  const hourly = getHourlyRate(entry);
  const annual = getAnnualSalary(entry);
  const isHourly = entry.type === "hourly";

  const title = entry.seoTitle || (isHourly
    ? `${entry.displayLabel} Is How Much a Year? (${new Date().getFullYear()} Breakdown)`
    : `${entry.displayLabel} Is How Much an Hour? (${new Date().getFullYear()} Breakdown)`);

  const description = entry.seoDescription || (isHourly
    ? `${entry.displayLabel} is ${usd(annual)} a year based on 2,080 hours. See monthly, biweekly, weekly, and daily breakdowns plus an interactive calculator.`
    : `${entry.displayLabel} is ${usd(hourly, 2)} an hour. See your monthly, biweekly, and weekly pay with our interactive salary calculator.`);

  return {
    title,
    description,
    openGraph: { title, description, type: "website" },
    twitter: { card: "summary", title, description },
  };
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
function JsonLd({ slug, faqItems, title }: {
  slug: string;
  faqItems: { q: string; a: string }[];
  title: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://invopilot.com/tools/salary-calculator/${slug}`,
        "url": `https://invopilot.com/tools/salary-calculator/${slug}`,
        "name": title,
        "isPartOf": { "@id": "https://invopilot.com" },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://invopilot.com" },
            { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://invopilot.com/tools" },
            { "@type": "ListItem", "position": 3, "name": "Salary Calculator", "item": "https://invopilot.com/tools/salary-calculator" },
            { "@type": "ListItem", "position": 4, "name": title },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map(({ q, a }) => ({
          "@type": "Question",
          "name": q,
          "acceptedAnswer": { "@type": "Answer", "text": a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function SalaryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getEntryFromSlug(slug);
  if (!entry) notFound();

  const hourly  = getHourlyRate(entry);
  const annual  = getAnnualSalary(entry);
  const monthly = annual / 12;
  const biweekly = annual / 26;
  const weekly  = annual / 52;
  const isHourly = entry.type === "hourly";

  const pageTitle = entry.seoTitle || (isHourly
    ? `${entry.displayLabel} Is How Much a Year?`
    : `${entry.displayLabel} Is How Much an Hour?`);

  const faqItems = buildFAQ(entry);
  const related  = salaryData.filter((e) => e.slug !== slug).slice(0, 12);

  return (
    <>
      <JsonLd slug={slug} faqItems={faqItems} title={pageTitle} />
      

      <main className={styles.main}>
        {/* Breadcrumbs */}
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <a href="https://invopilot.com">Home</a>
          <span aria-hidden>›</span>
          <a href="/tools/salary-calculator/27-an-hour">Salary Calculator</a>
          <span aria-hidden>›</span>
          <span aria-current="page">{entry.displayLabel}</span>
        </nav>

        {/* Hero */}
        <header className={styles.hero}>
          <div className={styles.badge}>
            <span>💰</span> Salary Calculator {new Date().getFullYear()}
          </div>
          <h1 className={styles.h1}>{pageTitle}</h1>

          <div className={styles.answerBox}>
            <p>
              {isHourly ? (
                <>
                  <strong>{entry.displayLabel}</strong> is{" "}
                  <strong className={styles.accent}>{usd(annual)}</strong> per year,
                  based on a standard {STANDARD_HOURS_PER_WEEK}-hour week and {STANDARD_WEEKS_PER_YEAR} weeks
                  ({STANDARD_HOURS_PER_YEAR.toLocaleString()} hours/year). That breaks down to{" "}
                  <strong>{usd(monthly)}/month</strong>,{" "}
                  <strong>{usd(biweekly)}</strong> every two weeks, and{" "}
                  <strong>{usd(weekly)}/week</strong> — before tax.
                </>
              ) : (
                <>
                  <strong>{entry.displayLabel}</strong> is{" "}
                  <strong className={styles.accent}>{usd(hourly, 2)}/hour</strong> assuming a
                  standard 40-hour week and 52 weeks ({STANDARD_HOURS_PER_YEAR.toLocaleString()} hours/year). Monthly that's{" "}
                  <strong>{usd(monthly)}</strong>, or{" "}
                  <strong>{usd(biweekly)}</strong> biweekly — before tax.
                </>
              )}
            </p>
          </div>
        </header>

        {/* Quick Stats */}
        <section className={styles.stats}>
          {[
            { label: "Annual",   value: usd(annual)    },
            { label: "Monthly",  value: usd(monthly)   },
            { label: "Biweekly", value: usd(biweekly)  },
            { label: "Weekly",   value: usd(weekly)    },
            { label: "Hourly",   value: usd(hourly, 2) },
          ].map(({ label, value }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statLabel}>{label}</span>
              <span className={styles.statValue}>{value}</span>
            </div>
          ))}
        </section>

        {/* Calculator */}
        <section className={styles.section}>
          <h2 className={styles.h2}>Adjust to your schedule</h2>
          <p className={styles.lead}>
            Change the hours, weeks, or tax rate below to match your actual situation.
          </p>
          <Calculator
            defaultHourly={hourly}
            defaultHoursPerWeek={STANDARD_HOURS_PER_WEEK}
            defaultWeeksPerYear={STANDARD_WEEKS_PER_YEAR}
          />
        </section>

        {/* Breakdown prose */}
        <section className={styles.section}>
          <h2 className={styles.h2}>
            Full breakdown of {entry.displayLabel}
          </h2>
          <div className={styles.prose}>
            <p>
              The standard US full-time assumption is <strong>40 hours per week × 52 weeks = 2,080 hours per year</strong>.
              At {isHourly ? entry.displayLabel : `${usd(hourly, 2)}/hour`}, that equals{" "}
              <strong>{usd(annual)}/year</strong> before any deductions.
            </p>
            <p>
              Dividing by 12 gives a monthly gross of <strong>{usd(monthly)}</strong>.
              For bi-weekly paychecks (26 per year), each paycheck is <strong>{usd(biweekly)}</strong>.
              Semi-monthly (24 paychecks) is <strong>{usd(annual / 24)}</strong>.
              Weekly gross is <strong>{usd(weekly)}</strong>.
            </p>
            <p>
              After a rough 22% combined effective tax rate (federal + FICA), the estimated take-home
              is <strong>{usd(annual * 0.78)}/year</strong> or about <strong>{usd(annual * 0.78 / 12)}/month</strong>.
              This is illustrative — your real tax depends on your state, filing status, deductions, and
              retirement contributions.
            </p>
            <p>
              Use the calculator above to change the hourly rate, hours per week, weeks per year, and
              effective tax rate to model your specific situation.
            </p>
          </div>
        </section>

        {/* CTA */}
        <CTABanner hourlyRate={Math.round(hourly)} />

        {/* FAQ */}
        <section className={styles.section}>
          <h2 className={styles.h2}>Frequently asked questions</h2>
          <FAQ items={faqItems} />
        </section>

        {/* Related */}
        <section className={styles.section}>
          <h2 className={styles.h2}>Other salary conversions</h2>
          <RelatedLinks entries={related} />
        </section>

        <footer className={styles.footer}>
          <p>Last updated {new Date().getFullYear()} · For informational purposes only · Not tax or financial advice.</p>
        </footer>
      </main>
    </>
  );
}
