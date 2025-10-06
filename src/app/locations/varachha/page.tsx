'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function VarachhaEscorts() {
  const services = [
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "Elite companions for exclusive events in Varachha", price: "₹25,000+", rating: "4.9" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Professional support for corporate events in Varachha", price: "₹20,000+", rating: "4.9" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Perfect companions for social gatherings in Varachha", price: "₹15,000+", rating: "4.8" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Premium hotel escort services in Varachha area", price: "₹18,000+", rating: "4.6" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services from Varachha", price: "₹22,000+", rating: "5.0" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "High-class call girl services in Varachha", price: "₹20,000+", rating: "4.9" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Varachha", price: "₹24,000+", rating: "4.9" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Varachha business district", price: "₹21,000+", rating: "4.8" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Exclusive private model services in Varachha", price: "₹28,000+", rating: "4.9" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "International Russian model companions in Varachha", price: "₹30,000+", rating: "5.0" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions in Varachha", price: "₹26,000+", rating: "4.8" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Party escort services for Varachha events", price: "₹19,000+", rating: "4.8" },
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young and vibrant college girl companions in Varachha", price: "₹15,000+", rating: "4.7" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Elegant dinner date companions in Varachha", price: "₹16,000+", rating: "4.7" },
    { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature housewife companions in Varachha", price: "₹17,000+", rating: "4.8" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services in Varachha", price: "₹14,000+", rating: "4.5" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Professional outcall services in Varachha", price: "₹16,000+", rating: "4.6" },
    { title: "Special Service", image: "/images/services/Special Service.webp", description: "Specialized escort services in Varachha", price: "₹23,000+", rating: "4.9" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding companion services in Varachha", price: "₹21,000+", rating: "4.7" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Varachha", price: "₹18,000+", rating: "4.8" }
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
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Varachha Escorts - RashmiKapoor",
            "image": "/images/services/VIP Companionship.webp",
            "description": "Premium escort services in Varachha commercial area, Surat",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Varachha, Surat",
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.1702,
              "longitude": 72.8311
            },
            "url": "https://surat-escorts.vercel.app/locations/varachha",
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place", 
              "name": "Varachha"
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-red-400 to-red-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fadeInUp leading-tight">
              Varachha Escorts Services
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-red-100 max-w-3xl mx-auto animate-fadeInUp leading-relaxed px-4">
              Premium escort services in Varachha - Commercial hub with premium hotels and business centers
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Book Now
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105 text-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Location Info - Mobile Optimized */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-700 mb-4 sm:mb-6">
                  About Varachha Area
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  Varachha is a major commercial hub in Surat, known for its bustling business centers, 
                  premium hotels, and shopping complexes. Our escort services in Varachha provide 
                  sophisticated companionship for business professionals and visitors to this vibrant area.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">🏢 Commercial Hub</h3>
                    <p className="text-xs sm:text-sm text-red-600">Major business centers and offices</p>
                  </div>
                  <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">🏨 Premium Hotels</h3>
                    <p className="text-xs sm:text-sm text-red-600">Luxury accommodations available</p>
                  </div>
                  <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">🛍️ Shopping Centers</h3>
                    <p className="text-xs sm:text-sm text-red-600">Modern malls and retail complexes</p>
                  </div>
                  <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">🍽️ Fine Dining</h3>
                    <p className="text-xs sm:text-sm text-red-600">Upscale restaurants and cafes</p>
                  </div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="bg-gradient-to-br from-red-200 to-red-300 rounded-2xl p-6 sm:p-8 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl sm:text-7xl lg:text-8xl mb-4">🏢</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-red-700">Varachha Commercial Hub</h3>
                    <p className="text-red-600 mt-2 text-sm sm:text-base">Premium escort services available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Mobile First */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-red-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-700 mb-4 sm:mb-6">
                Our Varachha Services
              </h2>
              <p className="text-lg sm:text-xl text-red-600 max-w-3xl mx-auto">
                Premium escort services for Varachha&apos;s commercial community
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
                      alt={`${service.title} - Varachha Escort Service`}
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

        {/* Why Choose Varachha */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-700 mb-4 sm:mb-6">
                Why Choose Our Varachha Services
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-4 sm:p-6 bg-red-50 rounded-xl">
                <div className="text-3xl sm:text-4xl mb-4">🏢</div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-700 mb-2">Business Professional</h3>
                <p className="text-sm sm:text-base text-red-600">Perfect companions for Varachha&apos;s commercial environment</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-red-50 rounded-xl">
                <div className="text-3xl sm:text-4xl mb-4">🏨</div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-700 mb-2">Premium Hotels</h3>
                <p className="text-sm sm:text-base text-red-600">Luxury hotel services in Varachha&apos;s finest establishments</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-red-50 rounded-xl">
                <div className="text-3xl sm:text-4xl mb-4">⭐</div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-700 mb-2">Elite Quality</h3>
                <p className="text-sm sm:text-base text-red-600">High-class companions for discerning Varachha clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Escorts in Varachha Content Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-red-50 to-red-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-800 mb-6">
                Escorts in Varachha - Premium Companionship Services
              </h2>
              <p className="text-lg sm:text-xl text-red-700 max-w-4xl mx-auto leading-relaxed">
                Discover elite escort services in Varachha, Surat&apos;s premier commercial hub offering 
                sophisticated companionship for discerning clients
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-red-800 mb-4">
                  Why Choose Varachha Escorts?
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Varachha stands as Surat&apos;s most prominent commercial district, attracting business 
                  professionals, entrepreneurs, and visitors from across the globe. Our premium escort 
                  services in Varachha cater to the sophisticated needs of this elite clientele, 
                  offering unmatched companionship experiences.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Located in the heart of Surat&apos;s textile and diamond trading center, Varachha 
                  offers the perfect backdrop for business meetings, social events, and private 
                  gatherings. Our carefully selected companions understand the nuances of 
                  professional networking and social etiquette required in this prestigious area.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-red-800 mb-4">
                  Premium Services Available
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-red-100">
                    <h4 className="font-semibold text-red-700 mb-2">Business Companions</h4>
                    <p className="text-sm text-gray-600">Professional escorts for corporate events and business meetings</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border border-red-100">
                    <h4 className="font-semibold text-red-700 mb-2">Social Events</h4>
                    <p className="text-sm text-gray-600">Elegant companions for parties and social gatherings</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border border-red-100">
                    <h4 className="font-semibold text-red-700 mb-2">Hotel Services</h4>
                    <p className="text-sm text-gray-600">Discreet outcall services to premium hotels in Varachha</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border border-red-100">
                    <h4 className="font-semibold text-red-700 mb-2">VIP Experiences</h4>
                    <p className="text-sm text-gray-600">Exclusive high-end companionship for elite clients</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 sm:p-12 text-white mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    Varachha&apos;s Commercial Advantage
                  </h3>
                  <p className="text-red-100 leading-relaxed mb-6">
                    As Surat&apos;s primary commercial district, Varachha hosts numerous multinational 
                    companies, luxury hotels, and upscale restaurants. Our escort services are 
                    strategically positioned to serve the sophisticated clientele that frequents 
                    this prestigious business hub.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-red-500 px-4 py-2 rounded-full text-sm font-medium">24/7 Availability</span>
                    <span className="bg-red-500 px-4 py-2 rounded-full text-sm font-medium">Elite Companions</span>
                    <span className="bg-red-500 px-4 py-2 rounded-full text-sm font-medium">Complete Discretion</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-4xl mb-4">🏢</div>
                    <h4 className="text-xl font-bold mb-2">Commercial Hub</h4>
                    <p className="text-red-100 text-sm">
                      Located in Surat&apos;s premier business district with easy access to hotels, 
                      restaurants, and corporate offices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-red-800 mb-6">
                Book Premium Escorts in Varachha Today
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                Experience the finest companionship services in Surat&apos;s most prestigious commercial 
                area. Our professional escorts are ready to accompany you to business meetings, 
                social events, or private gatherings in Varachha.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">📞</span>
                  </div>
                  <h4 className="font-bold text-red-700 mb-2">Instant Booking</h4>
                  <p className="text-sm text-gray-600">Quick response and immediate availability for your requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🔐</span>
                  </div>
                  <h4 className="font-bold text-red-700 mb-2">Complete Privacy</h4>
                  <p className="text-sm text-gray-600">Absolute confidentiality and discretion guaranteed for all clients</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">⭐</span>
                  </div>
                  <h4 className="font-bold text-red-700 mb-2">Premium Quality</h4>
                  <p className="text-sm text-gray-600">Verified professionals with excellent reviews and reputation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Book Varachha Escorts?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-red-100">
              Contact us today to arrange premium escort services in Varachha&apos;s commercial area
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Contact Us Now
              </Link>
              <Link
                href="tel:+91XXXXXXXXX"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Call Directly
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}