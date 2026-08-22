import Link from 'next/link';
import { Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';
import { CONTACT_EMAIL, CONTACT_MAILTO, CONTACT_PHONE, CONTACT_PHONE_HREF } from '@/lib/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-titan-midnight overflow-x-clip max-w-full border-t border-white/5">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Logo height={144} href="/" className="mb-5" />
            <p className="text-white/55 text-sm mb-6 leading-relaxed">
              Professional freight transportation throughout the lower 48 states, specializing in dry van, refrigerated, flatbed, and power only solutions.
            </p>
            <div className="flex gap-3">
              {[
                {
                  name: 'Facebook',
                  href: '#',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  name: 'Instagram',
                  href: '#',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
              ].map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-titan-orange hover:border-titan-orange/30 transition-all"
                  aria-label={name}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-5 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                { href: '/services/dry-van', label: 'Dry Van Transportation' },
                { href: '/services/refrigerated', label: 'Refrigerated Transportation' },
                { href: '/services/flatbed', label: 'Flatbed Transportation' },
                { href: '/services/power-only', label: 'Power Only' },
                { href: '/services', label: 'View All Services' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/55 hover:text-titan-orange transition-colors text-sm inline-flex items-center gap-1 group">
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-5 text-white">Company</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/coverage', label: 'Coverage' },
                { href: '/testimonials', label: 'Testimonials' },
                { href: '/faqs', label: 'FAQs' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/55 hover:text-titan-orange transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-5 text-white">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-titan-orange mt-1 shrink-0" />
                <a href={CONTACT_PHONE_HREF} className="text-white hover:text-titan-orange transition-colors text-sm font-semibold">
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-titan-orange mt-1 shrink-0" />
                <a href={CONTACT_MAILTO} className="text-white/55 hover:text-titan-orange transition-colors text-sm">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-titan-orange mt-1 shrink-0" />
                <span className="text-white/55 text-sm">24/7 Availability</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button href="/drivers" variant="hero-ghost" size="sm" fullWidth>
                Driver Opportunities
              </Button>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden mb-12 bg-titan-navy border border-white/10">
          <div className="absolute inset-0 bg-hero-sunset bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-titan-midnight/90 to-titan-navy/80" />
          <div className="relative p-10 md:p-14 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
              Ready to Ship Your Freight?
            </h3>
            <p className="text-white/65 mb-8 max-w-md mx-auto">
              Get a custom quote for your transportation needs
            </p>
            <Button href="/quote" variant="primary" size="lg">
              Request a Quote
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {currentYear} Titan Logistics LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/privacy" className="hover:text-titan-orange transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-titan-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
