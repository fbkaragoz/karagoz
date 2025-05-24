"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiHome, FiArrowLeft, FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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

  const glitchVariants = {
    animate: {
      x: [0, -2, 2, 0],
      textShadow: [
        '0 0 0 transparent',
        '2px 0 0 #ff0000, -2px 0 0 #00ffff',
        '0 0 0 transparent',
      ],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 filter grayscale"
        >
          <source src="/video_assets/404_loop.mp4" type="video/mp4" />
          {/* Fallback gradient if video doesn't load */}
        </video>
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/50 to-black/70" />
        {/* Matrix-style overlay effect */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,255,255,0.02)_50%,transparent_100%)] animate-pulse" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,0,100,0.1),transparent_50%)]" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        {/* 404 Number */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.h1
            variants={glitchVariants}
            animate="animate"
            className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text mb-4"
            style={{
              fontFamily: 'monospace',
              textShadow: '0 0 30px rgba(0,255,255,0.5)',
            }}
          >
            404
          </motion.h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            animate={{
              textShadow: [
                '0 0 20px rgba(255,255,255,0.1)',
                '0 0 30px rgba(0,255,255,0.3)',
                '0 0 20px rgba(255,255,255,0.1)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Oops! I think you came through the wrong door
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            The page you&apos;re looking for seems to have vanished into the digital void. 
            But don&apos;t worry, even the best AI systems encounter unexpected paths.
          </motion.p>
        </motion.div>

        {/* Glitch Effect Text */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <motion.div
            className="text-lg text-cyan-400 font-mono"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ERROR_CODE: NEURAL_PATHWAY_NOT_FOUND
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <FiHome className="mr-2 relative z-10" />
              <span className="relative z-10">Return Home</span>
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
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 relative overflow-hidden"
            >
              <FiSearch className="mr-2" />
              Explore Blog
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
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 text-gray-400 border border-gray-600 rounded-lg hover:text-white hover:border-gray-400 transition-all duration-300"
            >
              <FiArrowLeft className="mr-2" />
              Go Back
            </button>
          </motion.div>
        </motion.div>

        {/* Additional Navigation Links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <Link 
            href="/projects" 
            className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 text-sm"
          >
            AI Projects
          </Link>
          <Link 
            href="/cv" 
            className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 text-sm"
          >
            My CV
          </Link>
          <Link 
            href="/contact" 
            className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 text-sm"
          >
            Contact
          </Link>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            If you believe this is an error, please contact the system administrator.
          </p>
          <motion.div
            className="mt-4 text-xs text-gray-600 font-mono"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            SYSTEM_STATUS: OPERATIONAL | AI_CORE: ACTIVE | NEURAL_NET: STABLE
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scanning Lines Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.03) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.03) 50%, transparent 100%)',
          ],
          backgroundPosition: ['-100% 0%', '200% 0%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 100%',
        }}
      />
    </div>
  );
} 