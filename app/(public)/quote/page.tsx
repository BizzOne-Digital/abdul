import QuoteForm from '@/components/QuoteForm';
import { Clock, Shield, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Request a Freight Quote | Titan Logistics LLC',
  description: 'Get a custom freight transportation quote. Professional service across the lower 48 states.',
};

export default function QuotePage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-gradient-titan text-white overflow-hidden">
        <div className="absolute inset-0 hero-bg-clipboard bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-titan-midnight/98 via-titan-navy/90 to-titan-midnight/95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-titan-blue/15 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-titan-blue/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-1 bg-titan-blue/20 border border-titan-blue/40 rounded-full text-sm font-semibold">
              Get a Custom Quote
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              Request a Freight Quote
            </h1>
            <p className="text-xl text-titan-off-white">
              Fill out the form below and we'll get back to you with a competitive quote for your transportation needs
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-titan-off-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <Clock className="w-10 h-10 text-titan-blue flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-lg">Fast Response</h3>
                <p className="text-sm text-titan-steel">24/7 dispatch team ready to assist</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <Shield className="w-10 h-10 text-titan-blue flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-lg">Secure Transport</h3>
                <p className="text-sm text-titan-steel">Professional handling of your freight</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-10 h-10 text-titan-blue flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-lg">Reliable Service</h3>
                <p className="text-sm text-titan-steel">Lower 48 coverage you can count on</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <QuoteForm />
        </div>
      </section>

      {/* Help Section */}
      <section className="py-24 md:py-32 bg-titan-off-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-titan-navy mb-4">
            Need Help or Have Questions?
          </h2>
          <p className="text-titan-steel mb-6 max-w-2xl mx-auto">
            Our dispatch team is available 24/7 to assist you. Call us directly for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:402-326-8820"
              className="inline-flex items-center justify-center px-8 py-4 bg-titan-blue text-white font-display font-bold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Call 402-326-8820
            </a>
            <a
              href="mailto:dispatch@titan-llc.com"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-titan-navy text-titan-navy font-display font-bold rounded-lg hover:bg-titan-navy hover:text-white transition-all"
            >
              Email Dispatch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
