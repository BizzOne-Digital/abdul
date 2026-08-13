import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CinematicIntro from "@/components/CinematicIntro";

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
  return (
    <html lang="en" className="scroll-smooth overflow-x-clip w-full">
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
