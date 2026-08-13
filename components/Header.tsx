'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, Clock, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import Logo from './Logo';

const SCROLL_THRESHOLD = 20;

const serviceLinks = [
  { href: '/services/dry-van', label: 'Dry Van Transportation' },
  { href: '/services/refrigerated', label: 'Refrigerated Transportation' },
  { href: '/services/flatbed', label: 'Flatbed Transportation' },
  { href: '/services/power-only', label: 'Power Only' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/coverage', label: 'Coverage' },
  { href: '/drivers', label: 'Drivers' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const updateScroll = useCallback((scrollY: number) => {
    setIsScrolled(scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    const onWindowScroll = () => updateScroll(window.scrollY);

    const onAppScroll = (e: Event) => {
      const detail = (e as CustomEvent<{ scrollY: number }>).detail;
      updateScroll(detail.scrollY);
    };

    updateScroll(window.scrollY);

    window.addEventListener('scroll', onWindowScroll, { passive: true });
    window.addEventListener('app-scroll', onAppScroll);

    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('app-scroll', onAppScroll);
    };
  }, [updateScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const isServicesActive = pathname.startsWith('/services');

  const navLinkClass = (active: boolean) =>
    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
      active ? 'text-titan-orange' : 'text-white/80 hover:text-white'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-full overflow-x-clip">
      {/* Top announcement bar */}
      <div
        className={`transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-titan-midnight border-white/5 shadow-sm'
            : 'bg-transparent border-white/10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 h-9 text-xs sm:text-sm text-white/75 transition-colors duration-500">
            <Clock className="w-3.5 h-3.5 text-titan-orange shrink-0" />
            <span>24/7 Dispatch</span>
            <span className="text-white/30">•</span>
            <span>Lower 48 Coverage</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`transition-all duration-500 ${
          isScrolled
            ? 'bg-titan-navy shadow-lg border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[72px] md:h-[96px]">
            <div className="[&_img]:!h-11 sm:[&_img]:!h-14 md:[&_img]:!h-20 shrink-0 min-w-0">
              <Logo height={80} />
            </div>

            <nav className="hidden xl:flex items-center gap-0.5">
              <Link href="/" className={navLinkClass(pathname === '/')}>
                Home
                {pathname === '/' && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-titan-orange rounded-full" />
                )}
              </Link>

              <Link href="/about" className={navLinkClass(pathname.startsWith('/about'))}>
                About
                {pathname.startsWith('/about') && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-titan-orange rounded-full" />
                )}
              </Link>

              {/* Services dropdown — desktop */}
              <div className="relative group">
                <Link
                  href="/services"
                  className={`${navLinkClass(isServicesActive)} flex items-center gap-1`}
                >
                  Services
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  {isServicesActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-titan-orange rounded-full" />
                  )}
                </Link>

                <div className="absolute top-full left-0 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
                  <div className="bg-titan-navy border border-white/10 rounded-xl shadow-titan-lg py-2 min-w-[260px] overflow-hidden">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          pathname === item.href
                            ? 'text-titan-orange bg-white/5'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="border-t border-white/10 mt-1 pt-1 mx-2">
                      <Link
                        href="/services"
                        className="block px-2 py-2.5 text-sm font-semibold text-titan-orange hover:text-titan-amber transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.slice(2).map((link) => (
                <Link key={link.href} href={link.href} className={navLinkClass(isActive(link.href))}>
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-titan-orange rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:402-326-8820"
                className="flex items-center gap-2 text-white hover:text-titan-orange transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-titan-orange" />
                <span className="font-semibold text-sm hidden xl:inline">402-326-8820</span>
              </a>
              <Button href="/quote" variant="primary" size="sm" className="!rounded-lg !px-5">
                Request a Quote
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-titan-orange transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-titan-navy border-b border-white/10 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col">
              <Link
                href="/"
                className={`px-3 py-3 text-sm font-medium border-b border-white/5 ${
                  pathname === '/' ? 'text-titan-orange' : 'text-white/80'
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-3 py-3 text-sm font-medium border-b border-white/5 ${
                  pathname.startsWith('/about') ? 'text-titan-orange' : 'text-white/80'
                }`}
              >
                About
              </Link>

              {/* Services accordion — mobile */}
              <div className="border-b border-white/5">
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`w-full flex items-center justify-between px-3 py-3 text-sm font-medium ${
                    isServicesActive ? 'text-titan-orange' : 'text-white/80'
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isMobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white/5"
                    >
                      {serviceLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-6 py-2.5 text-sm border-b border-white/5 last:border-0 ${
                            pathname === item.href ? 'text-titan-orange' : 'text-white/70'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="block px-6 py-3 text-sm font-semibold text-titan-orange"
                      >
                        View All Services →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-3 text-sm font-medium border-b border-white/5 last:border-0 ${
                    isActive(link.href) ? 'text-titan-orange' : 'text-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 mt-2 space-y-3">
                <a href="tel:402-326-8820" className="flex items-center gap-2 text-white px-3">
                  <Phone className="w-4 h-4 text-titan-orange" />
                  402-326-8820
                </a>
                <Button href="/quote" variant="primary" fullWidth>
                  Request a Quote
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
