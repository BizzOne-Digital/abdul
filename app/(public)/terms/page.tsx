import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Terms of Service | Titan Logistics LLC',
};

export default function TermsPage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <PageHero
        title="Terms of Service"
        bgClass="hero-bg-documents"
        compact
      />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto card-bento rounded-3xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-titan-steel">
                This terms of service page is editable through the admin portal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
