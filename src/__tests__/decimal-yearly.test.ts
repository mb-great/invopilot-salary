import { describe, it, expect } from 'vitest';
import { getEntryFromSlug } from '../lib/salary-data';

describe('Decimal Yearly Rates', () => {
  it('parses decimal yearly slugs correctly with "an year"', () => {
    const entry = getEntryFromSlug('779973.338913-an-year');
    expect(entry).not.toBeNull();
    expect(entry?.type).toBe('yearly');
    expect(entry?.value).toBe(779973.338913);
    expect(entry?.displayLabel).toBe('$779973.34 a year'); // Because of toFixed(2)
  });

  it('parses decimal yearly slugs correctly with "a year"', () => {
    const entry = getEntryFromSlug('123.45-a-year');
    expect(entry).not.toBeNull();
    expect(entry?.type).toBe('yearly');
    expect(entry?.value).toBe(123.45);
    expect(entry?.displayLabel).toBe('$123.45 a year');
  });
});
