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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-pink-400 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Althan Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto animate-fadeInUp">
            Premium escort services in Althan - Elite escort locations in peaceful residential locality
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-6">
                About Althan Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Althan is a peaceful residential area in Surat, known for its serene environment, 
                modern amenities, and growing infrastructure. Our escort services in Althan provide 
                discreet and professional companionship for the area&apos;s discerning residents.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-pink-700 mb-2">🏘️ Peaceful Living</h3>
                  <p className="text-sm text-pink-600">Quiet residential neighborhoods</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-pink-700 mb-2">🌿 Green Environment</h3>
                  <p className="text-sm text-pink-600">Parks and open spaces</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-pink-700 mb-2">🚗 Good Connectivity</h3>
                  <p className="text-sm text-pink-600">Well-connected to main city areas</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-pink-700 mb-2">🏪 Local Amenities</h3>
                  <p className="text-sm text-pink-600">Shopping centers and facilities</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🏞️</div>
                  <h3 className="text-2xl font-bold text-pink-700">Althan Peaceful Area</h3>
                  <p className="text-pink-600 mt-2">Elite escort services available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-6">
              Our Althan Services
            </h2>
            <p className="text-xl text-pink-600 max-w-3xl mx-auto">
              Professional escort services for Althan&apos;s peaceful residential community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-pink-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-pink-600 font-bold text-lg">{service.price}</span>
                    <Link
                      href="/contact"
                      className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors duration-300"
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-6">
              Why Choose Our Althan Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-xl font-semibold text-pink-700 mb-2">Residential Comfort</h3>
              <p className="text-pink-600">Perfect companions for Althan&apos;s peaceful residential lifestyle</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-pink-700 mb-2">Complete Privacy</h3>
              <p className="text-pink-600">Discreet services respecting the quiet residential atmosphere</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-pink-700 mb-2">Professional Quality</h3>
              <p className="text-pink-600">Elite companions for Althan&apos;s discerning residents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Althan Escorts?</h2>
          <p className="text-xl mb-8 text-pink-100">
            Contact us today to arrange elite escort services in Althan&apos;s peaceful residential area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="tel:+91XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}