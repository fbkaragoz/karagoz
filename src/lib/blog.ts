import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  featured: boolean;
  author: string;
  readTime: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  featured: boolean;
  author: string;
  readTime: string;
}

// Get posts from localStorage (admin panel)
function getLocalStoragePosts(): BlogPost[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const savedPosts = localStorage.getItem('blog_posts');
    if (savedPosts) {
      const posts: BlogPost[] = JSON.parse(savedPosts);
      return posts.map((post: BlogPost) => ({
        ...post,
        readTime: readingTime(post.content).text
      }));
    }
  } catch (error) {
    console.error('Error reading localStorage posts:', error);
  }
  
  return [];
}

// Get posts from file system
async function getFileSystemPosts(): Promise<BlogPost[]> {
  if (typeof window !== 'undefined') return [];
  
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }
    
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = await Promise.all(
      fileNames
        .filter((name) => name.endsWith('.mdx'))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.mdx$/, '');
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data, content } = matter(fileContents);
          const stats = readingTime(content);
          
          return {
            slug,
            title: data.title || '',
            excerpt: data.excerpt || '',
            date: data.date || '',
            tags: data.tags || [],
            featured: data.featured || false,
            author: data.author || 'Fatih Burak Karagöz',
            readTime: stats.text,
            content,
          };
        })
    );
    
    return posts;
  } catch (error) {
    console.error('Error reading file system posts:', error);
    return [];
  }
}

// Mark functions that use fs as server-side only
export async function getAllPostSlugs(): Promise<string[]> {
  const fileSystemPosts = await getFileSystemPosts();
  const localStoragePosts = getLocalStoragePosts();
  
  const allPosts = [...fileSystemPosts, ...localStoragePosts];
  return allPosts.map(post => post.slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // First try localStorage
  const localStoragePosts = getLocalStoragePosts();
  const localPost = localStoragePosts.find(post => post.slug === slug);
  if (localPost) {
    return localPost;
  }
  
  // Then try file system
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (typeof window === 'undefined' && fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);
      
      return {
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        tags: data.tags || [],
        featured: data.featured || false,
        author: data.author || 'Fatih Burak Karagöz',
        readTime: stats.text,
        content,
      };
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
  }
  
  return null;
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const fileSystemPosts = await getFileSystemPosts();
  const localStoragePosts = getLocalStoragePosts();
  
  const allPosts = [...fileSystemPosts, ...localStoragePosts];
  
  return allPosts
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      tags: post.tags,
      featured: post.featured,
      author: post.author,
      readTime: post.readTime,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getFeaturedPosts(): Promise<BlogPostMeta[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

export async function getPostsByTag(tag: string): Promise<BlogPostMeta[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => 
    post.tags.some((postTag) => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  );
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = posts.flatMap((post) => post.tags);
  return Array.from(new Set(tags)).sort();
}

export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogPostMeta[]> {
  const currentPost = await getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = await getAllPosts();
  const otherPosts = allPosts.filter((post) => post.slug !== currentSlug);
  
  // Score posts based on shared tags
  const scoredPosts = otherPosts.map((post) => {
    const sharedTags = post.tags.filter((tag) => 
      currentPost.tags.includes(tag)
    ).length;
    
    return {
      ...post,
      score: sharedTags,
    };
  });

  // Sort by score and return top results
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
} 