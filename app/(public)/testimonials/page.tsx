import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Testimonials | Titan Logistics LLC',
  description: 'What our customers say about our freight transportation services.',
};

export default function TestimonialsPage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <PageHero
        title="Testimonials"
        subtitle="What our customers say"
        bgClass="hero-bg-team"
      />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-titan-steel">
            Testimonials are managed through the admin portal and will appear here once published.
          </p>
        </div>
      </section>
    </div>
  );
}
