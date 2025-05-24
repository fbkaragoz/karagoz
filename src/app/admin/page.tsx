"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSave, FiEye, FiLogOut, FiEdit3 } from 'react-icons/fi';
import MarkdownRenderer from '@/components/MarkdownRenderer';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  featured: boolean;
  author: string;
  content: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPost, setCurrentPost] = useState<BlogPost>({
    slug: '',
    title: '',
    excerpt: '',
    date: new Date().toISOString().split('T')[0],
    tags: [],
    featured: false,
    author: 'Fatih Burak Karagöz',
    content: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [tagInput, setTagInput] = useState('');

  // Simple authentication (in production, use proper auth)
  const handleLogin = () => {
    if (password === 'karagoz2025') { // Change this to a secure password
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
    } else {
      alert('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
  };

  // Load posts from localStorage
  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }

    const savedPosts = localStorage.getItem('blog_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSavePost = () => {
    const slug = currentPost.slug || generateSlug(currentPost.title);
    const updatedPost = { ...currentPost, slug };
    
    const updatedPosts = isEditing
      ? posts.map(p => p.slug === slug ? updatedPost : p)
      : [...posts, updatedPost];
    
    setPosts(updatedPosts);
    localStorage.setItem('blog_posts', JSON.stringify(updatedPosts));
    
    // Reset form
    setCurrentPost({
      slug: '',
      title: '',
      excerpt: '',
      date: new Date().toISOString().split('T')[0],
      tags: [],
      featured: false,
      author: 'Fatih Burak Karagöz',
      content: '',
    });
    setIsEditing(false);
    setTagInput('');
    alert('Post saved successfully!');
  };

  const handleEditPost = (post: BlogPost) => {
    setCurrentPost(post);
    setTagInput(post.tags.join(', '));
    setIsEditing(true);
  };

  const handleDeletePost = (slug: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = posts.filter(p => p.slug !== slug);
      setPosts(updatedPosts);
      localStorage.setItem('blog_posts', JSON.stringify(updatedPosts));
    }
  };

  const handleTagsChange = (value: string) => {
    setTagInput(value);
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setCurrentPost({ ...currentPost, tags });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm max-w-md w-full mx-4"
        >
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Admin <span className="text-cyan-400">Login</span>
          </h1>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
            />
            <button
              onClick={handleLogin}
              className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
            >
              Login
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Blog <span className="text-cyan-400">Admin</span>
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <FiLogOut className="mr-2" />
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white">
                  {isEditing ? 'Edit Post' : 'New Post'}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="flex items-center px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
                  >
                    <FiEye className="mr-2" />
                    {showPreview ? 'Edit' : 'Preview'}
                  </button>
                  <button
                    onClick={handleSavePost}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                  >
                    <FiSave className="mr-2" />
                    Save
                  </button>
                </div>
              </div>

              {!showPreview ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Post title"
                    value={currentPost.title}
                    onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  />
                  
                  <textarea
                    placeholder="Post excerpt"
                    value={currentPost.excerpt}
                    onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none resize-none"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="date"
                      value={currentPost.date}
                      onChange={(e) => setCurrentPost({ ...currentPost, date: e.target.value })}
                      className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                    />
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={currentPost.featured}
                        onChange={(e) => setCurrentPost({ ...currentPost, featured: e.target.checked })}
                        className="mr-2"
                      />
                      <label htmlFor="featured" className="text-white">Featured</label>
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Tags (comma separated)"
                    value={tagInput}
                    onChange={(e) => handleTagsChange(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  />

                  <textarea
                    placeholder="Write your post content in Markdown..."
                    value={currentPost.content}
                    onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                    rows={20}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none resize-none font-mono"
                  />
                </div>
              ) : (
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 max-h-96 overflow-y-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">{currentPost.title}</h3>
                  <p className="text-gray-300 mb-6">{currentPost.excerpt}</p>
                  <MarkdownRenderer content={currentPost.content} />
                </div>
              )}
            </div>
          </div>

          {/* Posts List */}
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Saved Posts</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {posts.map((post) => (
                <div key={post.slug} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditPost(post)}
                        className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <FiEdit3 />
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.slug)}
                        className="p-2 text-red-400 hover:text-red-300 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{post.date}</span>
                    {post.featured && <span className="text-cyan-400">Featured</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 