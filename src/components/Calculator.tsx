"use client";

import { useState, useEffect, useCallback } from "react";
import { usd } from "@/lib/salary-data";
import styles from "./Calculator.module.css";

interface Props {
  defaultHourly: number;
  defaultHoursPerWeek?: number;
  defaultWeeksPerYear?: number;
  defaultTaxRate?: number;
}

const ROWS: { label: string; key: string; dp: number }[] = [
  { label: "Hourly",        key: "hourly",      dp: 2 },
  { label: "Daily (8 hrs)", key: "daily",       dp: 2 },
  { label: "Weekly",        key: "weekly",      dp: 0 },
  { label: "Biweekly",      key: "biweekly",    dp: 0 },
  { label: "Semi-monthly",  key: "semiMonthly", dp: 0 },
  { label: "Monthly",       key: "monthly",     dp: 0 },
  { label: "Annual",        key: "annual",      dp: 0 },
];

export default function Calculator({
  defaultHourly,
  defaultHoursPerWeek = 40,
  defaultWeeksPerYear = 52,
  defaultTaxRate = 22,
}: Props) {
  const [hourly, setHourly]   = useState(defaultHourly);
  const [hpw, setHpw]         = useState(defaultHoursPerWeek);
  const [wpy, setWpy]         = useState(defaultWeeksPerYear);
  const [tax, setTax]         = useState(defaultTaxRate);
  const [rows, setRows]       = useState<Record<string, { gross: number; net: number }>>({});
  const [totalHours, setTotalHours] = useState(hpw * wpy);

  const compute = useCallback(() => {
    const annual  = hourly * hpw * wpy;
    const netAnnual = annual * (1 - tax / 100);
    const hrs = hpw * wpy;
    setTotalHours(hrs);
    setRows({
      hourly:      { gross: hourly,          net: hourly * (1 - tax / 100) },
      daily:       { gross: hourly * 8,      net: hourly * 8 * (1 - tax / 100) },
      weekly:      { gross: annual / wpy,    net: netAnnual / wpy },
      biweekly:    { gross: annual / (wpy / 2), net: netAnnual / (wpy / 2) },
      semiMonthly: { gross: annual / 24,     net: netAnnual / 24 },
      monthly:     { gross: annual / 12,     net: netAnnual / 12 },
      annual:      { gross: annual,          net: netAnnual },
    });
  }, [hourly, hpw, wpy, tax]);

  useEffect(() => { compute(); }, [compute]);

  return (
    <div className={styles.widget}>
      {/* Controls */}
      <div className={styles.controls}>
        <Control
          label="Hourly rate"
          prefix="$"
          value={hourly}
          onChange={setHourly}
          min={0}
          step={0.5}
          decimals={2}
        />
        <Control
          label="Hours / week"
          value={hpw}
          onChange={setHpw}
          min={1}
          max={168}
          step={1}
          suffix="hrs"
        />
        <Control
          label="Weeks / year"
          value={wpy}
          onChange={setWpy}
          min={1}
          max={52}
          step={1}
          suffix="wks"
        />
        <Control
          label="Tax rate"
          value={tax}
          onChange={setTax}
          min={0}
          max={60}
          step={1}
          suffix="%"
        />
      </div>

      {/* Table */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Period</th>
              <th>Before tax</th>
              <th>After tax <span className={styles.taxBadge}>{tax}%</span></th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(({ label, key, dp }) => (
              <tr key={key} className={key === "annual" ? styles.highlight : ""}>
                <td>{label}</td>
                <td className={styles.num}>{rows[key] ? usd(rows[key].gross, dp) : "—"}</td>
                <td className={styles.num}>{rows[key] ? usd(rows[key].net, dp) : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.note}>
        Figures based on {hpw} hrs/week × {wpy} weeks = <strong>{totalHours.toLocaleString()} hours/year</strong>.
        After-tax estimates use a flat {tax}% effective rate and are illustrative only — not tax advice.
      </p>
    </div>
  );
}

/* ─── Sub-component: number input control ─────────────────────────────────── */
function Control({
  label,
  value,
  onChange,
  prefix,
  suffix,
  min,
  max,
  step,
  decimals = 0,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  decimals?: number;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    if (!isNaN(v)) onChange(v);
  };

  return (
    <label className={styles.control}>
      <span className={styles.controlLabel}>{label}</span>
      <div className={styles.inputWrap}>
        {prefix && <span className={styles.adornment}>{prefix}</span>}
        <input
          type="number"
          value={decimals > 0 ? value : value}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
          className={`${styles.input} ${prefix ? styles.hasPrefix : ""} ${suffix ? styles.hasSuffix : ""}`}
        />
        {suffix && <span className={`${styles.adornment} ${styles.adornmentRight}`}>{suffix}</span>}
      </div>
    </label>
  );
}
