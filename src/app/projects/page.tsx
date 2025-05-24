"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import ProjectIcon from '@/components/ProjectIcon';
import { getProjectsByCategory, getCategories, getFeaturedProjects } from '@/lib/projects';

export default function ProjectsPage() {
  const categories = getCategories();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = getProjectsByCategory(selectedCategory);
  const featuredProjects = getFeaturedProjects(4);

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

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,255,255,0.1),transparent_50%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
            My <span className="text-cyan-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of innovative solutions spanning AI, web development, and emerging technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-cyan-400 border border-gray-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {selectedCategory === "All" && (
          <motion.section variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-2 h-8 bg-cyan-400 mr-3 rounded-full"></span>
              Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="text-cyan-400 text-2xl">
                          <ProjectIcon iconName={project.icon} />
                        </div>
                        <div>
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-yellow-400 text-sm">
                          <FiStar className="mr-1" />
                          {project.stars}
                        </div>
                        <div className="flex space-x-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                              <FiGithub className="text-xl" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                              <FiExternalLink className="text-xl" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800/60 text-cyan-400 rounded-md text-sm border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Active Development' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* All Projects Grid */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-8 bg-cyan-400 mr-3 rounded-full"></span>
            {selectedCategory === "All" ? "All Projects" : `${selectedCategory} Projects`}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 h-full relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-cyan-400 text-xl">
                        <ProjectIcon iconName={project.icon} />
                      </div>
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-md text-xs">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex items-center text-yellow-400 text-sm">
                      <FiStar className="mr-1" />
                      {project.stars}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/60 text-cyan-400 rounded-md text-xs border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800/60 text-gray-400 rounded-md text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-md text-xs ${
                      project.status === 'Active Development' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                    
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <FiGithub />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section variants={itemVariants} className="mt-20 text-center">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, innovative ideas, and opportunities to create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Link>
              <a
                href="https://github.com/fbkaragoz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                <FiGithub className="mr-2" />
                View GitHub
              </a>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
} 