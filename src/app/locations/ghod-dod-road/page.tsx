'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function GhodDodRoadEscorts() {
  const services = [
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companions for Ghod Dod Road elite venues", price: "₹27,000+" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Luxury hotel escort services on Ghod Dod Road", price: "₹19,000+" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Professional business meeting companions", price: "₹21,000+" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Elegant dinner companions on Ghod Dod Road", price: "₹18,000+" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Premium travel companion services", price: "₹24,000+" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "High-class call girl services on main road", price: "₹22,000+" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions on Ghod Dod Road", price: "₹25,000+" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions on main road", price: "₹23,000+" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions on Ghod Dod Road", price: "₹20,000+" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services on Ghod Dod Road", price: "₹29,000+" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model companions on main road", price: "₹32,000+" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions", price: "₹28,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-rose-500 to-rose-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Ghod Dod Road Escorts
          </h1>
          <p className="text-xl md:text-2xl text-rose-100 max-w-3xl mx-auto animate-fadeInUp">
            Premium escort services on Ghod Dod Road - Elite companions for main arterial road experiences
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-rose-700 mb-6">
                About Ghod Dod Road
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ghod Dod Road is one of Surat&apos;s main arterial roads, connecting various important 
                areas of the city. Known for its commercial establishments, hotels, and business centers, 
                it&apos;s a prime location for professional escort services and elite companionship.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-rose-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-rose-700 mb-2">🛣️ Main Arterial Road</h3>
                  <p className="text-sm text-rose-600">Key connecting route in Surat</p>
                </div>
                <div className="bg-rose-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-rose-700 mb-2">🏨 Premium Hotels</h3>
                  <p className="text-sm text-rose-600">Luxury hotels and business centers</p>
                </div>
                <div className="bg-rose-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-rose-700 mb-2">🏪 Commercial Hub</h3>
                  <p className="text-sm text-rose-600">Shopping centers and businesses</p>
                </div>
                <div className="bg-rose-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-rose-700 mb-2">🚗 Easy Access</h3>
                  <p className="text-sm text-rose-600">Excellent connectivity and transport</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-rose-200 to-rose-300 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🛣️</div>
                  <h3 className="text-2xl font-bold text-rose-700">Ghod Dod Road</h3>
                  <p className="text-rose-600 mt-2">Premium escort services available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-700 mb-6">
              Our Ghod Dod Road Services
            </h2>
            <p className="text-xl text-rose-600 max-w-3xl mx-auto">
              Elite escort services along Surat&apos;s main arterial road for premium experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-orange-50 to-red-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rose-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-rose-600 font-bold text-lg">{service.price}</span>
                    <Link
                      href="/contact"
                      className="bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-rose-700 transition-colors duration-300"
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

      {/* Why Choose Ghod Dod Road */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-700 mb-6">
              Why Choose Our Ghod Dod Road Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-rose-50 rounded-xl">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-rose-700 mb-2">Prime Location</h3>
              <p className="text-rose-600">Strategic location on Surat&apos;s main arterial road for easy access</p>
            </div>
            <div className="text-center p-6 bg-rose-50 rounded-xl">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-rose-700 mb-2">Elite Services</h3>
              <p className="text-rose-600">Premium companions matching the road&apos;s upscale establishments</p>
            </div>
            <div className="text-center p-6 bg-rose-50 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-rose-700 mb-2">Quick Access</h3>
              <p className="text-rose-600">Convenient location with excellent connectivity throughout Surat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-rose-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Ghod Dod Road Escorts?</h2>
          <p className="text-xl mb-8 text-rose-100">
            Contact us today to arrange premium escort services on Ghod Dod Road
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="tel:+91XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}