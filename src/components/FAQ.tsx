"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={styles.faq}>
      {items.map((item, i) => (
        <div key={i} className={`${styles.item} ${open === i ? styles.open : ""}`}>
          <button
            className={styles.question}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <span className={styles.icon} aria-hidden>
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div className={styles.answer}>
              <p>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
