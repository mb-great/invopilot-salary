import { computePartTimeRows } from "@/lib/salary-calc-helpers";
import { usd } from "@/lib/salary-data";

interface Props {
  hourlyRate: number;
}

export default function PartTimeHours({ hourlyRate }: Props) {
  const rows = computePartTimeRows(hourlyRate);

  return (
    <div>
      <h2 style={{
        fontSize: 22,
        fontWeight: 800,
        letterSpacing: "-0.02em",
        color: "var(--ink)",
        marginBottom: 12,
      }}>
        Part-time earnings at {usd(hourlyRate, 2)}/hour
      </h2>
      <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 20 }}>
        Not everyone works 40 hours. Here&apos;s what {usd(hourlyRate, 2)}/hour looks like at common part-time schedules.
      </p>
      <div style={{ overflowX: "auto" }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 15,
        }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--border)" }}>
              <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--muted)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Hours/Week</th>
              <th style={{ textAlign: "right", padding: "10px 14px", color: "var(--muted)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Weekly</th>
              <th style={{ textAlign: "right", padding: "10px 14px", color: "var(--muted)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Monthly</th>
              <th style={{ textAlign: "right", padding: "10px 14px", color: "var(--muted)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Yearly</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.hoursPerWeek} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "10px 14px", fontWeight: 600, color: "var(--ink)" }}>{r.hoursPerWeek} hrs/wk</td>
                <td style={{ padding: "10px 14px", textAlign: "right", fontFamily: "var(--font-mono)", color: "var(--ink-secondary)" }}>{usd(r.weekly, 0)}</td>
                <td style={{ padding: "10px 14px", textAlign: "right", fontFamily: "var(--font-mono)", color: "var(--ink-secondary)" }}>{usd(r.monthly, 0)}</td>
                <td style={{ padding: "10px 14px", textAlign: "right", fontFamily: "var(--font-mono)", color: "var(--ink-secondary)" }}>{usd(r.yearly, 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
