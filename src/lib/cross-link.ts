import { SalaryEntry, salaryData, STANDARD_HOURS_PER_YEAR } from "./salary-data";

export function getCrossLink(entry: SalaryEntry): SalaryEntry | null {
  const isHourly = entry.type === "hourly";
  const targetType = isHourly ? "yearly" : "hourly";
  
  // What the exact mathematical equivalent would be
  const targetExactValue = isHourly
    ? entry.value * STANDARD_HOURS_PER_YEAR
    : entry.value / STANDARD_HOURS_PER_YEAR;

  // Find all entries of the opposite type
  const candidates = salaryData.filter((e) => e.type === targetType);
  if (candidates.length === 0) return null;

  // Find the one with the smallest absolute difference to the exact value
  let bestMatch = candidates[0];
  let minDiff = Math.abs(bestMatch.value - targetExactValue);

  for (let i = 1; i < candidates.length; i++) {
    const diff = Math.abs(candidates[i].value - targetExactValue);
    if (diff < minDiff) {
      minDiff = diff;
      bestMatch = candidates[i];
    }
  }

  return bestMatch;
}
