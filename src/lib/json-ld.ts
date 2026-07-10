import { SalaryEntry, getHourlyRate, getAnnualSalary, usd } from "./salary-data";

export function buildJsonLd(
  entry: SalaryEntry,
  title: string,
  faqItems: { q: string; a: string }[]
) {
  const isHourly = entry.type === "hourly";
  const hourly = getHourlyRate(entry);
  const annual = getAnnualSalary(entry);
  
  const description = isHourly
    ? `${entry.displayLabel} is ${usd(annual)} a year based on 2,080 hours. See monthly, biweekly, weekly, and daily breakdowns plus an interactive calculator.`
    : `${entry.displayLabel} is ${usd(hourly, 2)} an hour. See your monthly, biweekly, and weekly pay with our interactive salary calculator.`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://invopilot.com/tools/salary-calculator/${entry.slug}`,
        "url": `https://invopilot.com/tools/salary-calculator/${entry.slug}`,
        "name": title,
        "description": description,
        "author": {
          "@type": "Organization",
          "name": "InvoPilot",
          "url": "https://invopilot.com"
        },
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
        "@type": "SoftwareApplication",
        "name": "Salary Calculator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
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
}
