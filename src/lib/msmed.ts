/**
 * MSMED Act 2006 — Interest Calculation Library
 *
 * Sections 15 & 16: Registered MSMEs can claim compound interest
 * at 3× RBI bank rate (monthly rests) on payments delayed beyond
 * 45 days from acceptance/delivery date.
 *
 * Reference: recovery-prototype.html calc() function
 */

// ─── Constants ───────────────────────────────────────────────────
export const DAY_MS = 86_400_000;
export const STATUTORY_DAYS = 45;
export const DEFAULT_BANK_RATE = 5.75; // Current RBI bank rate %

// ─── Types ───────────────────────────────────────────────────────
export interface MsmedResult {
  /** Statutory due date (acceptance + 45 days) */
  dueDate: Date;
  /** Days past the 45-day statutory limit (0 if not overdue) */
  overdueDays: number;
  /** Whether the invoice is past statutory due date */
  isOverdue: boolean;
  /** Days remaining until due (0 if overdue) */
  daysRemaining: number;
  /** Interest accrued in paise (or base currency unit) */
  interestAmount: number;
  /** Principal + interest */
  totalRecoverable: number;
  /** Applicable annual rate (3× bank rate) */
  annualRate: number;
  /** Monthly compounding rate */
  monthlyRate: number;
}

/**
 * Compute MSMED Act Section 16 compound interest.
 *
 * Formula: 3× RBI bank rate, compounded monthly.
 * Full months get compound interest; remaining days get simple
 * interest for that partial month.
 *
 * @param amount        Invoice amount (in rupees, not paise)
 * @param acceptDate    Date of goods/service acceptance
 * @param bankRatePct   RBI bank rate (default 5.75%)
 * @param asOf          Calculate as of this date (default: now)
 */
export function computeMsmedInterest(
  amount: number,
  acceptDate: Date,
  bankRatePct: number = DEFAULT_BANK_RATE,
  asOf: Date = new Date()
): MsmedResult {
  const dueDate = new Date(acceptDate.getTime() + STATUTORY_DAYS * DAY_MS);
  const annualRate = bankRatePct * 3;
  const monthlyRate = annualRate / 100 / 12;

  const diffMs = asOf.getTime() - dueDate.getTime();
  const diffDays = diffMs / DAY_MS;

  // Not overdue yet
  if (diffDays <= 0) {
    return {
      dueDate,
      overdueDays: 0,
      isOverdue: false,
      daysRemaining: Math.ceil(-diffDays),
      interestAmount: 0,
      totalRecoverable: amount,
      annualRate,
      monthlyRate,
    };
  }

  // Overdue — compute compound interest
  const overdueDays = Math.floor(diffDays);
  const fullMonths = Math.floor(overdueDays / 30);
  const remainderDays = overdueDays - fullMonths * 30;

  // Compound for full months + simple for remaining days
  const factor =
    Math.pow(1 + monthlyRate, fullMonths) *
    (1 + (monthlyRate * remainderDays) / 30);

  const interestAmount = amount * (factor - 1);
  const totalRecoverable = amount * factor;

  return {
    dueDate,
    overdueDays,
    isOverdue: true,
    daysRemaining: 0,
    interestAmount,
    totalRecoverable,
    annualRate,
    monthlyRate,
  };
}

// ─── Formatting Helpers ──────────────────────────────────────────

/**
 * Format number in Indian Rupee style: ₹1,23,456.78
 */
export function formatINR(n: number, decimals: number = 0): string {
  return (
    '₹' +
    Number(n).toLocaleString('en-IN', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );
}

/**
 * Format date in Indian style: 08 Jul 2026
 */
export function formatDateIN(d: Date): string {
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
