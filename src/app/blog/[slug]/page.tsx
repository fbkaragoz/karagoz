import { notFound } from 'next/navigation';
import { getPostBySlug, getRelatedPosts, getAllPostSlugs } from '@/lib/blog';
import BlogPostContent from '@/components/BlogPostContent';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug);

  return <BlogPostContent post={post} relatedPosts={relatedPosts} />;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
} 