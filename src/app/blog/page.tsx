import { getAllPosts, getFeaturedPosts } from '@/lib/blog';
import BlogContent from '@/components/BlogContent';

export default async function BlogPage() {
  const allPosts = await getAllPosts();
  const featuredPosts = await getFeaturedPosts();

  return <BlogContent allPosts={allPosts} featuredPosts={featuredPosts} />;
} 