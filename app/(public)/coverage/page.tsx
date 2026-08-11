import Button from '@/components/Button';
import { MapPin, Truck, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Service Coverage | Titan Logistics LLC',
  description: 'Professional freight transportation throughout the lower 48 states of the United States.',
};

export default function CoveragePage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-gradient-titan text-white overflow-hidden">
        <div className="absolute inset-0 hero-bg-map bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-titan-midnight/95 via-titan-navy/90 to-titan-blue/75"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-titan-blue/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-titan-orange/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-display font-bold">Covering the Lower 48</h1>
            <p className="text-xl text-titan-off-white">
              Professional freight transportation throughout the contiguous United States
            </p>
          </div>
        </div>
      </section>

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
            <div className="bg-white p-8 rounded-lg shadow-titan text-center">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Lower 48 States</h3>
              <p className="text-titan-steel">
                Complete coverage throughout the contiguous United States
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-titan text-center">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Multiple Services</h3>
              <p className="text-titan-steel">
                Dry van, refrigerated, and flatbed options available
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-titan text-center">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-titan text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Ship Your Freight?
          </h2>
          <p className="text-xl mb-8 text-titan-off-white max-w-2xl mx-auto">
            Get a custom quote for your transportation needs across the lower 48 states
          </p>
          <Button href="/quote" variant="primary" size="lg">
            Request a Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
