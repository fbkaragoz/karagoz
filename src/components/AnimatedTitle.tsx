"use client";

import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedTitle() {
  const [mounted, setMounted] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const controls = useAnimation();
  const backgroundControls = useAnimation();

  const titles = [
    { 
      text: 'Neural Architect', 
      color: 'from-cyan-400 via-cyan-300 to-blue-500', 
      glow: 'rgba(6, 182, 212, 0.4)',
      accent: 'rgba(34, 211, 238, 0.5)',
      tagColor: 'text-cyan-300'
    },
    { 
      text: 'AI Philosopher', 
      color: 'from-blue-400 via-indigo-400 to-purple-500', 
      glow: 'rgba(99, 102, 241, 0.4)',
      accent: 'rgba(129, 140, 248, 0.5)',
      tagColor: 'text-indigo-300'
    },
    { 
      text: 'Digital Innovator', 
      color: 'from-purple-400 via-violet-400 to-pink-500', 
      glow: 'rgba(168, 85, 247, 0.4)',
      accent: 'rgba(196, 112, 255, 0.5)',
      tagColor: 'text-violet-300'
    },
    { 
      text: 'Logic Engineer', 
      color: 'from-pink-400 via-rose-400 to-red-500', 
      glow: 'rgba(244, 63, 94, 0.4)',
      accent: 'rgba(251, 113, 133, 0.5)',
      tagColor: 'text-rose-300'
    },
    { 
      text: 'Thought Synthesizer', 
      color: 'from-red-400 via-orange-400 to-yellow-500', 
      glow: 'rgba(251, 146, 60, 0.4)',
      accent: 'rgba(245, 158, 11, 0.5)',
      tagColor: 'text-orange-300'
    },
    { 
      text: 'Mind-Machine Bridge', 
      color: 'from-yellow-400 via-green-400 to-cyan-500', 
      glow: 'rgba(34, 197, 94, 0.4)',
      accent: 'rgba(16, 185, 129, 0.5)',
      tagColor: 'text-green-300'
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const createQuantumSequence = () => {
    return titles.flatMap((title) => {
      const text = title.text;
      const sequence = [];
      
      // Quantum thinking pause
      sequence.push('', 400 + Math.random() * 300);
      
      // Build with quantum uncertainty
      for (let i = 1; i <= text.length; i++) {
        const char = text[i - 1];
        const partial = text.substring(0, i);
        
        // Base typing speed with consciousness simulation
        sequence.push(partial, 45 + Math.random() * 35);
        
        // Philosophical pause after meaningful words
        if ([' ', '-'].includes(char)) {
          sequence.push(partial, 180 + Math.random() * 120);
        }
        
        // Quantum correction simulation (occasional backspace-retype)
        if (Math.random() < 0.12 && i > 4) {
          const backSteps = Math.floor(Math.random() * 3) + 1;
          const backTo = Math.max(0, i - backSteps);
          sequence.push(text.substring(0, backTo), 90);
          sequence.push(partial, 70);
        }
        
        // Neural firing delay on complex characters
        if (['N', 'A', 'Q', 'P', 'M'].includes(char.toUpperCase())) {
          sequence.push(partial, 140 + Math.random() * 80);
        }
      }
      
      // Consciousness realization pause
      sequence.push(text, 2800 + Math.random() * 1200);
      
      // Sometimes add emphasis effect
      if (Math.random() < 0.3) {
        sequence.push(text.substring(0, text.length - 1), 150);
        sequence.push(text, 200);
        sequence.push(text + '_', 100);
        sequence.push(text, 150);
      }
      
      return sequence;
    });
  };

  // Dynamic background matrix effect
  useEffect(() => {
    if (!mounted) return;
    
    const runMatrixEffect = async () => {
      while (true) {
        await backgroundControls.start({
          background: [
            'radial-gradient(ellipse 1200px 600px at center, rgba(0, 255, 255, 0.03) 0%, transparent 50%)',
            'radial-gradient(ellipse 1400px 700px at center, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
            'radial-gradient(ellipse 1300px 650px at center, rgba(16, 185, 129, 0.04) 0%, transparent 50%)',
            'radial-gradient(ellipse 1200px 600px at center, rgba(0, 255, 255, 0.03) 0%, transparent 50%)'
          ],
          transition: { duration: 8, ease: 'easeInOut' }
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    };
    runMatrixEffect();
  }, [backgroundControls, mounted]);

  // Advanced consciousness pulse
  useEffect(() => {
    if (!mounted) return;
    
    const consciousnessPulse = async () => {
      while (true) {
        await controls.start({
          scale: [1, 1.15, 1.05, 1],
          rotateX: [0, 5, -5, 0],
          rotateY: [0, -3, 3, 0],
          filter: [
            'brightness(1) contrast(1)',
            'brightness(1.1) contrast(1.05)',
            'brightness(1.05) contrast(1.02)',
            'brightness(1) contrast(1)'
          ],
          transition: { duration: 6, ease: [0.4, 0.0, 0.2, 1] }
        });
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
    };
    consciousnessPulse();
  }, [controls, mounted]);

  // Title index tracking for dynamic colors
  useEffect(() => {
    if (!mounted) return;
    
    const titleChangeInterval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000); // Change every 4 seconds to match typing sequence
    
    return () => clearInterval(titleChangeInterval);
  }, [mounted, titles.length]);

  if (!mounted) {
    return (
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-white via-cyan-300 to-teal-300 bg-clip-text text-transparent">
          Neural Architect
        </span>
      </div>
    );
  }

  const currentTitle = titles[currentTitleIndex] || titles[0];

  return (
    <motion.div
      className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 text-center select-none perspective-1000"
      initial={{ 
        opacity: 0, 
        y: -80, 
        scale: 0.3, 
        rotateX: -60,
        filter: 'blur(20px) brightness(0.5)'
      }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        rotateX: 0,
        filter: 'blur(0px) brightness(1)'
      }}
      transition={{ 
        duration: 1.8, 
        ease: [0.19, 1, 0.22, 1],
        type: "spring",
        stiffness: 50,
        damping: 15
      }}
    >
      {/* Quantum field background */}
      <motion.div
        className="absolute inset-0 -z-40 transform-gpu"
        animate={backgroundControls}
        style={{
          background: 'radial-gradient(ellipse 1200px 600px at center, rgba(0, 255, 255, 0.03) 0%, transparent 50%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Neural network grid */}
      <div className="absolute inset-0 -z-35">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              mask: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
            }}
          />
        </div>
      </div>

      {/* Main consciousness container */}
      <div className="relative z-10 flex items-center justify-center transform-gpu">
        {/* Quantum opening bracket */}
        <motion.span
          className={`${currentTitle.tagColor} font-mono mr-3 lg:mr-4 relative`}
          initial={{ opacity: 0, x: -50, rotateY: -180, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.68, -0.55, 0.265, 1.55] }}
          whileHover={{ 
            scale: 1.1, 
            rotateZ: 5,
            transition: { duration: 0.2 }
          }}
          style={{
            textShadow: `
              0 0 20px ${currentTitle.accent}, 
              0 0 40px ${currentTitle.glow},
              0 0 60px ${currentTitle.accent}
            `,
            filter: `drop-shadow(0 0 10px ${currentTitle.accent})`,
          }}
        >
          <motion.span
            animate={{
              textShadow: [
                `0 0 20px ${currentTitle.accent}, 0 0 40px ${currentTitle.glow}`,
                `0 0 30px ${currentTitle.accent}, 0 0 60px ${currentTitle.glow}, 0 0 80px ${currentTitle.accent}`,
                `0 0 20px ${currentTitle.accent}, 0 0 40px ${currentTitle.glow}`
              ],
              rotateZ: [0, 2, -2, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {'<'}
          </motion.span>
          
          {/* Tag particle effect */}
          <motion.div
            className="absolute -top-1 -right-1 w-1 h-1 rounded-full"
            style={{ backgroundColor: currentTitle.accent.replace('0.5', '0.8') }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.span>

        {/* Central consciousness display */}
        <motion.div
          className="relative mx-4 lg:mx-6 transform-gpu"
          animate={controls}
          whileHover={{
            scale: 1.03,
            rotateX: 2,
            rotateY: -1,
            transition: { duration: 0.3, ease: 'easeOut' }
          }}
        >
          {/* Multi-layered glow system */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`glow-${i}`}
              className="absolute inset-0 -z-10"
              animate={{
                opacity: [0.1 + i * 0.05, 0.3 + i * 0.1, 0.1 + i * 0.05],
                scale: [0.9 + i * 0.02, 1.1 + i * 0.02, 0.9 + i * 0.02],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
              style={{
                background: `radial-gradient(ellipse at center, ${currentTitle.glow} 0%, transparent ${40 + i * 10}%)`,
                filter: `blur(${15 + i * 5}px)`,
              }}
            />
          ))}

          {/* Neural pulse ring */}
          <motion.div
            className="absolute inset-0 -z-5 border border-cyan-400/20 rounded-2xl"
            animate={{
              scale: [0.98, 1.02, 0.98],
              opacity: [0.2, 0.5, 0.2],
              borderRadius: ['16px', '24px', '16px'],
              borderColor: [
                'rgba(34, 211, 238, 0.2)',
                'rgba(168, 85, 247, 0.3)',
                'rgba(34, 211, 238, 0.2)'
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Main TypeAnimation with quantum effects */}
          <TypeAnimation
            sequence={createQuantumSequence()}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={{ type: 'keyStrokeDelayInMs', value: 75 }}
            deletionSpeed={{ type: 'keyStrokeDelayInMs', value: 30 }}
            className={`
              bg-gradient-to-r ${currentTitle.color} 
              bg-clip-text text-transparent font-black tracking-tight
              relative z-20 transform-gpu
            `}
            style={{
              textShadow: `
                0 0 40px ${currentTitle.glow}, 
                0 0 80px ${currentTitle.accent},
                0 0 120px ${currentTitle.glow}
              `,
              filter: `
                drop-shadow(0 0 25px ${currentTitle.accent})
                drop-shadow(0 0 50px ${currentTitle.glow})
              `,
              letterSpacing: '-0.02em',
            }}
            preRenderFirstString={true}
          />

          {/* Consciousness emanation field */}
          <motion.div
            className="absolute inset-0 -z-15"
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.95, 1.05, 0.95],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, 
                ${currentTitle.glow} 0deg, 
                transparent 60deg, 
                ${currentTitle.accent} 120deg, 
                transparent 180deg, 
                ${currentTitle.glow} 240deg, 
                transparent 300deg, 
                ${currentTitle.accent} 360deg
              )`,
              filter: 'blur(40px)',
            }}
          />
        </motion.div>

        {/* Quantum closing bracket */}
        <motion.span
          className={`${currentTitle.tagColor} font-mono ml-3 lg:ml-4 relative`}
          initial={{ opacity: 0, x: 50, rotateY: 180, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.68, -0.55, 0.265, 1.55] }}
          whileHover={{ 
            scale: 1.1, 
            rotateZ: -5,
            transition: { duration: 0.2 }
          }}
          style={{
            textShadow: `
              0 0 20px ${currentTitle.accent}, 
              0 0 40px ${currentTitle.glow},
              0 0 60px ${currentTitle.accent}
            `,
            filter: `drop-shadow(0 0 10px ${currentTitle.accent})`,
          }}
        >
          <motion.span
            animate={{
              textShadow: [
                `0 0 20px ${currentTitle.accent}, 0 0 40px ${currentTitle.glow}`,
                `0 0 30px ${currentTitle.accent}, 0 0 60px ${currentTitle.glow}, 0 0 80px ${currentTitle.accent}`,
                `0 0 20px ${currentTitle.accent}, 0 0 40px ${currentTitle.glow}`
              ],
              rotateZ: [0, -2, 2, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5
            }}
          >
            {' />'}
          </motion.span>
          
          {/* Tag particle effect */}
          <motion.div
            className="absolute -top-1 -left-1 w-1 h-1 rounded-full"
            style={{ backgroundColor: currentTitle.accent.replace('0.5', '0.8') }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </motion.span>
      </div>

      {/* Quantum particle field */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`quantum-particle-${i}`}
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            left: `${10 + (i * 10)}%`,
            top: `${20 + Math.sin(i * 0.5) * 30}%`,
            background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#a855f7' : '#10b981',
            boxShadow: `0 0 4px currentColor`,
            opacity: 0.3,
          }}
          animate={{
            y: [-8 + Math.sin(i) * 3, 8 + Math.sin(i) * 3, -8 + Math.sin(i) * 3],
            x: [-3 + Math.cos(i) * 2, 3 + Math.cos(i) * 2, -3 + Math.cos(i) * 2],
            opacity: [0, 0.3, 0.1, 0.3, 0],
            scale: [0, 0.8, 0.5, 0.8, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Advanced holographic scanning system */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Primary consciousness scanner */}
        <motion.div
          className="absolute w-full h-1 left-0"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(0,255,255,0.03) 10%, 
              rgba(255,255,255,0.15) 50%, 
              rgba(0,255,255,0.03) 90%, 
              transparent 100%
            )`,
            filter: 'blur(2px)',
            top: '45%',
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.3, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94],
            repeatDelay: 8,
          }}
        />

        {/* Neural network data streams */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute h-px"
            style={{
              background: `linear-gradient(90deg, 
                transparent 0%, 
                rgba(${i % 2 === 0 ? '0,255,255' : '168,85,247'},0.1) 50%, 
                transparent 100%
              )`,
              filter: 'blur(1px)',
              width: '40%',
              top: `${30 + i * 15}%`,
              left: `${30 + Math.sin(i) * 10}%`,
            }}
            animate={{
              x: i % 2 === 0 ? ['-100%', '100%'] : ['100%', '-100%'],
              opacity: [0, 0.2, 0],
              scaleX: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 2 + Math.random() * 4,
              repeatDelay: Math.random() * 8 + 6,
            }}
          />
        ))}

        {/* Vertical consciousness pillars */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`pillar-${i}`}
            className="absolute w-px h-full"
            style={{
              background: `linear-gradient(180deg, 
                transparent 0%, 
                rgba(${i === 0 ? '0,255,255' : '168,85,247'},0.08) 50%, 
                transparent 100%
              )`,
              filter: 'blur(2px)',
              left: `${35 + i * 30}%`,
            }}
            animate={{
              y: ['-50%', '50%'],
              opacity: [0, 0.3, 0],
              scaleY: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 3 + Math.random() * 5,
              repeatDelay: Math.random() * 8 + 4,
            }}
          />
        ))}
      </div>
      {/* End of Advanced holographic scanning system */}

      {/* Consciousness interference patterns */}
      <motion.div
        className="absolute inset-0 -z-20 pointer-events-none"
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px', '0px 0px'],
          opacity: [0.01, 0.03, 0.01],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          backgroundImage: `
            repeating-conic-gradient(
              from 0deg at 50% 50%,
              transparent 0deg,
              rgba(0,255,255,0.008) 45deg,
              transparent 90deg,
              rgba(168,85,247,0.008) 135deg,
              transparent 180deg
            )
          `,
          filter: 'blur(3px)',
        }}
      />
    </motion.div>
  );
}