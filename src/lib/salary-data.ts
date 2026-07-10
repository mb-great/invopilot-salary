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
  
  // === NEW HOURLY PAGES (from Pinebill parity check) ===
  { slug: "13-an-hour", type: "hourly", value: 13, displayLabel: "$13 an hour" },
  { slug: "14-an-hour", type: "hourly", value: 14, displayLabel: "$14 an hour" },
  { slug: "15-an-hour", type: "hourly", value: 15, displayLabel: "$15 an hour" },
  { slug: "16-an-hour", type: "hourly", value: 16, displayLabel: "$16 an hour" },
  { slug: "17-an-hour", type: "hourly", value: 17, displayLabel: "$17 an hour" },
  { slug: "29-an-hour", type: "hourly", value: 29, displayLabel: "$29 an hour" },
  { slug: "31-an-hour", type: "hourly", value: 31, displayLabel: "$31 an hour" },
  { slug: "33-an-hour", type: "hourly", value: 33, displayLabel: "$33 an hour" },
  { slug: "34-an-hour", type: "hourly", value: 34, displayLabel: "$34 an hour" },
  { slug: "36-an-hour", type: "hourly", value: 36, displayLabel: "$36 an hour" },
  { slug: "37-an-hour", type: "hourly", value: 37, displayLabel: "$37 an hour" },
  { slug: "38-an-hour", type: "hourly", value: 38, displayLabel: "$38 an hour" },
  { slug: "39-an-hour", type: "hourly", value: 39, displayLabel: "$39 an hour" },
  { slug: "41-an-hour", type: "hourly", value: 41, displayLabel: "$41 an hour" },
  { slug: "42-an-hour", type: "hourly", value: 42, displayLabel: "$42 an hour" },
  { slug: "43-an-hour", type: "hourly", value: 43, displayLabel: "$43 an hour" },
  { slug: "44-an-hour", type: "hourly", value: 44, displayLabel: "$44 an hour" },
  { slug: "46-an-hour", type: "hourly", value: 46, displayLabel: "$46 an hour" },
  { slug: "47-an-hour", type: "hourly", value: 47, displayLabel: "$47 an hour" },
  { slug: "52-an-hour", type: "hourly", value: 52, displayLabel: "$52 an hour" },
  { slug: "55-an-hour", type: "hourly", value: 55, displayLabel: "$55 an hour" },
  { slug: "60-an-hour", type: "hourly", value: 60, displayLabel: "$60 an hour" },
  { slug: "65-an-hour", type: "hourly", value: 65, displayLabel: "$65 an hour" },
  { slug: "70-an-hour", type: "hourly", value: 70, displayLabel: "$70 an hour" },
  { slug: "75-an-hour", type: "hourly", value: 75, displayLabel: "$75 an hour" },
  { slug: "80-an-hour", type: "hourly", value: 80, displayLabel: "$80 an hour" },
  { slug: "100-an-hour", type: "hourly", value: 100, displayLabel: "$100 an hour" },

  // === NEW YEARLY PAGES ===
  { slug: "30k-a-year", type: "yearly", value: 30000, displayLabel: "$30k a year" },
  { slug: "35k-a-year", type: "yearly", value: 35000, displayLabel: "$35k a year" },
  { slug: "37k-a-year", type: "yearly", value: 37000, displayLabel: "$37k a year" },
  { slug: "39k-a-year", type: "yearly", value: 39000, displayLabel: "$39k a year" },
  { slug: "40k-a-year", type: "yearly", value: 40000, displayLabel: "$40k a year" },
  { slug: "41k-a-year", type: "yearly", value: 41000, displayLabel: "$41k a year" },
  { slug: "42k-a-year", type: "yearly", value: 42000, displayLabel: "$42k a year" },
  { slug: "43k-a-year", type: "yearly", value: 43000, displayLabel: "$43k a year" },
  { slug: "44k-a-year", type: "yearly", value: 44000, displayLabel: "$44k a year" },
  { slug: "45k-a-year", type: "yearly", value: 45000, displayLabel: "$45k a year" },
  { slug: "47k-a-year", type: "yearly", value: 47000, displayLabel: "$47k a year" },
  { slug: "48k-a-year", type: "yearly", value: 48000, displayLabel: "$48k a year" },
  { slug: "49k-a-year", type: "yearly", value: 49000, displayLabel: "$49k a year" },
  { slug: "50k-a-year", type: "yearly", value: 50000, displayLabel: "$50k a year" },
  { slug: "51k-a-year", type: "yearly", value: 51000, displayLabel: "$51k a year" },
  { slug: "52k-a-year", type: "yearly", value: 52000, displayLabel: "$52k a year" },
  { slug: "53k-a-year", type: "yearly", value: 53000, displayLabel: "$53k a year" },
  { slug: "54k-a-year", type: "yearly", value: 54000, displayLabel: "$54k a year" },
  { slug: "55k-a-year", type: "yearly", value: 55000, displayLabel: "$55k a year" },
  { slug: "56k-a-year", type: "yearly", value: 56000, displayLabel: "$56k a year" },
  { slug: "57k-a-year", type: "yearly", value: 57000, displayLabel: "$57k a year" },
  { slug: "58k-a-year", type: "yearly", value: 58000, displayLabel: "$58k a year" },
  { slug: "59k-a-year", type: "yearly", value: 59000, displayLabel: "$59k a year" },
  { slug: "60k-a-year", type: "yearly", value: 60000, displayLabel: "$60k a year" },
  { slug: "63k-a-year", type: "yearly", value: 63000, displayLabel: "$63k a year" },
  { slug: "64k-a-year", type: "yearly", value: 64000, displayLabel: "$64k a year" },
  { slug: "65k-a-year", type: "yearly", value: 65000, displayLabel: "$65k a year" },
  { slug: "67k-a-year", type: "yearly", value: 67000, displayLabel: "$67k a year" },
  { slug: "68k-a-year", type: "yearly", value: 68000, displayLabel: "$68k a year" },
  { slug: "70k-a-year", type: "yearly", value: 70000, displayLabel: "$70k a year" },
  { slug: "72k-a-year", type: "yearly", value: 72000, displayLabel: "$72k a year" },
  { slug: "73k-a-year", type: "yearly", value: 73000, displayLabel: "$73k a year" },
  { slug: "75k-a-year", type: "yearly", value: 75000, displayLabel: "$75k a year" },
  { slug: "76k-a-year", type: "yearly", value: 76000, displayLabel: "$76k a year" },
  { slug: "77k-a-year", type: "yearly", value: 77000, displayLabel: "$77k a year" },
  { slug: "78k-a-year", type: "yearly", value: 78000, displayLabel: "$78k a year" },
  { slug: "80k-a-year", type: "yearly", value: 80000, displayLabel: "$80k a year" },
  { slug: "82k-a-year", type: "yearly", value: 82000, displayLabel: "$82k a year" },
  { slug: "85k-a-year", type: "yearly", value: 85000, displayLabel: "$85k a year" },
  { slug: "90k-a-year", type: "yearly", value: 90000, displayLabel: "$90k a year" },
  { slug: "92k-a-year", type: "yearly", value: 92000, displayLabel: "$92k a year" },
  { slug: "95k-a-year", type: "yearly", value: 95000, displayLabel: "$95k a year" },
  { slug: "100k-a-year", type: "yearly", value: 100000, displayLabel: "$100k a year" },
  { slug: "110k-a-year", type: "yearly", value: 110000, displayLabel: "$110k a year" },
  { slug: "120k-a-year", type: "yearly", value: 120000, displayLabel: "$120k a year" },
  { slug: "130k-a-year", type: "yearly", value: 130000, displayLabel: "$130k a year" },
  { slug: "150k-a-year", type: "yearly", value: 150000, displayLabel: "$150k a year" },
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

  // Forgiving regex: ignores case, allows trailing characters, a/an, supports decimals and "k"
  const yearlyMatch = slug.match(/^([\d\.]+)(k?)[-\s]+a(?:n)?[-\s]+year/i);
  if (yearlyMatch) {
    let val = parseFloat(yearlyMatch[1]);
    const isK = yearlyMatch[2].toLowerCase() === 'k';
    if (isK) val *= 1000;
    
    // Format appropriately depending on whether it's a k-slug or a full-number slug
    let displayLabel = "";
    if (isK) {
      displayLabel = `$${Number.isInteger(val / 1000) ? (val / 1000) : (val / 1000).toFixed(2)}k a year`;
    } else {
      displayLabel = `$${Number.isInteger(val) ? val.toLocaleString() : val.toFixed(2)} a year`;
    }

    return { slug, type: "yearly", value: val, displayLabel };
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