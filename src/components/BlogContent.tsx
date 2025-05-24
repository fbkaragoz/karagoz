"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import ScrollReveal from '@/components/ScrollReveal';
import TiltCard from '@/components/TiltCard';
import { BlogPostMeta } from '@/lib/blog';

interface BlogContentProps {
  allPosts: BlogPostMeta[];
  featuredPosts: BlogPostMeta[];
}

export default function BlogContent({ allPosts, featuredPosts }: BlogContentProps) {
  const regularPosts = allPosts.filter(post => !post.featured);

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

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1),transparent_50%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
              Tech <span className="text-cyan-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Insights, tutorials, and thoughts on AI, web development, and the future of technology
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="w-2 h-8 bg-cyan-400 mr-3 rounded-full"></span>
                Featured Articles
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <ScrollReveal key={post.slug} delay={index * 0.1}>
                    <TiltCard>
                      <article className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 overflow-hidden h-full">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative z-10">
                          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                            <div className="flex items-center">
                              <FiCalendar className="mr-2" />
                              {new Date(post.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </div>
                            <div className="flex items-center">
                              <FiClock className="mr-2" />
                              {post.readTime}
                            </div>
                            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                              Featured
                            </span>
                          </div>

                          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>
                          
                          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-2 transition-all duration-300"
                          >
                            Read Full Article
                            <FiArrowRight className="ml-2" />
                          </Link>
                        </div>
                      </article>
                    </TiltCard>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Regular Posts Grid */}
        <ScrollReveal>
          <section>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-2 h-8 bg-cyan-400 mr-3 rounded-full"></span>
              {featuredPosts.length > 0 ? 'Latest Articles' : 'All Articles'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(featuredPosts.length > 0 ? regularPosts : allPosts).map((post, index) => (
                <ScrollReveal key={post.slug} delay={index * 0.1}>
                  <TiltCard>
                    <article className="group p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 h-full">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <FiCalendar className="mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center">
                          <FiClock className="mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded text-xs border border-gray-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 text-gray-500 text-xs">
                            +{post.tags.length - 2} more
                          </span>
                        )}
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Read More
                        <FiArrowRight className="ml-1 text-xs" />
                      </Link>
                    </article>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </motion.div>
    </div>
  );
} 