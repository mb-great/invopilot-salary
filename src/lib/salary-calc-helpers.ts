import { STANDARD_HOURS_PER_YEAR, STANDARD_WEEKS_PER_YEAR } from "./salary-data";

// ─── Fix 3: Fractional Rates ──────────────────────────────────────────────────

export interface FractionalRate {
  rate: number;
  yearly: number;
  monthly: number;
  weekly: number;
}

export function computeFractionalRates(baseRate: number): FractionalRate[] {
  const steps = [0.25, 0.50, 0.75];
  return steps.map((step) => {
    const rate = baseRate + step;
    const yearly = rate * STANDARD_HOURS_PER_YEAR;
    return {
      rate,
      yearly,
      monthly: yearly / 12,
      weekly: yearly / STANDARD_WEEKS_PER_YEAR,
    };
  });
}

// ─── Fix 4: Part-Time Hours ──────────────────────────────────────────────────

export interface PartTimeRow {
  hoursPerWeek: number;
  weekly: number;
  monthly: number;
  yearly: number;
}

export function computePartTimeRows(hourlyRate: number): PartTimeRow[] {
  const hours = [20, 25, 30, 35];
  return hours.map((h) => {
    const yearly = hourlyRate * h * STANDARD_WEEKS_PER_YEAR;
    return {
      hoursPerWeek: h,
      weekly: hourlyRate * h,
      monthly: yearly / 12,
      yearly,
    };
  });
}

// ─── Fix 6: Intro Sentence Variants ─────────────────────────────────────────

export function buildIntroVariants(rate: number): string {
  return `$${rate} an hour ($${rate}/hr, or ${rate} dollars an hour)`;
}
