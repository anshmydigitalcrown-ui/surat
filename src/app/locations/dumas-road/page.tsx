'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DumasRoadEscorts() {
  const services = [
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young and vibrant college girl companions on Dumas Road", price: "₹15,000+", rating: "4.7" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions on Dumas Road area", price: "₹17,000+", rating: "4.8" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Charming dinner date companions on Dumas Road", price: "₹16,000+", rating: "4.6" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services on Dumas Road", price: "₹14,000+", rating: "4.5" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "Premium call girl services on Dumas Road", price: "₹19,000+", rating: "4.9" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services from Dumas Road", price: "₹21,000+", rating: "5.0" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companions for exclusive events on Dumas Road", price: "₹25,000+", rating: "5.0" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions on Dumas Road", price: "₹24,000+", rating: "4.8" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions on Dumas Road", price: "₹20,000+", rating: "4.7" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Hotel escort services on Dumas Road area", price: "₹18,000+", rating: "4.6" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Outcall escort services on Dumas Road", price: "₹19,000+", rating: "4.6" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions on Dumas Road", price: "₹22,000+", rating: "4.8" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions on Dumas Road", price: "₹26,000+", rating: "4.9" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions on Dumas Road", price: "₹21,000+", rating: "4.7" },
    { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature housewife companions on Dumas Road", price: "₹17,000+", rating: "4.5" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Party escort services on Dumas Road", price: "₹18,000+", rating: "4.6" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services on Dumas Road", price: "₹27,000+", rating: "4.9" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model companions on Dumas Road", price: "₹29,000+", rating: "5.0" },
    { title: "Special Service", image: "/images/services/Special Service.webp", description: "Special personalized services on Dumas Road", price: "₹23,000+", rating: "4.8" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding event companions on Dumas Road", price: "₹20,000+", rating: "4.7" }
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-cyan-500 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Service Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-3xl">🌊</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}>
              <span className="text-3xl">💎</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
              <span className="text-3xl">⭐</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Dumas Road Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto animate-fadeInUp">
            Premium escort services on Dumas Road - Coastal charm with sophisticated companionship
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
                About Dumas Road Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dumas Road is Surat&apos;s famous coastal stretch leading to Dumas Beach, known for its 
                scenic beauty and recreational spots. Our escort services on Dumas Road provide elegant 
                companions ideal for this picturesque area with beachside resorts and entertainment venues.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-700 mb-2">🏖️ Beach Access</h3>
                  <p className="text-sm text-cyan-600">Direct route to Dumas Beach</p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-700 mb-2">🌴 Scenic Beauty</h3>
                  <p className="text-sm text-cyan-600">Beautiful coastal views</p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-700 mb-2">🏨 Resorts Available</h3>
                  <p className="text-sm text-cyan-600">Beachside accommodation</p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-700 mb-2">🍽️ Food Joints</h3>
                  <p className="text-sm text-cyan-600">Seafood and restaurants</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-cyan-800 mb-4">Why Choose Our Dumas Road Escorts?</h3>
              <ul className="space-y-3 text-cyan-700">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✓</span>
                  <span>Perfect companions for beachside outings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✓</span>
                  <span>Ideal for romantic and leisure dates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✓</span>
                  <span>Familiar with coastal venues and resorts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✓</span>
                  <span>Professional and discreet service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✓</span>
                  <span>Available 24/7 for beach getaways</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-4">
              Our Premium Services on Dumas Road
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional escort services tailored for Dumas Road area
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
                  <h3 className="text-xl font-bold text-cyan-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-cyan-600 font-semibold">{service.price}</span>
                    <span className="text-yellow-500">⭐ {service.rating}</span>
                  </div>
                  <Link
                    href={`/services/${getServiceSlug(service.title)}`}
                    className="block w-full bg-cyan-500 hover:bg-cyan-600 text-white text-center py-3 rounded-full font-semibold transition-all duration-300"
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
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about escort services in Dumas Road</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">How to book escorts in Dumas Road?</h3>
                <p className="text-gray-600">You can book through our website, WhatsApp, or by calling us directly. We provide 24/7 booking services for Dumas Road area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">Are the escorts verified?</h3>
                <p className="text-gray-600">Yes, all our escorts in Dumas Road are thoroughly verified with authentic profiles and genuine photos.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">What is the price range?</h3>
                <p className="text-gray-600">Our services in Dumas Road start from ₹14,000 and go up to ₹29,000+ depending on the service type and duration.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">Is advance booking required?</h3>
                <p className="text-gray-600">While we accept last-minute bookings, advance booking is recommended for better availability in Dumas Road.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">Do you provide outcall services?</h3>
                <p className="text-gray-600">Yes, we provide both incall and outcall services throughout Dumas Road and surrounding areas.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">What payment methods are accepted?</h3>
                <p className="text-gray-600">We accept cash, UPI, and online transfers for all bookings in Dumas Road area.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">Is discretion guaranteed?</h3>
                <p className="text-gray-600">Absolutely. We maintain complete privacy and confidentiality for all our clients in Dumas Road.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">Are services available 24/7?</h3>
                <p className="text-gray-600">Yes, our escort services in Dumas Road are available round the clock, all days of the week.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">Can I choose a specific escort?</h3>
                <p className="text-gray-600">Yes, you can browse profiles and select your preferred companion for Dumas Road area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">What areas do you cover near Dumas Road?</h3>
                <p className="text-gray-600">We cover Dumas Road and all nearby areas with prompt service delivery.</p>
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


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Companion on Dumas Road?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Contact us now for premium escort services on Dumas Road area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
