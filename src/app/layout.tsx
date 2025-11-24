import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RashmiKapoor | Best Escort Service in Surat - Premium Call Girls 24/7",
  description: "#1 Escort Service in Surat - Experience luxury with premium escorts service in Surat. Professional call girls, VIP companions, and sophisticated escort service in Surat available 24/7. Serving Varachha, Adajan, Vesu, Citylight & all locations.",
  keywords: [
    "escort service in surat",
    "escorts service in surat",
    "best escort service in surat",
    "premium escort service surat",
    "escorts surat",
    "call girls surat",
    "call girls service in surat",
    "escort service surat",
    "VIP escort service in surat",
    "professional escort service surat",
    "luxury escorts service in surat",
    "surat escort service",
    "high class escort service in surat",
    "independent escorts surat",
    "24/7 escort service in surat",
    "varachha escort service",
    "adajan escort service",
    "vesu escort service",
    "outcall escort service surat",
    "incall escort service surat",
    "RashmiKapoor escort service"
  ].join(", "),
  authors: [{ name: "RashmiKapoor Escort Service" }],
  creator: "RashmiKapoor",
  publisher: "RashmiKapoor Escort Service",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://surat-escorts.vercel.app",
  },
  openGraph: {
    title: "RashmiKapoor | No.1 Best Escort Service Surat - Premium Call Girls 24/7",
    description: "Experience luxury and elegance with Surat's premier escort service. Professional, sophisticated, and discreet companionship available 24/7.",
    url: "https://surat-escorts.vercel.app",
    siteName: "RashmiKapoor Escort Service",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero/sexy-wet-bhabhi.webp",
        width: 1200,
        height: 630,
        alt: "RashmiKapoor - Premium Escort Service in Surat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RashmiKapoor | No.1 Best Escort Service Surat",
    description: "Experience luxury and elegance with Surat's premier escort service. Professional companionship available 24/7.",
    images: ["/images/hero/sexy-wet-bhabhi.webp"],
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Surat",
    "geo.position": "21.1702;72.8311",
    "ICBM": "21.1702, 72.8311",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "RashmiKapoor Escort Service",
              "image": "/images/hero/sexy-wet-bhabhi.webp",
              "description": "Premium escort service in Surat offering professional companionship",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 21.1702,
                "longitude": 72.8311
              },
              "url": "https://surat-escorts.vercel.app",
              "telephone": "+91-XXXXXXXXX",
              "openingHours": "Mo-Su 00:00-23:59",
              "serviceArea": {
                "@type": "City",
                "name": "Surat"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Floating Action Buttons */}
        <FloatingButtons />
      </body>
    </html>
  );
}
