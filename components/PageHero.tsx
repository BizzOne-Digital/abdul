'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { assetUrl } from '@/lib/assets';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  bgClass?: string;
  heroImage?: string;
  children?: ReactNode;
  compact?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  bgClass = 'hero-bg-logistics',
  heroImage,
  children,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-x-clip ${compact ? 'pb-16 pt-[120px]' : 'pb-20 pt-[120px] md:pb-28 md:pt-[156px]'} bg-gradient-titan overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-mesh" />
      {heroImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${assetUrl(heroImage)})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-titan-midnight/95 via-titan-navy/85 to-titan-navy/70" />
        </>
      ) : (
        <div className={`absolute inset-0 ${bgClass} bg-cover bg-center opacity-[0.12]`} />
      )}

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-[10%] w-48 md:w-72 h-48 md:h-72 bg-titan-orange/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-titan-orange border border-titan-orange/30 bg-titan-orange/10 mx-auto"
            >
              {badge}
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-titan-orange/30 to-transparent" />
    </section>
  );
}
