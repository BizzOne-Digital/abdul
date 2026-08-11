'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Button from './Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/coverage', label: 'Coverage' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/drivers', label: 'Drivers' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden w-full max-w-full ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 max-w-full">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex flex-col">
              <div className="text-2xl md:text-3xl font-display font-bold text-titan-navy group-hover:text-titan-blue transition-colors">
                TITAN
              </div>
              <div className="text-xs text-titan-steel">LOGISTICS LLC</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-titan-navy hover:text-titan-blue transition-all duration-300 font-medium relative group hover:scale-105"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-titan-blue transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:402-326-8820"
              className="flex items-center space-x-2 text-titan-navy hover:text-titan-blue transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">402-326-8820</span>
            </a>
            <Button href="/quote" variant="primary" size="sm">
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-titan-navy hover:text-titan-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-titan-navy hover:text-titan-blue transition-colors font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a
                href="tel:402-326-8820"
                className="flex items-center space-x-2 text-titan-navy hover:text-titan-blue transition-colors py-2"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">402-326-8820</span>
              </a>
              <Button href="/quote" variant="primary" fullWidth>
                Request Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
