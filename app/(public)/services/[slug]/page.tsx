import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Button from '@/components/Button';
import dbConnect from '@/lib/mongodb';
import Service from '@/models/Service';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  await dbConnect();
  const service = await Service.findOne({ slug, isPublished: true }).lean().exec();

  if (!service) {
    return { title: 'Service Not Found' };
  }

  const serviceData = JSON.parse(JSON.stringify(service));

  return {
    title: serviceData.detail?.seoTitle || `${serviceData.title} | Titan Logistics LLC`,
    description: serviceData.detail?.seoDescription || serviceData.shortDescription,
    openGraph: {
      title: serviceData.detail?.seoTitle || serviceData.title,
      description: serviceData.detail?.seoDescription || serviceData.shortDescription,
      images: serviceData.detail?.ogImage ? [serviceData.detail.ogImage] : [],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  await dbConnect();
  
  const service = await Service.findOne({ slug, isPublished: true }).lean().exec();

  if (!service) {
    notFound();
  }

  const serviceData = JSON.parse(JSON.stringify(service));
  const detail = serviceData.detail || {};

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-gradient-titan text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: detail.heroImage ? `url(${detail.heroImage})` : 'none' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {detail.heroEyebrow && (
              <div className="inline-block px-4 py-1 bg-titan-blue/20 border border-titan-blue/40 rounded-full text-sm font-semibold">
                {detail.heroEyebrow}
              </div>
            )}
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              {detail.heroTitle || serviceData.title}
            </h1>
            <p className="text-xl text-titan-off-white">
              {detail.heroDescription || serviceData.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button href="/quote" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button
                href="tel:402-326-8820"
                variant="outline"
                size="lg"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-titan-navy"
              >
                Call 402-326-8820
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      {detail.overview && (
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-titan-navy mb-6">Overview</h2>
              <p className="text-lg text-titan-steel leading-relaxed">{detail.overview}</p>
            </div>
          </div>
        </section>
      )}

      {/* Suitable Freight */}
      {detail.suitableFreight && detail.suitableFreight.length > 0 && (
        <section className="py-24 md:py-32 bg-titan-off-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-titan-navy mb-6">Suitable Freight</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {detail.suitableFreight.map((item: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg">
                    <span className="text-titan-blue text-xl">✓</span>
                    <span className="text-titan-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Equipment Info */}
      {detail.equipmentInfo && (
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-titan-navy mb-6">Equipment</h2>
              <p className="text-lg text-titan-steel leading-relaxed">{detail.equipmentInfo}</p>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {detail.benefits && detail.benefits.length > 0 && (
        <section className="py-24 md:py-32 bg-titan-off-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-titan-navy mb-6">Benefits</h2>
              <ul className="space-y-4">
                {detail.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-titan-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-lg text-titan-navy">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {detail.process && detail.process.length > 0 && (
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-titan-navy mb-6">How It Works</h2>
              <div className="space-y-6">
                {detail.process.map((step: string, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-blue text-white rounded-lg flex items-center justify-center font-display font-bold text-xl">
                      {index + 1}
                    </div>
                    <div className="pt-2">
                      <p className="text-lg text-titan-navy">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {detail.faqs && detail.faqs.length > 0 && (
        <section className="py-24 md:py-32 bg-titan-off-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-titan-navy mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {detail.faqs
                  .sort((a: any, b: any) => a.displayOrder - b.displayOrder)
                  .map((faq: any, index: number) => (
                  <div key={index} className="bg-white p-6 rounded-lg">
                    <h3 className="font-display font-bold text-lg text-titan-navy mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-titan-steel">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-titan text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Need {serviceData.title}?
          </h2>
          <p className="text-xl mb-8 text-titan-off-white max-w-2xl mx-auto">
            Get a custom quote for your freight transportation needs
          </p>
          <Button href="/quote" variant="primary" size="lg">
            Request a Quote Now
          </Button>
        </div>
      </section>
    </div>
  );
}
