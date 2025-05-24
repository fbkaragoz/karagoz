import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "İletişim - Fatih Burak Karagöz",
  description: "AI projeleri, işbirlikleri ve danışmanlık için Fatih Burak Karagöz ile iletişime geçin. Istanbul merkezli AI Developer ve AGI Architect.",
  keywords: [
    "Fatih Burak Karagöz iletişim", "AI developer contact", "AGI architect Istanbul",
    "AI consultation", "machine learning collaboration", "AI project partnership",
    "artificial intelligence expert", "teknoloji danışmanlığı", "AI işbirliği"
  ],
  openGraph: {
    title: "İletişim | Fatih Burak Karagöz",
    description: "AI projeleri, işbirlikleri ve danışmanlık için iletişime geçin. Istanbul merkezli AI Developer ve AGI Architect.",
    type: "website",
    url: "https://karagoz.io/contact",
    images: [
      {
        url: "/api/og?title=İletişim&description=AI projeleri ve işbirlikleri için iletişime geçin&type=contact",
        width: 1200,
        height: 630,
        alt: "Fatih Burak Karagöz - İletişim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | Fatih Burak Karagöz",
    description: "AI projeleri, işbirlikleri ve danışmanlık için iletişime geçin.",
    images: ["/api/og?title=İletişim&description=AI projeleri ve işbirlikleri için iletişime geçin&type=contact"],
  },
  alternates: {
    canonical: "https://karagoz.io/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 