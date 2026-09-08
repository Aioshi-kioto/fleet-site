import type { Metadata } from "next";
import { Great_Vibes, Inter } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} | Seattle Car Rentals`,
    template: `%s | ${site.brand}`,
  },
  description:
    "Premium Seattle car rentals from a 5.0 rated All-Star Turo host. Explore the fleet of luxury SUVs, sedans, and hybrid vehicles.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.brand,
    title: `${site.brand} | Seattle Car Rentals`,
    description:
      "Reliable car rentals in Seattle backed by 249+ completed trips and 5.0 rating on Turo.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} | Seattle Car Rentals`,
    description:
      "Reliable car rentals in Seattle backed by 249+ completed trips and 5.0 rating on Turo.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${script.variable} ${inter.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-zinc-950">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
