'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function RanderEscorts() {
  const services = [
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Professional outcall services in Rander riverside area", price: "₹17,000+" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services along Rander waterfront", price: "₹23,000+" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Romantic dinner date companions in Rander", price: "₹16,000+" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Hotel escort services in Rander area", price: "₹18,000+" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "Premium call girl services in Rander", price: "₹21,000+" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companionship for Rander riverside experiences", price: "₹26,000+" },
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young college girl companions in Rander", price: "₹15,000+" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Rander", price: "₹24,000+" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Rander", price: "₹20,000+" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model escorts in Rander", price: "₹28,000+" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding escort services in Rander", price: "₹22,000+" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Rander", price: "₹19,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Rander Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto animate-fadeInUp">
            Premium escort services in Rander - Riverside companions for scenic and memorable experiences
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-6">
                About Rander Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Rander is a picturesque area in Surat located along the riverside, known for its 
                scenic beauty, historical significance, and peaceful atmosphere. Our escort services 
                in Rander offer companions for romantic riverside experiences and cultural exploration.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-700 mb-2">🌊 Riverside Location</h3>
                  <p className="text-sm text-yellow-600">Beautiful waterfront views and walks</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-700 mb-2">🏛️ Historical Sites</h3>
                  <p className="text-sm text-yellow-600">Ancient temples and monuments</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-700 mb-2">🌅 Scenic Beauty</h3>
                  <p className="text-sm text-yellow-600">Sunset views and natural landscapes</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-700 mb-2">🚤 River Activities</h3>
                  <p className="text-sm text-yellow-600">Boat rides and water sports</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌊</div>
                  <h3 className="text-2xl font-bold text-yellow-700">Rander Riverside</h3>
                  <p className="text-yellow-600 mt-2">Scenic escort services available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-6">
              Our Rander Services
            </h2>
            <p className="text-xl text-yellow-600 max-w-3xl mx-auto">
              Riverside escort services for romantic and scenic experiences in Rander
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-cyan-50 to-blue-50">
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
                  <h3 className="text-xl font-semibold text-yellow-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-600 font-bold text-lg">{service.price}</span>
                    <Link
                      href="/contact"
                      className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors duration-300"
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

      {/* Why Choose Rander */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-6">
              Why Choose Our Rander Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-4xl mb-4">🌅</div>
              <h3 className="text-xl font-semibold text-yellow-700 mb-2">Scenic Romance</h3>
              <p className="text-yellow-600">Perfect companions for Rander&apos;s beautiful riverside experiences</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-yellow-700 mb-2">Cultural Knowledge</h3>
              <p className="text-yellow-600">Companions familiar with Rander&apos;s historical significance</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-semibold text-yellow-700 mb-2">Waterfront Expertise</h3>
              <p className="text-yellow-600">Specialized companions for riverside activities and relaxation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Rander Escorts?</h2>
          <p className="text-xl mb-8 text-yellow-100">
            Contact us today to arrange scenic escort services in Rander&apos;s riverside area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="tel:+91XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}