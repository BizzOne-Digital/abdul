import Button from '@/components/Button';
import { Truck, Shield, Clock, MapPin, Users, Award } from 'lucide-react';

export const metadata = {
  title: 'About Us | Titan Logistics LLC',
  description: 'Learn about Titan Logistics - professional freight transportation across the lower 48 states.',
};

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-gradient-titan text-white overflow-hidden">
        <div className="absolute inset-0 hero-bg-highway bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-titan-navy/95 via-titan-midnight/90 to-titan-navy/95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-titan-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-titan-blue/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold">About Titan Logistics</h1>
            <p className="text-xl text-titan-off-white">
              Professional freight transportation you can depend on
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-titan-navy mb-6 text-center">Who We Are</h2>
            <div className="text-lg text-titan-steel leading-relaxed space-y-4">
              <p>
                Titan Logistics LLC provides professional general freight transportation throughout the lower 48 states of the United States. We specialize in dry van, refrigerated, and flatbed transportation services, offering flexible solutions for diverse freight needs.
              </p>
              <p>
                Our commitment is to provide secure, efficient, and reliable freight transportation services with responsive 24/7 communication and professional handling of every shipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-32 bg-titan-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-titan-navy mb-12 text-center">Our Commitment</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-1">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-titan-blue/20">
                <Shield className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Secure Transport</h3>
              <p className="text-titan-steel">
                Professional handling and secure transportation of your freight from pickup to delivery
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-2">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-titan-blue/20">
                <Clock className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">24/7 Availability</h3>
              <p className="text-titan-steel">
                Our dispatch team is available around the clock to support your transportation needs
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-3">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-titan-blue/20">
                <Truck className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Multiple Services</h3>
              <p className="text-titan-steel">
                Dry van, refrigerated, and flatbed solutions for varied freight requirements
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-4">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-titan-blue/20">
                <MapPin className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Lower 48 Coverage</h3>
              <p className="text-titan-steel">
                Comprehensive service throughout the contiguous United States
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-5">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-titan-blue/20">
                <Users className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Professional Team</h3>
              <p className="text-titan-steel">
                Experienced drivers and responsive dispatch support for every shipment
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-6">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-titan-blue/20">
                <Award className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Quality Service</h3>
              <p className="text-titan-steel">
                Commitment to reliable and professional freight transportation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-titan-navy mb-12 text-center">Our Services</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-titan-blue rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-titan-navy mb-2">Dry Van Transportation</h3>
                  <p className="text-titan-steel">
                    Secure enclosed trailer transportation for general freight and temperature-sensitive goods that don't require refrigeration. Ideal for palletized freight and protection from weather elements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-titan-blue rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-titan-navy mb-2">Refrigerated Transportation</h3>
                  <p className="text-titan-steel">
                    Temperature-controlled transportation for perishable goods requiring precise climate management. Professional handling of food products, pharmaceuticals, and other temperature-sensitive freight.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-titan-blue rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-titan-navy mb-2">Flatbed Transportation</h3>
                  <p className="text-titan-steel">
                    Open-deck transportation for oversized, heavy, or uniquely shaped freight. Professional securement and handling of construction equipment, steel products, machinery, and large industrial components.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-titan text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-titan-off-white max-w-2xl mx-auto">
            Contact our dispatch team for freight quotes or to learn more about our services
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/quote" variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-titan-navy"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
