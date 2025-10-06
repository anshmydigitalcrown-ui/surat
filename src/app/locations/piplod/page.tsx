'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PiplodEscorts() {
  const services = [
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Professional companions for business meetings in Piplod", price: "₹20,000+" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Piplod business district", price: "₹18,000+" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "High-class call girl services in Piplod", price: "₹22,000+" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Professional hotel escort services in Piplod", price: "₹19,000+" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Business travel companion services from Piplod", price: "₹25,000+" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companionship for Piplod business executives", price: "₹28,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Piplod Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto animate-fadeInUp">
            Elite escort services in Piplod - Professional companions for business district excellence
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6">
                About Piplod Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Piplod is a rapidly developing business district in Surat, known for its commercial 
                centers, corporate offices, and upscale residential complexes. Our escort services 
                in Piplod cater to business professionals and executives seeking premium companionship.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-700 mb-2">🏢 Business Hub</h3>
                  <p className="text-sm text-indigo-600">Major corporate offices and centers</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-700 mb-2">🏨 Luxury Hotels</h3>
                  <p className="text-sm text-indigo-600">Premium hotels and business facilities</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-700 mb-2">🛍️ Shopping Centers</h3>
                  <p className="text-sm text-indigo-600">Modern malls and retail complexes</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-700 mb-2">🍽️ Fine Dining</h3>
                  <p className="text-sm text-indigo-600">Upscale restaurants and cafes</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🏙️</div>
                  <h3 className="text-2xl font-bold text-indigo-700">Piplod Business District</h3>
                  <p className="text-indigo-600 mt-2">Professional escort services available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6">
              Our Piplod Services
            </h2>
            <p className="text-xl text-indigo-600 max-w-3xl mx-auto">
              Professional escort services for Piplod&apos;s business community and corporate executives
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
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-600 font-bold text-lg">{service.price}</span>
                    <Link
                      href="/contact"
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors duration-300"
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

      {/* Why Choose Piplod */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6">
              Why Choose Our Piplod Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Business Professional</h3>
              <p className="text-indigo-600">Perfect companions for corporate events and business meetings</p>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Executive Excellence</h3>
              <p className="text-indigo-600">High-caliber companions for Piplod&apos;s business executives</p>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Premium Quality</h3>
              <p className="text-indigo-600">Elite services matching Piplod&apos;s business standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Piplod Escorts?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Contact us today to arrange professional escort services in Piplod&apos;s business district
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="tel:+91XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}