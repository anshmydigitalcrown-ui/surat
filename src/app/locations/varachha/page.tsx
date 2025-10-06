'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function VarachhaEscorts() {
  const services = [
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "Elite companions for exclusive events in Varachha", price: "₹25,000+" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Professional support for corporate events in Varachha", price: "₹20,000+" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Perfect companions for social gatherings in Varachha", price: "₹15,000+" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Premium hotel escort services in Varachha area", price: "₹18,000+" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services from Varachha", price: "₹22,000+" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "High-class call girl services in Varachha", price: "₹20,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-red-400 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Varachha Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto animate-fadeInUp">
            Premium escort services in Varachha - Commercial hub with premium hotels and business centers
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
                About Varachha Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Varachha is one of Surat's most prominent commercial hubs, known for its bustling business centers, 
                premium hotels, and vibrant commercial activity. Our escort services in Varachha cater to the 
                sophisticated clientele of this upscale area.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-700 mb-2">🏢 Business District</h3>
                  <p className="text-sm text-red-600">Major commercial hub with corporate offices</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-700 mb-2">🏨 Premium Hotels</h3>
                  <p className="text-sm text-red-600">Luxury accommodations and venues</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-700 mb-2">🚗 Easy Access</h3>
                  <p className="text-sm text-red-600">Well-connected transportation links</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-700 mb-2">🍽️ Fine Dining</h3>
                  <p className="text-sm text-red-600">Upscale restaurants and entertainment</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-200 to-red-300 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🏙️</div>
                  <h3 className="text-2xl font-bold text-red-700">Varachha Commercial Hub</h3>
                  <p className="text-red-600 mt-2">Premium escort services available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
              Our Varachha Services
            </h2>
            <p className="text-xl text-red-600 max-w-3xl mx-auto">
              Premium escort services tailored for the sophisticated Varachha clientele
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
                  <h3 className="text-xl font-semibold text-red-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-bold text-lg">{service.price}</span>
                    <Link
                      href="/contact"
                      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors duration-300"
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

      {/* Why Choose Varachha */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
              Why Choose Our Varachha Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-red-700 mb-2">Business Ready</h3>
              <p className="text-red-600">Perfect for corporate events and business meetings in Varachha's commercial district</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-red-700 mb-2">Complete Discretion</h3>
              <p className="text-red-600">100% confidential services for professionals and business clients</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-red-700 mb-2">Premium Quality</h3>
              <p className="text-red-600">Elite companions who understand the sophisticated Varachha environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Varachha Escorts?</h2>
          <p className="text-xl mb-8 text-red-100">
            Contact us today to arrange premium escort services in the heart of Varachha's business district
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="tel:+91XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}