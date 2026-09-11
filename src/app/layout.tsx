import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://tokopakanhasratkerja.com"
  ),
  title: {
    default: "Toko Pakan Hasrat Kerja | Distributor Pakan Ternak Boyolali",
    template: "%s | Toko Pakan Hasrat Kerja",
  },
  description:
    "Pusat pasokan pakan ternak sapi penggemukan, perah, konsentrat & pollard gandum di Senggrong, Andong, Boyolali. Melayani eceran sak hingga pengiriman armada tonase langsung ke kandang.",
  keywords: [
    "Hasrat Kerja",
    "pakan ternak boyolali",
    "distributor pakan ternak andong",
    "konsentrat sapi",
    "pakan ayam",
    "pakan ternak senggrong",
  ],
  icons: {
    icon: "/images/logo-hk.png",
    shortcut: "/images/logo-hk.png",
    apple: "/images/logo-hk.png",
  },
  openGraph: {
    title: "Toko Pakan Hasrat Kerja | Distributor Pakan Ternak Boyolali",
    description:
      "Pusat pasokan pakan ternak eceran & grosir tonase di Senggrong, Andong, Boyolali. Kualitas pabrikan terpercaya siap kirim langsung ke kandang.",
    url: "/",
    siteName: "Toko Pakan Hasrat Kerja",
    images: [
      {
        url: "/images/hero-3.jpeg",
        width: 1200,
        height: 630,
        alt: "Toko Pakan Hasrat Kerja Boyolali",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toko Pakan Hasrat Kerja",
    description:
      "Distributor pakan ternak & konsentrat Boyolali - Siap suplai tonase & eceran.",
    images: ["/images/hero-3.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Toko Pakan Hasrat Kerja",
  description:
    "Pusat pasokan pakan ternak sapi penggemukan, perah, konsentrat & pollard gandum di Senggrong, Andong, Boyolali. Melayani eceran sak hingga pengiriman armada tonase langsung ke kandang.",
  url: "https://tokopakanhasratkerja.com",
  telephone: "+6285718756267",
  image: "https://tokopakanhasratkerja.com/images/hero-3.jpeg",
  logo: "https://tokopakanhasratkerja.com/images/logo-hk.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Senggrong",
    addressLocality: "Kecamatan Andong",
    addressRegion: "Boyolali, Jawa Tengah",
    postalCode: "57384",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.38201,
    longitude: 110.781267,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:30",
      closes: "17:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakartaSans.variable} scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen bg-slate-50 text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
