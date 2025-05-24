// src/app/layout.tsx

import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "./globals.css";
import FuturisticHeader from "@/components/Header";
import FuturisticFooter from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Fatih Burak Karagöz - AI Developer, Philosopher, AGI Architect | karagoz.io",
    template: "%s | Fatih Burak Karagöz"
  },
  description: "Fatih Burak Karagöz - AI Researcher, Philosopher, and AGI Architect from Istanbul. Specializing in neural networks, machine learning, Ottoman NLP, and cutting-edge AI solutions. Building the future with intelligent systems and philosophical insights.",
  keywords: [
    "Fatih Burak Karagöz", "AI research", "AGI", "philosophy of mind", "Next.js portfolio",
    "AI developer Istanbul", "machine learning expert", "neural networks", "Ottoman NLP",
    "artificial intelligence researcher", "AGI architect", "neuro-symbolic AI", "deep learning",
    "computer vision", "natural language processing", "AI ethics", "philosophy", "Boğaziçi University",
    "CDLI.ai", "BetterQuery", "Botanera Genomics", "Turkish AI", "Istanbul tech", "AI startup founder"
  ],
  authors: [{ name: "Fatih Burak Karagöz", url: "https://karagoz.io" }],
  creator: "Fatih Burak Karagöz",
  publisher: "karagoz.io",
  metadataBase: new URL('https://karagoz.io'),
  alternates: {
    canonical: 'https://karagoz.io',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://karagoz.io',
    siteName: 'karagoz.io',
    title: 'Fatih Burak Karagöz - AI Developer & AGI Architect',
    description: 'AI Researcher, Philosopher, and AGI Architect from Istanbul. Specializing in neural networks, machine learning, and cutting-edge AI solutions.',
    images: [
      {
        url: '/api/og?title=AI Developer & AGI Architect&description=Building the future with intelligent systems&type=website',
        width: 1200,
        height: 630,
        alt: 'Fatih Burak Karagöz - AI Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatih Burak Karagöz - AI Developer & AGI Architect',
    description: 'AI Researcher, Philosopher, and AGI Architect from Istanbul. Building the future with intelligent systems.',
    images: ['/api/og?title=AI Developer & AGI Architect&description=Building the future with intelligent systems&type=website'],
    creator: '@0xCDLI',
    site: '@0xCDLI',
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
  category: 'technology',
  classification: 'AI Research & Development',
  other: {
    'google-site-verification': 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/karagoz.png', sizes: '32x32', type: 'image/png' },
      { url: '/karagoz.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/cdliai.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/karagoz.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fatih Burak Karagöz",
    "url": "https://karagoz.io",
    "image": "https://karagoz.io/api/og?title=Fatih Burak Karagöz&description=AI Developer & AGI Architect&type=profile",
    "jobTitle": "AI Developer & AGI Architect",
    "worksFor": [
      {
        "@type": "Organization",
        "name": "CDLI.ai",
        "url": "https://cdli.ai"
      },
      {
        "@type": "Organization", 
        "name": "BetterQuery",
        "url": "https://betterquery.com"
      },
      {
        "@type": "Organization",
        "name": "Botanera Genomics"
      }
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Boğaziçi University",
      "url": "https://www.boun.edu.tr"
    },
    "description": "AI Researcher, Philosopher, and AGI Architect from Istanbul. Specializing in neural networks, machine learning, Ottoman NLP, and cutting-edge AI solutions.",
    "sameAs": [
      "https://github.com/fbkaragoz",
      "https://linkedin.com/in/karagoz",
      "https://twitter.com/0xcdli",
      "https://scholar.google.com/citations?hl=en&user=EN-7bekAAAAJ",
      "https://huggingface.co/fatihburakkaragoz"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "AGI Architecture", 
      "Machine Learning",
      "Neural Networks",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Ottoman NLP",
      "Neuro-Symbolic AI",
      "Philosophy of Mind",
      "AI Ethics",
      "Python Programming",
      "TensorFlow",
      "PyTorch",
      "React",
      "Next.js",
      "Web Development",
      "Genomics",
      "Bioinformatics"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Istanbul",
      "addressCountry": "Turkey"
    },
    "email": "fatihburak@pm.me",
    "telephone": "+90 537 380 35 28"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "karagoz.io",
    "url": "https://karagoz.io",
    "description": "Personal portfolio and blog of Fatih Burak Karagöz - AI Developer, Philosopher, and AGI Architect",
    "author": {
      "@type": "Person",
      "name": "Fatih Burak Karagöz"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://karagoz.io/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@id": "https://karagoz.io/#person"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/karagoz.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/cdliai.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/karagoz.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/karagoz.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0891b2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
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
