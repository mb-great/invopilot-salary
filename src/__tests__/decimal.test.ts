import { describe, it, expect } from 'vitest';
import { getEntryFromSlug, salaryData } from '../lib/salary-data';

describe('Decimal Hourly Rates', () => {
  it('parses decimal hourly slugs correctly', () => {
    const entry = getEntryFromSlug('22.5-an-hour');
    expect(entry).not.toBeNull();
    expect(entry?.type).toBe('hourly');
    expect(entry?.value).toBe(22.5);
    expect(entry?.displayLabel).toBe('$22.50 an hour');
  });

  it('22.5-an-hour is statically generated in salaryData', () => {
    const entry = salaryData.find(e => e.slug === '22.5-an-hour');
    expect(entry).toBeDefined();
    expect(entry?.value).toBe(22.5);
  });
});
