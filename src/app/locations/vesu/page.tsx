'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function VesuEscorts() {
  const services = [
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "Elite companions for exclusive events in Vesu", price: "₹25,000+", rating: "4.9" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Luxury travel companion services from Vesu", price: "₹22,000+", rating: "5.0" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Perfect companions for social gatherings in Vesu", price: "₹15,000+", rating: "4.8" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Exclusive private model services in Vesu", price: "₹28,000+", rating: "4.9" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "High-class call girl services in Vesu", price: "₹20,000+", rating: "4.9" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Elegant wedding escort services in Vesu", price: "₹18,000+", rating: "4.7" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Vesu", price: "₹24,000+", rating: "4.9" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Vesu", price: "₹21,000+", rating: "4.9" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Vesu", price: "₹22,000+", rating: "4.8" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Elegant dinner companions in Vesu", price: "₹16,000+", rating: "4.7" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Premium hotel escort services in Vesu", price: "₹18,000+", rating: "4.6" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "International Russian model companions in Vesu", price: "₹30,000+", rating: "5.0" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions in Vesu", price: "₹26,000+", rating: "4.8" },
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young college girl companions in Vesu", price: "₹14,000+", rating: "4.7" },
    { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature housewife companions in Vesu", price: "₹17,000+", rating: "4.8" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services in Vesu", price: "₹16,000+", rating: "4.5" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Professional outcall services in Vesu", price: "₹18,000+", rating: "4.6" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Party escort services in Vesu", price: "₹19,000+", rating: "4.8" },
    { title: "Special Service", image: "/images/services/Special Service.webp", description: "Specialized escort services in Vesu", price: "₹23,000+", rating: "4.9" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Vesu", price: "₹21,000+", rating: "4.8" }
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-400 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Vesu Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto animate-fadeInUp">
            Premium escort services in Vesu - Premium locality known for upscale living and shopping
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
                About Vesu Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vesu is one of Surat&apos;s most premium localities, renowned for upscale living, 
                luxury shopping destinations, and sophisticated lifestyle. Our escort services in Vesu 
                cater to the elite clientele who appreciate the finer things in life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">🌟 Premium Living</h3>
                  <p className="text-sm text-green-600">Luxury residential complexes and villas</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">🛍️ Shopping Hub</h3>
                  <p className="text-sm text-green-600">High-end shopping centers and boutiques</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">🏛️ Cultural Centers</h3>
                  <p className="text-sm text-green-600">Art galleries and cultural venues</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">🍽️ Fine Dining</h3>
                  <p className="text-sm text-green-600">Premium restaurants and luxury cafes</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold text-green-700">Vesu Premium Area</h3>
                  <p className="text-green-600 mt-2">Luxury escort services available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
              Our Vesu Services
            </h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto">
              Luxury escort services for Vesu&apos;s elite and sophisticated clientele
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

      {/* Why Choose Vesu */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
              Why Choose Our Vesu Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Luxury Standards</h3>
              <p className="text-green-600">Premium companions matching Vesu&apos;s luxury lifestyle standards</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Elite Discretion</h3>
              <p className="text-green-600">Highest level of privacy for Vesu&apos;s distinguished residents</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Exclusive Access</h3>
              <p className="text-green-600">Elite companions for Vesu&apos;s upscale events and venues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Escorts in Vesu Content Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-green-50 to-emerald-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Escorts in Vesu - Premium Lifestyle Companionship
            </h2>
            <p className="text-lg sm:text-xl text-green-700 max-w-4xl mx-auto leading-relaxed">
              Experience elite escort services in Vesu, Surat&apos;s most exclusive locality offering 
              luxury living, premium shopping, and sophisticated companionship in an upscale environment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
                Why Choose Vesu Escorts?
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Vesu stands as Surat&apos;s most prestigious residential and commercial locality, renowned for 
                its luxury housing projects, premium shopping destinations, and sophisticated lifestyle. 
                Our exclusive escort services in Vesu cater to the refined tastes of this elite community, 
                offering premium companionship that perfectly complements the area&apos;s upscale atmosphere.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Known for its planned development, luxury amenities, and proximity to high-end shopping malls 
                and restaurants, Vesu attracts successful entrepreneurs, business leaders, and affluent families. 
                Our carefully selected companions understand the sophistication required to blend seamlessly 
                into this exclusive social environment while providing exceptional service.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
                Luxury Services Available
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-green-100">
                  <h4 className="font-semibold text-green-700 mb-2">VIP Companionship</h4>
                  <p className="text-sm text-gray-600">Exclusive companions for luxury events and elite gatherings</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-green-100">
                  <h4 className="font-semibold text-green-700 mb-2">Shopping Companions</h4>
                  <p className="text-sm text-gray-600">Elegant escorts for premium shopping experiences at luxury malls</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-green-100">
                  <h4 className="font-semibold text-green-700 mb-2">Fine Dining Escorts</h4>
                  <p className="text-sm text-gray-600">Sophisticated companions for upscale restaurants and dining</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-green-100">
                  <h4 className="font-semibold text-green-700 mb-2">Private Events</h4>
                  <p className="text-sm text-gray-600">Elite companions for exclusive parties and private celebrations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 sm:p-12 text-white mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Vesu&apos;s Luxury Lifestyle Advantage
                </h3>
                <p className="text-green-100 leading-relaxed mb-6">
                  As Surat&apos;s most coveted residential destination, Vesu combines luxury living with premium 
                  commercial spaces, featuring high-end shopping centers, fine dining establishments, and 
                  exclusive entertainment venues. Our escort services are specifically designed to complement 
                  this sophisticated lifestyle, providing companions who understand luxury, elegance, and 
                  the refined expectations of Vesu&apos;s distinguished community.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-green-500 px-4 py-2 rounded-full text-sm font-medium">Luxury Living</span>
                  <span className="bg-green-500 px-4 py-2 rounded-full text-sm font-medium">Premium Shopping</span>
                  <span className="bg-green-500 px-4 py-2 rounded-full text-sm font-medium">Elite Standards</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🛍️</div>
                  <h4 className="text-xl font-bold mb-2">Premium Destination</h4>
                  <p className="text-green-100 text-sm">
                    Located in Surat&apos;s most exclusive area with luxury malls, 
                    fine dining, and upscale entertainment venues
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6">
              Book Elite Escorts in Vesu Today
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Experience the finest companionship services in Surat&apos;s most exclusive locality. Our elite 
              escorts are perfect for luxury shopping trips, fine dining experiences, exclusive events, 
              or private entertainment in the sophisticated Vesu neighborhood.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🛍️</span>
                </div>
                <h4 className="font-bold text-green-700 mb-2">Luxury Experience</h4>
                <p className="text-sm text-gray-600">Companions who understand and appreciate Vesu&apos;s luxury lifestyle</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔐</span>
                </div>
                <h4 className="font-bold text-green-700 mb-2">Ultimate Discretion</h4>
                <p className="text-sm text-gray-600">Absolute confidentiality respecting Vesu&apos;s exclusive community standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💎</span>
                </div>
                <h4 className="font-bold text-green-700 mb-2">Elite Quality</h4>
                <p className="text-sm text-gray-600">Premium companions matching Vesu&apos;s sophisticated social standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about escort services in Vesu</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-green-700 mb-3">How to book escorts in Vesu?</h3>
                <p className="text-gray-600">You can book through our website, WhatsApp, or by calling us directly. We provide 24/7 booking services for Vesu area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-green-700 mb-3">Are the escorts verified?</h3>
                <p className="text-gray-600">Yes, all our escorts in Vesu are thoroughly verified with authentic profiles and genuine photos.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-green-700 mb-3">What is the price range?</h3>
                <p className="text-gray-600">Our services in Vesu start from ₹14,000 and go up to ₹29,000+ depending on the service type and duration.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-green-700 mb-3">Is advance booking required?</h3>
                <p className="text-gray-600">While we accept last-minute bookings, advance booking is recommended for better availability in Vesu.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-green-700 mb-3">Do you provide outcall services?</h3>
                <p className="text-gray-600">Yes, we provide both incall and outcall services throughout Vesu and surrounding areas.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-green-700 mb-3">What payment methods are accepted?</h3>
                <p className="text-gray-600">We accept cash, UPI, and online transfers for all bookings in Vesu area.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-green-700 mb-3">Is discretion guaranteed?</h3>
                <p className="text-gray-600">Absolutely. We maintain complete privacy and confidentiality for all our clients in Vesu.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-green-700 mb-3">Are services available 24/7?</h3>
                <p className="text-gray-600">Yes, our escort services in Vesu are available round the clock, all days of the week.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-green-700 mb-3">Can I choose a specific escort?</h3>
                <p className="text-gray-600">Yes, you can browse profiles and select your preferred companion for Vesu area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-green-700 mb-3">What areas do you cover near Vesu?</h3>
                <p className="text-gray-600">We cover Vesu and all nearby areas with prompt service delivery.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-green-700 mb-3">Are there any hidden charges?</h3>
                <p className="text-gray-600">No, we maintain complete transparency. The price quoted is the final price with no hidden charges.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-green-700 mb-3">How do I cancel or reschedule?</h3>
                <p className="text-gray-600">You can cancel or reschedule by contacting us at least 2 hours before the booking time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Vesu Escorts?</h2>
          <p className="text-xl mb-8 text-green-100">
            Contact us today to arrange luxury escort services in Vesu&apos;s premium locality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="tel:+91XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}