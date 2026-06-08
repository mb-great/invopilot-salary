import type { Metadata } from "next";
import "./globals.css";
import "@/components/wp-styles.css";
import WPHeader from "@/components/WPHeader";
import WPFooter from "@/components/WPFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://invopilot.com"),
  title: { default: "Salary Calculator | InvoPilot", template: "%s | InvoPilot" },
  description: "Free salary calculator. Convert hourly to annual, monthly, weekly, and biweekly pay instantly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <WPHeader />
        <div style={{ paddingTop: '64px' }}>
          {children}
        </div>
        <WPFooter />
      </body>
    </html>
  );
}
