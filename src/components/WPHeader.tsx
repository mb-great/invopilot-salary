"use client";

import React, { useState } from "react";

export default function WPHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header id="invopilot-header">
      <nav className="ip-nav">
        {/* Logo */}
        <a href="https://invopilot.com/" className="ip-logo">
          <img src="/tools/logo.webp" alt="InvoPilot Logo" />
          <span className="ip-logo-text">Invo<span>Pilot</span></span>
        </a>

        {/* Desktop Menu */}
        <ul className="ip-menu">
          <li><a href="https://invopilot.com/blogs/">Blogs</a></li>

          {/* Generators */}
          <li className="has-dropdown">
            <a href="#" className="dropdown-toggle">Generators ▾</a>
            <ul className="dropdown-menu ip-dropdown">
              <li><a href="https://invopilot.com/proforma-invoice-generator/">📋 Proforma Generator</a></li>
              <li><a href="https://invoice-generator.invopilot.com/">🧾 Invoice Generator</a></li>
              <li><a href="https://invopilot.com/bill-generator/">🧾 Bill Generator</a></li>
              <li><a href="https://invopilot.com/sow-generator/">📄 SOW Generator</a></li>
              <li><a href="https://invopilot.com/free-payslip-generator/">💼 PaySlip Generator</a></li>
              <li><a href="https://invopilot.com/quote-generator/">💬 Quote Generator</a></li>
              <li><a href="https://invopilot.com/mobile-bill-format-generator/">📱 Mobile Bill Generator</a></li>
              <li><a href="https://invopilot.com/rent-receipt-generator/">🏠 Rent Receipt Generator</a></li>
              <li><a href="https://invopilot.com/purchase-order-generator/">🛒 Purchase Order Generator</a></li>
              <li><a href="https://invopilot.com/qr-code-generator/">📱 QR Code Generator</a></li>
            </ul>
          </li>

          {/* Templates */}
          <li className="has-dropdown">
            <a href="#" className="dropdown-toggle">Templates ▾</a>
            <ul className="dropdown-menu ip-dropdown">
              <li><a href="https://invopilot.com/invoice-template-google-docs/">📄 Invoice Templates</a></li>
              <li><a href="https://invopilot.com/quote-templates/">💬 Quote Templates</a></li>
              <li><a href="https://invopilot.com/proforma-invoice-templates/">📋 Proforma Templates</a></li>
              <li><a href="https://invopilot.com/mobile-bill-format/">📱 Mobile Bill Templates</a></li>
              <li><a href="https://invopilot.com/purchase-order-templates/">🛒 Purchase Order Templates</a></li>
            </ul>
          </li>

          {/* Softwares */}
          <li className="has-dropdown">
            <a href="#" className="dropdown-toggle">Softwares ▾</a>
            <ul className="dropdown-menu ip-dropdown">
              <li><a href="https://invopilot.com/free-billing-software-for-pc/">💻 Billing Software</a></li>
            </ul>
          </li>

          {/* Calculators */}
          <li className="has-dropdown">
            <a href="#" className="dropdown-toggle">Calculators ▾</a>
            <ul className="dropdown-menu ip-dropdown">
              <li><a href="https://invopilot.com/gst-calculator/">🧮 GST Calculator</a></li>
              <li><a href="https://invopilot.com/depreciation-calculator/">📉 Depreciation Calculator</a></li>
              <li><a href="https://invopilot.com/business-loan-emi-calculator/">🏦 Business Loan EMI Calculator</a></li>
              <li><a href="https://invopilot.com/income-tax-calculator/">🧾 Income Tax Calculator</a></li>
            </ul>
          </li>
        </ul>

        <button 
          className={`ip-hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="ip-mobile-drawer open">
           <div className="ip-mob-section">
             <a href="https://invopilot.com/blogs/" className="ip-mob-link">Blogs</a>
             <a href="https://invoice-generator.invopilot.com/" className="ip-mob-link">Invoice Generator</a>
             <a href="https://invopilot.com/proforma-invoice-generator/" className="ip-mob-link">Proforma Generator</a>
             <a href="https://invopilot.com/bill-generator/" className="ip-mob-link">Bill Generator</a>
             <a href="https://invopilot.com/free-payslip-generator/" className="ip-mob-link">PaySlip Generator</a>
             <a href="https://invopilot.com/gst-calculator/" className="ip-mob-link">GST Calculator</a>
           </div>
        </div>
      )}
    </header>
  );
}
