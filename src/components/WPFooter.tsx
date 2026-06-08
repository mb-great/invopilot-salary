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
              <img src="https://invopilot.com/wp-content/uploads/2025/04/ChatGPT-Image-Apr-3-2025-09_50-1.png" alt="InvoPilot" />
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
              <div className="ip-f-contact-row">📍 14th Street, Caltech, New Jersey, Alabama</div>
              <div className="ip-f-contact-row">✉️ <a href="mailto:invopilot@gmail.com">invopilot@gmail.com</a></div>
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
