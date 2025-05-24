"use client";

import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiMapPin, FiSend } from 'react-icons/fi';
import { FaBrain } from 'react-icons/fa';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollReveal from '@/components/ScrollReveal';
import MagneticButton from '@/components/MagneticButton';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'fatihburak@pm.me',
      href: 'mailto:fatihburak@pm.me',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <FiGithub />,
      title: 'GitHub',
      value: '@fbkaragoz',
      href: 'https://github.com/fbkaragoz',
      color: 'from-gray-500 to-gray-700'
    },
    {
      icon: <FiLinkedin />,
      title: 'LinkedIn',
      value: 'Fatih Burak Karagöz',
      href: 'https://linkedin.com/in/karagoz',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: <FiTwitter />,
      title: 'Twitter',
      value: '@0xcdli',
      href: 'https://twitter.com/0xcdli',
      color: 'from-sky-400 to-sky-600'
    }
  ];

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
      {/* Particle Background */}
      <ParticleBackground />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  '0 0 30px rgba(0,255,255,0.3)',
                  '0 0 40px rgba(0,255,255,0.5)',
                  '0 0 30px rgba(0,255,255,0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Get In Touch
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on your next AI project? Let&apos;s build something extraordinary together.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <FaBrain className="mr-3 text-cyan-400" />
                    Let&apos;s Connect
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    I&apos;m always excited to discuss new opportunities, innovative projects, 
                    and the latest developments in AI and technology. Whether you&apos;re looking 
                    for collaboration, consultation, or just want to chat about the future of AI, 
                    I&apos;d love to hear from you.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <motion.a
                      key={method.title}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} mr-4 group-hover:scale-110 transition-transform`}>
                        <span className="text-white text-xl">
                          {method.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {method.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Location */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 mr-4">
                    <FiMapPin className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-gray-400 text-sm">Istanbul, Turkey</p>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={0.2}>
              <div className="relative">
                {/* Form glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                <form className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Project collaboration, consultation, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <MagneticButton className="w-full">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 group"
                    >
                      <FiSend className="mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </button>
                  </MagneticButton>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Call to Action */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to innovate with <span className="text-cyan-400">AI</span>?
              </h2>
              <p className="text-gray-400 mb-8">
                From concept to deployment, let&apos;s create intelligent solutions that make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <a
                    href="mailto:fatih@karagoz.io"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                  >
                    <FiMail className="mr-2" />
                    Email Me
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="/cv"
                    className="inline-flex items-center px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    View My CV
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </motion.div>
    </div>
  );
} 