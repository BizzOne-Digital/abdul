import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
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
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.variable} ${barlowCondensed.variable} font-sans antialiased bg-titan-white text-titan-navy overflow-x-hidden w-full max-w-full`}
      >
        <div className="overflow-x-hidden w-full max-w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
