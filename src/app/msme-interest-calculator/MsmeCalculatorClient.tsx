'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  computeMsmedInterest,
  formatINR,
  formatDateIN,
  DEFAULT_BANK_RATE,
  type MsmedResult,
} from '@/lib/msmed';

/* ═══════════════════════════════════════════════════════════
   MSME Late Payment Interest Calculator — Public Tool
   Design: Recovery prototype cream/orange aesthetic
   ═══════════════════════════════════════════════════════════ */

export default function MsmeCalculatorClient() {
  /* ─── form state ────────────────────────────────── */
  const [amount, setAmount] = useState('');
  const [acceptDate, setAcceptDate] = useState('');
  const [bankRate, setBankRate] = useState(DEFAULT_BANK_RATE.toString());
  const [result, setResult] = useState<MsmedResult | null>(null);
  const [liveResult, setLiveResult] = useState<MsmedResult | null>(null);
  const [showFaq, setShowFaq] = useState<number | null>(null);
  const tickerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ─── calculate ─────────────────────────────────── */
  const calculate = useCallback(() => {
    const amt = parseFloat(amount.replace(/,/g, ''));
    const date = new Date(acceptDate);
    const rate = parseFloat(bankRate);
    if (!amt || isNaN(amt) || amt <= 0 || !acceptDate || isNaN(date.getTime()) || !rate || rate <= 0) return;

    const r = computeMsmedInterest(amt, date, rate);
    setResult(r);
    setLiveResult(r);
  }, [amount, acceptDate, bankRate]);

  /* ─── live ticker ───────────────────────────────── */
  useEffect(() => {
    if (tickerRef.current) clearInterval(tickerRef.current);
    if (!result || !result.isOverdue) return;

    tickerRef.current = setInterval(() => {
      const amt = parseFloat(amount.replace(/,/g, ''));
      const date = new Date(acceptDate);
      const rate = parseFloat(bankRate);
      if (!amt || !date || !rate) return;
      setLiveResult(computeMsmedInterest(amt, date, rate));
    }, 1000);

    return () => {
      if (tickerRef.current) clearInterval(tickerRef.current);
    };
  }, [result, amount, acceptDate, bankRate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculate();
  };

  /* ─── FAQ data ──────────────────────────────────── */
  const faqs = [
    {
      q: 'What is the MSMED Act 2006?',
      a: 'The Micro, Small and Medium Enterprises Development Act, 2006 protects registered MSMEs from delayed payments. Under Sections 15 & 16, any buyer who delays payment beyond 45 days of acceptance must pay compound interest at 3× the RBI bank rate with monthly rests.',
    },
    {
      q: 'Who qualifies as an MSME?',
      a: 'Any micro, small, or medium enterprise registered under Udyam (free at udyamregistration.gov.in). Freelancers, consultants, and agencies qualify as micro-enterprises. You need a valid Udyam Registration Number (URN) to invoke MSMED protections.',
    },
    {
      q: 'What is the 45-day rule?',
      a: 'Section 15 states that the buyer must make payment within 45 days of acceptance of goods/services. If there is a written agreement, the period can be up to 45 days. If no written agreement exists, the period is 15 days. This calculator uses 45 days (the maximum statutory period).',
    },
    {
      q: 'How is the interest calculated?',
      a: 'Per Section 16, interest is charged at 3× the RBI bank rate (currently 5.75% × 3 = 17.25% p.a.), compounded monthly. For partial months, simple interest applies for the remaining days. The interest runs from day 46 until the date of payment.',
    },
    {
      q: 'What is MSME Samadhaan?',
      a: 'Samadhaan is the Government of India\'s online portal (samadhaan.msme.gov.in) where registered MSMEs can file delayed payment cases. The Micro and Small Enterprises Facilitation Council then mediates. Filing is free and no lawyer is required.',
    },
    {
      q: 'Does the buyer need to be registered under Udyam?',
      a: 'No. MSMED protection applies to registered MSME suppliers (the one sending the invoice). The buyer/client can be any entity — corporate, government, individual. Only the supplier\'s Udyam registration matters.',
    },
    {
      q: 'Can Section 43B(h) of the Income-tax Act help?',
      a: 'Yes. From April 2024, under Section 43B(h), if a buyer delays payment to an MSME beyond the statutory period, that expense is disallowed as a deduction for the buyer in that financial year. This gives buyers a strong tax incentive to pay on time.',
    },
  ];

  return (
    <div className="min-h-[100dvh]" style={{ background: '#FBF7F1', fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif" }}>

      {/* ─── Hero ───────────────────────────────── */}
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '48px 24px 0' }}>
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 40px' }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#EE8A50',
              marginBottom: 12,
            }}
          >
            MSMED Act 2006 · Sections 15 & 16
          </p>
          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 800,
              color: '#211E1A',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            MSME Late Payment{' '}
            <span style={{ fontFamily: "'DM Serif Display', 'Fraunces', Georgia, serif", fontStyle: 'italic', color: '#EE8A50', fontWeight: 400 }}>
              Interest Calculator
            </span>
          </h1>
          <p style={{ color: '#8A8378', fontSize: 16, marginTop: 14, lineHeight: 1.6, maxWidth: 560, margin: '14px auto 0' }}>
            Calculate the compound interest you can legally claim on overdue invoices under India&apos;s 45-day payment rule. Free, no signup required.
          </p>
        </div>

        {/* ─── Calculator Card ──────────────────── */}
        <div
          style={{
            background: '#fff',
            border: '1px solid #F0E7DB',
            borderRadius: 20,
            padding: 'clamp(24px, 4vw, 36px)',
            maxWidth: 640,
            margin: '0 auto 32px',
            boxShadow: '0 8px 32px rgba(60,45,30,0.06)',
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* Amount */}
            <div style={{ marginBottom: 20 }}>
              <label
                htmlFor="calc-amount"
                style={{
                  display: 'block',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#8A8378',
                  marginBottom: 8,
                }}
              >
                Invoice Amount (₹)
              </label>
              <input
                id="calc-amount"
                type="text"
                inputMode="numeric"
                placeholder="e.g. 1,50,000"
                value={amount}
                onChange={(e) => {
                  const raw = e.target.value.replace(/[^0-9.]/g, '');
                  setAmount(raw);
                }}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '1.5px solid #F0E7DB',
                  borderRadius: 12,
                  fontSize: 18,
                  fontWeight: 700,
                  fontVariantNumeric: 'tabular-nums',
                  outline: 'none',
                  background: '#FDFCF9',
                  color: '#211E1A',
                  transition: 'border-color 0.15s',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#EE8A50')}
                onBlur={(e) => (e.target.style.borderColor = '#F0E7DB')}
                required
              />
            </div>

            {/* Acceptance Date */}
            <div style={{ marginBottom: 20 }}>
              <label
                htmlFor="calc-date"
                style={{
                  display: 'block',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#8A8378',
                  marginBottom: 8,
                }}
              >
                Acceptance / Delivery Date
              </label>
              <input
                id="calc-date"
                type="date"
                value={acceptDate}
                onChange={(e) => setAcceptDate(e.target.value)}
                max={new Date().toISOString().split('T')[0]}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '1.5px solid #F0E7DB',
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 500,
                  outline: 'none',
                  background: '#FDFCF9',
                  color: '#211E1A',
                  transition: 'border-color 0.15s',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#EE8A50')}
                onBlur={(e) => (e.target.style.borderColor = '#F0E7DB')}
                required
              />
              <p style={{ fontSize: 11, color: '#B3AA9D', marginTop: 6 }}>
                The date when goods were delivered or services were accepted by the buyer.
              </p>
            </div>

            {/* Bank Rate */}
            <div style={{ marginBottom: 24 }}>
              <label
                htmlFor="calc-rate"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#8A8378',
                  marginBottom: 8,
                }}
              >
                RBI Bank Rate (%)
                <span
                  title="Current RBI bank rate. Verify at rbi.org.in. The MSMED Act charges 3× this rate."
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: '#F0E7DB',
                    display: 'inline-grid',
                    placeItems: 'center',
                    fontSize: 10,
                    fontWeight: 800,
                    color: '#8A8378',
                    cursor: 'help',
                  }}
                >
                  ?
                </span>
              </label>
              <input
                id="calc-rate"
                type="number"
                step="0.25"
                min="0.25"
                max="20"
                value={bankRate}
                onChange={(e) => setBankRate(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '1.5px solid #F0E7DB',
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 500,
                  outline: 'none',
                  background: '#FDFCF9',
                  color: '#211E1A',
                  transition: 'border-color 0.15s',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#EE8A50')}
                onBlur={(e) => (e.target.style.borderColor = '#F0E7DB')}
              />
              <p style={{ fontSize: 11, color: '#B3AA9D', marginTop: 6 }}>
                Current rate: 5.75%. Applicable rate = 3 × {bankRate || '5.75'}% ={' '}
                <strong>{((parseFloat(bankRate) || 5.75) * 3).toFixed(2)}% p.a.</strong>
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '16px 24px',
                background: '#EE8A50',
                color: '#fff',
                border: 'none',
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(238,138,80,0.3)',
                transition: 'background 0.15s, transform 0.1s',
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              ⚖️ Calculate Interest
            </button>
          </form>
        </div>

        {/* ─── Results Panel ────────────────────── */}
        {result && liveResult && (
          <div
            style={{
              background: '#fff',
              border: '1px solid #F0E7DB',
              borderRadius: 20,
              maxWidth: 640,
              margin: '0 auto 32px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(60,45,30,0.06)',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '22px 28px',
                borderBottom: '1px solid #F0E7DB',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 14,
                flexWrap: 'wrap',
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: '0.02em', color: '#211E1A' }}>
                Interest Computation
              </h3>
              {result.isOverdue && (
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '5px 11px',
                    borderRadius: 99,
                    background: '#FCEBE7',
                    color: '#D94A38',
                  }}
                >
                  ⚠ {liveResult.overdueDays} DAYS OVERDUE
                </span>
              )}
              {!result.isOverdue && (
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '5px 11px',
                    borderRadius: 99,
                    background: '#E9F7EF',
                    color: '#2E9E63',
                  }}
                >
                  ✓ {result.daysRemaining} DAYS REMAINING
                </span>
              )}
            </div>

            {/* Computation Table */}
            <div style={{ padding: '0 28px 24px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
                <tbody>
                  <Row label="Invoice Amount" value={formatINR(parseFloat(amount.replace(/,/g, '')))} />
                  <Row label="Acceptance Date" value={formatDateIN(new Date(acceptDate))} />
                  <Row label="Statutory Due Date (Day 45)" value={formatDateIN(result.dueDate)} />
                  <Row
                    label="Days Past Due"
                    value={result.isOverdue ? `${liveResult.overdueDays} days` : 'Not overdue'}
                    valueColor={result.isOverdue ? '#D94A38' : '#2E9E63'}
                  />
                  <Row label="RBI Bank Rate" value={`${bankRate}%`} />
                  <Row label="Applicable Rate (3×)" value={`${result.annualRate.toFixed(2)}% p.a.`} />
                  <Row
                    label="Interest Accrued"
                    value={result.isOverdue ? formatINR(liveResult.interestAmount, 2) : '₹0'}
                    valueColor={result.isOverdue ? '#D94A38' : '#211E1A'}
                    valueWeight={700}
                  />
                </tbody>
              </table>

              {/* Total */}
              <div
                style={{
                  borderTop: '2.5px solid #211E1A',
                  marginTop: 8,
                  paddingTop: 16,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 800, color: '#211E1A' }}>Total Recoverable</span>
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: result.isOverdue ? '#D94A38' : '#211E1A',
                    fontVariantNumeric: 'tabular-nums',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {formatINR(liveResult.totalRecoverable, 2)}
                </span>
              </div>

              {/* Live ticker */}
              {result.isOverdue && (
                <p
                  style={{
                    fontSize: 12,
                    color: '#D94A38',
                    marginTop: 10,
                    fontVariantNumeric: 'tabular-nums',
                    fontWeight: 600,
                    textAlign: 'right',
                  }}
                >
                  ⏱ Interest ticking live — refreshes every second
                </p>
              )}

              {/* Legal note */}
              <div
                style={{
                  background: '#FDFCF9',
                  border: '1px solid #F0E7DB',
                  borderRadius: 12,
                  padding: '14px 16px',
                  marginTop: 18,
                  fontSize: 12,
                  color: '#8A8378',
                  lineHeight: 1.6,
                }}
              >
                <strong>Legal basis:</strong> Under MSMED Act 2006 §15–16, registered micro/small enterprises
                can claim compound interest at 3× RBI bank rate on payments delayed beyond 45 days from
                acceptance. Additionally, §43B(h) of the Income-tax Act (effective April 2024) disallows the
                buyer&apos;s expense deduction for late payments to registered MSMEs.
              </div>
            </div>
          </div>
        )}

        {/* ─── CTA Banner ───────────────────────── */}
        <div
          style={{
            background: '#241F1A',
            color: '#fff',
            borderRadius: 18,
            padding: '24px 28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
            maxWidth: 640,
            margin: '0 auto 40px',
          }}
        >
          <div>
            <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>
              Client not paying?{' '}
              <span style={{ fontFamily: "'DM Serif Display', 'Fraunces', Georgia, serif", fontStyle: 'italic', color: '#FFB98C', fontWeight: 400 }}>
                Recover it.
              </span>
            </h3>
            <p style={{ color: '#B8AFA3', fontSize: 13, maxWidth: 380, lineHeight: 1.5 }}>
              InvoPilot generates a full legal recovery pack — interest sheet, demand notice, escalation emails & Samadhaan guide — from your invoice in one click. From ₹999.
            </p>
          </div>
          <Link
            href="/signup"
            style={{
              background: '#EE8A50',
              color: '#fff',
              padding: '12px 22px',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 6px 16px rgba(238,138,80,0.3)',
              flexShrink: 0,
            }}
          >
            Sign up free →
          </Link>
        </div>

        {/* ─── FAQ Section ──────────────────────── */}
        <div style={{ maxWidth: 640, margin: '0 auto 48px' }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: '#211E1A',
              letterSpacing: '-0.01em',
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            Frequently Asked{' '}
            <span style={{ fontFamily: "'DM Serif Display', 'Fraunces', Georgia, serif", fontStyle: 'italic', color: '#EE8A50', fontWeight: 400 }}>
              Questions
            </span>
          </h2>

          <div>
            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => setShowFaq(showFaq === i ? null : i)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: showFaq === i ? '#fff' : 'transparent',
                  border: '1px solid',
                  borderColor: showFaq === i ? '#F0E7DB' : 'transparent',
                  borderRadius: 14,
                  padding: '16px 18px',
                  marginBottom: 6,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  fontFamily: 'inherit',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#211E1A' }}>{faq.q}</span>
                  <span
                    style={{
                      fontSize: 18,
                      color: '#8A8378',
                      fontWeight: 300,
                      flexShrink: 0,
                      transform: showFaq === i ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.2s',
                    }}
                  >
                    +
                  </span>
                </div>
                {showFaq === i && (
                  <p style={{ fontSize: 13, color: '#8A8378', lineHeight: 1.65, marginTop: 10, paddingRight: 28 }}>
                    {faq.a}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}

/* ─── Row component ─────────────────────────────── */
function Row({
  label,
  value,
  valueColor,
  valueWeight,
}: {
  label: string;
  value: string;
  valueColor?: string;
  valueWeight?: number;
}) {
  return (
    <tr>
      <td style={{ padding: '10px 4px', borderBottom: '1px solid #F7F1E8', color: '#8A8378', fontSize: 13 }}>
        {label}
      </td>
      <td
        style={{
          padding: '10px 4px',
          borderBottom: '1px solid #F7F1E8',
          textAlign: 'right',
          fontVariantNumeric: 'tabular-nums',
          fontWeight: valueWeight || 600,
          color: valueColor || '#211E1A',
          fontSize: 13.5,
        }}
      >
        {value}
      </td>
    </tr>
  );
}
