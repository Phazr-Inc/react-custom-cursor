import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '@phazr/react-custom-cursor — React custom cursor with SSR support',
  description:
    'A lightweight and highly customizable React component for creating unique and interactive cursor experiences with full SSR support.',
  keywords: [
    'react',
    'cursor',
    'custom cursor',
    'ssr',
    'next.js',
    'typescript',
  ],
  openGraph: {
    title: '@phazr/react-custom-cursor',
    description:
      'A lightweight and highly customizable React cursor component with SSR support',
    url: 'https://react-custom-cursor.phazr.xyz',
    siteName: '@phazr/react-custom-cursor docs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '@phazr/react-custom-cursor',
    description:
      'A lightweight and highly customizable React cursor component with SSR support',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-gradient-to-br from-white to-slate-100 dark:from-[#18181b] dark:to-[#23272f] text-gray-900 dark:text-white min-h-screen`}
      >
        <Header />
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 flex flex-col relative">
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
