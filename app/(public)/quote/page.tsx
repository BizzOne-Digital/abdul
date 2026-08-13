import QuoteForm from '@/components/QuoteForm';
import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import { Clock, Shield, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Request a Freight Quote | Titan Logistics LLC',
  description: 'Get a custom freight transportation quote. Professional service across the lower 48 states.',
};

export default function QuotePage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <PageHero
        badge="Get a Custom Quote"
        title="Request a Freight Quote"
        subtitle="Fill out the form below and we'll get back to you with a competitive quote for your transportation needs"
        bgClass="hero-bg-clipboard"
      />

      {/* Benefits */}
      <section className="py-12 bg-titan-off-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 card-bento p-6">
              <div className="w-12 h-12 bg-titan-mint/50 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-titan-blue" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-titan-navy">Fast Response</h3>
                <p className="text-sm text-titan-steel">24/7 dispatch team ready to assist</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 card-bento p-6">
              <div className="w-12 h-12 bg-titan-mint/50 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-titan-blue" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-titan-navy">Secure Transport</h3>
                <p className="text-sm text-titan-steel">Professional handling of your freight</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 card-bento p-6">
              <div className="w-12 h-12 bg-titan-mint/50 rounded-2xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-titan-blue" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-titan-navy">Reliable Service</h3>
                <p className="text-sm text-titan-steel">Lower 48 coverage you can count on</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="card-bento rounded-3xl p-8 md:p-12">
            <QuoteForm />
          </div>
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
            <Button href="tel:402-326-8820" variant="primary" size="lg">
              Call 402-326-8820
            </Button>
            <Button href="mailto:info@titan-llc.com" variant="outline" size="lg">
              Email Dispatch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
