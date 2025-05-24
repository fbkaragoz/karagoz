"use client";

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FiDownload, FiMail, FiLinkedin, FiGithub, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { FaBrain, FaNetworkWired } from 'react-icons/fa';
import { SiPython, SiReact, SiHuggingface } from 'react-icons/si';
import { useRef, useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollReveal from '@/components/ScrollReveal';
import MagneticButton from '@/components/MagneticButton';
import Link from 'next/link';

// Timeline Data Type
interface TimelineItem {
  type: "experience" | "education";
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  color: string;
}

// TimelineCard Props Interface
interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  activeItem: number;
  setActiveItem: (index: number) => void;
}

// Enhanced TimelineCard Component - Now independent and optimized
const TimelineCard: React.FC<TimelineCardProps> = ({ item, index, activeItem, setActiveItem }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: true, // Animation triggers only once for stability
    margin: "-80px 0px -80px 0px",
    amount: 0.2
  });

  const isLeft = index % 2 === 0;
  const isActive = activeItem === index;

  return (
    <motion.div
      ref={cardRef}
      className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} relative`}
      initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      onMouseEnter={() => setActiveItem(index)}
      onMouseLeave={() => setActiveItem(-1)}
    >
      {/* Clean Timeline Node */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          scale: isActive ? 1.2 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Simple Core Node */}
        <motion.div 
          className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-gray-900 shadow-lg shadow-cyan-500/50 relative"
          animate={isActive ? {
            boxShadow: [
              '0 0 20px rgba(0,255,255,0.5)',
              '0 0 30px rgba(0,255,255,0.7)',
              '0 0 20px rgba(0,255,255,0.5)',
            ]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Clean Connection Line */}
      <motion.div
        className={`absolute top-1/2 w-16 h-0.5 z-10 ${
          isLeft 
            ? 'left-1/2 ml-2' 
            : 'right-1/2 mr-2'
        }`}
        initial={{ scaleX: 0, originX: isLeft ? 0 : 1 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{
          delay: (index * 0.15) + 0.4,
          duration: 0.8,
          ease: "circOut"
        }}
      >
        {/* Base Connection Line */}
        <div className={`w-full h-full bg-gradient-to-r ${
          isLeft 
            ? 'from-cyan-500/60 to-transparent' 
            : 'from-transparent to-cyan-500/60'
        } rounded-full`} />
      </motion.div>

      {/* Optimized Timeline Card */}
      <motion.div
        className={`w-5/12 ${isLeft ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
        whileHover={{ scale: 1.02, y: -6 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative p-5 rounded-xl bg-gradient-to-br from-gray-900/85 to-gray-800/65 border border-gray-700/60 backdrop-blur-md hover:border-cyan-500/70 transition-all duration-300 overflow-hidden group"
          initial={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
          animate={isInView ? { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' } : {}}
          transition={{ 
            delay: (index * 0.15) + 0.2,
            duration: 0.7,
            ease: "easeInOut"
          }}
        >
          {/* Scan Line Effect */}
          {isInView && (
            <motion.div
              className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: [0, 200],
                opacity: [0, 1, 0]
              }}
              transition={{
                delay: (index * 0.15) + 0.3,
                duration: 1.2,
                ease: "easeOut"
              }}
            />
          )}
          
          {/* Enhanced Background Glow */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}
          />
          
          <div className="relative z-10">
            {/* Streamlined Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3 flex-1">
                <motion.div 
                  className="text-cyan-400 text-xl p-1.5 rounded-md bg-cyan-400/10 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors leading-tight truncate">
                    {item.title}
                  </h3>
                  <p className="text-cyan-400/90 text-sm font-medium mt-0.5 truncate">{item.company}</p>
                </div>
              </div>
              
              {/* Minimalist Type Indicator */}
              <div className="flex items-center space-x-1.5 flex-shrink-0">
                <div className={`w-1.5 h-1.5 rounded-full ${
                  item.type === 'experience' ? 'bg-cyan-400' : 'bg-purple-400'
                }`} />
                <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                  {item.type}
                </span>
              </div>
            </div>
            
            {/* Compact Meta Information */}
            <div className="flex items-center text-gray-500 text-xs mb-3">
              <div className="flex items-center">
                <FiCalendar className="mr-1.5 text-cyan-400/70" />
                <span>{item.period}</span>
              </div>
            </div>
            
            {/* Refined Description */}
            <p className="text-gray-400 mb-3 text-xs leading-relaxed">
              {item.description}
            </p>
            
            {/* Smart Technology Tags */}
            <div className="flex flex-wrap gap-1.5">
              {item.technologies.slice(0, 4).map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-2 py-0.5 bg-gray-800/70 text-gray-400 rounded text-[10px] border border-gray-700/50 group-hover:border-cyan-500/50 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: (index * 0.15) + (i * 0.05) + 0.8 }}
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  {tech}
                </motion.span>
              ))}
              {item.technologies.length > 4 && (
                <motion.span
                  className="px-2 py-0.5 bg-gray-800/50 text-gray-500 rounded text-[10px] border border-gray-700/30"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: (index * 0.15) + 1 }}
                >
                  +{item.technologies.length - 4} more
                </motion.span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function CVPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(-1); // Start with no active item
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const personalInfo = {
    name: "Fatih Burak Karagöz",
    title: "AI Researcher & Philosopher",
    subtitle: "Bridging Intelligence & Consciousness",
    email: "fatihburak@pm.me",
    phone: "+90 537 380 35 28",
    location: "Istanbul",
    website: "https://karagoz.io",
    linkedin: "https://linkedin.com/in/karagoz",
    github: "https://github.com/fbkaragoz",
    scholar: "https://scholar.google.com/citations?hl=en&user=EN-7bekAAAAJ",
    huggingface: "https://huggingface.co/fatihburakkaragoz"
  };

  const timelineData: TimelineItem[] = [
    {
      type: "experience",
      title: "Founder & AI Researcher",
      company: "CDLI.ai",
      location: "",
      period: "2024 - Present",
      description: "Applied AGI initiative building cognitive infrastructure and intelligent systems.",
      technologies: ["Neural Networks", "AGI Research", "Robotics", "Deep Learning", "Computer Vision"],
      icon: <FaBrain />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      type: "experience",
      title: "Founder",
      company: "BetterQuery",
      location: "", 
      period: "2025 - Present",
      description: "LLM-powered query optimization and prompt rewriting infrastructure.",
      technologies: ["LangChain", "Next.js", "LLM", "TypeScript", "OpenAI"],
      icon: <SiReact />,
      color: "from-purple-500 to-pink-500"
    },
    {
      type: "experience",
      title: "Co-founder",
      company: "Botanera Genomics",
      location: "",
      period: "2024 - Present", 
      description: "Plant breeding optimization platform using NGS pipelines and ML systems.",
      technologies: ["Python", "ML", "Genomics", "Bioinformatics", "AWS"],
      icon: <FaNetworkWired />,
      color: "from-green-500 to-emerald-500"
    },
    {
      type: "experience",
      title: "NLP Research Contributor",
      company: "Ottoman NLP Project",
      location: "",
      period: "2023 - 2024",
      description: "Built corpora and tokenization tools for historical Turkish NLP.",
      technologies: ["BERT", "NLP", "PyTorch", "Transformers", "Turkish"],
      icon: <SiPython />,
      color: "from-orange-500 to-red-500"
    },
    {
      type: "education",
      title: "Bachelor of Arts in Philosophy",
      company: "Boğaziçi University",
      location: "",
      period: "2021 - 2025",
      description: "Focus on Logic, Philosophy of Mind, and Computer Science.",
      technologies: ["Logic", "AI Ethics", "Statistics", "Philosophy", "Research"],
      icon: <FaBrain />,
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <ParticleBackground />
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.06),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <ScrollReveal>
          <section className="min-h-screen flex items-center justify-center relative">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold mb-6"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(0,255,255,0.3)',
                      '0 0 40px rgba(0,255,255,0.5)',
                      '0 0 20px rgba(0,255,255,0.3)',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <span className="text-cyan-400">Neural Curriculum</span>
                </motion.h1>
                
                <motion.div
                  className="text-xl md:text-2xl text-gray-300 font-light mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {personalInfo.name}
                </motion.div>
                
                <motion.div
                  className="text-lg text-cyan-400 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  {personalInfo.subtitle}
                </motion.div>
                
                {/* Internal Links */}
                <motion.div
                  className="flex flex-wrap justify-center gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <Link 
                    href="/projects" 
                    className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 text-sm"
                  >
                    AI Projects →
                  </Link>
                  <Link 
                    href="/blog" 
                    className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 text-sm"
                  >
                    Technology Blog →
                  </Link>
                  <Link 
                    href="/contact" 
                    className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 text-sm"
                  >
                    Contact →
                  </Link>
                </motion.div>
              </motion.div>

              {/* Contact Info Grid */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                {[
                  { icon: <FiMail />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: <FiLinkedin />, text: "LinkedIn", href: personalInfo.linkedin },
                  { icon: <FiGithub />, text: "GitHub", href: personalInfo.github },
                  { icon: <SiHuggingface />, text: "HuggingFace", href: personalInfo.huggingface },
                  { icon: <FiExternalLink />, text: "Scholar", href: personalInfo.scholar }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, scale: 1.02 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 rounded-lg bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/60 transition-all duration-300 relative overflow-hidden block"
                      >
                        {/* Rainbow glow effect on hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: 'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #9370db, #ff1493, #00ff7f)',
                            backgroundSize: '400% 400%',
                            filter: 'blur(8px)',
                            zIndex: -1,
                          }}
                          animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                        
                        <motion.div 
                          className="text-cyan-400 text-xl mb-2 group-hover:scale-110 transition-transform relative z-10"
                          whileHover={{
                            filter: [
                              'hue-rotate(0deg)',
                              'hue-rotate(90deg)',
                              'hue-rotate(180deg)',
                              'hue-rotate(270deg)',
                              'hue-rotate(360deg)',
                            ],
                          }}
                          transition={{
                            duration: 1,
                            ease: 'easeInOut',
                          }}
                        >
                          {item.icon}
                        </motion.div>
                        <div className="text-gray-300 text-sm group-hover:text-cyan-400 transition-colors relative z-10">
                          {item.text}
                        </div>
                      </a>
                    ) : (
                      <div className="group p-3 rounded-lg bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm transition-all duration-300 relative overflow-hidden">
                        <motion.div 
                          className="text-cyan-400 text-xl mb-2 transition-transform relative z-10"
                        >
                          {item.icon}
                        </motion.div>
                        <div className="text-gray-300 text-sm relative z-10">
                          {item.text}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                <MagneticButton>
                  <div
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/cv.pdf';
                      link.download = 'Fatih_Burak_Karagoz_CV.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 cursor-pointer"
                  >
                    <FiDownload className="mr-3" />
                    Download Complete CV
                    <motion.div
                      className="ml-3"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </div>
                </MagneticButton>
              </motion.div>
            </div>
          </section>
        </ScrollReveal>

        {/* Enhanced Neural Timeline */}
        <ScrollReveal>
          <section ref={timelineRef} className="py-16 relative">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-16 text-center"
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
              Professional <span className="text-cyan-400">Experience and Education</span>
            </motion.h2>

            <div className="relative max-w-5xl mx-auto">
              {/* Clean Neural Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
                {/* Base Neural Pathway */}
                <div className="w-full h-full bg-gray-700/20 rounded-full relative overflow-hidden">
                  {/* Synaptic Grid Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 15px,
                        rgba(0,255,255,0.08) 15px,
                        rgba(0,255,255,0.08) 16px
                      )`
                    }}
                    animate={{
                      y: ['-30px', '30px'],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </div>
                
                {/* Main Neural Progress Line */}
                <motion.div
                  className="absolute top-0 left-0 w-full rounded-full origin-top overflow-hidden"
                  style={{
                    height: useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 relative">
                    {/* Neural Energy Flow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-white/30 via-cyan-300/20 to-transparent"
                      animate={{
                        y: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    
                    {/* Synaptic Burst Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-yellow-400/30 via-orange-400/20 to-transparent"
                      animate={{
                        opacity: [0, 1, 0],
                        y: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Timeline Items with Enhanced Spacing */}
              <div className="space-y-12">
                {timelineData.map((item, index) => (
                  <TimelineCard
                    key={`${item.company}-${item.title}-${index}`}
                    item={item}
                    index={index}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                  />
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
} 