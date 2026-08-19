export type ServiceFAQ = {
  question: string;
  answer: string;
  displayOrder: number;
};

export type ServiceDetailContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroImageAlt: string;
  overview: string;
  suitableFreight: string[];
  equipmentInfo: string;
  benefits: string[];
  process: string[];
  coverageInfo: string;
  faqs: ServiceFAQ[];
  seoTitle: string;
  seoDescription: string;
};

export type ServiceFull = {
  slug: string;
  title: string;
  shortDescription: string;
  listingImage?: string;
  listingImageAlt: string;
  keyHighlights: string[];
  displayOrder: number;
  detail: ServiceDetailContent & { heroImage?: string };
};

import {
  SERVICE_IMAGES,
  SERVICE_LISTING_IMAGES,
  SERVICE_HERO_IMAGES,
  SITE_IMAGES,
  assetUrl,
  isSeedUploadPath,
  resolveServiceImage,
  type ServiceImagePurpose,
} from '@/lib/assets';

export {
  SERVICE_IMAGES,
  SERVICE_LISTING_IMAGES,
  SERVICE_HERO_IMAGES,
  SITE_IMAGES,
  assetUrl,
  resolveServiceImage,
  type ServiceImagePurpose,
};

export const SERVICE_ORDER = ['dry-van', 'refrigerated', 'flatbed', 'power-only'] as const;

export const SERVICE_DETAILS: ServiceFull[] = [
  {
    slug: 'dry-van',
    title: 'Dry Van Transportation',
    shortDescription:
      'Secure enclosed trailer transportation for general freight and palletized goods that do not require refrigeration.',
    listingImageAlt: 'Dry van semi-truck trailer',
    keyHighlights: [
      "Standard 53' enclosed trailers",
      'Protection from weather and road elements',
      'Ideal for palletized freight',
      'Lower 48 coverage',
    ],
    displayOrder: 1,
    detail: {
      heroImage: SERVICE_HERO_IMAGES['dry-van'],
      heroEyebrow: 'Dry Van Services',
      heroTitle: 'Reliable Dry Van Transportation',
      heroDescription:
        'Professional enclosed trailer transportation for your general freight needs across the lower 48 states.',
      heroImageAlt: 'Dry van transportation services',
      overview:
        'Our dry van service provides secure, weather-protected transportation for a wide variety of freight types. With standard 53-foot enclosed trailers and experienced CDL-A drivers, we deliver palletized goods, packaged merchandise, and general freight safely and on schedule throughout the contiguous United States.',
      suitableFreight: [
        'General merchandise',
        'Packaged goods',
        'Non-perishable food items',
        'Building materials',
        'Furniture & fixtures',
        'Electronics & consumer goods',
      ],
      equipmentInfo:
        'We utilize standard 53-foot enclosed trailers with swing or roll-up doors, providing maximum protection for your cargo from weather, road debris, and theft. All equipment is well-maintained and GPS-tracked for real-time visibility.',
      benefits: [
        'Full weather and road debris protection',
        '24/7 dispatch availability',
        'Flexible pickup and delivery scheduling',
        'Experienced professional drivers',
        'Complete lower 48 state coverage',
        'Real-time shipment updates',
      ],
      process: [
        'Submit your shipment details and freight requirements',
        'Receive a competitive custom quote from dispatch',
        'Schedule pickup at your preferred time and location',
        'Track your shipment with updates throughout transit',
        'Confirm safe, on-time delivery at destination',
      ],
      coverageInfo:
        'Dry van service is available throughout all 48 contiguous United States with reliable routing on major interstate highways and regional lanes.',
      faqs: [
        {
          question: 'What types of freight work best for dry van?',
          answer:
            'Dry van is ideal for general packaged freight, palletized goods, and items that need protection from weather but do not require temperature control.',
          displayOrder: 1,
        },
        {
          question: 'What are your trailer dimensions?',
          answer:
            'We use standard 53-foot trailers with interior dimensions suitable for most palletized freight configurations. Contact dispatch for specific load requirements.',
          displayOrder: 2,
        },
        {
          question: 'Do you offer expedited dry van service?',
          answer:
            'Yes. Our 24/7 dispatch team can coordinate expedited pickups and dedicated runs based on your timeline and lane requirements.',
          displayOrder: 3,
        },
      ],
      seoTitle: 'Dry Van Transportation Services | Titan Logistics LLC',
      seoDescription:
        'Professional dry van freight transportation across the lower 48 states. Secure enclosed trailers, 24/7 dispatch, and reliable delivery.',
    },
  },
  {
    slug: 'refrigerated',
    title: 'Refrigerated Transportation',
    shortDescription:
      'Temperature-controlled transportation for perishable goods requiring precise climate management throughout transit.',
    listingImageAlt: 'Refrigerated reefer trailer',
    keyHighlights: [
      'Precise temperature control',
      'Food-grade certified trailers',
      'Real-time temperature monitoring',
      'Perishable freight expertise',
    ],
    displayOrder: 2,
    detail: {
      heroImage: SERVICE_HERO_IMAGES.refrigerated,
      heroEyebrow: 'Refrigerated Services',
      heroTitle: 'Temperature-Controlled Freight Solutions',
      heroDescription:
        'Reliable refrigerated transportation for perishables, food products, and temperature-sensitive cargo.',
      heroImageAlt: 'Refrigerated transportation services',
      overview:
        'Our refrigerated service maintains precise temperature control for perishable goods throughout every mile of transit. From fresh produce to frozen foods and pharmaceuticals, our food-grade certified reefer units and experienced drivers ensure your products arrive in optimal condition.',
      suitableFreight: [
        'Fresh produce & vegetables',
        'Frozen foods & ice cream',
        'Dairy products',
        'Meat, poultry & seafood',
        'Pharmaceuticals',
        'Temperature-sensitive chemicals',
      ],
      equipmentInfo:
        'Temperature-controlled reefer trailers with multi-zone capability, continuous monitoring systems, and food-safety compliant equipment maintained to the highest standards.',
      benefits: [
        'Precise temperature management from pickup to delivery',
        'Food-safety compliant reefer equipment',
        'Experienced in perishable freight handling',
        '24/7 dispatch and monitoring support',
        'Lower 48 state coverage',
        'Compliance documentation available',
      ],
      process: [
        'Specify your temperature requirements and product details',
        'Receive a competitive refrigerated freight quote',
        'Schedule temperature-verified pickup',
        'Monitor transit conditions with dispatch updates',
        'Confirm on-time delivery with temperature integrity',
      ],
      coverageInfo:
        'Refrigerated service available across all 48 contiguous United States with established cold chain lanes and regional coverage.',
      faqs: [
        {
          question: 'What temperature ranges can you maintain?',
          answer:
            'Our refrigerated units maintain a wide range of temperatures suitable for frozen, chilled, and climate-controlled freight. Specify your requirements when requesting a quote.',
          displayOrder: 1,
        },
        {
          question: 'Are your trailers food-grade certified?',
          answer:
            'Yes. Our reefer equipment is maintained to food-safety standards suitable for food and beverage transportation.',
          displayOrder: 2,
        },
        {
          question: 'Can you handle multi-stop refrigerated deliveries?',
          answer:
            'Contact our dispatch team to discuss multi-stop routes and delivery sequences for your refrigerated freight.',
          displayOrder: 3,
        },
      ],
      seoTitle: 'Refrigerated Transportation Services | Titan Logistics LLC',
      seoDescription:
        'Professional temperature-controlled freight transportation for perishable goods across the lower 48 states.',
    },
  },
  {
    slug: 'flatbed',
    title: 'Flatbed Transportation',
    shortDescription:
      'Open-deck transportation for oversized, heavy, or uniquely shaped freight that requires specialized loading and securement.',
    listingImageAlt: 'Flatbed semi-truck trailer',
    keyHighlights: [
      'Oversized load capability',
      'Heavy equipment transport',
      'Specialized securement',
      'Construction and industrial freight',
    ],
    displayOrder: 3,
    detail: {
      heroImage: SERVICE_HERO_IMAGES.flatbed,
      heroEyebrow: 'Flatbed Services',
      heroTitle: 'Specialized Flatbed Transportation',
      heroDescription:
        'Professional flatbed solutions for oversized, heavy, and irregularly shaped freight nationwide.',
      heroImageAlt: 'Flatbed transportation services',
      overview:
        'Our flatbed service handles oversized, heavy, and irregularly shaped freight that cannot fit in enclosed trailers. With professional load securement, experienced drivers, and flexible loading options, we transport construction equipment, steel, machinery, and large industrial components safely across the lower 48.',
      suitableFreight: [
        'Construction equipment',
        'Steel & metal products',
        'Lumber & building materials',
        'Industrial machinery',
        'Vehicles & automotive',
        'Large industrial components',
      ],
      equipmentInfo:
        'Standard flatbed trailers with professional tie-down, chain, and securement equipment. Our drivers are trained in proper load securement per DOT regulations.',
      benefits: [
        'Experienced in oversized and heavy freight',
        'Professional DOT-compliant load securement',
        'Flexible top, side, and crane loading options',
        '24/7 dispatch support',
        'Lower 48 coverage',
        'Dedicated project coordination available',
      ],
      process: [
        'Provide freight dimensions, weight, and loading requirements',
        'Receive a specialized flatbed quote',
        'Coordinate pickup and loading method',
        'Professional securement and transport',
        'Confirm safe delivery and offloading',
      ],
      coverageInfo:
        'Flatbed service available throughout the contiguous United States on major routes and specialized project lanes.',
      faqs: [
        {
          question: 'What size loads can you handle?',
          answer:
            'We handle standard flatbed dimensions and can discuss specialized requirements for oversized freight. Contact dispatch with your load specs for confirmation.',
          displayOrder: 1,
        },
        {
          question: 'Do you provide tarps and securement?',
          answer:
            'Our drivers carry professional securement equipment. Tarping requirements can be discussed when booking your load.',
          displayOrder: 2,
        },
        {
          question: 'Can you transport construction equipment?',
          answer:
            'Yes. Flatbed is our primary solution for construction equipment, machinery, and heavy industrial freight.',
          displayOrder: 3,
        },
      ],
      seoTitle: 'Flatbed Transportation Services | Titan Logistics LLC',
      seoDescription:
        'Professional flatbed freight transportation for oversized and heavy loads across the lower 48 states.',
    },
  },
  {
    slug: 'power-only',
    title: 'Power Only',
    shortDescription:
      'Tractor-only service for hauling customer-owned trailers. Ideal for drop-and-hook operations and trailer repositioning.',
    listingImageAlt: 'Semi tractor on interstate highway',
    keyHighlights: [
      'Drop & hook operations',
      'Customer-owned trailers',
      'Flexible fleet capacity',
      'Lower 48 coverage',
    ],
    displayOrder: 4,
    detail: {
      heroImage: SERVICE_HERO_IMAGES['power-only'],
      heroEyebrow: 'Power Only Services',
      heroTitle: 'Professional Power Only Transportation',
      heroDescription:
        'We provide the tractor—you provide the trailer. Flexible capacity for drop-and-hook and trailer repositioning.',
      heroImageAlt: 'Power only trucking services',
      overview:
        'Our power only service supplies professional tractors and CDL-A drivers to haul your trailers. Perfect for shippers, brokers, and fleets who own or lease trailer equipment and need reliable power units for drop-and-hook operations, trailer repositioning, or seasonal capacity surges.',
      suitableFreight: [
        'Customer-owned dry van trailers',
        'Customer-owned reefer trailers',
        'Drop-and-hook freight networks',
        'Trailer repositioning & relocation',
        'Seasonal capacity needs',
        'Dedicated lane power support',
      ],
      equipmentInfo:
        'Late-model tractors with experienced CDL-A drivers, ready to connect to your trailers. All power units are well-maintained, DOT-compliant, and GPS-equipped.',
      benefits: [
        'No trailer investment required from Titan',
        'Drop-and-hook operational efficiency',
        '24/7 dispatch support',
        'Experienced professional drivers',
        'Flexible capacity on demand',
        'Lower 48 state coverage',
      ],
      process: [
        'Provide trailer pickup location and load details',
        'Receive a competitive power-only quote',
        'Schedule tractor arrival at pickup point',
        'Hook up and transport your trailer',
        'Confirm delivery or drop at destination',
      ],
      coverageInfo:
        'Power only service available throughout the contiguous United States with coverage on major freight lanes and regional routes.',
      faqs: [
        {
          question: 'What is power only trucking?',
          answer:
            'Power only means we provide the tractor (power unit) while you provide the trailer. This is common for drop-and-hook operations and companies with their own trailer fleet.',
          displayOrder: 1,
        },
        {
          question: 'What types of trailers can you pull?',
          answer:
            'We can haul standard dry van and refrigerated trailers. Contact dispatch to discuss specific trailer types and connection requirements.',
          displayOrder: 2,
        },
        {
          question: 'Is power only available for ongoing lanes?',
          answer:
            'Yes. We support both one-time moves and recurring lane commitments. Speak with dispatch about dedicated power-only capacity.',
          displayOrder: 3,
        },
      ],
      seoTitle: 'Power Only Trucking Services | Titan Logistics LLC',
      seoDescription:
        'Professional power only freight services—tractor supplied, your trailer hauled across the lower 48 states.',
    },
  },
];

export type ServiceListing = Pick<
  ServiceFull,
  'slug' | 'title' | 'shortDescription' | 'listingImage' | 'listingImageAlt' | 'keyHighlights' | 'displayOrder'
>;

export const DEFAULT_SERVICES: ServiceListing[] = SERVICE_DETAILS.map(
  ({ slug, title, shortDescription, listingImageAlt, keyHighlights, displayOrder }) => ({
    slug,
    title,
    shortDescription,
    listingImageAlt,
    keyHighlights,
    displayOrder,
    listingImage: SERVICE_LISTING_IMAGES[slug],
  })
);

/** @deprecated use resolveServiceImage from @/lib/assets */
export function getServiceImage(
  slug: string,
  listingImage?: string,
  heroImage?: string,
  purpose: ServiceImagePurpose = 'listing'
): string {
  return resolveServiceImage(slug, { listingImage, heroImage, purpose });
}

export function mergeServices(dbServices: ServiceListing[]): ServiceListing[] {
  return SERVICE_ORDER.map((slug) => {
    const fromDb = dbServices.find((s) => s.slug === slug);
    const fallback = DEFAULT_SERVICES.find((s) => s.slug === slug)!;
    if (!fromDb) return fallback;
    const listingImage = isSeedUploadPath(fromDb.listingImage)
      ? fallback.listingImage
      : fromDb.listingImage || fallback.listingImage;
    return { ...fallback, ...fromDb, slug, listingImage };
  });
}

export function getServiceBySlug(slug: string, dbService?: Record<string, unknown> | null): ServiceFull | null {
  const fallback = SERVICE_DETAILS.find((s) => s.slug === slug);
  if (!fallback) return null;
  if (!dbService) {
    return {
      ...fallback,
      listingImage: SERVICE_LISTING_IMAGES[fallback.slug],
      detail: {
        ...fallback.detail,
        heroImage: fallback.detail.heroImage ?? SERVICE_HERO_IMAGES[fallback.slug],
      },
    };
  }

  const detail = (dbService.detail as (Partial<ServiceDetailContent> & { heroImage?: string }) | undefined) ?? {};
  const detailHero = detail.heroImage;

  return {
    ...fallback,
    slug,
    title: (dbService.title as string) || fallback.title,
    shortDescription: (dbService.shortDescription as string) || fallback.shortDescription,
    listingImageAlt: (dbService.listingImageAlt as string) || fallback.listingImageAlt,
    listingImage: isSeedUploadPath(dbService.listingImage as string | undefined)
      ? fallback.listingImage
      : ((dbService.listingImage as string) || fallback.listingImage),
    keyHighlights:
      Array.isArray(dbService.keyHighlights) && dbService.keyHighlights.length > 0
        ? (dbService.keyHighlights as string[])
        : fallback.keyHighlights,
    displayOrder: (dbService.displayOrder as number) ?? fallback.displayOrder,
    detail: {
      ...fallback.detail,
      ...detail,
      heroImage: isSeedUploadPath(detailHero)
        ? (fallback.detail.heroImage ?? SERVICE_HERO_IMAGES[slug])
        : (detailHero || fallback.detail.heroImage || SERVICE_HERO_IMAGES[slug]),
      heroEyebrow: detail.heroEyebrow || fallback.detail.heroEyebrow,
      heroTitle: detail.heroTitle || fallback.detail.heroTitle,
      heroDescription: detail.heroDescription || fallback.detail.heroDescription,
      overview: detail.overview || fallback.detail.overview,
      equipmentInfo: detail.equipmentInfo || fallback.detail.equipmentInfo,
      coverageInfo: detail.coverageInfo || fallback.detail.coverageInfo,
      seoTitle: detail.seoTitle || fallback.detail.seoTitle,
      seoDescription: detail.seoDescription || fallback.detail.seoDescription,
      suitableFreight:
        detail.suitableFreight?.length ? detail.suitableFreight : fallback.detail.suitableFreight,
      benefits: detail.benefits?.length ? detail.benefits : fallback.detail.benefits,
      process: detail.process?.length ? detail.process : fallback.detail.process,
      faqs: detail.faqs?.length ? detail.faqs : fallback.detail.faqs,
    },
  };
}

export function getOtherServices(currentSlug: string): ServiceFull[] {
  return SERVICE_DETAILS.filter((s) => s.slug !== currentSlug);
}
