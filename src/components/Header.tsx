import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="https://invopilot.com" className={styles.logo}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
            <rect width="28" height="28" rx="7" fill="#f97316"/>
            <path d="M8 20V10l6-3 6 3v10l-6 3-6-3Z" fill="white" opacity="0.9"/>
            <path d="M14 7v14M8 10l6 3 6-3" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
          <span className={styles.logoText}>InvoPilot</span>
        </a>

        <nav className={styles.nav}>
          <a href="/tools/salary-calculator" className={styles.navLink}>Salary Calculator</a>
          <a href="https://invoice-generator.invopilot.com/" className={styles.navLink}>Invoice Generator</a>
        </nav>
        <a href="https://invoice-generator.invopilot.com/" className={styles.cta}>
          Free Invoice ↗
        </a>
      </div>
    </header>
  );
}
