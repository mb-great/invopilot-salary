import type { Metadata } from 'next';
import MsmeCalculatorClient from './MsmeCalculatorClient';

export const metadata: Metadata = {
  title: 'MSME Late Payment Interest Calculator — Free Tool',
  description:
    'Calculate compound interest on overdue invoices under MSMED Act 2006 (Section 15 & 16). 3× RBI bank rate, monthly rests. Free for Indian freelancers, agencies & MSMEs.',
  keywords: [
    'MSME interest calculator',
    'MSMED Act interest rate',
    'late payment interest India',
    'Section 16 MSMED Act',
    'MSME payment calculator',
    'invoice overdue interest',
    'Udyam payment recovery',
    'freelancer late payment India',
    'MSME Samadhaan',
    '45 day payment rule India',
  ],
  openGraph: {
    title: 'MSME Late Payment Interest Calculator — InvoPilot',
    description:
      'Free calculator: compute compound interest on overdue invoices under India\'s MSMED Act. 3× RBI bank rate, 45-day statutory rule.',
    url: 'https://invopilot.com/tools/msme-interest-calculator',
    type: 'website',
    siteName: 'InvoPilot',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSME Late Payment Interest Calculator — InvoPilot',
    description: 'Free tool to calculate compound interest on overdue invoices under India\'s MSMED Act.',
  },
  alternates: {
    canonical: 'https://invopilot.com/tools/msme-interest-calculator',
  },
};

export default function MsmeInterestCalculatorPage() {
  return <MsmeCalculatorClient />;
}
