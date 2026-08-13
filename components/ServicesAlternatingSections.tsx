'use client';

import Button from '@/components/Button';
import ScrollReveal from '@/components/ScrollReveal';
import { CheckCircle } from 'lucide-react';
import { getServiceImage, type ServiceListing } from '@/lib/services-catalog';

type Props = {
  services: ServiceListing[];
};

export default function ServicesAlternatingSections({ services }: Props) {
  return (
    <div>
      {services.map((service, index) => {
        const imageLeft = index % 2 === 0;
        const image = getServiceImage(service.slug);
        const num = String(index + 1).padStart(2, '0');

        return (
          <section
            key={service.slug}
            className={`py-16 md:py-24 lg:py-28 ${index % 2 === 1 ? 'bg-titan-off-white' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center max-w-6xl mx-auto">
                {/* Image */}
                <ScrollReveal
                  direction={imageLeft ? 'left' : 'right'}
                  className={imageLeft ? 'lg:order-1' : 'lg:order-2'}
                >
                  <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-titan-lg border border-stone-200/50">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${image})` }}
                      role="img"
                      aria-label={service.listingImageAlt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-titan-navy/30 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 md:top-6 md:left-6 text-titan-orange font-display font-bold text-sm md:text-base tracking-wider bg-titan-midnight/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      {num}
                    </span>
                  </div>
                </ScrollReveal>

                {/* Text */}
                <ScrollReveal
                  direction={imageLeft ? 'right' : 'left'}
                  className={imageLeft ? 'lg:order-2' : 'lg:order-1'}
                >
                  <div>
                    <span className="section-pill mb-4">Service {num}</span>
                    <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-display font-bold text-titan-navy mb-4 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-titan-steel text-base md:text-lg leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {service.keyHighlights?.length > 0 && (
                      <ul className="space-y-3 mb-8">
                        {service.keyHighlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-titan-steel text-sm md:text-base"
                          >
                            <CheckCircle className="w-5 h-5 text-titan-orange shrink-0 mt-0.5" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button href={`/services/${service.slug}`} variant="primary" size="lg">
                        Learn More
                      </Button>
                      <Button href="/quote" variant="outline" size="lg">
                        Request Service
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
