import type { Metadata } from "next";
import {
  getHourlyEntries,
  getYearlyEntries,
  usd,
  getAnnualSalary,
  getHourlyRate,
  STANDARD_HOURS_PER_YEAR,
} from "@/lib/salary-data";

export const metadata: Metadata = {
  title: "Salary Calculator — Convert Hourly to Yearly & More",
  description:
    "Free salary calculator: convert hourly pay to yearly, monthly, biweekly & weekly income. Browse 50+ pre-built salary breakdowns with tax estimates.",
  openGraph: {
    title: "Salary Calculator — Convert Hourly to Yearly & More",
    description:
      "Free salary calculator: convert hourly pay to yearly, monthly, biweekly & weekly income.",
    type: "website",
  },
};

export default function SalaryCalculatorHub() {
  const hourly = getHourlyEntries();
  const yearly = getYearlyEntries();

  return (
    <main style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 40px 80px", width: "100%" }}>
      {/* Breadcrumbs */}
      <nav
        style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--muted)", marginBottom: 24 }}
        aria-label="Breadcrumb"
      >
        <a href="https://invopilot.com" style={{ color: "var(--muted)" }}>Home</a>
        <span aria-hidden>›</span>
        <span aria-current="page">Salary Calculator</span>
      </nav>

      {/* Hero */}
      <header style={{ marginBottom: 36 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "var(--accent-tint)",
            color: "var(--accent-dark)",
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase" as const,
            letterSpacing: "0.06em",
            padding: "5px 12px",
            borderRadius: 999,
            border: "1.5px solid rgba(249,115,22,0.2)",
            marginBottom: 16,
          }}
        >
          <span>💰</span> Salary Calculator {new Date().getFullYear()}
        </div>
        <h1
          style={{
            fontSize: "clamp(26px, 5vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            marginBottom: 18,
            color: "var(--ink)",
          }}
        >
          Free Salary Calculator
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.65,
            color: "var(--ink-secondary)",
            maxWidth: 680,
          }}
        >
          Convert any hourly wage to a yearly salary — or break an annual salary down to an hourly
          rate. Each page includes monthly, biweekly, weekly, and daily breakdowns with an interactive
          tax calculator.
        </p>
      </header>

      {/* Hourly Rates */}
      <section style={{ marginBottom: 60 }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: 16,
          }}
        >
          Hourly Wage to Annual Salary
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 10,
          }}
        >
          {hourly.map((e) => (
            <a
              key={e.slug}
              href={`/tools/salary-calculator/${e.slug}`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 18px",
                background: "var(--surface)",
                border: "1.5px solid var(--border)",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                color: "var(--ink)",
                fontWeight: 600,
                fontSize: 15,
                transition: "border-color 0.15s, box-shadow 0.15s",
              }}
            >
              <span>{e.displayLabel}</span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "var(--muted)",
                }}
              >
                {usd(getAnnualSalary(e))}/yr
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Annual Salaries */}
      <section style={{ marginBottom: 60 }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: 16,
          }}
        >
          Annual Salary to Hourly Rate
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 10,
          }}
        >
          {yearly.map((e) => (
            <a
              key={e.slug}
              href={`/tools/salary-calculator/${e.slug}`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 18px",
                background: "var(--surface)",
                border: "1.5px solid var(--border)",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                color: "var(--ink)",
                fontWeight: 600,
                fontSize: 15,
                transition: "border-color 0.15s, box-shadow 0.15s",
              }}
            >
              <span>{e.displayLabel}</span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "var(--muted)",
                }}
              >
                {usd(getHourlyRate(e), 2)}/hr
              </span>
            </a>
          ))}
        </div>
      </section>

      <footer
        style={{
          marginTop: 60,
          paddingTop: 24,
          borderTop: "1px solid var(--border)",
        }}
      >
        <p style={{ fontSize: 12, color: "var(--muted)" }}>
          Last updated {new Date().getFullYear()} · For informational purposes only · Not tax or financial advice.
        </p>
      </footer>
    </main>
  );
}
