import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { MapPin, Truck, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Service Coverage | Titan Logistics LLC',
  description: 'Professional freight transportation throughout the lower 48 states of the United States.',
};

export default function CoveragePage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <PageHero
        title="Covering the Lower 48"
        subtitle="Professional freight transportation throughout the contiguous United States"
        bgClass="hero-bg-map"
      />

      {/* Coverage Info */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-titan-navy mb-6">
              Service Throughout the Contiguous United States
            </h2>
            <p className="text-lg text-titan-steel">
              Titan Logistics provides reliable freight transportation across all 48 contiguous states. 
              Whether you're shipping across state lines or from coast to coast, we're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-mint/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Lower 48 States</h3>
              <p className="text-titan-steel">
                Complete coverage throughout the contiguous United States
              </p>
            </div>

            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-mint/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Multiple Services</h3>
              <p className="text-titan-steel">
                Dry van, refrigerated, and flatbed options available
              </p>
            </div>

            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-mint/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">24/7 Dispatch</h3>
              <p className="text-titan-steel">
                Round-the-clock support for your transportation needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Ship Your Freight?"
        description="Get a custom quote for your transportation needs across the lower 48 states"
      />
    </div>
  );
}
