'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function RingRoadEscorts() {
  const services = [
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Highway travel companion services on Ring Road", price: "₹24,000+" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Professional outcall services along Ring Road", price: "₹18,000+" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Highway hotel escort services on Ring Road", price: "₹19,000+" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companionship for Ring Road travelers", price: "₹26,000+" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions on Ring Road", price: "₹20,000+" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "Premium call girl services on Ring Road", price: "₹22,000+" },
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young college girl companions on Ring Road", price: "₹15,000+" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions on Ring Road", price: "₹24,000+" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model escorts on Ring Road", price: "₹28,000+" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions on Ring Road", price: "₹30,000+" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions on Ring Road", price: "₹20,000+" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions on Ring Road", price: "₹17,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-cyan-500 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Ring Road Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto animate-fadeInUp">
            Elite escort services on Ring Road - Premium companions for highway and travel experiences
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-6">
                About Ring Road Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ring Road is a major highway route that connects various parts of Surat and serves 
                as a key transportation corridor. Our escort services on Ring Road cater to travelers, 
                business professionals, and those seeking premium companionship along this important route.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-700 mb-2">🛣️ Major Highway</h3>
                  <p className="text-sm text-cyan-600">Important transportation corridor</p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-700 mb-2">🏨 Highway Hotels</h3>
                  <p className="text-sm text-cyan-600">Business hotels and lodges</p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-700 mb-2">🚗 Travel Hub</h3>
                  <p className="text-sm text-cyan-600">Key route for inter-city travel</p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-700 mb-2">⛽ Service Centers</h3>
                  <p className="text-sm text-cyan-600">Rest stops and facilities</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌐</div>
                  <h3 className="text-2xl font-bold text-cyan-700">Ring Road Highway</h3>
                  <p className="text-cyan-600 mt-2">Highway escort services available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-6">
              Our Ring Road Services
            </h2>
            <p className="text-xl text-cyan-600 max-w-3xl mx-auto">
              Highway escort services for travelers and professionals on Ring Road
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-emerald-50 to-green-50">
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
                  <h3 className="text-xl font-semibold text-cyan-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-600 font-bold text-lg">{service.price}</span>
                    <Link
                      href="/contact"
                      className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700 transition-colors duration-300"
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

      {/* Why Choose Ring Road */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-6">
              Why Choose Our Ring Road Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-cyan-50 rounded-xl">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">Travel Specialists</h3>
              <p className="text-cyan-600">Perfect companions for highway travel and business trips</p>
            </div>
            <div className="text-center p-6 bg-cyan-50 rounded-xl">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">Strategic Location</h3>
              <p className="text-cyan-600">Convenient access to major routes and destinations</p>
            </div>
            <div className="text-center p-6 bg-cyan-50 rounded-xl">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">24/7 Availability</h3>
              <p className="text-cyan-600">Round-the-clock services for highway travelers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Escorts in Ring Road Content Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-cyan-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-800 mb-6">
              Escorts in Ring Road - Highway Travel Companionship
            </h2>
            <p className="text-lg sm:text-xl text-cyan-700 max-w-4xl mx-auto leading-relaxed">
              Experience premium escort services on Ring Road, Surat&apos;s major highway corridor offering 
              travel companionship, strategic connectivity, and professional service for travelers, 
              business professionals, and visitors using this important transportation route
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-cyan-800 mb-4">
                Why Choose Ring Road Escorts?
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Ring Road represents a crucial transportation artery in Surat, serving as a major 
                highway that connects the city to various destinations and facilitates efficient 
                movement of travelers and business professionals. Our specialized escort services 
                on Ring Road are designed to cater to the unique needs of travelers, offering 
                companions who understand the dynamics of highway travel and mobility.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Whether you&apos;re a business traveler, visiting professional, or someone using 
                Ring Road for transportation, our companions provide the perfect blend of travel 
                expertise and professional companionship. They are experienced in highway travel 
                protocols and can adapt to various travel scenarios and requirements.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-cyan-800 mb-4">
                Highway Travel Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-cyan-100">
                  <h4 className="font-semibold text-cyan-700 mb-2">Travel Companions</h4>
                  <p className="text-sm text-gray-600">Professional companions for highway travel and business trips</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-cyan-100">
                  <h4 className="font-semibold text-cyan-700 mb-2">Highway Hotels</h4>
                  <p className="text-sm text-gray-600">Escort services for highway hotel accommodations</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-cyan-100">
                  <h4 className="font-semibold text-cyan-700 mb-2">Business Travel</h4>
                  <p className="text-sm text-gray-600">Professional support for business travelers on Ring Road</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-cyan-100">
                  <h4 className="font-semibold text-cyan-700 mb-2">Transit Services</h4>
                  <p className="text-sm text-gray-600">Companion services for travelers in transit through Surat</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-white mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Ring Road&apos;s Transportation Hub
                </h3>
                <p className="text-cyan-100 leading-relaxed mb-6">
                  As a major highway and transportation corridor, Ring Road serves as a vital link 
                  connecting Surat to other cities and facilitating smooth travel for business and 
                  leisure purposes. Our escort services leverage this strategic location to provide 
                  convenient access for travelers, business professionals, and visitors who require 
                  companionship services while using this important transportation route.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-cyan-500 px-4 py-2 rounded-full text-sm font-medium">Highway Access</span>
                  <span className="bg-cyan-500 px-4 py-2 rounded-full text-sm font-medium">Travel Expertise</span>
                  <span className="bg-cyan-500 px-4 py-2 rounded-full text-sm font-medium">24/7 Service</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🛣️</div>
                  <h4 className="text-xl font-bold mb-2">Highway Corridor</h4>
                  <p className="text-cyan-100 text-sm">
                    Located on Surat&apos;s major highway with excellent connectivity, 
                    transportation facilities, and strategic travel access
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-800 mb-6">
              Book Highway Escorts on Ring Road Today
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Experience professional travel companionship on Surat&apos;s major highway. Our specialized 
              escorts are perfect for business travel, highway journeys, transit services, or 
              professional support for travelers using Ring Road&apos;s transportation facilities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🚗</span>
                </div>
                <h4 className="font-bold text-cyan-700 mb-2">Travel Specialists</h4>
                <p className="text-sm text-gray-600">Expert companions experienced in highway travel and mobility</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌐</span>
                </div>
                <h4 className="font-bold text-cyan-700 mb-2">Strategic Connectivity</h4>
                <p className="text-sm text-gray-600">Convenient access to major routes and transportation networks</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⏰</span>
                </div>
                <h4 className="font-bold text-cyan-700 mb-2">Round-the-Clock Service</h4>
                <p className="text-sm text-gray-600">24/7 availability for travelers and business professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Ring Road Escorts?</h2>
          <p className="text-xl mb-8 text-cyan-100">
            Contact us today to arrange highway escort services on Ring Road
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="tel:+91XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}