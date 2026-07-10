export type SalaryEntry = {
  slug: string;
  type: "hourly" | "yearly";
  value: number; // hourly rate OR yearly salary
  displayLabel: string; // e.g. "$27 an hour" or "$75,000 a year"
  seoTitle?: string; // Optional manual SEO title
  seoDescription?: string; // Optional manual SEO description
};

// Top 50 Salary Pages based on US Search Volume (from your CSV data)
export const salaryData: SalaryEntry[] = [
  // === TOP HOURLY PAGES (Highest Search Volume) ===
  { slug: "25-an-hour", type: "hourly", value: 25, displayLabel: "$25 an hour" },
  { slug: "30-an-hour", type: "hourly", value: 30, displayLabel: "$30 an hour" },
  { slug: "35-an-hour", type: "hourly", value: 35, displayLabel: "$35 an hour" },
  { slug: "20-an-hour", type: "hourly", value: 20, displayLabel: "$20 an hour" },
  { slug: "40-an-hour", type: "hourly", value: 40, displayLabel: "$40 an hour" },
  { slug: "23-an-hour", type: "hourly", value: 23, displayLabel: "$23 an hour" },
  { slug: "50-an-hour", type: "hourly", value: 50, displayLabel: "$50 an hour" },
  { slug: "22-an-hour", type: "hourly", value: 22, displayLabel: "$22 an hour" },
  { slug: "18-an-hour", type: "hourly", value: 18, displayLabel: "$18 an hour" },
  { slug: "21-an-hour", type: "hourly", value: 21, displayLabel: "$21 an hour" },
  { slug: "27-an-hour", type: "hourly", value: 27, displayLabel: "$27 an hour" },
  { slug: "28-an-hour", type: "hourly", value: 28, displayLabel: "$28 an hour" },
  { slug: "24-an-hour", type: "hourly", value: 24, displayLabel: "$24 an hour" },
  { slug: "26-an-hour", type: "hourly", value: 26, displayLabel: "$26 an hour" },
  { slug: "19-an-hour", type: "hourly", value: 19, displayLabel: "$19 an hour" },
  { slug: "32-an-hour", type: "hourly", value: 32, displayLabel: "$32 an hour" },
  { slug: "45-an-hour", type: "hourly", value: 45, displayLabel: "$45 an hour" },

  // === TOP YEARLY PAGES (Highest Search Volume) ===
  { slug: "60000-a-year", type: "yearly", value: 60000, displayLabel: "$60,000 a year" },
  { slug: "50000-a-year", type: "yearly", value: 50000, displayLabel: "$50,000 a year" },
  { slug: "70000-a-year", type: "yearly", value: 70000, displayLabel: "$70,000 a year" },
  { slug: "80000-a-year", type: "yearly", value: 80000, displayLabel: "$80,000 a year" },
  { slug: "65000-a-year", type: "yearly", value: 65000, displayLabel: "$65,000 a year" },
  { slug: "45000-a-year", type: "yearly", value: 45000, displayLabel: "$45,000 a year" },
  { slug: "40000-a-year", type: "yearly", value: 40000, displayLabel: "$40,000 a year" },
  { slug: "55000-a-year", type: "yearly", value: 55000, displayLabel: "$55,000 a year" },
  { slug: "75000-a-year", type: "yearly", value: 75000, displayLabel: "$75,000 a year" },
  { slug: "90000-a-year", type: "yearly", value: 90000, displayLabel: "$90,000 a year" },
  { slug: "100000-a-year", type: "yearly", value: 100000, displayLabel: "$100,000 a year" },
  { slug: "85000-a-year", type: "yearly", value: 85000, displayLabel: "$85,000 a year" },
  { slug: "35000-a-year", type: "yearly", value: 35000, displayLabel: "$35,000 a year" },
  { slug: "120000-a-year", type: "yearly", value: 120000, displayLabel: "$120,000 a year" },
  { slug: "95000-a-year", type: "yearly", value: 95000, displayLabel: "$95,000 a year" },
  { slug: "110000-a-year", type: "yearly", value: 110000, displayLabel: "$110,000 a year" },
  { slug: "130000-a-year", type: "yearly", value: 130000, displayLabel: "$130,000 a year" },

  // === NEW HOURLY PAGES (Fix 9) ===
  { slug: "22.5-an-hour", type: "hourly", value: 22.5, displayLabel: "$22.50 an hour" },
  { slug: "48-an-hour", type: "hourly", value: 48, displayLabel: "$48 an hour" },
  { slug: "49-an-hour", type: "hourly", value: 49, displayLabel: "$49 an hour" },
  { slug: "51-an-hour", type: "hourly", value: 51, displayLabel: "$51 an hour" },
  { slug: "53-an-hour", type: "hourly", value: 53, displayLabel: "$53 an hour" },
  { slug: "54-an-hour", type: "hourly", value: 54, displayLabel: "$54 an hour" },
  { slug: "56-an-hour", type: "hourly", value: 56, displayLabel: "$56 an hour" },
  { slug: "57-an-hour", type: "hourly", value: 57, displayLabel: "$57 an hour" },
  { slug: "58-an-hour", type: "hourly", value: 58, displayLabel: "$58 an hour" },
  { slug: "62-an-hour", type: "hourly", value: 62, displayLabel: "$62 an hour" },
  { slug: "63-an-hour", type: "hourly", value: 63, displayLabel: "$63 an hour" },
  { slug: "67-an-hour", type: "hourly", value: 67, displayLabel: "$67 an hour" },
  { slug: "68-an-hour", type: "hourly", value: 68, displayLabel: "$68 an hour" },
  { slug: "72-an-hour", type: "hourly", value: 72, displayLabel: "$72 an hour" },
  { slug: "78-an-hour", type: "hourly", value: 78, displayLabel: "$78 an hour" },
  { slug: "90-an-hour", type: "hourly", value: 90, displayLabel: "$90 an hour" },
  { slug: "110-an-hour", type: "hourly", value: 110, displayLabel: "$110 an hour" },
  { slug: "120-an-hour", type: "hourly", value: 120, displayLabel: "$120 an hour" },

  // === NEW YEARLY PAGES (Fix 9) ===
  { slug: "59000-a-year", type: "yearly", value: 59000, displayLabel: "$59,000 a year" },
  { slug: "73000-a-year", type: "yearly", value: 73000, displayLabel: "$73,000 a year" },
  { slug: "76000-a-year", type: "yearly", value: 76000, displayLabel: "$76,000 a year" },
  { slug: "77000-a-year", type: "yearly", value: 77000, displayLabel: "$77,000 a year" },
  { slug: "82000-a-year", type: "yearly", value: 82000, displayLabel: "$82,000 a year" },
  { slug: "92000-a-year", type: "yearly", value: 92000, displayLabel: "$92,000 a year" },
];

// ─── Derived helpers ───────────────────────────────────────────────────────────
export const STANDARD_HOURS_PER_WEEK = 40;
export const STANDARD_WEEKS_PER_YEAR = 52;
export const STANDARD_HOURS_PER_YEAR = STANDARD_HOURS_PER_WEEK * STANDARD_WEEKS_PER_YEAR; // 2080

export function getHourlyRate(entry: SalaryEntry): number {
  return entry.type === "hourly"
    ? entry.value
    : entry.value / STANDARD_HOURS_PER_YEAR;
}

export function getAnnualSalary(entry: SalaryEntry): number {
  return entry.type === "hourly"
    ? entry.value * STANDARD_HOURS_PER_YEAR
    : entry.value;
}

export function usd(n: number, dp = 0): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  });
}

export function getRelatedEntries(current: SalaryEntry): SalaryEntry[] {
  return salaryData
    .filter((e) => e.slug !== current.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
}

export function getEntryFromSlug(slug: string): SalaryEntry | null {
  const existing = salaryData.find((e) => e.slug === slug);
  if (existing) return existing;

  // Forgiving regex: ignores case and allows trailing characters/spaces, now supports decimals
  const hourlyMatch = slug.match(/^([\d\.]+)[-\s]+an[-\s]+hour/i);
  if (hourlyMatch) {
    const val = parseFloat(hourlyMatch[1]);
    const displayVal = Number.isInteger(val) ? val.toLocaleString() : val.toFixed(2);
    return { slug, type: "hourly", value: val, displayLabel: `$${displayVal} an hour` };
  }

  // Forgiving regex: ignores case, allows trailing characters, a/an, supports decimals
  const yearlyMatch = slug.match(/^([\d\.]+)[-\s]+a(?:n)?[-\s]+year/i);
  if (yearlyMatch) {
    const val = parseFloat(yearlyMatch[1]);
    const displayVal = Number.isInteger(val) ? val.toLocaleString() : val.toFixed(2);
    return { slug, type: "yearly", value: val, displayLabel: `$${displayVal} a year` };
  }

  return null;
}

export function getHourlyEntries(): SalaryEntry[] {
  return salaryData
    .filter((e) => e.type === "hourly")
    .sort((a, b) => a.value - b.value);
}

export function getYearlyEntries(): SalaryEntry[] {
  return salaryData
    .filter((e) => e.type === "yearly")
    .sort((a, b) => a.value - b.value);
}

export function computeDefaultRows(
  hourly: number,
  hoursPerWeek: number,
  weeksPerYear: number,
  taxRate: number,
): Record<string, { gross: number; net: number }> {
  const annual = hourly * hoursPerWeek * weeksPerYear;
  const netAnnual = annual * (1 - taxRate / 100);
  return {
    hourly:      { gross: hourly,                  net: hourly * (1 - taxRate / 100) },
    daily:       { gross: hourly * 8,              net: hourly * 8 * (1 - taxRate / 100) },
    weekly:      { gross: weeksPerYear ? annual / weeksPerYear : 0,       net: weeksPerYear ? netAnnual / weeksPerYear : 0 },
    biweekly:    { gross: weeksPerYear ? annual / (weeksPerYear / 2) : 0, net: weeksPerYear ? netAnnual / (weeksPerYear / 2) : 0 },
    semiMonthly: { gross: annual / 24,             net: netAnnual / 24 },
    monthly:     { gross: annual / 12,             net: netAnnual / 12 },
    annual:      { gross: annual,                  net: netAnnual },
  };
}