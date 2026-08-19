'use client';

import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Package,
  Shield,
  Truck,
} from 'lucide-react';
import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';
import {
  SERVICE_DETAILS,
  getServiceImage,
  type ServiceFull,
} from '@/lib/services-catalog';

type Props = {
  service: ServiceFull;
};

export default function ServiceDetailView({ service }: Props) {
  const { detail } = service;
  const heroImage = getServiceImage(service.slug, service.listingImage, service.detail.heroImage);
  const otherServices = SERVICE_DETAILS.filter((s) => s.slug !== service.slug);

  return (
    <div className="overflow-x-clip w-full max-w-full">
      <PageHero
        badge={detail.heroEyebrow}
        title={detail.heroTitle}
        subtitle={detail.heroDescription}
        heroImage={heroImage}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/quote" variant="primary" size="lg">
            Request Service
          </Button>
          <Button href="tel:402-326-8820" variant="hero-ghost" size="lg">
            Call 402-326-8820
          </Button>
        </div>
      </PageHero>

      {/* Quick highlights strip */}
      <section className="bg-titan-navy border-y border-white/5">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {service.keyHighlights.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-titan-orange shrink-0" />
                <span className="text-white/75 text-xs md:text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="section-pill mb-4">Overview</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-titan-navy mb-5 leading-tight">
                {service.title}
              </h2>
              <p className="text-titan-steel text-base md:text-lg leading-relaxed mb-6">
                {detail.overview}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/quote" variant="primary" size="md">
                  Request Service
                </Button>
                <Button href="/services" variant="outline" size="md">
                  All Services
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-titan-lg border border-stone-200/50">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${heroImage})` }}
                  role="img"
                  aria-label={detail.heroImageAlt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-titan-navy/50 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Suitable freight */}
      <section className="py-20 md:py-28 bg-titan-off-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-pill mb-4">Freight Types</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-titan-navy mb-3">
              Suitable Freight
            </h2>
            <p className="text-titan-steel">
              Common freight types we handle with our {service.title.toLowerCase()} service
            </p>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {detail.suitableFreight.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.05}>
                <div className="card-bento p-5 flex items-center gap-3 h-full">
                  <div className="w-10 h-10 rounded-xl bg-titan-orange/10 flex items-center justify-center shrink-0">
                    <Package className="w-5 h-5 text-titan-orange" />
                  </div>
                  <span className="text-titan-navy font-medium text-sm md:text-base">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Benefits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14">
            <ScrollReveal direction="left">
              <div className="card-bento p-8 md:p-10 h-full">
                <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center mb-5">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-titan-navy mb-4">
                  Equipment
                </h2>
                <p className="text-titan-steel leading-relaxed">{detail.equipmentInfo}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="card-bento p-8 md:p-10 h-full">
                <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center mb-5">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-titan-navy mb-5">
                  Key Benefits
                </h2>
                <ul className="space-y-3">
                  {detail.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-titan-steel">
                      <CheckCircle className="w-5 h-5 text-titan-orange shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-titan-off-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-pill mb-4">Process</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-titan-navy mb-3">
              How It Works
            </h2>
            <p className="text-titan-steel">
              Simple steps from quote request to confirmed delivery
            </p>
          </ScrollReveal>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-3">
            {detail.process.map((step, index) => (
              <ScrollReveal key={step} delay={index * 0.08}>
                <div className="card-bento p-5 lg:p-4 h-full">
                  <div className="w-10 h-10 rounded-xl bg-gradient-warm text-white font-display font-bold flex items-center justify-center mb-3 text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-titan-navy font-medium leading-snug text-sm lg:text-[0.8125rem]">{step}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 md:py-20 bg-titan-navy">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <MapPin className="w-10 h-10 text-titan-orange mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Coverage Area
              </h2>
              <p className="text-white/65 text-base md:text-lg leading-relaxed">
                {detail.coverageInfo}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-pill mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-titan-navy">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {[...detail.faqs]
              .sort((a, b) => a.displayOrder - b.displayOrder)
              .map((faq, index) => (
                <ScrollReveal key={faq.question} delay={index * 0.06}>
                  <details className="group card-bento overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 p-5 md:p-6 cursor-pointer list-none font-display font-bold text-titan-navy text-base md:text-lg">
                      {faq.question}
                      <span className="text-titan-orange text-xl shrink-0 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                      <p className="text-titan-steel leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 md:py-28 bg-titan-off-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <span className="section-pill mb-4">Explore More</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-titan-navy">
              Other Services
            </h2>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.map((other, index) => (
              <ScrollReveal key={other.slug} delay={index * 0.08}>
                <Link
                  href={`/services/${other.slug}`}
                  className="group card-bento p-6 block h-full hover:border-titan-orange/30 transition-colors"
                >
                  <div
                    className="h-32 rounded-xl bg-cover bg-center mb-4 overflow-hidden"
                    style={{ backgroundImage: `url(${getServiceImage(other.slug, other.listingImage, other.detail.heroImage)})` }}
                  />
                  <h3 className="font-display font-bold text-titan-navy mb-2 group-hover:text-titan-orange transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-titan-steel text-sm line-clamp-2 mb-3">
                    {other.shortDescription}
                  </p>
                  <span className="text-titan-orange text-sm font-semibold inline-flex items-center gap-1">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Need ${service.title}?`}
        description="Get a custom quote from our dispatch team — available 24/7 across the lower 48 states"
        primaryLabel="Request Service"
        primaryHref="/quote"
        secondaryHref="tel:402-326-8820"
        secondaryLabel="Call 402-326-8820"
      />
    </div>
  );
}
