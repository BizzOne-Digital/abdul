'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

function AnimatedCounter({ value, suffix = '', label }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient-warm">
        {count}{suffix}
      </div>
      <div className="text-sm text-titan-steel mt-1 font-medium">{label}</div>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <div className="grid grid-cols-3 gap-6 md:gap-12">
      <AnimatedCounter value={24} suffix="/7" label="Dispatch Available" />
      <AnimatedCounter value={48} label="States Covered" />
      <AnimatedCounter value={3} label="Service Types" />
    </div>
  );
}

export { AnimatedCounter };
