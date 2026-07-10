import { describe, it, expect } from 'vitest';
import {
  STANDARD_HOURS_PER_YEAR,
  STANDARD_WEEKS_PER_YEAR,
} from '../lib/salary-data';
import {
  computeFractionalRates,
  computePartTimeRows,
  buildIntroVariants,
} from '../lib/salary-calc-helpers';

// ─── Fix 3: Fractional Rates ──────────────────────────────────────────────────

describe('Fractional Rates computation', () => {
  const baseRate = 27;

  it('generates fractional rates around the base rate', () => {
    const rates = computeFractionalRates(baseRate);
    expect(rates.length).toBeGreaterThanOrEqual(3);
    for (const r of rates) {
      expect(r.rate).toBeGreaterThan(baseRate);
      expect(r.rate).toBeLessThan(baseRate + 1);
    }
  });

  it('each fractional rate has correct yearly computation', () => {
    const rates = computeFractionalRates(baseRate);
    for (const r of rates) {
      expect(r.yearly).toBeCloseTo(r.rate * STANDARD_HOURS_PER_YEAR, 0);
    }
  });

  it('each fractional rate has correct monthly computation', () => {
    const rates = computeFractionalRates(baseRate);
    for (const r of rates) {
      expect(r.monthly).toBeCloseTo(r.rate * STANDARD_HOURS_PER_YEAR / 12, 0);
    }
  });
});

// ─── Fix 4: Part-Time Hours ───────────────────────────────────────────────────

describe('Part-Time Hours computation', () => {
  const hourlyRate = 27;
  const partTimeHours = [20, 25, 30, 35];

  it('generates rows for 20/25/30/35 hrs/week', () => {
    const rows = computePartTimeRows(hourlyRate);
    expect(rows.length).toBe(4);
    expect(rows.map((r) => r.hoursPerWeek)).toEqual(partTimeHours);
  });

  it('each part-time row has correct weekly pay', () => {
    const rows = computePartTimeRows(hourlyRate);
    for (const r of rows) {
      expect(r.weekly).toBeCloseTo(hourlyRate * r.hoursPerWeek, 2);
    }
  });

  it('each part-time row has correct yearly pay', () => {
    const rows = computePartTimeRows(hourlyRate);
    for (const r of rows) {
      expect(r.yearly).toBeCloseTo(hourlyRate * r.hoursPerWeek * STANDARD_WEEKS_PER_YEAR, 0);
    }
  });

  it('each part-time row has correct monthly pay', () => {
    const rows = computePartTimeRows(hourlyRate);
    for (const r of rows) {
      expect(r.monthly).toBeCloseTo(hourlyRate * r.hoursPerWeek * STANDARD_WEEKS_PER_YEAR / 12, 0);
    }
  });
});

// ─── Fix 6: Intro Sentence Pattern ───────────────────────────────────────────

describe('Intro sentence phrasing variants', () => {
  it('buildIntroVariants for $27/hr includes all phrasings', () => {
    const variants = buildIntroVariants(27);
    expect(variants).toContain('$27/hr');
    expect(variants).toContain('$27 an hour');
    expect(variants).toContain('27 dollars an hour');
  });

  it('buildIntroVariants for $50/hr includes correct phrasings', () => {
    const variants = buildIntroVariants(50);
    expect(variants).toContain('$50/hr');
    expect(variants).toContain('$50 an hour');
    expect(variants).toContain('50 dollars an hour');
  });
});
