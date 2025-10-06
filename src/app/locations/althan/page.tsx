'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AlthanEscorts() {
  const services = [
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "Elite companions for exclusive events in Althan", price: "₹25,000+" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Perfect companions for social gatherings in Althan", price: "₹15,000+" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services from Althan locality", price: "₹22,000+" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Exclusive private model services in Althan", price: "₹28,000+" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "High-class call girl services in Althan", price: "₹20,000+" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Premium hotel escort services in Althan area", price: "₹18,000+" }
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Althan Escorts - RashmiKapoor",
            "image": "/images/services/VIP Companionship.webp",
            "description": "Premium escort services in Althan peaceful residential locality, Surat",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Althan, Surat",
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.2094,
              "longitude": 72.8258
            },
            "url": "https://surat-escorts.vercel.app/locations/althan",
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place", 
              "name": "Althan"
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-pink-400 to-pink-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fadeInUp leading-tight">
              Althan Escorts Services
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-pink-100 max-w-3xl mx-auto animate-fadeInUp leading-relaxed px-4">
              Premium escort services in Althan - Elite escort locations in peaceful residential locality
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="/contact"
                className="bg-white text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Book Now
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105 text-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Location Info - Mobile Optimized */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pink-700 mb-4 sm:mb-6">
                  About Althan Area
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  Althan is a peaceful residential locality in Surat, known for its quiet surroundings 
                  and family-friendly environment. Our escort services in Althan provide discrete and 
                  professional companionship for the locality&apos;s residents and visitors.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-pink-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-pink-700 mb-2 text-sm sm:text-base">🏠 Residential Peace</h3>
                    <p className="text-xs sm:text-sm text-pink-600">Quiet residential neighborhoods</p>
                  </div>
                  <div className="bg-pink-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-pink-700 mb-2 text-sm sm:text-base">👨‍👩‍👧‍👦 Family Area</h3>
                    <p className="text-xs sm:text-sm text-pink-600">Family-friendly community environment</p>
                  </div>
                  <div className="bg-pink-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-pink-700 mb-2 text-sm sm:text-base">🔒 Privacy</h3>
                    <p className="text-xs sm:text-sm text-pink-600">Discreet and private services</p>
                  </div>
                  <div className="bg-pink-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-pink-700 mb-2 text-sm sm:text-base">🌱 Peaceful</h3>
                    <p className="text-xs sm:text-sm text-pink-600">Calm and serene locality</p>
                  </div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl p-6 sm:p-8 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl sm:text-7xl lg:text-8xl mb-4">🏠</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-pink-700">Althan Residential</h3>
                    <p className="text-pink-600 mt-2 text-sm sm:text-base">Peaceful escort services available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Mobile First */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pink-700 mb-4 sm:mb-6">
                Our Althan Services
              </h2>
              <p className="text-lg sm:text-xl text-pink-600 max-w-3xl mx-auto">
                Premium escort services for Althan&apos;s peaceful residential community
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative h-48 sm:h-56 lg:h-64">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Althan Escort Service`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-pink-700 mb-2">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-pink-600 font-bold text-base sm:text-lg">{service.price}</span>
                      <Link
                        href="/contact"
                        className="bg-pink-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-pink-700 transition-colors duration-300"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Althan */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pink-700 mb-4 sm:mb-6">
                Why Choose Our Althan Services
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-4 sm:p-6 bg-pink-50 rounded-xl">
                <div className="text-3xl sm:text-4xl mb-4">🏠</div>
                <h3 className="text-lg sm:text-xl font-semibold text-pink-700 mb-2">Residential Calm</h3>
                <p className="text-sm sm:text-base text-pink-600">Perfect companions for Althan&apos;s peaceful residential lifestyle</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-pink-50 rounded-xl">
                <div className="text-3xl sm:text-4xl mb-4">🔒</div>
                <h3 className="text-lg sm:text-xl font-semibold text-pink-700 mb-2">Complete Privacy</h3>
                <p className="text-sm sm:text-base text-pink-600">Discreet services respecting the community&apos;s family values</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-pink-50 rounded-xl">
                <div className="text-3xl sm:text-4xl mb-4">⭐</div>
                <h3 className="text-lg sm:text-xl font-semibold text-pink-700 mb-2">Elite Quality</h3>
                <p className="text-sm sm:text-base text-pink-600">High-class companions for discerning Althan clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-pink-600 to-pink-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Book Althan Escorts?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-pink-100">
              Contact us today to arrange premium escort services in Althan&apos;s peaceful residential area
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="/contact"
                className="bg-white text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Contact Us Now
              </Link>
              <Link
                href="tel:+91XXXXXXXXX"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Call Directly
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
