import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Truck, Shield, Clock, MapPin, Users, Award } from 'lucide-react';

export const metadata = {
  title: 'About Us | Titan Logistics LLC',
  description: 'Learn about Titan Logistics - professional freight transportation across the lower 48 states.',
};

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <PageHero
        badge="About Us"
        title="About Titan Logistics"
        subtitle="Professional freight transportation you can depend on"
        bgClass="hero-bg-highway"
      />

      {/* Company Overview */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-titan-navy mb-6 text-center">Who We Are</h2>
            <div className="text-lg text-titan-steel leading-relaxed space-y-4">
              <p>
                Titan Logistics LLC provides professional general freight transportation throughout the lower 48 states of the United States. We specialize in dry van, refrigerated, flatbed, and power only transportation services, offering flexible solutions for diverse freight needs.
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
            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-mint/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Secure Transport</h3>
              <p className="text-titan-steel">
                Professional handling and secure transportation of your freight from pickup to delivery
              </p>
            </div>

            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-peach/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">24/7 Availability</h3>
              <p className="text-titan-steel">
                Our dispatch team is available around the clock to support your transportation needs
              </p>
            </div>

            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Multiple Services</h3>
              <p className="text-titan-steel">
                Dry van, refrigerated, and flatbed solutions for varied freight requirements
              </p>
            </div>

            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-mint/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Lower 48 Coverage</h3>
              <p className="text-titan-steel">
                Comprehensive service throughout the contiguous United States
              </p>
            </div>

            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-peach/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Professional Team</h3>
              <p className="text-titan-steel">
                Experienced drivers and responsive dispatch support for every shipment
              </p>
            </div>

            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-mint/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
              <div className="flex items-start space-x-6 p-6 card-bento">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-warm rounded-2xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-titan-navy mb-2">Dry Van Transportation</h3>
                  <p className="text-titan-steel">
                    Secure enclosed trailer transportation for general freight and temperature-sensitive goods that don't require refrigeration. Ideal for palletized freight and protection from weather elements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 card-bento">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-warm rounded-2xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-titan-navy mb-2">Refrigerated Transportation</h3>
                  <p className="text-titan-steel">
                    Temperature-controlled transportation for perishable goods requiring precise climate management. Professional handling of food products, pharmaceuticals, and other temperature-sensitive freight.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 card-bento">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-warm rounded-2xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-titan-navy mb-2">Flatbed Transportation</h3>
                  <p className="text-titan-steel">
                    Open-deck transportation for oversized, heavy, or uniquely shaped freight. Professional securement and handling of construction equipment, steel products, machinery, and large industrial components.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 card-bento">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-warm rounded-2xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-titan-navy mb-2">Power Only</h3>
                  <p className="text-titan-steel">
                    Tractor-only service for hauling customer-owned trailers. Ideal for drop-and-hook operations, trailer repositioning, and flexible capacity when you supply the trailer equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        description="Contact our dispatch team for freight quotes or to learn more about our services"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </div>
  );
}
