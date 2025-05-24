import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI ve Teknoloji Projeleri - İnovatif Çözümler",
  description: "Fatih Burak Karagöz'ün AI, web development ve emerging technologies alanındaki projelerini keşfedin. CDLI.ai, BetterQuery, Botanera Genomics ve daha fazlası.",
  keywords: [
    "AI projects", "machine learning projects", "web development portfolio", "AGI projects",
    "CDLI.ai", "BetterQuery", "Botanera Genomics", "Ottoman NLP", "neural networks",
    "React projects", "Next.js projects", "Python AI", "teknoloji projeleri", "yapay zeka projeleri"
  ],
  openGraph: {
    title: "AI ve Teknoloji Projeleri | Fatih Burak Karagöz",
    description: "AI, web development ve emerging technologies alanındaki inovatif projeler. CDLI.ai, BetterQuery, Botanera Genomics ve daha fazlası.",
    type: "website",
    url: "https://karagoz.io/projects",
    images: [
      {
        url: "/api/og?title=AI ve Teknoloji Projeleri&description=İnovatif AI ve teknoloji çözümleri&type=projects",
        width: 1200,
        height: 630,
        alt: "Fatih Burak Karagöz - AI ve Teknoloji Projeleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI ve Teknoloji Projeleri | Fatih Burak Karagöz",
    description: "AI, web development ve emerging technologies alanındaki inovatif projeler.",
    images: ["/api/og?title=AI ve Teknoloji Projeleri&description=İnovatif AI ve teknoloji çözümleri&type=projects"],
  },
  alternates: {
    canonical: "https://karagoz.io/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 