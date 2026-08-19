'use client';

import Button from '@/components/Button';
import ScrollReveal, { ScrollRevealGroup, ScrollRevealItem } from '@/components/ScrollReveal';
import ServicesScrollSlider from '@/components/ServicesScrollSlider';
import { SERVICE_IMAGES } from '@/lib/services-catalog';
import { Truck, Package, Shield, Clock, MapPin, Phone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = [
  { emoji: '📦', title: 'I Need to Ship Freight', desc: 'Get a custom quote for your transportation needs', href: '/quote', cta: 'Request Quote' },
  { emoji: '🤝', title: "I'm a Broker", desc: 'Partner with us for reliable capacity', href: '/quote', cta: 'Get Started' },
  { emoji: '🚛', title: "I'm a CDL A Driver", desc: 'Join our team of professional drivers', href: '/drivers', cta: 'View Opportunities' },
];

const services = [
  {
    num: '01',
    title: 'Dry Van Transportation',
    category: 'General Freight',
    desc: 'Secure enclosed transportation for general freight and palletized goods with full weather protection.',
    features: ['Protected from elements', 'Palletized freight ideal', "53' standard trailers"],
    image: SERVICE_IMAGES['dry-van'],
    href: '/services/dry-van',
    imageLeft: true,
  },
  {
    num: '02',
    title: 'Refrigerated Transport',
    category: 'Temperature Controlled',
    desc: 'Temperature-controlled transport for perishables, food, pharmaceuticals, and climate-sensitive freight.',
    features: ['Temperature monitoring', 'Food-grade compliance', 'Perishable goods safe'],
    image: SERVICE_IMAGES.refrigerated,
    href: '/services/refrigerated',
    imageLeft: false,
  },
  {
    num: '03',
    title: 'Flatbed Solutions',
    category: 'Oversized & Heavy',
    desc: 'Open-deck hauling for oversized, heavy, or uniquely shaped freight with professional securement.',
    features: ['Oversized loads', 'Heavy equipment', 'Professional securement'],
    image: SERVICE_IMAGES.flatbed,
    href: '/services/flatbed',
    imageLeft: true,
  },
  {
    num: '04',
    title: 'Power Only',
    category: 'Tractor Service',
    desc: 'We provide the tractor—you provide the trailer. Perfect for drop-and-hook and trailer repositioning.',
    features: ['Drop & hook ready', 'Customer-owned trailers', 'Flexible fleet capacity'],
    image: SERVICE_IMAGES['power-only'],
    href: '/services/power-only',
    imageLeft: false,
  },
];

const whyUs = [
  { icon: Shield, title: 'Secure Transportation', desc: 'Professional handling and secure transport of your freight from pickup to delivery with full cargo insurance.' },
  { icon: Clock, title: '24/7 Dispatch Support', desc: 'Round-the-clock availability with responsive dispatch team ready to support your transportation needs anytime.' },
  { icon: MapPin, title: 'Lower 48 Coverage', desc: 'Comprehensive service throughout all contiguous United States with reliable pickup and delivery schedules.' },
  { icon: Truck, title: 'Modern Equipment', desc: 'Well-maintained trucks and trailers with GPS tracking for reliable transportation and real-time visibility.' },
  { icon: CheckCircle, title: 'Professional Drivers', desc: 'Experienced CDL-A drivers with clean safety records and commitment to on-time, damage-free deliveries.' },
  { icon: Phone, title: 'Responsive Communication', desc: 'Clear, timely updates throughout the shipping process with dedicated support for questions and concerns.' },
];

const steps = [
  { num: '01', title: 'Request a Quote', desc: 'Fill out our simple quote form with your freight details, pickup location, and delivery destination.' },
  { num: '02', title: 'Get Competitive Pricing', desc: 'Our dispatch team reviews your needs and provides a competitive quote with transparent pricing.' },
  { num: '03', title: 'Schedule Pickup', desc: 'Once approved, we schedule pickup at your convenience and assign a professional driver to your load.' },
  { num: '04', title: 'Track & Deliver', desc: 'Monitor your shipment with real-time updates and receive confirmation upon safe delivery.' },
];

export default function HomePage() {
  return (
    <div className="overflow-x-clip w-full max-w-full">
      {/* Hero — mockup layout with sunset truck background */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-x-clip max-w-full">
        {/* Background image */}
        <div className="absolute inset-0 bg-hero-sunset bg-cover bg-center bg-no-repeat" />
        {/* Dark gradient overlay — text readable on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-titan-midnight/95 via-titan-navy/70 to-titan-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-titan-midnight/60 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10 pt-[120px] md:pt-[148px] pb-10 md:pb-16 flex-1 flex flex-col justify-center max-w-full">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-titan-orange text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-5"
            >
              Reliable Freight. Real-Time Visibility.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-display font-bold text-white leading-[1.08] tracking-tight mb-6"
            >
              Freight That Moves Your Business Forward.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-white/75 leading-relaxed mb-8 max-w-xl"
            >
              Secure, efficient transportation across the lower 48—backed by 24/7 dispatch and dependable delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16"
            >
              <Button href="/quote" variant="primary" size="lg">
                Get a Freight Quote
              </Button>
              <Button href="/services" variant="hero-ghost" size="lg">
                Explore Services
              </Button>
            </motion.div>
          </div>

          {/* Bottom feature row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-6 sm:gap-10 pt-6 border-t border-white/10"
          >
            {[
              { icon: Clock, label: '24/7 Dispatch' },
              { icon: MapPin, label: '48 States Covered' },
              { icon: Package, label: 'Dry Van • Reefer • Flatbed • Power Only' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-titan-orange shrink-0" />
                <span className="text-sm text-white/80 font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="py-4 bg-titan-navy border-y border-white/5 overflow-x-clip max-w-full">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {['Dry Van', 'Refrigerated', 'Flatbed', 'Power Only', '24/7 Dispatch', 'Lower 48 States', 'GPS Tracking', 'Professional Drivers'].map((item) => (
                <span key={item} className="text-sm font-semibold text-white/60 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-titan-orange" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Info - Bento Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <span className="section-pill mb-4">Get Started</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-titan-navy mt-4 mb-4">
              Your Freight Solution Starts Here
            </h2>
            <p className="text-lg text-titan-steel max-w-2xl mx-auto">
              Whether you&apos;re shipping, brokering, or driving, we have the right solution for you
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((item, i) => (
              <ScrollRevealItem key={item.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="card-bento p-8 text-center h-full group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    i === 0 ? 'from-titan-orange/5 to-titan-peach/10' :
                    i === 1 ? 'from-titan-blue/5 to-titan-mint/10' :
                    'from-titan-amber/5 to-titan-orange/10'
                  }`} />
                  <div className="relative">
                    <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                    <h3 className="text-xl font-display font-bold mb-2 text-titan-navy">{item.title}</h3>
                    <p className="text-titan-steel mb-6 text-sm leading-relaxed">{item.desc}</p>
                    <Button href={item.href} variant="primary" size="sm">{item.cta}</Button>
                  </div>
                </motion.div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Services — horizontal scroll slider */}
      <ServicesScrollSlider services={services} />

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <span className="section-pill mb-4">Why Titan</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-titan-navy mt-4 mb-4">
              Why Choose Titan Logistics
            </h2>
            <p className="text-lg text-titan-steel max-w-2xl mx-auto">
              Professional freight transportation with reliability and service excellence
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyUs.map((item, i) => (
              <ScrollRevealItem key={item.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-7 rounded-3xl bg-titan-off-white border border-stone-200/40 hover:border-titan-blue/20 hover:shadow-titan transition-all duration-400 h-full"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    i % 3 === 0 ? 'bg-titan-peach/50' : i % 3 === 1 ? 'bg-titan-mint/50' : 'bg-titan-orange/10'
                  }`}>
                    <item.icon className="w-7 h-7 text-titan-blue" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-titan-navy mb-2">{item.title}</h3>
                  <p className="text-titan-steel text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>

          <ScrollReveal className="text-center mt-12">
            <Button href="/about" variant="outline" size="lg">Learn More About Us</Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-24 md:py-32 bg-titan-off-white relative overflow-hidden">
        <div className="absolute inset-0 hero-bg-map bg-cover bg-center opacity-[0.04]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="section-pill mb-4">Nationwide</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-titan-navy mt-4 mb-6">
                Coast to Coast Coverage
              </h2>
              <p className="text-lg text-titan-steel mb-8 leading-relaxed">
                Titan Logistics provides professional freight transportation throughout the lower 48 states. From the East Coast to the West Coast, from the Gulf to the Great Lakes, we deliver your freight safely and on time.
              </p>
              <div className="space-y-5 mb-8">
                {[
                  { title: 'All Contiguous States', desc: 'Complete coverage across the lower 48 United States' },
                  { title: 'Major Routes & Lanes', desc: 'Efficient routing on primary interstate highways and regional routes' },
                  { title: 'Flexible Scheduling', desc: 'Pickup and delivery scheduled to meet your business needs' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-titan-mint/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-titan-blue" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-titan-navy mb-0.5">{item.title}</h4>
                      <p className="text-titan-steel text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button href="/coverage" variant="primary" size="lg">View Coverage Details</Button>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative rounded-4xl overflow-hidden shadow-titan-lg border border-titan-navy/10">
                <div className="bg-titan-navy p-10 md:p-12 text-white relative">
                  <div className="absolute inset-0 bg-hero-sunset bg-cover bg-center opacity-20" />
                  <div className="absolute inset-0 bg-titan-navy/85" />
                  <div className="relative text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                      className="text-8xl font-display font-bold mb-2"
                    >
                      48
                    </motion.div>
                    <p className="text-2xl font-display mb-10 opacity-90">States Covered</p>
                    <div className="grid grid-cols-2 gap-6 text-left">
                      {[
                        { val: '24/7', label: 'Dispatch Available' },
                        { val: '4', label: 'Service Types' },
                        { val: '100%', label: 'Lower 48 Coverage' },
                        { val: '∞', label: 'Routes Available' },
                      ].map((stat) => (
                        <div key={stat.label} className="glass-card rounded-2xl p-4 !bg-white/15 !border-white/20">
                          <div className="text-2xl font-display font-bold">{stat.val}</div>
                          <p className="text-white/80 text-xs mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <span className="section-pill mb-4">Process</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-titan-navy mt-4 mb-4">
              Simple Shipping Process
            </h2>
            <p className="text-lg text-titan-steel max-w-2xl mx-auto">
              Get your freight moving in four easy steps
            </p>
          </ScrollReveal>

          <ScrollRevealGroup className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <ScrollRevealItem key={step.num}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-5 p-7 rounded-3xl bg-titan-off-white border border-stone-200/40 hover:border-titan-blue/25 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-warm text-white flex items-center justify-center font-display font-bold text-lg shadow-glow-coral">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-titan-navy mb-2">{step.title}</h3>
                    <p className="text-titan-steel text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>

          <ScrollReveal className="text-center mt-12">
            <Button href="/quote" variant="primary" size="lg">Start Your Shipment Now</Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-sunset bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-titan-midnight/95 via-titan-navy/80 to-titan-navy/60" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Ready to Ship Your Freight?
            </h2>
            <p className="text-xl mb-10 text-white/70 max-w-xl mx-auto">
              Contact our dispatch team 24/7 at{' '}
              <a href="tel:402-326-8820" className="font-bold text-titan-orange hover:underline">402-326-8820</a>
            </p>
            <Button href="/quote" variant="primary" size="lg">Request a Quote Now</Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
