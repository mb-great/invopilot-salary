import { computeFractionalRates } from "@/lib/salary-calc-helpers";
import { usd } from "@/lib/salary-data";

interface Props {
  baseRate: number;
}

export default function FractionalRates({ baseRate }: Props) {
  const rates = computeFractionalRates(baseRate);

  return (
    <div>
      <h2 style={{
        fontSize: 22,
        fontWeight: 800,
        letterSpacing: "-0.02em",
        color: "var(--ink)",
        marginBottom: 12,
      }}>
        Fractional rates near ${baseRate}/hour
      </h2>
      <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 20 }}>
        Many jobs pay fractional hourly rates. Here&apos;s what rates near ${baseRate} work out to annually.
      </p>
      <div style={{ overflowX: "auto" }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 15,
        }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--border)" }}>
              <th style={{ textAlign: "left", padding: "10px 14px", color: "var(--muted)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Rate</th>
              <th style={{ textAlign: "right", padding: "10px 14px", color: "var(--muted)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Weekly</th>
              <th style={{ textAlign: "right", padding: "10px 14px", color: "var(--muted)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Monthly</th>
              <th style={{ textAlign: "right", padding: "10px 14px", color: "var(--muted)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Yearly</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((r) => (
              <tr key={r.rate} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "10px 14px", fontWeight: 600, color: "var(--ink)" }}>{usd(r.rate, 2)}/hr</td>
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
