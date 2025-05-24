"use client";

// src/components/Footer.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FiCpu, FiHeart } from 'react-icons/fi';

export default function FuturisticFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/rekurrenzk', icon: <FaGithub /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/rekurrenzk', icon: <FaLinkedin /> },
    { name: 'Twitter', href: 'https://twitter.com/0xcdli', icon: <FaTwitter /> },
    { name: 'Email', href: 'mailto:fatihburak@pm.me', icon: <FaEnvelope /> },
  ];

  const footerLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Contact', href: '/contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      color: '#00ffff',
      textShadow: '0px 0px 8px rgb(0, 255, 255, 0.7)',
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full bg-gradient-to-t from-black via-gray-900 to-transparent border-t border-cyan-500/20"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center space-x-2 group mb-4">
              <FiCpu className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              <span className="font-mono text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors duration-300"
                    style={{ textShadow: '0 0 5px rgba(0,255,255,0.3)' }}>
                karagoz.io
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              AI Developer & Tech Enthusiast crafting the future with code and innovation.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-gray-200 font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="text-center md:text-right">
            <h3 className="text-gray-200 font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-cyan-500/10"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Fatih Burak Karagöz. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiHeart className="text-cyan-400 w-4 h-4" />
            </motion.div>
            <span>and lots of</span>
            <span className="text-cyan-400 font-mono">{'</>'}</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm" />
    </motion.footer>
  );
}