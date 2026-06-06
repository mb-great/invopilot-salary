export type SalaryEntry = {
  slug: string;
  type: "hourly" | "yearly";
  value: number; // hourly rate OR yearly salary
  displayLabel: string; // e.g. "$27 an hour" or "$75,000 a year"
};

// ─── ADD MORE ENTRIES HERE TO SCALE ───────────────────────────────────────────
export const salaryData: SalaryEntry[] = [
  // Hourly (12)
  { slug: "27-an-hour",  type: "hourly", value: 27,  displayLabel: "$27 an hour"  },
  { slug: "32-an-hour",  type: "hourly", value: 32,  displayLabel: "$32 an hour"  },
  { slug: "33-an-hour",  type: "hourly", value: 33,  displayLabel: "$33 an hour"  },
  { slug: "26-an-hour",  type: "hourly", value: 26,  displayLabel: "$26 an hour"  },
  { slug: "38-an-hour",  type: "hourly", value: 38,  displayLabel: "$38 an hour"  },
  { slug: "42-an-hour",  type: "hourly", value: 42,  displayLabel: "$42 an hour"  },
  { slug: "36-an-hour",  type: "hourly", value: 36,  displayLabel: "$36 an hour"  },
  { slug: "45-an-hour",  type: "hourly", value: 45,  displayLabel: "$45 an hour"  },
  { slug: "65-an-hour",  type: "hourly", value: 65,  displayLabel: "$65 an hour"  },
  { slug: "37-an-hour",  type: "hourly", value: 37,  displayLabel: "$37 an hour"  },
  { slug: "70-an-hour",  type: "hourly", value: 70,  displayLabel: "$70 an hour"  },
  { slug: "75-an-hour",  type: "hourly", value: 75,  displayLabel: "$75 an hour"  },

  // Yearly (8)
  { slug: "75000-a-year",  type: "yearly", value: 75000,  displayLabel: "$75,000 a year"  },
  { slug: "48000-a-year",  type: "yearly", value: 48000,  displayLabel: "$48,000 a year"  },
  { slug: "56000-a-year",  type: "yearly", value: 56000,  displayLabel: "$56,000 a year"  },
  { slug: "53000-a-year",  type: "yearly", value: 53000,  displayLabel: "$53,000 a year"  },
  { slug: "50000-a-year",  type: "yearly", value: 50000,  displayLabel: "$50,000 a year"  },
  { slug: "55000-a-year",  type: "yearly", value: 55000,  displayLabel: "$55,000 a year"  },
  { slug: "43000-a-year",  type: "yearly", value: 43000,  displayLabel: "$43,000 a year"  },
  { slug: "150000-a-year", type: "yearly", value: 150000, displayLabel: "$150,000 a year" },
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
