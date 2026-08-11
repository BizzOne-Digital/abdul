'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CinematicIntro() {
  const [showIntro, setShowIntro] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Check if intro has been shown in this session
    const introShown = sessionStorage.getItem('titan-intro-shown');
    
    if (!introShown) {
      setShowIntro(true);
      
      // Animation timeline
      const timers = [
        setTimeout(() => setStep(1), 500),   // Route line
        setTimeout(() => setStep(2), 1500),  // Coverage text
        setTimeout(() => setStep(3), 2500),  // Logo
        setTimeout(() => setStep(4), 3500),  // Tagline
        setTimeout(() => {
          setShowIntro(false);
          sessionStorage.setItem('titan-intro-shown', 'true');
        }, 5000),
      ];

      return () => timers.forEach(timer => clearTimeout(timer));
    }
  }, []);

  const skipIntro = () => {
    setShowIntro(false);
    sessionStorage.setItem('titan-intro-shown', 'true');
  };

  if (!showIntro) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-titan-midnight flex items-center justify-center"
      >
        {/* Skip Button */}
        <button
          onClick={skipIntro}
          className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors text-sm"
          aria-label="Skip intro"
        >
          Skip Intro →
        </button>

        {/* Animation Content */}
        <div className="relative w-full max-w-2xl px-8 text-center">
          {/* Step 1: Route Line */}
          {step >= 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-1 bg-gradient-to-r from-transparent via-titan-blue to-transparent mb-12 origin-left"
            />
          )}

          {/* Step 2: Coverage Text */}
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="text-titan-off-white text-sm tracking-widest uppercase">
                Covering the Lower 48
              </div>
            </motion.div>
          )}

          {/* Step 3: Logo/Brand */}
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="text-7xl md:text-8xl font-display font-bold text-white mb-4">
                TITAN
              </div>
              <div className="text-xl text-titan-steel tracking-wide">
                LOGISTICS LLC
              </div>
            </motion.div>
          )}

          {/* Step 4: Tagline */}
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-2xl text-white font-display">
                Secure. Efficient. Trackable.
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
