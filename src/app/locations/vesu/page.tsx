'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function VesuEscorts() {
  const services = [
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "Elite companions for exclusive events in Vesu", price: "₹25,000+" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Luxury travel companion services from Vesu", price: "₹22,000+" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Perfect companions for social gatherings in Vesu", price: "₹15,000+" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Exclusive private model services in Vesu", price: "₹28,000+" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "High-class call girl services in Vesu", price: "₹20,000+" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Elegant wedding escort services in Vesu", price: "₹18,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-400 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Vesu Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto animate-fadeInUp">
            Premium escort services in Vesu - Premium locality known for upscale living and shopping
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
                About Vesu Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vesu is one of Surat&apos;s most premium localities, renowned for upscale living, 
                luxury shopping destinations, and sophisticated lifestyle. Our escort services in Vesu 
                cater to the elite clientele who appreciate the finer things in life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">🌟 Premium Living</h3>
                  <p className="text-sm text-green-600">Luxury residential complexes and villas</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">🛍️ Shopping Hub</h3>
                  <p className="text-sm text-green-600">High-end shopping centers and boutiques</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">🏛️ Cultural Centers</h3>
                  <p className="text-sm text-green-600">Art galleries and cultural venues</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">🍽️ Fine Dining</h3>
                  <p className="text-sm text-green-600">Premium restaurants and luxury cafes</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold text-green-700">Vesu Premium Area</h3>
                  <p className="text-green-600 mt-2">Luxury escort services available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
              Our Vesu Services
            </h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto">
              Luxury escort services for Vesu&apos;s elite and sophisticated clientele
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
                  <h3 className="text-xl font-semibold text-green-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold text-lg">{service.price}</span>
                    <Link
                      href="/contact"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-300"
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

      {/* Why Choose Vesu */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
              Why Choose Our Vesu Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Luxury Standards</h3>
              <p className="text-green-600">Premium companions matching Vesu&apos;s luxury lifestyle standards</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Elite Discretion</h3>
              <p className="text-green-600">Highest level of privacy for Vesu&apos;s distinguished residents</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Exclusive Access</h3>
              <p className="text-green-600">Elite companions for Vesu&apos;s upscale events and venues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Vesu Escorts?</h2>
          <p className="text-xl mb-8 text-green-100">
            Contact us today to arrange luxury escort services in Vesu&apos;s premium locality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="tel:+91XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}