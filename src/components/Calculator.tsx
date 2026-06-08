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
  const [hourly, setHourly]   = useState<number | string>(defaultHourly);
  const [hpw, setHpw]         = useState<number | string>(defaultHoursPerWeek);
  const [wpy, setWpy]         = useState<number | string>(defaultWeeksPerYear);
  const [tax, setTax]         = useState<number | string>(defaultTaxRate);
  const [rows, setRows]       = useState<Record<string, { gross: number; net: number }>>({});
  const [totalHours, setTotalHours] = useState(Number(hpw) * Number(wpy));

  const compute = useCallback(() => {
    const h = Number(hourly) || 0;
    const hw = Number(hpw) || 0;
    const wy = Number(wpy) || 0;
    const t = Number(tax) || 0;

    const annual  = h * hw * wy;
    const netAnnual = annual * (1 - t / 100);
    const hrs = hw * wy;
    setTotalHours(hrs);
    setRows({
      hourly:      { gross: h,               net: h * (1 - t / 100) },
      daily:       { gross: h * 8,           net: h * 8 * (1 - t / 100) },
      weekly:      { gross: wy ? annual / wy : 0,     net: wy ? netAnnual / wy : 0 },
      biweekly:    { gross: wy ? annual / (wy / 2) : 0, net: wy ? netAnnual / (wy / 2) : 0 },
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
  value: number | string;
  onChange: (n: number | string) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  decimals?: number;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (raw === "") {
      onChange("");
      return;
    }
    const v = parseFloat(raw);
    if (!isNaN(v)) onChange(raw);
  };

  return (
    <label className={styles.control}>
      <span className={styles.controlLabel}>{label}</span>
      <div className={styles.inputWrap}>
        {prefix && <span className={styles.adornment}>{prefix}</span>}
        <input
          type="number"
          value={value}
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
