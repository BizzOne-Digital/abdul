import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Privacy Policy | Titan Logistics LLC',
};

export default function PrivacyPage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <PageHero
        title="Privacy Policy"
        bgClass="hero-bg-documents"
        compact
      />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto card-bento rounded-3xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-titan-steel">
                This privacy policy page is editable through the admin portal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
