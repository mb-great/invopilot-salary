"use client";

import React from "react";
export default function WPFooter() {
  return (
    <footer id="ip-footer">
      <div className="ip-fw">
        <div className="ip-f-grid">

          {/* Brand Column */}
          <div className="ip-f-brand">
            <a href="https://invopilot.com/" className="ip-f-logo">
              <img src="/tools/logo.webp" alt="InvoPilot" />
              <span className="ip-f-logo-text">Invo<span>Pilot</span></span>
            </a>

            <p className="ip-f-desc">InvoPilot is a powerful, easy-to-use invoice generator built for freelancers, creators, and growing businesses.</p>
            <p className="ip-f-tagline">Effortless. Secure. Free.</p>

            <div className="ip-f-social">
              <a href="https://www.instagram.com/invopilot/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
              <a href="https://x.com/invopilot" target="_blank" rel="noopener noreferrer" aria-label="X">𝕏</a>
              <a href="https://www.youtube.com/@Invopilot" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
            </div>

            <div className="ip-f-contact">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:hello@invopilot.com" style={{ color: 'var(--muted)', textDecoration: 'none' }}>hello@invopilot.com</a>
              </div>
              <div className="ip-f-contact-row">🕒 Monday – Friday : 8:00 AM – 5:00 PM</div>
            </div>
          </div>

          {/* Company Links */}
          <div className="ip-f-col">
            <h4>Company</h4>
            <ul>
              <li><a href="https://invopilot.com/about-us/">About Us</a></li>
              <li><a href="https://invopilot.com/blogs/">Blogs</a></li>
              <li><a href="https://invopilot.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="https://invopilot.com/contact-us/">Contact Us</a></li>
              <li><a href="https://invopilot.com/write-for-us/">Write For Us</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="ip-f-bottom">
          <p className="ip-f-copy">© {new Date().getFullYear()} <a href="https://invopilot.com/">Invopilot.com</a>. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
