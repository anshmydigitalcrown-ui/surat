'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AthwaEscorts() {
  const services = [
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions in Athwa cultural area", price: "₹18,000+" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Elegant dinner date companions in Athwa", price: "₹16,000+" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Cultural travel companion services from Athwa", price: "₹22,000+" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "Premium call girl services in Athwa", price: "₹20,000+" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Hotel escort services in Athwa area", price: "₹17,000+" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companionship for Athwa cultural events", price: "₹25,000+" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Athwa", price: "₹24,000+" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Athwa", price: "₹21,000+" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Athwa", price: "₹22,000+" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services in Athwa cultural area", price: "₹28,000+" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model companions in Athwa", price: "₹30,000+" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions in Athwa", price: "₹26,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-teal-500 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Athwa Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto animate-fadeInUp">
            Elite escort services in Athwa - Cultural companions for traditional and modern experiences
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
                About Athwa Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Athwa is a culturally rich area in Surat, known for its traditional markets, 
                cultural centers, and mix of old and new architecture. Our escort services in 
                Athwa provide sophisticated companionship for cultural events and social gatherings.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 mb-2">🎭 Cultural Hub</h3>
                  <p className="text-sm text-teal-600">Rich cultural heritage and events</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 mb-2">🏛️ Traditional Markets</h3>
                  <p className="text-sm text-teal-600">Historic markets and bazaars</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 mb-2">🎪 Event Venues</h3>
                  <p className="text-sm text-teal-600">Cultural centers and event spaces</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 mb-2">🍽️ Local Cuisine</h3>
                  <p className="text-sm text-teal-600">Traditional restaurants and eateries</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-200 to-teal-300 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🏛️</div>
                  <h3 className="text-2xl font-bold text-teal-700">Athwa Cultural Area</h3>
                  <p className="text-teal-600 mt-2">Cultural escort services available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
              Our Athwa Services
            </h2>
            <p className="text-xl text-teal-600 max-w-3xl mx-auto">
              Cultural escort services for Athwa&apos;s traditional and modern social scene
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-teal-50 to-cyan-50">
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
                  <h3 className="text-xl font-semibold text-teal-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-teal-600 font-bold text-lg">{service.price}</span>
                    <Link
                      href="/contact"
                      className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors duration-300"
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

      {/* Why Choose Athwa */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
              Why Choose Our Athwa Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">Cultural Awareness</h3>
              <p className="text-teal-600">Companions who appreciate Athwa&apos;s rich cultural heritage</p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">Social Elegance</h3>
              <p className="text-teal-600">Sophisticated companions for cultural and social events</p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">Event Expertise</h3>
              <p className="text-teal-600">Perfect companions for Athwa&apos;s cultural gatherings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Athwa Escorts?</h2>
          <p className="text-xl mb-8 text-teal-100">
            Contact us today to arrange cultural escort services in Athwa&apos;s traditional area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="tel:+91XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}