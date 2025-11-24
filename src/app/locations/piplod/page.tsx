'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PiplodEscorts() {
  const services = [
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Professional companions for business meetings in Piplod", price: "₹20,000+", rating: "4.9" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Piplod business district", price: "₹18,000+", rating: "4.8" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "High-class call girl services in Piplod", price: "₹22,000+", rating: "4.9" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Professional hotel escort services in Piplod", price: "₹19,000+", rating: "4.6" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Business travel companion services from Piplod", price: "₹25,000+", rating: "5.0" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companionship for Piplod business executives", price: "₹28,000+", rating: "4.9" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Piplod", price: "₹24,000+", rating: "4.9" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions in Piplod", price: "₹17,000+", rating: "4.8" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Elegant dinner companions in Piplod", price: "₹16,000+", rating: "4.7" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services in Piplod", price: "₹27,000+", rating: "4.9" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model companions in Piplod", price: "₹30,000+", rating: "5.0" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Piplod", price: "₹21,000+", rating: "4.8" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions in Piplod", price: "₹26,000+", rating: "4.8" },
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young college girl companions in Piplod", price: "₹14,000+", rating: "4.7" },
    { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature housewife companions in Piplod", price: "₹17,000+", rating: "4.8" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services in Piplod", price: "₹16,000+", rating: "4.5" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Professional outcall services in Piplod", price: "₹18,000+", rating: "4.6" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Party escort services in Piplod", price: "₹19,000+", rating: "4.8" },
    { title: "Special Service", image: "/images/services/Special Service.webp", description: "Specialized escort services in Piplod", price: "₹23,000+", rating: "4.9" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding companion services in Piplod", price: "₹20,000+", rating: "4.7" }
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Service Icons */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-10">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/30">
              <span className="text-4xl">🏢</span>
            </div>
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/30">
              <span className="text-4xl">💎</span>
            </div>
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/30">
              <span className="text-4xl">⭐</span>
            </div>
          </div>
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

      {/* Escorts in Piplod Content Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-indigo-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-800 mb-6">
              Escorts in Piplod - Professional Business Companionship
            </h2>
            <p className="text-lg sm:text-xl text-indigo-700 max-w-4xl mx-auto leading-relaxed">
              Experience elite escort services in Piplod, Surat&apos;s prominent business district offering 
              professional companionship, corporate excellence, and sophisticated service in a premier business environment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-indigo-800 mb-4">
                Why Choose Piplod Escorts?
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Piplod stands as one of Surat&apos;s key business districts, renowned for its corporate offices, 
                professional services, and business-focused environment. Our premium escort services in Piplod 
                are specifically tailored to meet the needs of business professionals, executives, and corporate 
                clients who require sophisticated companionship that understands the corporate world.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                With its strategic location and business-friendly infrastructure, Piplod attracts entrepreneurs, 
                business leaders, and professionals who appreciate quality service and professional excellence. 
                Our companions are specially trained to excel in corporate environments, making them perfect 
                for business meetings, professional events, and executive entertainment.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-indigo-800 mb-4">
                Corporate Services Available
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-indigo-100">
                  <h4 className="font-semibold text-indigo-700 mb-2">Business Meetings</h4>
                  <p className="text-sm text-gray-600">Professional companions for corporate meetings and presentations</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-indigo-100">
                  <h4 className="font-semibold text-indigo-700 mb-2">Executive Companions</h4>
                  <p className="text-sm text-gray-600">High-caliber escorts for business executives and leaders</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-indigo-100">
                  <h4 className="font-semibold text-indigo-700 mb-2">Corporate Events</h4>
                  <p className="text-sm text-gray-600">Professional support for business functions and networking</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-indigo-100">
                  <h4 className="font-semibold text-indigo-700 mb-2">Business Travel</h4>
                  <p className="text-sm text-gray-600">Travel companions for business trips and conferences</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-white mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Piplod&apos;s Business District Advantage
                </h3>
                <p className="text-indigo-100 leading-relaxed mb-6">
                  As a significant business hub in Surat, Piplod houses numerous corporate offices, professional 
                  services, and business establishments. Our escort services are designed to complement this 
                  professional environment, providing companions who understand business etiquette, can engage 
                  in professional conversations, and represent the high standards expected in corporate settings.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-indigo-500 px-4 py-2 rounded-full text-sm font-medium">Corporate Ready</span>
                  <span className="bg-indigo-500 px-4 py-2 rounded-full text-sm font-medium">Professional Excellence</span>
                  <span className="bg-indigo-500 px-4 py-2 rounded-full text-sm font-medium">Business Focused</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl mb-4">💼</div>
                  <h4 className="text-xl font-bold mb-2">Business Hub</h4>
                  <p className="text-indigo-100 text-sm">
                    Located in Surat&apos;s professional business district with corporate offices, 
                    business centers, and professional services
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-800 mb-6">
              Book Professional Escorts in Piplod Today
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Experience sophisticated business companionship in Surat&apos;s premier business district. Our 
              professional escorts are perfect for corporate meetings, business dinners, executive events, 
              or professional entertainment in the dynamic Piplod business area.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💼</span>
                </div>
                <h4 className="font-bold text-indigo-700 mb-2">Business Acumen</h4>
                <p className="text-sm text-gray-600">Companions who understand corporate culture and business protocols</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h4 className="font-bold text-indigo-700 mb-2">Executive Standards</h4>
                <p className="text-sm text-gray-600">High-caliber service meeting executive expectations and professional needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏆</span>
                </div>
                <h4 className="font-bold text-indigo-700 mb-2">Professional Excellence</h4>
                <p className="text-sm text-gray-600">Elite companions trained for business environments and corporate success</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about escort services in Piplod</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">How to book escorts in Piplod?</h3>
                <p className="text-gray-600">You can book through our website, WhatsApp, or by calling us directly. We provide 24/7 booking services for Piplod area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">Are the escorts verified?</h3>
                <p className="text-gray-600">Yes, all our escorts in Piplod are thoroughly verified with authentic profiles and genuine photos.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">What is the price range?</h3>
                <p className="text-gray-600">Our services in Piplod start from ₹14,000 and go up to ₹29,000+ depending on the service type and duration.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">Is advance booking required?</h3>
                <p className="text-gray-600">While we accept last-minute bookings, advance booking is recommended for better availability in Piplod.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">Do you provide outcall services?</h3>
                <p className="text-gray-600">Yes, we provide both incall and outcall services throughout Piplod and surrounding areas.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">What payment methods are accepted?</h3>
                <p className="text-gray-600">We accept cash, UPI, and online transfers for all bookings in Piplod area.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">Is discretion guaranteed?</h3>
                <p className="text-gray-600">Absolutely. We maintain complete privacy and confidentiality for all our clients in Piplod.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">Are services available 24/7?</h3>
                <p className="text-gray-600">Yes, our escort services in Piplod are available round the clock, all days of the week.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">Can I choose a specific escort?</h3>
                <p className="text-gray-600">Yes, you can browse profiles and select your preferred companion for Piplod area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">What areas do you cover near Piplod?</h3>
                <p className="text-gray-600">We cover Piplod and all nearby areas with prompt service delivery.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">Are there any hidden charges?</h3>
                <p className="text-gray-600">No, we maintain complete transparency. The price quoted is the final price with no hidden charges.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">How do I cancel or reschedule?</h3>
                <p className="text-gray-600">You can cancel or reschedule by contacting us at least 2 hours before the booking time.</p>
              </div>
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