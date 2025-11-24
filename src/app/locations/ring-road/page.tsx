'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function RingRoadEscorts() {
  const services = [
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Highway travel companion services on Ring Road", price: "₹24,000+", rating: "5.0" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Professional outcall services along Ring Road", price: "₹18,000+", rating: "4.6" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Highway hotel escort services on Ring Road", price: "₹19,000+", rating: "4.6" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companionship for Ring Road travelers", price: "₹26,000+", rating: "4.9" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions on Ring Road", price: "₹20,000+", rating: "4.9" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "Premium call girl services on Ring Road", price: "₹22,000+", rating: "4.9" },
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young college girl companions on Ring Road", price: "₹15,000+", rating: "4.7" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions on Ring Road", price: "₹24,000+", rating: "4.9" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model escorts on Ring Road", price: "₹28,000+", rating: "5.0" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions on Ring Road", price: "₹30,000+", rating: "4.8" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions on Ring Road", price: "₹20,000+", rating: "4.8" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions on Ring Road", price: "₹17,000+", rating: "4.8" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions on Ring Road", price: "₹21,000+", rating: "4.8" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Elegant dinner date companions on Ring Road", price: "₹16,000+", rating: "4.7" },
    { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature housewife companions on Ring Road", price: "₹17,000+", rating: "4.8" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services on Ring Road", price: "₹16,000+", rating: "4.5" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Party escort services on Ring Road", price: "₹18,000+", rating: "4.8" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services on Ring Road", price: "₹27,000+", rating: "4.9" },
    { title: "Special Service", image: "/images/services/Special Service.webp", description: "Specialized escort services on Ring Road", price: "₹23,000+", rating: "4.9" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding companion services on Ring Road", price: "₹21,000+", rating: "4.7" }
  ];

  // Function to convert service title to URL slug
  const getServiceSlug = (title: string): string => {
    return title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-cyan-500 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Service Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-3xl">🛣️</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}>
              <span className="text-3xl">💎</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
              <span className="text-3xl">⭐</span>
            </div>
          </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href={`/services/${getServiceSlug(service.title)}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 block"
              >
                {/* Service Image - Consistent with Main Page */}
                <div className="relative h-48 sm:h-56 lg:h-64 bg-gray-50 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain object-center p-2"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
                    loading={index < 8 ? "eager" : "lazy"}
                  />
                </div>
                
                {/* Service Content - Mobile-Optimized */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-pink-800 mb-2 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-pink-600 mb-3 sm:mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Price and Rating - Mobile Optimized */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs sm:text-sm font-medium text-pink-700 bg-pink-100 px-2 py-1 rounded-full">
                      {service.price}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-xs sm:text-sm text-gray-600 ml-1">{service.rating}</span>
                    </div>
                  </div>
                  
                  {/* Service Page Button - Mobile Optimized */}
                  <div className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 sm:py-3 px-4 rounded-lg font-medium text-xs sm:text-sm transition-colors duration-300 text-center">
                    View {service.title}
                  </div>
                </div>
              </Link>
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
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about escort services in Ring Road</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">How to book escorts in Ring Road?</h3>
                <p className="text-gray-600">You can book through our website, WhatsApp, or by calling us directly. We provide 24/7 booking services for Ring Road area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">Are the escorts verified?</h3>
                <p className="text-gray-600">Yes, all our escorts in Ring Road are thoroughly verified with authentic profiles and genuine photos.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">What is the price range?</h3>
                <p className="text-gray-600">Our services in Ring Road start from ₹14,000 and go up to ₹29,000+ depending on the service type and duration.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">Is advance booking required?</h3>
                <p className="text-gray-600">While we accept last-minute bookings, advance booking is recommended for better availability in Ring Road.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">Do you provide outcall services?</h3>
                <p className="text-gray-600">Yes, we provide both incall and outcall services throughout Ring Road and surrounding areas.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">What payment methods are accepted?</h3>
                <p className="text-gray-600">We accept cash, UPI, and online transfers for all bookings in Ring Road area.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">Is discretion guaranteed?</h3>
                <p className="text-gray-600">Absolutely. We maintain complete privacy and confidentiality for all our clients in Ring Road.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">Are services available 24/7?</h3>
                <p className="text-gray-600">Yes, our escort services in Ring Road are available round the clock, all days of the week.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">Can I choose a specific escort?</h3>
                <p className="text-gray-600">Yes, you can browse profiles and select your preferred companion for Ring Road area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">What areas do you cover near Ring Road?</h3>
                <p className="text-gray-600">We cover Ring Road and all nearby areas with prompt service delivery.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">Are there any hidden charges?</h3>
                <p className="text-gray-600">No, we maintain complete transparency. The price quoted is the final price with no hidden charges.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">How do I cancel or reschedule?</h3>
                <p className="text-gray-600">You can cancel or reschedule by contacting us at least 2 hours before the booking time.</p>
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