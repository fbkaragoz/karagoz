import { getAllPosts, getFeaturedPosts } from '@/lib/blog';
import BlogContent from '@/components/BlogContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI ve Teknoloji Blogu - Yapay Zeka Araştırmaları",
  description: "Fatih Burak Karagöz'ün AI, AGI, makine öğrenmesi, felsefe ve teknoloji üzerine derinlemesine yazıları. Neural networks, Ottoman NLP, ve cutting-edge AI araştırmaları.",
  keywords: [
    "AI blog", "yapay zeka blog", "machine learning blog", "AGI araştırmaları",
    "neural networks", "deep learning", "Ottoman NLP", "AI ethics", "philosophy of mind",
    "teknoloji blog", "AI research", "Fatih Burak Karagöz blog", "Turkish AI blog"
  ],
  openGraph: {
    title: "AI ve Teknoloji Blogu | Fatih Burak Karagöz",
    description: "Yapay zeka, AGI, makine öğrenmesi ve felsefe üzerine derinlemesine yazılar. Neural networks ve cutting-edge AI araştırmaları.",
    type: "website",
    url: "https://karagoz.io/blog",
    images: [
      {
        url: "/api/og?title=AI ve Teknoloji Blogu&description=Yapay zeka ve felsefe üzerine derinlemesine yazılar&type=blog",
        width: 1200,
        height: 630,
        alt: "AI ve Teknoloji Blogu - Fatih Burak Karagöz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI ve Teknoloji Blogu | Fatih Burak Karagöz",
    description: "Yapay zeka, AGI, makine öğrenmesi ve felsefe üzerine derinlemesine yazılar.",
    images: ["/api/og?title=AI ve Teknoloji Blogu&description=Yapay zeka ve felsefe üzerine derinlemesine yazılar&type=blog"],
  },
  alternates: {
    canonical: "https://karagoz.io/blog",
  },
};

export default async function BlogPage() {
  const allPosts = await getAllPosts();
  const featuredPosts = await getFeaturedPosts();

  return <BlogContent allPosts={allPosts} featuredPosts={featuredPosts} />;
} 