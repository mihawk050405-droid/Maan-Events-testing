import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maanevents.com"),
  title: {
    default:
      "Maan Events — Event Infrastructure for Government, Corporate & Mega Events",
    template: "%s · Maan Events",
  },
  description:
    "Since 1983, Maan Events has built the infrastructure behind India's largest government, corporate and public events. In-house pandals, hangars, pagodas, AC, decor and venue construction at scale.",
  keywords: [
    "event infrastructure India",
    "pandal construction",
    "hangar event",
    "pagoda tents",
    "government event setup",
    "exhibition stalls",
    "venue construction",
    "Maan Events",
    "Hyderabad event company",
    "Vijayawada event infrastructure",
  ],
  openGraph: {
    title: "Maan Events — Event Infrastructure at Scale",
    description:
      "India's premier event infrastructure company. Trusted by governments, corporates and the nation's largest public events since 1983.",
    type: "website",
    locale: "en_IN",
    siteName: "Maan Events",
    url: "/",
    images: [
      {
        url: "/portfolio/pm-events/kurnool-event/01.jpg",
        width: 2000,
        height: 1125,
        alt: "Maan Events — large-scale event infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maan Events — Event Infrastructure at Scale",
    description:
      "India's premier event infrastructure company. Trusted by governments, corporates and the nation's largest public events since 1983.",
    images: ["/portfolio/pm-events/kurnool-event/01.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14100C",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable}`}
    >
      {/* The page ground belongs to the body rule in globals.css. An
          inline background here would beat that rule and put this page
          outside the palette. */}
      <body className="min-h-dvh flex flex-col text-ink antialiased">
        <LocalBusinessJsonLd />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}