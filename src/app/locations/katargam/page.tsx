'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function KatargamEscorts() {
  const services = [
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young and vibrant college girl companions in Katargam", price: "₹15,000+", rating: "4.7" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions in Katargam area", price: "₹17,000+", rating: "4.8" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Charming dinner date companions in Katargam", price: "₹16,000+", rating: "4.6" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services in Katargam", price: "₹14,000+", rating: "4.5" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "Premium call girl services in Katargam", price: "₹19,000+", rating: "4.9" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services from Katargam", price: "₹21,000+", rating: "5.0" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companions for exclusive events in Katargam", price: "₹25,000+", rating: "5.0" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Katargam", price: "₹24,000+", rating: "4.8" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Katargam", price: "₹20,000+", rating: "4.7" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Hotel escort services in Katargam area", price: "₹18,000+", rating: "4.6" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Outcall escort services in Katargam", price: "₹19,000+", rating: "4.6" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Katargam", price: "₹22,000+", rating: "4.8" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions in Katargam", price: "₹26,000+", rating: "4.9" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Katargam", price: "₹21,000+", rating: "4.7" },
    { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature housewife companions in Katargam", price: "₹17,000+", rating: "4.5" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Party escort services in Katargam", price: "₹18,000+", rating: "4.6" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services in Katargam", price: "₹27,000+", rating: "4.9" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model companions in Katargam", price: "₹29,000+", rating: "5.0" },
    { title: "Special Service", image: "/images/services/Special Service.webp", description: "Special personalized services in Katargam", price: "₹23,000+", rating: "4.8" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding event companions in Katargam", price: "₹20,000+", rating: "4.7" }
  ];

  const getServiceSlug = (title: string): string => {
    return title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-amber-500 to-amber-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Service Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-3xl">🏭</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}>
              <span className="text-3xl">💎</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
              <span className="text-3xl">⭐</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Katargam Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto animate-fadeInUp">
            Premium escort services in Katargam - Industrial hub with vibrant companionship
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-amber-700 mb-6">
                About Katargam Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Katargam is a prominent industrial and residential area in Surat, known for its 
                textile markets and GIDC industrial estate. Our escort services in Katargam provide 
                sophisticated companions ideal for this bustling commercial area with diverse lifestyle options.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-700 mb-2">🏭 Industrial Hub</h3>
                  <p className="text-sm text-amber-600">Major GIDC industrial area</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-700 mb-2">🛍️ Shopping Centers</h3>
                  <p className="text-sm text-amber-600">Famous textile markets</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-700 mb-2">🚇 Metro Connected</h3>
                  <p className="text-sm text-amber-600">Excellent transportation</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-700 mb-2">🏨 Business Hotels</h3>
                  <p className="text-sm text-amber-600">Multiple accommodation options</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Why Choose Our Katargam Escorts?</h3>
              <ul className="space-y-3 text-amber-700">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Professional companions for business meetings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Perfect for corporate events and gatherings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Familiar with industrial and commercial settings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Discreet service in busy area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Available 24/7 for businessmen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-700 mb-4">
              Our Premium Services in Katargam
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional escort services tailored for Katargam area
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-amber-600 font-semibold">{service.price}</span>
                    <span className="text-yellow-500">⭐ {service.rating}</span>
                  </div>
                  <Link
                    href={`/services/${getServiceSlug(service.title)}`}
                    className="block w-full bg-amber-500 hover:bg-amber-600 text-white text-center py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-700 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about escort services in Katargam</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-amber-700 mb-3">How to book escorts in Katargam?</h3>
                <p className="text-gray-600">You can book through our website, WhatsApp, or by calling us directly. We provide 24/7 booking services for Katargam area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-amber-700 mb-3">Are the escorts verified?</h3>
                <p className="text-gray-600">Yes, all our escorts in Katargam are thoroughly verified with authentic profiles and genuine photos.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-amber-700 mb-3">What is the price range?</h3>
                <p className="text-gray-600">Our services in Katargam start from ₹14,000 and go up to ₹29,000+ depending on the service type and duration.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-amber-700 mb-3">Is advance booking required?</h3>
                <p className="text-gray-600">While we accept last-minute bookings, advance booking is recommended for better availability in Katargam.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-amber-700 mb-3">Do you provide outcall services?</h3>
                <p className="text-gray-600">Yes, we provide both incall and outcall services throughout Katargam and surrounding areas.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-amber-700 mb-3">What payment methods are accepted?</h3>
                <p className="text-gray-600">We accept cash, UPI, and online transfers for all bookings in Katargam area.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-amber-700 mb-3">Is discretion guaranteed?</h3>
                <p className="text-gray-600">Absolutely. We maintain complete privacy and confidentiality for all our clients in Katargam.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-amber-700 mb-3">Are services available 24/7?</h3>
                <p className="text-gray-600">Yes, our escort services in Katargam are available round the clock, all days of the week.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-amber-700 mb-3">Can I choose a specific escort?</h3>
                <p className="text-gray-600">Yes, you can browse profiles and select your preferred companion for Katargam area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-amber-700 mb-3">What areas do you cover near Katargam?</h3>
                <p className="text-gray-600">We cover Katargam and all nearby industrial and residential areas.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-amber-700 mb-3">Are there any hidden charges?</h3>
                <p className="text-gray-600">No, we maintain complete transparency. The price quoted is the final price with no hidden charges.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-amber-700 mb-3">How do I cancel or reschedule?</h3>
                <p className="text-gray-600">You can cancel or reschedule by contacting us at least 2 hours before the booking time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Companion in Katargam?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Contact us now for premium escort services in Katargam area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
