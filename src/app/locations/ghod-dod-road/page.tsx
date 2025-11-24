'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function GhodDodRoadEscorts() {
  const services = [
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companions for Ghod Dod Road elite venues", price: "₹27,000+", rating: "4.9" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Luxury hotel escort services on Ghod Dod Road", price: "₹19,000+", rating: "4.6" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Professional business meeting companions", price: "₹21,000+", rating: "4.9" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Elegant dinner companions on Ghod Dod Road", price: "₹18,000+", rating: "4.7" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Premium travel companion services", price: "₹24,000+", rating: "5.0" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "High-class call girl services on main road", price: "₹22,000+", rating: "4.9" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions on Ghod Dod Road", price: "₹25,000+", rating: "4.9" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions on main road", price: "₹23,000+", rating: "4.8" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions on Ghod Dod Road", price: "₹20,000+", rating: "4.8" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services on Ghod Dod Road", price: "₹29,000+", rating: "4.9" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model companions on main road", price: "₹32,000+", rating: "5.0" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions", price: "₹28,000+", rating: "4.8" },
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young college girl companions on Ghod Dod Road", price: "₹16,000+", rating: "4.7" },
    { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature housewife companions on Ghod Dod Road", price: "₹18,000+", rating: "4.8" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services on Ghod Dod Road", price: "₹17,000+", rating: "4.5" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Professional outcall services on Ghod Dod Road", price: "₹19,000+", rating: "4.6" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Party escort services on Ghod Dod Road", price: "₹20,000+", rating: "4.8" },
    { title: "Special Service", image: "/images/services/Special Service.webp", description: "Specialized escort services on Ghod Dod Road", price: "₹25,000+", rating: "4.9" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding companion services on Ghod Dod Road", price: "₹22,000+", rating: "4.7" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions on Ghod Dod Road", price: "₹21,000+", rating: "4.8" }
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-rose-500 to-rose-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Service Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-3xl">🛣️</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}>
              <span className="text-3xl">💎</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
              <span className="text-3xl">⭐</span>
            </div>
          </div>
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

      {/* Escorts in Ghod Dod Road Content Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-rose-50 to-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rose-800 mb-6">
              Escorts in Ghod Dod Road - Main Arterial Premium Companionship
            </h2>
            <p className="text-lg sm:text-xl text-rose-700 max-w-4xl mx-auto leading-relaxed">
              Experience elite escort services on Ghod Dod Road, Surat&apos;s primary arterial highway offering 
              premium companionship, strategic accessibility, and upscale service along this major 
              thoroughfare connecting key areas of the city with excellent connectivity and convenience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-rose-800 mb-4">
                Why Choose Ghod Dod Road Escorts?
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Ghod Dod Road serves as one of Surat&apos;s most important arterial roads, connecting 
                various key areas of the city and serving as a major transportation hub. Our premium 
                escort services on Ghod Dod Road are strategically positioned to offer maximum 
                convenience and accessibility, making it easy for clients from across Surat to 
                access our elite companionship services.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The strategic location of Ghod Dod Road, with its excellent connectivity to major 
                areas like Adajan, Vesu, and other prominent locations, makes it an ideal base for 
                our escort services. Our companions are well-versed in the area&apos;s accessibility 
                advantages and can efficiently travel to meet clients throughout Surat.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-rose-800 mb-4">
                Arterial Road Advantages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-rose-100">
                  <h4 className="font-semibold text-rose-700 mb-2">Strategic Location</h4>
                  <p className="text-sm text-gray-600">Prime position on major arterial road for easy accessibility</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-rose-100">
                  <h4 className="font-semibold text-rose-700 mb-2">City Connectivity</h4>
                  <p className="text-sm text-gray-600">Excellent connections to all major areas of Surat</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-rose-100">
                  <h4 className="font-semibold text-rose-700 mb-2">Quick Access</h4>
                  <p className="text-sm text-gray-600">Fast and convenient access for clients from across the city</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-rose-100">
                  <h4 className="font-semibold text-rose-700 mb-2">Transportation Hub</h4>
                  <p className="text-sm text-gray-600">Central location with excellent transportation facilities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-600 to-pink-700 rounded-2xl p-8 sm:p-12 text-white mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Ghod Dod Road&apos;s Strategic Importance
                </h3>
                <p className="text-rose-100 leading-relaxed mb-6">
                  As a major arterial road in Surat, Ghod Dod Road serves as a crucial transportation 
                  corridor connecting various important areas of the city. This strategic location 
                  allows our escort services to offer unparalleled convenience and accessibility to 
                  clients from all parts of Surat. The road&apos;s infrastructure and connectivity make 
                  it an ideal location for premium companionship services.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-rose-500 px-4 py-2 rounded-full text-sm font-medium">Strategic Access</span>
                  <span className="bg-rose-500 px-4 py-2 rounded-full text-sm font-medium">City Connectivity</span>
                  <span className="bg-rose-500 px-4 py-2 rounded-full text-sm font-medium">Premium Location</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🛣️</div>
                  <h4 className="text-xl font-bold mb-2">Arterial Highway</h4>
                  <p className="text-rose-100 text-sm">
                    Located on Surat&apos;s major arterial road with excellent connectivity, 
                    transportation facilities, and strategic city access
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-rose-800 mb-6">
              Book Premium Escorts on Ghod Dod Road Today
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Experience convenient companionship on Surat&apos;s main arterial road. Our premium 
              escorts offer strategic accessibility, elite service, and convenient location for 
              clients from all areas of Surat seeking high-quality companionship.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌟</span>
                </div>
                <h4 className="font-bold text-rose-700 mb-2">Strategic Excellence</h4>
                <p className="text-sm text-gray-600">Prime location offering maximum convenience and accessibility</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🚗</span>
                </div>
                <h4 className="font-bold text-rose-700 mb-2">Easy Connectivity</h4>
                <p className="text-sm text-gray-600">Excellent transportation links to all major areas of Surat</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h4 className="font-bold text-rose-700 mb-2">Quick Access</h4>
                <p className="text-sm text-gray-600">Fast and convenient access for busy professionals across the city</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-700 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about escort services in Ghod Dod Road</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-rose-700 mb-3">How to book escorts in Ghod Dod Road?</h3>
                <p className="text-gray-600">You can book through our website, WhatsApp, or by calling us directly. We provide 24/7 booking services for Ghod Dod Road area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-rose-700 mb-3">Are the escorts verified?</h3>
                <p className="text-gray-600">Yes, all our escorts in Ghod Dod Road are thoroughly verified with authentic profiles and genuine photos.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-rose-700 mb-3">What is the price range?</h3>
                <p className="text-gray-600">Our services in Ghod Dod Road start from ₹14,000 and go up to ₹29,000+ depending on the service type and duration.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-rose-700 mb-3">Is advance booking required?</h3>
                <p className="text-gray-600">While we accept last-minute bookings, advance booking is recommended for better availability in Ghod Dod Road.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-rose-700 mb-3">Do you provide outcall services?</h3>
                <p className="text-gray-600">Yes, we provide both incall and outcall services throughout Ghod Dod Road and surrounding areas.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-rose-700 mb-3">What payment methods are accepted?</h3>
                <p className="text-gray-600">We accept cash, UPI, and online transfers for all bookings in Ghod Dod Road area.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-rose-700 mb-3">Is discretion guaranteed?</h3>
                <p className="text-gray-600">Absolutely. We maintain complete privacy and confidentiality for all our clients in Ghod Dod Road.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-rose-700 mb-3">Are services available 24/7?</h3>
                <p className="text-gray-600">Yes, our escort services in Ghod Dod Road are available round the clock, all days of the week.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-rose-700 mb-3">Can I choose a specific escort?</h3>
                <p className="text-gray-600">Yes, you can browse profiles and select your preferred companion for Ghod Dod Road area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-rose-700 mb-3">What areas do you cover near Ghod Dod Road?</h3>
                <p className="text-gray-600">We cover Ghod Dod Road and all nearby areas with prompt service delivery.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-rose-700 mb-3">Are there any hidden charges?</h3>
                <p className="text-gray-600">No, we maintain complete transparency. The price quoted is the final price with no hidden charges.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-rose-700 mb-3">How do I cancel or reschedule?</h3>
                <p className="text-gray-600">You can cancel or reschedule by contacting us at least 2 hours before the booking time.</p>
              </div>
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