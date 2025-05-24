// src/app/layout.tsx

import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "./globals.css";
import FuturisticHeader from "@/components/Header";
import FuturisticFooter from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Fatih Burak Karagöz — karagoz.io",
    template: "%s | karagoz.io"
  },
  description: "AI Developer, Philosopher, and AGI Architect specializing in machine learning, neuro-symbolic AI, and cutting-edge technology solutions. Building the future with intelligent systems.",
  keywords: ["AI Developer", "AGI Architect", "Machine Learning", "Neuro-Symbolic AI", "Philosophy of Mind", "Ottoman NLP", "TensorFlow", "React", "Next.js", "Artificial Intelligence"],
  authors: [{ name: "Fatih Burak Karagöz" }],
  creator: "Fatih Burak Karagöz",
  publisher: "karagoz.io",
  metadataBase: new URL('https://karagoz.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://karagoz.io',
    siteName: 'karagoz.io',
    title: 'Fatih Burak Karagöz — AI Developer & AGI Architect',
    description: 'AI Developer, Philosopher, and AGI Architect specializing in machine learning, neuro-symbolic AI, and cutting-edge technology solutions.',
    images: [
      {
        url: '/api/og?title=AI Developer & AGI Architect&description=Building the future with intelligent systems&type=website',
        width: 1200,
        height: 630,
        alt: 'karagoz.io - AI Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatih Burak Karagöz — AI Developer & AGI Architect',
    description: 'AI Developer, Philosopher, and AGI Architect specializing in machine learning, neuro-symbolic AI, and cutting-edge technology solutions.',
    images: ['/api/og?title=AI Developer & AGI Architect&description=Building the future with intelligent systems&type=website'],
    creator: '@0xCDLI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://karagoz.io',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Fatih Burak Karagöz",
              "url": "https://karagoz.io",
              "jobTitle": "AI Developer & AGI Architect",
              "description": "AI Developer, Philosopher, and AGI Architect specializing in machine learning, neuro-symbolic AI, and cutting-edge technology solutions.",
              "sameAs": [
                "https://github.com/fbkaragoz",
                "https://linkedin.com/in/karagoz",
                "https://twitter.com/0xcdli"
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "AGI Architecture",
                "Machine Learning",
                "Neuro-Symbolic AI",
                "Philosophy of Mind",
                "Ottoman NLP",
                "Web Development",
                "TensorFlow",
                "React",
                "Next.js",
                "Python",
                "JavaScript"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        <FuturisticHeader />
        <main className="pt-20">
          {children}
        </main>
        <FuturisticFooter />
      </body>
    </html>
  );
}
