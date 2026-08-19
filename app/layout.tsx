import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CinematicIntro from "@/components/CinematicIntro";
import { ASSET_VERSION, SITE_IMAGES } from "@/lib/assets";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Titan Logistics LLC - Freight Transportation Services",
  description: "General freight transportation across the lower 48 states, specializing in dry van, refrigerated, and flatbed solutions.",
  keywords: ["freight transportation", "logistics", "dry van", "refrigerated", "flatbed", "trucking"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const v = ASSET_VERSION;
  const assetVars = `
    :root {
      --img-hero-truck: url('${SITE_IMAGES.heroTruck}?v=${v}');
      --img-service-1: url('${SITE_IMAGES.serviceDryVan}?v=${v}');
      --img-logo-white: url('${SITE_IMAGES.logoWhite}?v=${v}');
    }
  `;

  return (
    <html lang="en" className="scroll-smooth overflow-x-clip w-full">
      <head>
        <style dangerouslySetInnerHTML={{ __html: assetVars }} />
      </head>
      <body
        className={`${jakarta.variable} font-sans antialiased bg-titan-off-white text-titan-navy overflow-x-clip w-full max-w-full`}
      >
        <SmoothScroll />
        <CinematicIntro />
        <div className="overflow-x-clip w-full max-w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
