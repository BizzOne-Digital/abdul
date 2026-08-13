import Button from '@/components/Button';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Frequently Asked Questions | Titan Logistics LLC',
  description: 'Common questions about our freight transportation services.',
};

export default function FAQsPage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our freight services"
        bgClass="hero-bg-documents"
      />

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
