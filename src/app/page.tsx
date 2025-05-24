// src/app/page.tsx

"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCode, FiCpu, FiCloud, FiFileText, FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaBrain } from 'react-icons/fa';
import { SiTensorflow, SiPython, SiReact, SiDocker } from 'react-icons/si';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollReveal from '@/components/ScrollReveal';
import MagneticButton from '@/components/MagneticButton';
import AnimatedTitle from '@/components/AnimatedTitle';
import ProjectIcon from '@/components/ProjectIcon';
import { getFeaturedProjects } from '@/lib/projects';

export default function HomePage() {
  const skills = [
    { 
      name: 'AI Research & Development', 
      icon: <FaBrain />, 
      description: 'Neuro-symbolic AI, AGI research, and cognitive architectures',
      tech: ['PyTorch', 'TensorFlow', 'Transformers'],
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'Philosophy & Theory', 
      icon: <FiCode />, 
      description: 'Philosophy of mind, consciousness studies, and cognitive science',
      tech: ['Logic', 'Epistemology', 'Mind Theory'],
      color: 'from-blue-500 to-purple-500'
    },
    { 
      name: 'NLP & Historical Texts', 
      icon: <FiCloud />, 
      description: 'Ottoman Turkish NLP, corpus linguistics, and text processing',
      tech: ['BERT', 'Transformers', 'Corpus Analysis'],
      color: 'from-purple-500 to-cyan-500'
    },
  ];

  // Featured projects'i otomatik olarak çek (ilk 4 tane)
  const featuredProjects = getFeaturedProjects(4);

  const techStack = [
    { icon: <SiPython />, name: 'Python', color: '#3776ab' },
    { icon: <SiTensorflow />, name: 'TensorFlow', color: '#ff6f00' },
    { icon: <SiReact />, name: 'React', color: '#61dafb' },
    { icon: <SiDocker />, name: 'Docker', color: '#2496ed' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Clean animated background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.04),transparent_60%)]" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_30%,rgba(0,255,255,0.08)_50%,transparent_70%)] bg-[length:200px_200px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Optimized Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="text-center max-w-5xl mx-auto">
            <ScrollReveal>
              <motion.div className="mb-12">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
                    Fatih Burak Karagöz
                  </span>
                </motion.h1>
                <AnimatedTitle />
                <motion.div
                  className="text-lg md:text-xl text-gray-400 font-light mb-8 tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  AI Developer, Philosopher & AGI Architect
                </motion.div>
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                  Bridging the gap between{' '}
                  <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-semibold">
                    artificial intelligence
                  </span>{' '}
                  and{' '}
                  <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-semibold">
                    human cognition
                  </span>
                </p>
                <p className="text-base text-gray-400 max-w-2xl mx-auto">
                  AI researcher, philosopher, and entrepreneur exploring the frontiers of consciousness and intelligence
                </p>
              </motion.div>
            </ScrollReveal>

            {/* Tech Stack Icons */}
            <ScrollReveal delay={0.3}>
              <div className="flex justify-center items-center space-x-8 mb-12">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      color: tech.color,
                    }}
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                    title={tech.name}
                  >
                    {tech.icon}
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <MagneticButton className="group relative overflow-hidden">
                  <Link href="/projects" className="flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 relative z-10">
                    <FiCpu className="mr-2" />
                    View My Work
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  {/* Button glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-lg opacity-30"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </MagneticButton>
                
                <MagneticButton className="group relative overflow-hidden">
                  <Link href="/cv" className="flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 relative z-10">
                    <FiFileText className="mr-2" />
                    Download CV
                    <FiArrowRight className="ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                  {/* Border glow effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-cyan-500 rounded-lg opacity-50"
                    animate={{
                      scale: [1, 1.02, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <ScrollReveal>
          <section className="py-20">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(255,255,255,0.1)',
                    '0 0 30px rgba(0,255,255,0.2)',
                    '0 0 20px rgba(255,255,255,0.1)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Core <span className="text-cyan-400">Expertise</span>
              </motion.h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Specialized in building next-generation applications with cutting-edge AI and modern technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill.name} delay={index * 0.1}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: 'easeOut'
                    }}
                    whileHover={{ 
                      y: -6,
                      transition: { duration: 0.3, ease: 'easeOut' }
                    }}
                    className="p-8 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/60 transition-all duration-500 h-full relative overflow-hidden group cursor-pointer"
                  >
                    {/* Card glow effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-xl`}
                    />
                    
                    {/* Animated border effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(45deg, transparent, rgba(0,255,255,0.1), transparent)',
                        backgroundSize: '200% 200%',
                      }}
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="text-cyan-400 text-4xl mb-4 transition-transform duration-300"
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {skill.icon}
                      </motion.div>
                      
                      <motion.h3 
                        className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.name}
                      </motion.h3>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {skill.description}
                      </p>
                      
                      {/* Tech tags */}
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.tech.map((tech) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0.8 }}
                            whileHover={{ 
                              scale: 1.05,
                              opacity: 1,
                              transition: { duration: 0.2 }
                            }}
                            className="px-3 py-1 bg-gray-800/60 text-cyan-400 rounded-md text-xs border border-gray-700/50 group-hover:border-cyan-500/50 group-hover:bg-gray-800/80 transition-all duration-300 cursor-pointer"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Enhanced Featured Projects */}
        <ScrollReveal>
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Featured <span className="text-cyan-400">Projects</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A showcase of innovative AI solutions and cutting-edge implementations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.1}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: 'easeOut'
                    }}
                    whileHover={{ 
                      y: -6,
                      transition: { duration: 0.3, ease: 'easeOut' }
                    }}
                    className={`group p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/60 transition-all duration-500 h-full relative overflow-hidden cursor-pointer ${
                      project.title === 'BetterQuery' ? 'betterquery-special' : ''
                    }`}
                  >
                    {/* Special BetterQuery Animation */}
                    {project.title === 'BetterQuery' && (
                      <>
                        {/* Parlak Background Glow */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-pink-500/15 to-cyan-500/15 rounded-xl"
                          animate={{
                            opacity: [0.15, 0.25, 0.15],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                        
                        {/* Animated Border Glow */}
                        <motion.div
                          className="absolute inset-0 rounded-xl border-2"
                          animate={{
                            borderColor: [
                              'rgba(168, 85, 247, 0.6)',
                              'rgba(236, 72, 153, 0.8)',
                              'rgba(6, 182, 212, 0.7)',
                              'rgba(168, 85, 247, 0.6)'
                            ],
                            boxShadow: [
                              '0 0 20px rgba(168, 85, 247, 0.4), inset 0 0 20px rgba(168, 85, 247, 0.1)',
                              '0 0 30px rgba(236, 72, 153, 0.5), inset 0 0 30px rgba(236, 72, 153, 0.1)',
                              '0 0 25px rgba(6, 182, 212, 0.4), inset 0 0 25px rgba(6, 182, 212, 0.1)',
                              '0 0 20px rgba(168, 85, 247, 0.4), inset 0 0 20px rgba(168, 85, 247, 0.1)'
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                        
                        {/* Corner Sparkles */}
                        <motion.div
                          className="absolute top-3 right-3 w-2 h-2 bg-pink-400 rounded-full"
                          animate={{
                            scale: [0, 1.2, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.5,
                          }}
                        />
                        <motion.div
                          className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-cyan-400 rounded-full"
                          animate={{
                            scale: [0, 1.2, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1.2,
                          }}
                        />
                        <motion.div
                          className="absolute top-3 left-3 w-1 h-1 bg-purple-400 rounded-full"
                          animate={{
                            scale: [0, 1.2, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1.8,
                          }}
                        />
                      </>
                    )}
                    
                    {/* Standard Background glow effect for other projects */}
                    {project.title !== 'BetterQuery' && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500 rounded-xl"
                      />
                    )}
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <motion.div 
                          className="text-cyan-400 text-2xl group-hover:text-cyan-300 transition-colors duration-300"
                          whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <ProjectIcon iconName={project.icon} />
                        </motion.div>
                        <div className="flex space-x-3">
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FiGithub className="text-gray-400 text-xl group-hover:text-cyan-400 transition-colors duration-300 cursor-pointer" />
                            </motion.a>
                          )}
                          {project.demo && (
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FiExternalLink className="text-gray-400 text-xl group-hover:text-cyan-400 transition-colors duration-300 cursor-pointer" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      
                      <motion.h3 
                        className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link href="/projects" className="block">
                          {project.title}
                        </Link>
                      </motion.h3>
                      
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {project.description}
                      </p>
                      
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800/60 text-cyan-400 rounded-md text-xs border border-gray-700/50 group-hover:border-cyan-500/50 group-hover:bg-gray-800/80 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800/60 text-gray-400 rounded-md text-xs border border-gray-700/50">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="text-center mt-12">
                <MagneticButton className="inline-block">
                  <Link 
                    href="/projects" 
                    className="inline-flex items-center px-6 py-3 text-cyan-400 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      View All Projects
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </section>
        </ScrollReveal>

        {/* Enhanced CTA Section */}
        <ScrollReveal>
          <section className="py-20 text-center relative">
            {/* Section background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/10 to-cyan-500/5 rounded-3xl blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            <div className="max-w-3xl mx-auto relative z-10">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(255,255,255,0.1)',
                    '0 0 30px rgba(0,255,255,0.2)',
                    '0 0 20px rgba(255,255,255,0.1)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Let&apos;s Explore the <span className="text-cyan-400">Future</span> of Intelligence
              </motion.h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Interested in AI research, consciousness studies, or the philosophical implications of artificial intelligence? 
                Let&apos;s collaborate and push the boundaries of what&apos;s possible.
              </p>
              <Link href="/contact">
                <MagneticButton className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 relative overflow-hidden group">
                  <div className="flex items-center relative z-10">
                    <FaBrain className="mr-2" />
                    Get In Touch
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                  {/* CTA glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-lg opacity-30"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </MagneticButton>
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </motion.div>
    </div>
  );
}