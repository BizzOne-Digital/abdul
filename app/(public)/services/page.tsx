import Link from 'next/link';
import { ArrowRight, Truck, Thermometer, Package } from 'lucide-react';
import Button from '@/components/Button';
import dbConnect from '@/lib/mongodb';
import Service from '@/models/Service';

const iconMap: Record<string, React.ReactNode> = {
  truck: <Truck className="w-8 h-8" />,
  thermometer: <Thermometer className="w-8 h-8" />,
  package: <Package className="w-8 h-8" />,
};

export default async function ServicesPage() {
  await dbConnect();
  
  const services = await Service.find({ isPublished: true })
    .sort({ displayOrder: 1 })
    .lean()
    .exec();

  const servicesData = JSON.parse(JSON.stringify(services));

  return (
    <div className="overflow-x-hidden w-full max-w-full">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-gradient-titan text-white overflow-hidden">
        <div className="absolute inset-0 hero-bg-logistics bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-titan-midnight/95 via-titan-navy/85 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-titan-blue/15 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-titan-blue/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <div className="inline-block px-4 py-1 bg-titan-blue/20 border border-titan-blue/40 rounded-full text-sm font-semibold">
              Our Services
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              Transportation Solutions for Every Need
            </h1>
            <p className="text-xl text-titan-off-white">
              Professional freight services across the lower 48 states
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          {servicesData.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-titan-steel text-lg">
                No services available at this time. Please check back soon.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service: any, index: number) => (
                <div
                  key={service._id}
                  className="group bg-white rounded-lg shadow-titan hover:shadow-titan-lg transition-all duration-500 overflow-hidden hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden bg-titan-navy">
                    {service.listingImage ? (
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${service.listingImage})` }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white">
                        <Package className="w-24 h-24 opacity-30" />
                      </div>
                    )}
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    {service.icon && iconMap[service.icon] && (
                      <div className="w-12 h-12 bg-titan-blue/10 rounded-lg flex items-center justify-center text-titan-blue mb-4">
                        {iconMap[service.icon]}
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-display font-bold text-titan-navy mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-titan-steel mb-4 line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {service.keyHighlights && service.keyHighlights.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {service.keyHighlights.slice(0, 3).map((highlight: string, i: number) => (
                          <li key={i} className="flex items-start text-sm text-titan-steel">
                            <span className="text-titan-blue mr-2">✓</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-titan-blue hover:text-titan-navy font-semibold group/link"
                    >
                      {service.ctaLabel || 'Learn More'}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Equipment Overview */}
      <section className="py-24 md:py-32 bg-titan-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-titan-navy mb-4">
              Professional Equipment & Coverage
            </h2>
            <p className="text-titan-steel text-lg">
              All services available throughout the lower 48 states with 24/7 dispatch support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-center hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-1">
              <div className="text-4xl mb-4 animate-bounce-subtle">🚛</div>
              <h3 className="font-display font-bold text-xl mb-2">Modern Fleet</h3>
              <p className="text-titan-steel">
                Well-maintained trucks and trailers for reliable transportation
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-2">
              <div className="text-4xl mb-4 animate-bounce-subtle" style={{ animationDelay: '0.3s' }}>📍</div>
              <h3 className="font-display font-bold text-xl mb-2">Lower 48 Coverage</h3>
              <p className="text-titan-steel">
                Service throughout the contiguous United States
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-3">
              <div className="text-4xl mb-4 animate-bounce-subtle" style={{ animationDelay: '0.6s' }}>🕐</div>
              <h3 className="font-display font-bold text-xl mb-2">24/7 Dispatch</h3>
              <p className="text-titan-steel">
                Round-the-clock support for your transportation needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-titan text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-titan-off-white max-w-2xl mx-auto">
            Contact our dispatch team to discuss your freight transportation needs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/quote" variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button
              href="tel:402-326-8820"
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-titan-navy"
            >
              Call 402-326-8820
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
