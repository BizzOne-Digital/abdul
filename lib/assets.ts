/** Bump this (or NEXT_PUBLIC_ASSET_VERSION) when replacing images in /public */
export const ASSET_VERSION = process.env.NEXT_PUBLIC_ASSET_VERSION ?? '5';

export function assetUrl(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = path.split('?')[0];
  return `${base}?v=${ASSET_VERSION}`;
}

/** Local images shipped in /public */
export const SITE_IMAGES = {
  heroTruck: '/hero-truck.png',
  logoWhite: '/logo-white.png',
  galleryHero: '/gallery-hero.png',
} as const;

/** Card / slider / services page images */
export const SERVICE_LISTING_IMAGES: Record<string, string> = {
  'dry-van': '/services/dry-van-card.png',
  refrigerated: '/services/refrigerated-card.png',
  flatbed: '/services/flatbed-card.png',
  'power-only': '/services/power-only-card.png',
};

/** Detail page hero images */
export const SERVICE_HERO_IMAGES: Record<string, string> = {
  'dry-van': '/services/dry-van-hero.png',
  refrigerated: '/services/refrigerated-hero.png',
  flatbed: '/services/flatbed-hero.png',
  'power-only': '/services/power-only-hero.png',
};

/** @deprecated use SERVICE_LISTING_IMAGES */
export const SERVICE_IMAGES = SERVICE_LISTING_IMAGES;

/** Seed DB paths that point to files which are not bundled on deploy */
const SEED_UPLOAD_PATTERN = /^\/uploads\/services\/[\w-]+\.(jpg|jpeg|png|webp|avif)$/i;

export function isSeedUploadPath(path?: string): boolean {
  if (!path) return false;
  return SEED_UPLOAD_PATTERN.test(path);
}

export type ServiceImagePurpose = 'listing' | 'hero';

export function resolveServiceImage(
  slug: string,
  options?: {
    listingImage?: string;
    heroImage?: string;
    purpose?: ServiceImagePurpose;
  }
): string {
  const purpose = options?.purpose ?? 'listing';
  const candidates =
    purpose === 'hero'
      ? [options?.heroImage, options?.listingImage]
      : [options?.listingImage, options?.heroImage];

  for (const path of candidates) {
    if (!path) continue;
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return assetUrl(path);
    }
    if (path.startsWith('/') && !isSeedUploadPath(path)) {
      return assetUrl(path);
    }
  }

  const fallback =
    purpose === 'hero'
      ? (SERVICE_HERO_IMAGES[slug] ?? SERVICE_LISTING_IMAGES[slug] ?? SITE_IMAGES.heroTruck)
      : (SERVICE_LISTING_IMAGES[slug] ?? SERVICE_HERO_IMAGES[slug] ?? SITE_IMAGES.heroTruck);

  return assetUrl(fallback);
}
