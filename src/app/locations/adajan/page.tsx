'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AdajanEscorts() {
  const services = [
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "Elite companions for exclusive events in Adajan", price: "₹25,000+" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Perfect companions for social gatherings in Adajan", price: "₹15,000+" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Elegant dinner companions in Adajan restaurants", price: "₹12,000+" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services from Adajan", price: "₹22,000+" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "High-class call girl services in Adajan", price: "₹20,000+" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Premium hotel escort services in Adajan area", price: "₹18,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-400 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Adajan Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fadeInUp">
            Premium escort services in Adajan - Upscale residential area with modern amenities and facilities
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
                About Adajan Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Adajan is one of Surat&apos;s most upscale residential areas, featuring modern amenities, 
                luxury apartments, and contemporary facilities. Our escort services in Adajan cater to 
                the refined taste of this prestigious locality&apos;s residents and visitors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">🏘️ Residential Hub</h3>
                  <p className="text-sm text-blue-600">Premium residential complexes and apartments</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">🏬 Modern Amenities</h3>
                  <p className="text-sm text-blue-600">Shopping centers and entertainment facilities</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">🌳 Green Spaces</h3>
                  <p className="text-sm text-blue-600">Parks and recreational areas</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">🍽️ Fine Dining</h3>
                  <p className="text-sm text-blue-600">Quality restaurants and cafes</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🏘️</div>
                  <h3 className="text-2xl font-bold text-blue-700">Adajan Residential Area</h3>
                  <p className="text-blue-600 mt-2">Premium escort services available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              Our Adajan Services
            </h2>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              Premium escort services for the sophisticated Adajan community
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
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold text-lg">{service.price}</span>
                    <Link
                      href="/contact"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
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

      {/* Why Choose Adajan */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              Why Choose Our Adajan Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Residential Comfort</h3>
              <p className="text-blue-600">Perfect companions for the refined Adajan residential lifestyle</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Privacy Assured</h3>
              <p className="text-blue-600">Discreet services respecting the community&apos;s privacy standards</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Premium Quality</h3>
              <p className="text-blue-600">Elite companions matching Adajan&apos;s upscale residential standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Adajan Escorts?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to arrange premium escort services in Adajan&apos;s prestigious residential area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="tel:+91XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}