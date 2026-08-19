/** Bump this (or NEXT_PUBLIC_ASSET_VERSION) when replacing images in /public */
export const ASSET_VERSION = process.env.NEXT_PUBLIC_ASSET_VERSION ?? '3';

export function assetUrl(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = path.split('?')[0];
  return `${base}?v=${ASSET_VERSION}`;
}

/** Local images shipped in /public — used on live deploy */
export const SITE_IMAGES = {
  heroTruck: '/hero-truck.png',
  logoWhite: '/logo-white.png',
  galleryHero: '/gallery-hero.png',
  serviceDryVan: '/service-1.png',
  serviceRefrigerated: '/service-1.png',
  serviceFlatbed: '/service-1.png',
  servicePowerOnly: '/hero-truck.png',
} as const;

export const SERVICE_IMAGES: Record<string, string> = {
  'dry-van': SITE_IMAGES.serviceDryVan,
  refrigerated: SITE_IMAGES.serviceRefrigerated,
  flatbed: SITE_IMAGES.serviceFlatbed,
  'power-only': SITE_IMAGES.servicePowerOnly,
};

/** Seed DB paths that point to files which are not bundled on deploy */
const SEED_UPLOAD_PATTERN = /^\/uploads\/services\/[\w-]+\.(jpg|jpeg|png|webp|avif)$/i;

export function isSeedUploadPath(path?: string): boolean {
  if (!path) return false;
  return SEED_UPLOAD_PATTERN.test(path);
}

export function resolveServiceImage(
  slug: string,
  options?: { listingImage?: string; heroImage?: string }
): string {
  const candidates = [options?.heroImage, options?.listingImage].filter(Boolean) as string[];

  for (const path of candidates) {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return assetUrl(path);
    }
    if (path.startsWith('/') && !isSeedUploadPath(path)) {
      return assetUrl(path);
    }
  }

  return assetUrl(SERVICE_IMAGES[slug] ?? SITE_IMAGES.heroTruck);
}
