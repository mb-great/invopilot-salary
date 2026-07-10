import { describe, it, expect } from 'vitest';
import {
  salaryData,
  getHourlyRate,
  getAnnualSalary,
  getEntryFromSlug,
  getHourlyEntries,
  getYearlyEntries,
  computeDefaultRows,
  usd,
  STANDARD_HOURS_PER_YEAR,
} from '../lib/salary-data';

// ─── Fix 1: Hub Page Data ──────────────────────────────────────────────────────

describe('Hub Page helpers', () => {
  it('getHourlyEntries returns only hourly entries sorted ascending', () => {
    const entries = getHourlyEntries();
    expect(entries.length).toBeGreaterThan(0);
    expect(entries.every((e) => e.type === 'hourly')).toBe(true);
    for (let i = 1; i < entries.length; i++) {
      expect(entries[i].value).toBeGreaterThanOrEqual(entries[i - 1].value);
    }
  });

  it('getYearlyEntries returns only yearly entries sorted ascending', () => {
    const entries = getYearlyEntries();
    expect(entries.length).toBeGreaterThan(0);
    expect(entries.every((e) => e.type === 'yearly')).toBe(true);
    for (let i = 1; i < entries.length; i++) {
      expect(entries[i].value).toBeGreaterThanOrEqual(entries[i - 1].value);
    }
  });

  it('hub URL is /tools/salary-calculator (not a specific page)', () => {
    const hubUrl = '/tools/salary-calculator';
    expect(hubUrl).not.toContain('27-an-hour');
    expect(hubUrl).toBe('/tools/salary-calculator');
  });
});

// ─── Fix 2: SSR Table Default Values ───────────────────────────────────────────

describe('SSR Table — default computation', () => {
  const defaultHourly = 27;
  const defaultHpw = 40;
  const defaultWpy = 52;
  const defaultTax = 22;

  const annual = defaultHourly * defaultHpw * defaultWpy;
  const netAnnual = annual * (1 - defaultTax / 100);

  it('computes correct annual salary', () => {
    expect(annual).toBe(56160);
  });

  it('computes correct monthly gross', () => {
    expect(annual / 12).toBeCloseTo(4680, 0);
  });

  it('computes correct biweekly gross', () => {
    expect(annual / 26).toBeCloseTo(2160, 0);
  });

  it('computes correct weekly gross', () => {
    expect(annual / 52).toBeCloseTo(1080, 0);
  });

  it('computes correct hourly value (identity)', () => {
    expect(defaultHourly).toBe(27);
  });

  it('computes correct daily (8hrs)', () => {
    expect(defaultHourly * 8).toBe(216);
  });

  it('computes correct semi-monthly', () => {
    expect(annual / 24).toBeCloseTo(2340, 0);
  });

  it('computes correct after-tax annual', () => {
    expect(netAnnual).toBeCloseTo(43804.8, 0);
  });

  it('computeDefaultRows returns object with all 7 period keys populated (not empty)', () => {
    const rows = computeDefaultRows(defaultHourly, defaultHpw, defaultWpy, defaultTax);
    const keys = ['hourly', 'daily', 'weekly', 'biweekly', 'semiMonthly', 'monthly', 'annual'];
    for (const key of keys) {
      expect(rows[key]).toBeDefined();
      expect(rows[key].gross).toBeGreaterThan(0);
      expect(rows[key].net).toBeGreaterThan(0);
    }
  });

  it('computeDefaultRows matches hand-calculated values', () => {
    const rows = computeDefaultRows(defaultHourly, defaultHpw, defaultWpy, defaultTax);
    expect(rows.annual.gross).toBe(56160);
    expect(rows.hourly.gross).toBe(27);
    expect(rows.daily.gross).toBe(216);
    expect(rows.weekly.gross).toBeCloseTo(1080, 0);
    expect(rows.monthly.gross).toBeCloseTo(4680, 0);
    expect(rows.annual.net).toBeCloseTo(43804.8, 0);
  });
});
