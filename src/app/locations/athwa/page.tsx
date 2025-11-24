'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AthwaEscorts() {
  const services = [
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions in Athwa cultural area", price: "₹18,000+", rating: "4.8" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Elegant dinner date companions in Athwa", price: "₹16,000+", rating: "4.7" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Cultural travel companion services from Athwa", price: "₹22,000+", rating: "5.0" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "Premium call girl services in Athwa", price: "₹20,000+", rating: "4.9" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Hotel escort services in Athwa area", price: "₹17,000+", rating: "4.6" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companionship for Athwa cultural events", price: "₹25,000+", rating: "4.9" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Athwa", price: "₹24,000+", rating: "4.9" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Athwa", price: "₹21,000+", rating: "4.9" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Athwa", price: "₹22,000+", rating: "4.8" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services in Athwa cultural area", price: "₹28,000+", rating: "4.9" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model companions in Athwa", price: "₹30,000+", rating: "5.0" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions in Athwa", price: "₹26,000+", rating: "4.8" },
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young college girl companions in Athwa", price: "₹14,000+", rating: "4.7" },
    { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature housewife companions in Athwa", price: "₹17,000+", rating: "4.8" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services in Athwa", price: "₹16,000+", rating: "4.5" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Professional outcall services in Athwa", price: "₹18,000+", rating: "4.6" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Party escort services in Athwa", price: "₹19,000+", rating: "4.8" },
    { title: "Special Service", image: "/images/services/Special Service.webp", description: "Specialized escort services in Athwa", price: "₹23,000+", rating: "4.9" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding companion services in Athwa", price: "₹21,000+", rating: "4.7" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Athwa", price: "₹20,000+", rating: "4.8" }
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-teal-500 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Service Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-3xl">🏛️</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}>
              <span className="text-3xl">💎</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
              <span className="text-3xl">⭐</span>
            </div>
          </div>
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

      {/* Escorts in Athwa Content Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-teal-50 to-cyan-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-800 mb-6">
              Escorts in Athwa - Cultural Heritage Companionship
            </h2>
            <p className="text-lg sm:text-xl text-teal-700 max-w-4xl mx-auto leading-relaxed">
              Experience exceptional escort services in Athwa, Surat&apos;s cultural heart offering 
              sophisticated companionship, traditional elegance, and cultural appreciation in this 
              historic area renowned for its heritage, festivals, and cultural significance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-teal-800 mb-4">
                Why Choose Athwa Escorts?
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Athwa represents the cultural soul of Surat, known for its traditional heritage, 
                cultural festivals, and rich historical significance. Our premium escort services 
                in Athwa are specially curated to reflect the area&apos;s cultural sophistication, 
                offering companions who appreciate art, tradition, and the finer aspects of 
                Gujarati culture.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our culturally aware companions excel in social gatherings, traditional events, 
                cultural festivals, and heritage celebrations that define Athwa&apos;s character. 
                Whether attending cultural programs, traditional ceremonies, or modern social events, 
                our escorts bring elegance and cultural sensitivity to every engagement.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-teal-800 mb-4">
                Cultural Heritage Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-teal-100">
                  <h4 className="font-semibold text-teal-700 mb-2">Cultural Events</h4>
                  <p className="text-sm text-gray-600">Sophisticated companions for traditional and cultural celebrations</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-teal-100">
                  <h4 className="font-semibold text-teal-700 mb-2">Festival Companions</h4>
                  <p className="text-sm text-gray-600">Cultural escorts for Gujarati festivals and religious celebrations</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-teal-100">
                  <h4 className="font-semibold text-teal-700 mb-2">Heritage Tours</h4>
                  <p className="text-sm text-gray-600">Knowledgeable companions for cultural heritage exploration</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-teal-100">
                  <h4 className="font-semibold text-teal-700 mb-2">Social Gatherings</h4>
                  <p className="text-sm text-gray-600">Elegant escorts for family and community social events</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-8 sm:p-12 text-white mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Athwa&apos;s Cultural Legacy
                </h3>
                <p className="text-teal-100 leading-relaxed mb-6">
                  As one of Surat&apos;s most culturally significant areas, Athwa is home to traditional 
                  festivals, cultural centers, heritage sites, and community celebrations that showcase 
                  the rich Gujarati heritage. Our escort services honor this cultural legacy by providing 
                  companions who understand and appreciate traditional values while being equally comfortable 
                  in contemporary social settings.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-teal-500 px-4 py-2 rounded-full text-sm font-medium">Cultural Heritage</span>
                  <span className="bg-teal-500 px-4 py-2 rounded-full text-sm font-medium">Traditional Values</span>
                  <span className="bg-teal-500 px-4 py-2 rounded-full text-sm font-medium">Social Elegance</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🏛️</div>
                  <h4 className="text-xl font-bold mb-2">Cultural Hub</h4>
                  <p className="text-teal-100 text-sm">
                    Located in Surat&apos;s traditional cultural area with heritage sites, 
                    cultural centers, and community celebration spaces
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-teal-800 mb-6">
              Book Cultural Escorts in Athwa Today
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Experience sophisticated companionship in Surat&apos;s cultural heart. Our cultural 
              escorts are perfect for traditional events, social gatherings, festival celebrations, 
              or contemporary entertainment in the culturally rich Athwa area.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎭</span>
                </div>
                <h4 className="font-bold text-teal-700 mb-2">Cultural Sophistication</h4>
                <p className="text-sm text-gray-600">Companions with deep appreciation for Gujarati culture and traditions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌟</span>
                </div>
                <h4 className="font-bold text-teal-700 mb-2">Social Elegance</h4>
                <p className="text-sm text-gray-600">Graceful presence at cultural events, festivals, and social gatherings</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏆</span>
                </div>
                <h4 className="font-bold text-teal-700 mb-2">Heritage Appreciation</h4>
                <p className="text-sm text-gray-600">Knowledgeable escorts who understand and respect traditional heritage</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about escort services in Athwa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-teal-700 mb-3">How to book escorts in Athwa?</h3>
                <p className="text-gray-600">You can book through our website, WhatsApp, or by calling us directly. We provide 24/7 booking services for Athwa area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-teal-700 mb-3">Are the escorts verified?</h3>
                <p className="text-gray-600">Yes, all our escorts in Athwa are thoroughly verified with authentic profiles and genuine photos.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-teal-700 mb-3">What is the price range?</h3>
                <p className="text-gray-600">Our services in Athwa start from ₹14,000 and go up to ₹29,000+ depending on the service type and duration.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-teal-700 mb-3">Is advance booking required?</h3>
                <p className="text-gray-600">While we accept last-minute bookings, advance booking is recommended for better availability in Athwa.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-teal-700 mb-3">Do you provide outcall services?</h3>
                <p className="text-gray-600">Yes, we provide both incall and outcall services throughout Athwa and surrounding areas.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-teal-700 mb-3">What payment methods are accepted?</h3>
                <p className="text-gray-600">We accept cash, UPI, and online transfers for all bookings in Athwa area.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-teal-700 mb-3">Is discretion guaranteed?</h3>
                <p className="text-gray-600">Absolutely. We maintain complete privacy and confidentiality for all our clients in Athwa.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-teal-700 mb-3">Are services available 24/7?</h3>
                <p className="text-gray-600">Yes, our escort services in Athwa are available round the clock, all days of the week.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-teal-700 mb-3">Can I choose a specific escort?</h3>
                <p className="text-gray-600">Yes, you can browse profiles and select your preferred companion for Athwa area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-teal-700 mb-3">What areas do you cover near Athwa?</h3>
                <p className="text-gray-600">We cover Athwa and all nearby areas with prompt service delivery.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-teal-700 mb-3">Are there any hidden charges?</h3>
                <p className="text-gray-600">No, we maintain complete transparency. The price quoted is the final price with no hidden charges.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-teal-700 mb-3">How do I cancel or reschedule?</h3>
                <p className="text-gray-600">You can cancel or reschedule by contacting us at least 2 hours before the booking time.</p>
              </div>
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