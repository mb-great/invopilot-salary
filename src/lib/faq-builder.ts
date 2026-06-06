import {
  SalaryEntry,
  getHourlyRate,
  getAnnualSalary,
  usd,
  STANDARD_HOURS_PER_YEAR,
} from "./salary-data";

export function buildFAQ(entry: SalaryEntry) {
  const hourly  = getHourlyRate(entry);
  const annual  = getAnnualSalary(entry);
  const monthly = annual / 12;
  const biweekly = annual / 26;
  const weekly  = annual / 52;
  const netAnnual = annual * 0.78; // rough 22% effective

  const isHourly = entry.type === "hourly";
  const label = entry.displayLabel;

  return [
    {
      q: `How much is ${label} ${isHourly ? "annually" : "an hour"}?`,
      a: isHourly
        ? `${label} is ${usd(annual)} per year when working 40 hours a week for 52 weeks (${STANDARD_HOURS_PER_YEAR.toLocaleString()} hours).`
        : `${label} works out to approximately ${usd(hourly, 2)} per hour assuming a standard 40-hour week and 52 weeks per year.`,
    },
    {
      q: `How much is ${label} per month?`,
      a: `${label} comes to about ${usd(monthly)} per month before tax (${usd(annual)} ÷ 12).`,
    },
    {
      q: `How much is ${label} biweekly?`,
      a: `Paid every two weeks, ${label} is approximately ${usd(biweekly)} per paycheck before tax.`,
    },
    {
      q: `How much is ${label} after taxes?`,
      a: `Using a rough 22% combined effective rate (federal + FICA, single filer), ${label} is roughly ${usd(netAnnual)} per year — about ${usd(netAnnual / 12)} per month. Your actual tax will depend on your state, filing status, and deductions.`,
    },
    {
      q: `How much is ${label} per week?`,
      a: `At a 40-hour week and 52 weeks per year, ${label} is ${usd(weekly)} per week before tax.`,
    },
    {
      q: `Is ${label} a good salary?`,
      a: `At 40 hours/week, ${label} works out to ${usd(annual)} a year. Whether that's "good" depends heavily on your location, cost of living, and household size. Use the calculator above to model your exact schedule and effective take-home pay.`,
    },
  ];
}
