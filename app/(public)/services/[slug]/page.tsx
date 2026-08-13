import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ServiceDetailView from '@/components/ServiceDetailView';
import dbConnect from '@/lib/mongodb';
import Service from '@/models/Service';
import {
  getServiceBySlug,
  SERVICE_ORDER,
  SERVICE_DETAILS,
} from '@/lib/services-catalog';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICE_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const fallback = SERVICE_DETAILS.find((s) => s.slug === slug);

  if (!fallback) {
    return { title: 'Service Not Found' };
  }

  try {
    await dbConnect();
    const service = await Service.findOne({ slug, isPublished: true }).lean().exec();
    const data = getServiceBySlug(slug, service ? JSON.parse(JSON.stringify(service)) : null);

    if (!data) return { title: 'Service Not Found' };

    return {
      title: data.detail.seoTitle,
      description: data.detail.seoDescription,
      openGraph: {
        title: data.detail.seoTitle,
        description: data.detail.seoDescription,
      },
    };
  } catch {
    return {
      title: fallback.detail.seoTitle,
      description: fallback.detail.seoDescription,
    };
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const fallback = getServiceBySlug(slug);

  if (!fallback) {
    notFound();
  }

  let service = fallback;

  try {
    await dbConnect();
    const dbService = await Service.findOne({ slug, isPublished: true }).lean().exec();
    if (dbService) {
      service = getServiceBySlug(slug, JSON.parse(JSON.stringify(dbService))) || fallback;
    }
  } catch {
    // Use catalog fallback when database is unavailable
  }

  return <ServiceDetailView service={service} />;
}
