import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import ServicesAlternatingSections from '@/components/ServicesAlternatingSections';
import dbConnect from '@/lib/mongodb';
import Service from '@/models/Service';
import { mergeServices, type ServiceListing } from '@/lib/services-catalog';

export default async function ServicesPage() {
  await dbConnect();

  const services = await Service.find({ isPublished: true })
    .sort({ displayOrder: 1 })
    .lean()
    .exec();

  const dbServices: ServiceListing[] = JSON.parse(JSON.stringify(services)).map(
    (service: ServiceListing) => ({
      slug: service.slug,
      title: service.title,
      shortDescription: service.shortDescription,
      listingImageAlt: service.listingImageAlt,
      keyHighlights: service.keyHighlights,
      displayOrder: service.displayOrder,
    })
  );

  const servicesData = mergeServices(dbServices);

  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <PageHero
        badge="Our Services"
        title="Transportation Solutions for Every Need"
        subtitle="Four professional freight services across the lower 48 states"
        bgClass="hero-bg-logistics"
      />

      <ServicesAlternatingSections services={servicesData} />

      {/* Equipment Overview */}
      <section className="py-24 md:py-32 bg-titan-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-titan-navy mb-4">
              Professional Equipment & Coverage
            </h2>
            <p className="text-titan-steel text-lg">
              All services available throughout the lower 48 states with 24/7 dispatch support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-bento p-8 text-center">
              <div className="text-4xl mb-4 animate-bounce-subtle">🚛</div>
              <h3 className="font-display font-bold text-xl mb-2">Modern Fleet</h3>
              <p className="text-titan-steel">
                Well-maintained trucks and trailers for reliable transportation
              </p>
            </div>
            <div className="card-bento p-8 text-center">
              <div className="text-4xl mb-4 animate-bounce-subtle" style={{ animationDelay: '0.3s' }}>
                📍
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Lower 48 Coverage</h3>
              <p className="text-titan-steel">Service throughout the contiguous United States</p>
            </div>
            <div className="card-bento p-8 text-center">
              <div className="text-4xl mb-4 animate-bounce-subtle" style={{ animationDelay: '0.6s' }}>
                🕐
              </div>
              <h3 className="font-display font-bold text-xl mb-2">24/7 Dispatch</h3>
              <p className="text-titan-steel">
                Round-the-clock support for your transportation needs
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button href="/quote" variant="primary" size="lg">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Contact our dispatch team to discuss your freight transportation needs"
        secondaryHref="tel:402-326-8820"
        secondaryLabel="Call 402-326-8820"
      />
    </div>
  );
}
