import Button from '@/components/Button';

export const metadata = {
  title: 'Frequently Asked Questions | Titan Logistics LLC',
  description: 'Common questions about our freight transportation services.',
};

export default function FAQsPage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <section className="relative py-32 md:py-40 bg-gradient-titan text-white overflow-hidden">
        <div className="absolute inset-0 hero-bg-documents bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-titan-midnight/95 via-titan-navy/90 to-titan-blue/80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-titan-blue/15 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-titan-blue/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-display font-bold">Frequently Asked Questions</h1>
            <p className="text-xl text-titan-off-white">
              Find answers to common questions about our freight services
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-titan-steel mb-8">
              FAQs are managed through the admin portal and will appear here once published.
            </p>
            <Button href="/contact" variant="primary">Contact Us with Questions</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
