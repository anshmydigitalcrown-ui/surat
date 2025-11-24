'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AdajanEscorts() {
  const services = [
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "Elite companions for exclusive events in Adajan", price: "₹25,000+", rating: "4.9" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Perfect companions for social gatherings in Adajan", price: "₹15,000+", rating: "4.8" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Elegant dinner companions in Adajan restaurants", price: "₹12,000+", rating: "4.7" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services from Adajan", price: "₹22,000+", rating: "5.0" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "High-class call girl services in Adajan", price: "₹20,000+", rating: "4.9" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Premium hotel escort services in Adajan area", price: "₹18,000+", rating: "4.6" },
    { title: "Housewife", image: "/images/services/Housewife.webp", description: "Housewife companions for Adajan residential area", price: "₹16,000+", rating: "4.8" },
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young college girl companions in Adajan", price: "₹14,000+", rating: "4.7" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "In-call escort services in Adajan apartments", price: "₹17,000+", rating: "4.5" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Outcall escort services to Adajan residences", price: "₹19,000+", rating: "4.6" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Adajan", price: "₹21,000+", rating: "4.8" },
    { title: "Special Service", image: "/images/services/Special Service.webp", description: "Special escort services for Adajan clients", price: "₹23,000+", rating: "4.9" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Adajan", price: "₹20,000+", rating: "4.9" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Adajan", price: "₹24,000+", rating: "4.9" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Adajan", price: "₹21,000+", rating: "4.8" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services in Adajan", price: "₹28,000+", rating: "4.9" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model companions in Adajan", price: "₹30,000+", rating: "5.0" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions in Adajan", price: "₹26,000+", rating: "4.8" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Party escort services in Adajan", price: "₹19,000+", rating: "4.8" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding companion services in Adajan", price: "₹21,000+", rating: "4.7" }
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
            "name": "Adajan Escorts - RashmiKapoor",
            "image": "/images/services/VIP Companionship.webp",
            "description": "Premium escort services in Adajan residential area, Surat",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Adajan, Surat",
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.1959,
              "longitude": 72.7933
            },
            "url": "https://surat-escorts.vercel.app/locations/adajan",
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place", 
              "name": "Adajan"
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-400 to-blue-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Service Icons */}
            <div className="flex justify-center gap-4 sm:gap-6 mb-10">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/30">
                <span className="text-4xl">🏘️</span>
              </div>
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/30">
                <span className="text-4xl">💎</span>
              </div>
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/30">
                <span className="text-4xl">⭐</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fadeInUp leading-tight">
              Adajan Escorts Services
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto animate-fadeInUp leading-relaxed px-4">
              Premium escort services in Adajan - Upscale residential area with modern amenities and facilities
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Book Now
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 text-center"
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-4 sm:mb-6">
                  About Adajan Area
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  Adajan is one of Surat&apos;s most upscale residential areas, featuring modern amenities, 
                  luxury apartments, and contemporary facilities. Our escort services in Adajan cater to 
                  the refined taste of this prestigious locality&apos;s residents and visitors.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-2 text-sm sm:text-base">🏘️ Residential Hub</h3>
                    <p className="text-xs sm:text-sm text-blue-600">Premium residential complexes and apartments</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-2 text-sm sm:text-base">🏬 Modern Amenities</h3>
                    <p className="text-xs sm:text-sm text-blue-600">Shopping centers and entertainment facilities</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-2 text-sm sm:text-base">🌳 Green Spaces</h3>
                    <p className="text-xs sm:text-sm text-blue-600">Parks and recreational areas</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-2 text-sm sm:text-base">🍽️ Fine Dining</h3>
                    <p className="text-xs sm:text-sm text-blue-600">Quality restaurants and cafes</p>
                  </div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl p-6 sm:p-8 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl sm:text-7xl lg:text-8xl mb-4">🏘️</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-700">Adajan Residential Area</h3>
                    <p className="text-blue-600 mt-2 text-sm sm:text-base">Premium escort services available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Mobile First */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-4 sm:mb-6">
                Our Adajan Services
              </h2>
              <p className="text-lg sm:text-xl text-blue-600 max-w-3xl mx-auto">
                Premium escort services for the sophisticated Adajan community
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
                      alt={`${service.title} - Adajan Escort Service`}
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

        {/* Why Choose Adajan */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-4 sm:mb-6">
                Why Choose Our Adajan Services
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl sm:text-4xl mb-4">🏘️</div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">Residential Comfort</h3>
                <p className="text-sm sm:text-base text-blue-600">Perfect companions for the refined Adajan residential lifestyle</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl sm:text-4xl mb-4">🔒</div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">Privacy Assured</h3>
                <p className="text-sm sm:text-base text-blue-600">Discreet services respecting the community&apos;s privacy standards</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl sm:text-4xl mb-4">⭐</div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">Premium Quality</h3>
                <p className="text-sm sm:text-base text-blue-600">Elite companions matching Adajan&apos;s upscale residential standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Escorts in Adajan Content Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-6">
                Escorts in Adajan - Premium Residential Companionship
              </h2>
              <p className="text-lg sm:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
                Experience elite escort services in Adajan, Surat&apos;s most prestigious residential area offering 
                sophisticated companionship in a refined neighborhood setting
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
                  Why Choose Adajan Escorts?
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Adajan represents the pinnacle of residential luxury in Surat, featuring upscale apartments, 
                  modern amenities, and a sophisticated community atmosphere. Our premium escort services in 
                  Adajan are designed to complement this refined lifestyle, offering discreet and elegant 
                  companionship for the area&apos;s discerning residents.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Known for its planned infrastructure, luxury housing societies, and proximity to premium 
                  malls and restaurants, Adajan attracts successful professionals and families who appreciate 
                  quality and exclusivity. Our carefully vetted companions understand the sophisticated 
                  social dynamics of this upscale residential community.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
                  Residential Services Available
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100">
                    <h4 className="font-semibold text-blue-700 mb-2">Private Companionship</h4>
                    <p className="text-sm text-gray-600">Discreet in-call and outcall services for Adajan residents</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100">
                    <h4 className="font-semibold text-blue-700 mb-2">Dinner Companions</h4>
                    <p className="text-sm text-gray-600">Elegant escorts for fine dining at Adajan&apos;s upscale restaurants</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100">
                    <h4 className="font-semibold text-blue-700 mb-2">Social Events</h4>
                    <p className="text-sm text-gray-600">Sophisticated companions for community gatherings and parties</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100">
                    <h4 className="font-semibold text-blue-700 mb-2">Weekend Companionship</h4>
                    <p className="text-sm text-gray-600">Special weekend packages for leisure and relaxation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-white mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    Adajan&apos;s Residential Excellence
                  </h3>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    As one of Surat&apos;s most sought-after residential localities, Adajan features modern 
                    infrastructure, luxury apartment complexes, and a family-friendly environment. Our 
                    escort services are tailored to meet the refined expectations of this upscale 
                    community while maintaining the highest standards of discretion and professionalism.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-blue-500 px-4 py-2 rounded-full text-sm font-medium">Residential Focus</span>
                    <span className="bg-blue-500 px-4 py-2 rounded-full text-sm font-medium">Premium Privacy</span>
                    <span className="bg-blue-500 px-4 py-2 rounded-full text-sm font-medium">Elite Standards</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-4xl mb-4">🏠</div>
                    <h4 className="text-xl font-bold mb-2">Luxury Living</h4>
                    <p className="text-blue-100 text-sm">
                      Located in Surat&apos;s premier residential district with modern amenities, 
                      upscale shopping, and fine dining options
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
                Book Premium Escorts in Adajan Today
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                Experience sophisticated companionship services in Surat&apos;s most prestigious residential 
                area. Our professional escorts are perfect for private meetings, social events, or 
                intimate dinner dates in the elegant Adajan neighborhood.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🏘️</span>
                  </div>
                  <h4 className="font-bold text-blue-700 mb-2">Local Expertise</h4>
                  <p className="text-sm text-gray-600">Deep understanding of Adajan&apos;s residential community and preferences</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🔒</span>
                  </div>
                  <h4 className="font-bold text-blue-700 mb-2">Maximum Discretion</h4>
                  <p className="text-sm text-gray-600">Absolute privacy and confidentiality respecting residential atmosphere</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">✨</span>
                  </div>
                  <h4 className="font-bold text-blue-700 mb-2">Refined Service</h4>
                  <p className="text-sm text-gray-600">Sophisticated companions matching Adajan&apos;s upscale lifestyle</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Detailed Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-red-700 mb-8">Discover Premium Escort Services in Adajan - Your Ultimate Companion Guide</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to Surat&apos;s most trusted <strong>escort service in Adajan</strong>, where luxury meets discretion in one of the city&apos;s most distinguished locations. Adajan has established itself as a prime destination for premium companionship services, offering an perfect blend of sophistication, privacy, and professional excellence. Whether you&apos;re a business executive, tourist, or local resident seeking high-class companionship, our <strong>Adajan escorts</strong> deliver exceptional experiences tailored to your unique preferences and requirements.
            </p>

            <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Why Adajan is Perfect for Elite Escort Services</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Adajan represents one of Surat&apos;s most prominent areas, characterized by its upscale residential nature. This strategic location provides the ideal environment for premium <strong>escort services in Adajan</strong>. The area features excellent infrastructure, luxury accommodations, fine dining establishments, and entertainment venues that create the perfect backdrop for memorable companionship experiences. Our <strong>call girls in Adajan</strong> are intimately familiar with the locality, ensuring seamless arrangements whether you prefer hotel meetings, private residences, or public venues.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The distinctive character of Adajan residential area offers unique advantages for those seeking <strong>escorts in Adajan</strong>. With its blend of modern amenities and convenient accessibility, the area ensures both comfort and confidentiality. The presence of premium hotels, upscale restaurants, and exclusive venues makes it effortless to arrange discreet meetings. Our professional escorts understand the importance of maintaining absolute privacy in this prestigious location and conduct all interactions with the highest level of discretion and professionalism.
            </p>

            <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Comprehensive Escort Services in Adajan</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>Adajan escort service</strong> provides an extensive array of companionship options designed to satisfy diverse tastes and occasions. We maintain rigorous quality standards, ensuring every client receives an unforgettable and gratifying experience. From sophisticated VIP companions to charming college girl escorts, professional air hostesses to elegant housewife companions, our diverse portfolio includes professionals with various backgrounds, specializations, and expertise levels to match your specific desires.
            </p>

            <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4">Premium In-Call Services</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>in-call escort services in Adajan</strong> offer clients the convenience of meeting our companions at carefully selected, secure locations throughout the area. These discreet venues feature luxurious interiors, modern amenities, and private access points ensuring complete confidentiality. In-call services are ideal for clients who prefer not to host at their personal residences or hotels. Our Adajan locations are strategically positioned in upscale neighborhoods, providing easy accessibility while maintaining absolute privacy. Whether you require a brief encounter or an extended session, our in-call services deliver flexibility and superior comfort.
            </p>

            <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4">Discreet Outcall Services</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              For those who value the privacy of their own environment, our <strong>outcall escort services in Adajan</strong> deliver our stunning companions directly to your preferred location. Whether you&apos;re staying at a luxury hotel in Adajan, your private apartment, or any other venue, our escorts arrive promptly, elegantly dressed, and ready to provide exceptional companionship. Outcall services are especially popular among business travelers and discerning clients who appreciate the convenience of having a beautiful companion come to them. Our escorts ensure discretion from arrival to departure, maintaining professionalism throughout the entire experience.
            </p>

            <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Our Elite Adajan Escort Collection</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Our selection of <strong>call girls in Adajan</strong> represents the finest professional companions available in Surat. Each escort has been meticulously selected based on beauty, personality, intelligence, and exceptional service capabilities. We implement comprehensive verification procedures to guarantee all our escorts meet the highest standards of quality, reliability, and professionalism. Our diverse portfolio ranges from youthful college companions to sophisticated career professionals, ensuring we can match you with the perfect companion for any situation or preference.
            </p>

            <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4">VIP Escorts and Elite Models</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>VIP escorts in Adajan</strong> cater exclusively to distinguished clients who expect premium quality in every aspect. These elite companions possess exceptional beauty, refined intelligence, and impeccable social skills, making them perfect for high-profile events, corporate dinners, or intimate private meetings. Many of our VIP escorts work as professional models, successful entrepreneurs, or in prestigious careers, offering companionship as an exclusive premium service. They are well-educated, fluent in multiple languages, and capable of engaging discussions on diverse subjects, ensuring you have a companion who complements your status and sophistication.
            </p>

            <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4">Young College Companions</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              For clients seeking fresh energy and youthful charm, our <strong>college girl escorts in Adajan</strong> provide delightful companionship experiences. These vibrant, enthusiastic companions bring spontaneity and fun to every encounter. They&apos;re perfect for casual outings, shopping dates, or exploring Adajan&apos;s entertainment venues. Despite their youthful spirit, these escorts maintain exceptional professionalism and strict confidentiality, ensuring every meeting is both enjoyable and discreet. Their natural beauty and genuine personalities create authentic, memorable experiences.
            </p>

            <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4">Russian and International Models</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our portfolio includes stunning <strong>Russian escorts and international models in Adajan</strong> who bring exotic beauty and international sophistication to your companionship experience. These gorgeous companions feature striking European looks, elegant demeanor, and cultured backgrounds. Perfect for clients seeking something extraordinary, our international escorts offer a unique blend of physical beauty and intellectual charm that sets them apart from conventional companionship services.
            </p>

            <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Simple Booking and Complete Confidentiality</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Booking <strong>escorts in Adajan</strong> through our service is streamlined, secure, and completely confidential. We recognize that discretion is essential for our clients, which is why we&apos;ve established robust privacy protocols throughout the entire booking process. Our encrypted communication channels, secure data management systems, and professionally trained staff ensure your personal information and booking details remain absolutely confidential. Whether you contact us via website, WhatsApp, or phone, your privacy is guaranteed and protected.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The booking process starts with browsing our comprehensive escort gallery featuring detailed profiles. Each profile provides extensive information about the companion&apos;s appearance, available services, rates, and schedule. After selecting your preferred escort, our professional booking team coordinates all details including timing, venue, duration, and any special requirements. We recommend advance booking for popular escorts or peak periods, though we accommodate last-minute requests whenever possible. Our 24/7 customer service ensures assistance is always available when you need it.
            </p>

            <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Safety Standards and Verification</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Safety is paramount at our <strong>Adajan escort service</strong>. We implement comprehensive verification procedures for all parties. Every escort undergoes thorough background verification, identity confirmation, and regular health screening to meet our stringent safety standards. For high-value bookings, we may request basic client verification to ensure escort safety. These measures create a secure environment where everyone can enjoy their time with complete confidence and peace of mind.
            </p>

            <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Transparent Pricing and Flexible Payment</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>Adajan escort pricing</strong> is competitive, transparent, and free from hidden charges. We offer various packages accommodating different budgets and needs, from brief one-hour meetings to complete overnight companionship. Premium services, VIP escorts, and specialized requests may involve additional fees, always communicated clearly during booking. We accept multiple payment methods including cash, digital payments, and bank transfers for maximum convenience. Regular clients and extended bookings enjoy special discounts and exclusive packages.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Experience Surat&apos;s finest <strong>escort service in Adajan</strong> with our professional, discreet, and premium companionship solutions. Contact us now to book your ideal companion and discover why we&apos;re the most trusted name in Adajan escort services. Available 24/7 for your convenience!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about escort services in Adajan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-700 mb-3">How to book escorts in Adajan?</h3>
                <p className="text-gray-600">You can book through our website, WhatsApp, or by calling us directly. We provide 24/7 booking services for Adajan area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Are the escorts verified?</h3>
                <p className="text-gray-600">Yes, all our escorts in Adajan are thoroughly verified with authentic profiles and genuine photos.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-700 mb-3">What is the price range?</h3>
                <p className="text-gray-600">Our services in Adajan start from ₹14,000 and go up to ₹29,000+ depending on the service type and duration.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Is advance booking required?</h3>
                <p className="text-gray-600">While we accept last-minute bookings, advance booking is recommended for better availability in Adajan.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Do you provide outcall services?</h3>
                <p className="text-gray-600">Yes, we provide both incall and outcall services throughout Adajan and surrounding areas.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-700 mb-3">What payment methods are accepted?</h3>
                <p className="text-gray-600">We accept cash, UPI, and online transfers for all bookings in Adajan area.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Is discretion guaranteed?</h3>
                <p className="text-gray-600">Absolutely. We maintain complete privacy and confidentiality for all our clients in Adajan.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Are services available 24/7?</h3>
                <p className="text-gray-600">Yes, our escort services in Adajan are available round the clock, all days of the week.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Can I choose a specific escort?</h3>
                <p className="text-gray-600">Yes, you can browse profiles and select your preferred companion for Adajan area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-700 mb-3">What areas do you cover near Adajan?</h3>
                <p className="text-gray-600">We cover Adajan and all nearby areas with prompt service delivery.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Are there any hidden charges?</h3>
                <p className="text-gray-600">No, we maintain complete transparency. The price quoted is the final price with no hidden charges.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-700 mb-3">How do I cancel or reschedule?</h3>
                <p className="text-gray-600">You can cancel or reschedule by contacting us at least 2 hours before the booking time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


        {/* Contact Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Book Adajan Escorts?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100">
              Contact us today to arrange premium escort services in Adajan&apos;s prestigious residential area
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Contact Us Now
              </Link>
              <Link
                href="tel:+91XXXXXXXXX"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 text-center"
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