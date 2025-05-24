import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Neural Curriculum - Fatih Burak Karagöz CV",
  description: "Fatih Burak Karagöz'ün detaylı CV'si. AI Researcher, Philosopher, AGI Architect. CDLI.ai, BetterQuery, Botanera Genomics kurucusu. Boğaziçi Üniversitesi Felsefe mezunu.",
  keywords: [
    "Fatih Burak Karagöz CV", "AI developer CV", "AGI architect resume", "neural curriculum",
    "AI researcher Istanbul", "philosophy graduate", "CDLI.ai founder", "BetterQuery founder",
    "Botanera Genomics", "Ottoman NLP", "machine learning expert", "Boğaziçi University"
  ],
  openGraph: {
    title: "Neural Curriculum | Fatih Burak Karagöz CV",
    description: "AI Researcher, Philosopher, AGI Architect. CDLI.ai, BetterQuery, Botanera Genomics kurucusu.",
    type: "profile",
    url: "https://karagoz.io/cv",
    images: [
      {
        url: "/api/og?title=Neural Curriculum&description=AI Researcher, Philosopher, AGI Architect&type=cv",
        width: 1200,
        height: 630,
        alt: "Fatih Burak Karagöz - Neural Curriculum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neural Curriculum | Fatih Burak Karagöz CV",
    description: "AI Researcher, Philosopher, AGI Architect. CDLI.ai, BetterQuery, Botanera Genomics kurucusu.",
    images: ["/api/og?title=Neural Curriculum&description=AI Researcher, Philosopher, AGI Architect&type=cv"],
  },
  alternates: {
    canonical: "https://karagoz.io/cv",
  },
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 