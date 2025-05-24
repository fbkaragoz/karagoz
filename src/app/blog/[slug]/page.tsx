import { notFound } from 'next/navigation';
import { getPostBySlug, getRelatedPosts, getAllPostSlugs } from '@/lib/blog';
import BlogPostContent from '@/components/BlogPostContent';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı',
      description: 'Aradığınız blog yazısı bulunamadı.',
    };
  }

  const description = post.excerpt || post.content.slice(0, 160).replace(/<[^>]*>/g, '') + '...';
  const keywords = [
    ...post.tags,
    'Fatih Burak Karagöz',
    'AI blog',
    'yapay zeka',
    'machine learning',
    'teknoloji blog'
  ];

  return {
    title: post.title,
    description,
    keywords,
    authors: [{ name: 'Fatih Burak Karagöz', url: 'https://karagoz.io' }],
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      url: `https://karagoz.io/blog/${slug}`,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(description)}&type=article`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ['Fatih Burak Karagöz'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [`/api/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(description)}&type=article`],
    },
    alternates: {
      canonical: `https://karagoz.io/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug);

  // Blog post için JSON-LD schema
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.content.slice(0, 160).replace(/<[^>]*>/g, ''),
    "image": `https://karagoz.io/api/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.excerpt || '')}&type=article`,
    "author": {
      "@type": "Person",
      "name": "Fatih Burak Karagöz",
      "url": "https://karagoz.io"
    },
    "publisher": {
      "@type": "Person",
      "name": "Fatih Burak Karagöz",
      "url": "https://karagoz.io"
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://karagoz.io/blog/${slug}`
    },
    "keywords": post.tags.join(', '),
    "articleSection": "Technology",
    "inLanguage": "tr-TR",
    "url": `https://karagoz.io/blog/${slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostSchema)
        }}
      />
      <BlogPostContent post={post} relatedPosts={relatedPosts} />
    </>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
} 