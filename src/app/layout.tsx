import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Postura Hacker',
  description: 'Comunidade. Podcast. Newsletter.',
  openGraph: {
    title: 'Postura Hacker',
    description: 'Comunidade. Podcast. Newsletter.',
    url: 'https://posturahacker.com',
    siteName: 'Postura Hacker',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Postura Hacker',
    description: 'Comunidade. Podcast. Newsletter.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
