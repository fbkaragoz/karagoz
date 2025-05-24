"use client";

// src/components/FuturisticHeader.tsx
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiEdit3, FiLayers, FiFileText, FiCpu } from 'react-icons/fi'; // Example icons
import LanguageToggle from './LanguageToggle';

const navItems = [
  { name: 'Home', href: '/', icon: <FiHome /> },
  { name: 'Blog', href: '/blog', icon: <FiEdit3 /> },
  { name: 'Projects', href: '/projects', icon: <FiLayers /> },
  { name: 'CV', href: '/cv', icon: <FiFileText /> },
];

const FuturisticHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.3 }
    })
  };

  return (
    <>
      {/* Simplified Neural Network Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-10">
        <div className="absolute inset-0">
          {/* Reduced animated neural connections */}
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-10 left-1/4 w-px h-20 bg-gradient-to-b from-cyan-400/30 to-transparent rotate-45"
          />
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute top-8 right-1/3 w-px h-16 bg-gradient-to-b from-blue-400/30 to-transparent -rotate-45"
          />
        </div>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl shadow-lg shadow-cyan-500/5 border-b border-cyan-500/10' 
            : 'bg-transparent'
        }`}
      >
        {/* Simplified glow effect */}
        {scrolled && (
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 30% 50%, rgba(0,255,255,0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 50%, rgba(0,255,255,0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 50%, rgba(0,255,255,0.05) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            {/* Simplified Logo */}
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <Link href="/" className="flex items-center space-x-3 group relative">
                {/* Simplified logo glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="relative"
                >
                  <FiCpu className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 relative z-10" />
                </motion.div>
                
                <div className="relative">
                  <span className="font-mono text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors duration-300 relative z-10">
                    karagoz.io
                  </span>
                </div>

                {/* Simplified pulse indicator */}
                <motion.div
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{
                    opacity: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </Link>
            </motion.div>

            {/* Simplified Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={navItemVariants}
                  custom={index}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      pathname === item.href
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                    }`}
                  >
                    {item.name}
                    
                    {/* Simplified active indicator */}
                    {pathname === item.href && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                        layoutId="activeIndicator"
                        style={{ x: '-50%' }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Enhanced Language Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              className="ml-6 relative"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
                <LanguageToggle />
              </div>
            </motion.div>

            {/* Enhanced Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={toggleMenu}
                className="p-3 rounded-lg text-gray-300 hover:text-cyan-400 focus:outline-none transition-all duration-300 relative overflow-hidden group"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Button glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Glass morphism */}
                <motion.div
                  className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <span className="relative z-10">
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                  </motion.div>
                </span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Simplified Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg"
            >
              <nav className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                          pathname === item.href
                            ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                            : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                        }`}
                      >
                        <span className="mr-3 text-lg">{item.icon}</span>
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Language Toggle in Mobile Menu */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="px-4 pt-4 border-t border-gray-700/50"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Language</span>
                      <LanguageToggle />
                    </div>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default FuturisticHeader;