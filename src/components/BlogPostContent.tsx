"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCalendar, FiClock, FiArrowLeft, FiTag, FiShare2 } from 'react-icons/fi';
import ScrollReveal from '@/components/ScrollReveal';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { BlogPost, BlogPostMeta } from '@/lib/blog';

// For now, we'll render the content as HTML since MDX needs server-side processing
// We'll create a proper MDX setup later if needed

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts: BlogPostMeta[];
}

export default function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1),transparent_50%)]" />
        {/* Neural network pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-px h-32 bg-cyan-400 rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 w-px h-24 bg-cyan-400 -rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/3 w-px h-28 bg-cyan-400 rotate-12"></div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Back Button */}
        <ScrollReveal>
          <Link
            href="/blog"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-all duration-300 group hover:translate-x-1"
          >
            <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </ScrollReveal>

        {/* Article Header */}
        <ScrollReveal>
          <article className="max-w-4xl mx-auto">
            <header className="mb-12 relative">
              {/* Glow effect behind title */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl -z-10"></div>
              
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <FiCalendar className="mr-2 text-cyan-400" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className="flex items-center">
                  <FiClock className="mr-2 text-cyan-400" />
                  {post.readTime}
                </div>
                <span className="text-gray-500">by <span className="text-cyan-400">{post.author}</span></span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
                {post.title}
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-gray-700/50 hover:border-cyan-500/50 transition-colors"
                  >
                    <FiTag className="mr-1 text-xs" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share Button */}
              <button 
                onClick={handleShare}
                className="inline-flex items-center px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 hover:text-cyan-400 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <FiShare2 className="mr-2" />
                Share Article
              </button>
            </header>

            {/* Article Content */}
            <ScrollReveal>
              <MarkdownRenderer 
                content={post.content}
                className="text-gray-300 leading-relaxed"
              />
            </ScrollReveal>

            {/* Article Footer */}
            <ScrollReveal>
              <footer className="mt-16 pt-8 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="text-gray-400">
                    <p>Written by <span className="text-cyan-400">{post.author}</span></p>
                    <p className="text-sm">Published on {new Date(post.date).toLocaleDateString()}</p>
                  </div>
                  <button 
                    onClick={handleShare}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <FiShare2 className="mr-2" />
                    Share
                  </button>
                </div>
              </footer>
            </ScrollReveal>
          </article>
        </ScrollReveal>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <ScrollReveal>
            <section className="max-w-4xl mx-auto mt-20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 mr-3 rounded-full"></span>
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.slug}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <FiCalendar className="mr-1 text-cyan-400" />
                        {new Date(relatedPost.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center">
                        <FiClock className="mr-1 text-cyan-400" />
                        {relatedPost.readTime}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>

                    <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {relatedPost.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {relatedPost.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded text-xs border border-gray-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}
      </motion.div>
    </div>
  );
} 