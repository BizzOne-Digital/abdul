'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';
import { assetUrl } from '@/lib/assets';

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_MIN = 1024;
/** Fixed header: 36px top bar + 96px nav */
const HEADER_OFFSET = 132;
const PANEL_HEIGHT = `calc(100svh - ${HEADER_OFFSET}px)`;

export type ServiceSlide = {
  num: string;
  title: string;
  category: string;
  desc: string;
  features: string[];
  image: string;
  href: string;
  imageLeft: boolean;
};

type Props = {
  services: ServiceSlide[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

function ServiceCard({
  service,
  className = '',
}: {
  service: ServiceSlide;
  className?: string;
}) {
  return (
    <article className={`border border-white/10 overflow-hidden ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="relative min-h-[180px] md:min-h-[220px] bg-cover bg-center"
          style={{ backgroundImage: `url(${assetUrl(service.image)})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-titan-midnight/40 via-transparent to-transparent" />
        </div>
        <div className="bg-titan-navy flex flex-col justify-between p-5 md:p-7">
          <div>
            <span className="text-titan-orange/80 font-display text-xs md:text-sm font-semibold tracking-wider">
              {service.num}
            </span>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mt-2 mb-2 leading-snug">
              {service.title}
            </h3>
            <p className="text-white/55 text-sm leading-relaxed mb-4">{service.desc}</p>
            <ul className="space-y-1.5 mb-4">
              {service.features.map((f) => (
                <li key={f} className="text-white/45 text-xs md:text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-titan-orange shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-2">
            <span className="text-titan-orange text-[10px] font-bold tracking-[0.18em] uppercase block mb-3">
              {service.category}
            </span>
            <Link
              href={service.href}
              className="text-titan-orange font-bold uppercase text-xs tracking-wider inline-flex items-center gap-2 group"
            >
              Explore Service
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  currentIndex,
  total,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  currentIndex: number;
  total: number;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-6">
      <div className="min-w-0">
        <span className="text-titan-orange text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
          {eyebrow}
        </span>
        <h2 className="text-2xl md:text-4xl font-display font-bold text-white mt-2 mb-1 leading-tight">
          {title}
        </h2>
        <p className="text-white/50 max-w-xl text-xs md:text-sm">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-titan-orange font-display font-bold text-xl md:text-2xl">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <span className="text-white/30 text-sm">/</span>
        <span className="text-white/40 font-display text-base md:text-lg">
          {String(total).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

function MobileServicesList({
  services,
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <section className="bg-titan-midnight py-16 md:py-20 overflow-x-clip max-w-full">
      <div className="container mx-auto px-4 max-w-full">
        <SectionHeader
          eyebrow={eyebrow!}
          title={title!}
          subtitle={subtitle!}
          currentIndex={0}
          total={services.length}
        />
        <div className="mt-8 space-y-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/services" variant="primary" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

function DesktopServicesSlider({
  services,
  eyebrow = 'What We Offer',
  title = 'Transportation Solutions',
  subtitle = 'Professional freight services across the lower 48 states with 24/7 dispatch support',
}: Props) {
  const triggerRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const trigger = triggerRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!trigger || !pin || !track) return;

    const getScrollDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

    const tween = gsap.to(track, {
      x: () => -getScrollDistance(),
      ease: 'none',
      scrollTrigger: {
        trigger,
        pin,
        start: `top top+=${HEADER_OFFSET}`,
        end: () => `+=${getScrollDistance()}`,
        pinSpacing: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setProgress(self.progress);
          setCurrentIndex(
            Math.min(services.length - 1, Math.round(self.progress * (services.length - 1)))
          );
        },
      },
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 600);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener('resize', onResize);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [services]);

  return (
    <section ref={triggerRef} className="services-scroll-section relative overflow-x-clip max-w-full">
      <div
        ref={pinRef}
        className="bg-titan-midnight flex flex-col box-border w-full max-w-full overflow-x-clip"
        style={{ height: PANEL_HEIGHT, minHeight: 580 }}
      >
        <div className="container mx-auto px-4 pt-5 md:pt-6 pb-4 shrink-0">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            currentIndex={currentIndex}
            total={services.length}
          />
        </div>

        <div className="flex-1 min-h-[280px] overflow-x-clip max-w-full">
          <div
            ref={trackRef}
            className="flex h-full items-stretch gap-6 pl-4 md:pl-[max(1rem,calc((100%-1280px)/2+1rem))] will-change-transform"
          >
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                className="flex-shrink-0 w-[58vw] max-w-[920px] h-full"
              />
            ))}
            <div className="flex-shrink-0 w-8" aria-hidden />
          </div>
        </div>

        <div className="container mx-auto px-4 pt-4 pb-6 md:pb-8 shrink-0 space-y-5">
          <div className="h-px bg-white/10 relative">
            <div
              className="absolute left-0 top-0 h-full bg-titan-orange"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="text-center">
            <Button href="/services" variant="primary" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesScrollSlider(props: Props) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${DESKTOP_MIN}px)`);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (isDesktop === null) {
    return <MobileServicesList {...props} />;
  }

  if (!isDesktop) {
    return <MobileServicesList {...props} />;
  }

  return <DesktopServicesSlider {...props} />;
}
