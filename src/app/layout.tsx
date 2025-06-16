import './globals.css';

import { Suspense } from 'react';

import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Inter,
  Space_Grotesk,
} from 'next/font/google';

import PageLoader from '@/components/Loader';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const grotesk = Space_Grotesk({
  variable: '--font-grotesk',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AISOC | Pclub',
  description: 'AISOC 2025 by Pclub UIET, Panjab University',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${grotesk.variable}`}
    >
      <Suspense fallback={<PageLoader />}>
        <body className="antialiased">{children}</body>
      </Suspense>
    </html>
  );
}