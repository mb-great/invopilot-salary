import { SalaryEntry } from "@/lib/salary-data";
import styles from "./RelatedLinks.module.css";

export default function RelatedLinks({ entries }: { entries: SalaryEntry[] }) {
  return (
    <div className={styles.chips}>
      {entries.map((e) => (
        <a
          key={e.slug}
          href={`/tools/salary-calculator/${e.slug}`}
          className={styles.chip}
        >
          {e.displayLabel}
        </a>
      ))}
    </div>
  );
}
