import { describe, it, expect } from 'vitest';
import { getEntryFromSlug } from '../lib/salary-data';
import { buildJsonLd } from '../lib/json-ld';
// For testing JSON-LD, we will test the structure generation helper if we extract it,
// or we can test the buildJsonLd logic directly.

// ─── Fix 7: JSON-LD Schema ───────────────────────────────────────────────────

describe('JSON-LD Schema generation', () => {
  it('buildJsonLd returns a rich schema with description and author', () => {
    const entry = getEntryFromSlug('27-an-hour')!;
    const schema = buildJsonLd(entry, 'Page Title', [{ q: 'Test Q', a: 'Test A' }]);

    expect(schema).toBeDefined();
    
    // Should have WebPage with description
    const webPage = schema['@graph'].find((n: any) => n['@type'] === 'WebPage');
    expect(webPage).toBeDefined();
    expect(webPage!.description).toBeDefined();
    expect(webPage!.author).toBeDefined();
    expect(webPage!.author!.name).toBe('InvoPilot');
  });
});
