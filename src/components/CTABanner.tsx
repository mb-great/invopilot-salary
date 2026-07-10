import styles from "./CTABanner.module.css";

interface Props {
  hourlyRate: number;
}

export default function CTABanner({ hourlyRate }: Props) {
  return (
    <aside className={styles.banner}>
      <div className={styles.icon} aria-hidden>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="12" fill="rgba(255,255,255,0.15)"/>
          <path d="M12 28V14l8-4 8 4v14l-8 4-8-4Z" fill="white" opacity="0.9"/>
          <path d="M20 10v20M12 14l8 4 8-4" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className={styles.body}>
        <h2 className={styles.heading}>
          Billing clients at ${hourlyRate}/hour?
        </h2>
        <p className={styles.sub}>
          Turn your hours into a clean, professional invoice in seconds —
          multi-currency, instant PDF, no signup required.
        </p>
      </div>
      <a
        href="https://invoice-generator.invopilot.com/"
        className={styles.btn}
      >
        Create a free invoice →
      </a>
    </aside>
  );
}
