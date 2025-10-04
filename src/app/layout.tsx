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
  title: "RashmiKapoor | No.1 Best Escort Service Surat",
  description: "Experience luxury and elegance with Surat's premier escort service. Professional, sophisticated, and discreet companionship for all occasions.",
  keywords: "escorts, surat, companion services, luxury, premium, professional, RashmiKapoor",
  openGraph: {
    title: "RashmiKapoor | No.1 Best Escort Service Surat",
    description: "Experience luxury and elegance with Surat's premier escort service.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
