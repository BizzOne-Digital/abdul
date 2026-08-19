'use client';

import { useState, useEffect } from 'react';
import { assetUrl } from '@/lib/assets';
import { motion, AnimatePresence } from 'framer-motion';

export default function CinematicIntro() {
  const [showIntro, setShowIntro] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const introShown = sessionStorage.getItem('titan-intro-shown');

    if (!introShown) {
      setShowIntro(true);

      const timers = [
        setTimeout(() => setStep(1), 400),
        setTimeout(() => setStep(2), 1200),
        setTimeout(() => setStep(3), 2000),
        setTimeout(() => setStep(4), 2800),
        setTimeout(() => {
          setShowIntro(false);
          sessionStorage.setItem('titan-intro-shown', 'true');
        }, 4200),
      ];

      return () => timers.forEach((timer) => clearTimeout(timer));
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
        exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-[9999] bg-titan-midnight flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-hero-sunset bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-titan-midnight/80" />

        <button
          onClick={skipIntro}
          className="absolute top-8 right-8 text-white/60 hover:text-titan-orange transition-colors text-sm font-medium px-4 py-2 rounded-lg border border-white/20"
          aria-label="Skip intro"
        >
          Skip →
        </button>

        <div className="relative w-full max-w-md px-8 text-center">
          {step >= 1 && (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="h-px w-32 mx-auto mb-10 bg-gradient-to-r from-transparent via-titan-orange to-transparent"
            />
          )}

          {step >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-titan-orange text-xs font-bold tracking-[0.2em] uppercase mb-8"
            >
              Covering the Lower 48
            </motion.p>
          )}

          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="mb-6 flex justify-center"
            >
              <img src={assetUrl('/logo-white.png')} alt="Titan Logistics LLC" width={180} height={190} className="object-contain h-auto w-[180px] mix-blend-screen" />
            </motion.div>
          )}

          {step >= 4 && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-display text-white"
            >
              Secure. Efficient. <span className="text-titan-orange">Trackable.</span>
            </motion.p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
