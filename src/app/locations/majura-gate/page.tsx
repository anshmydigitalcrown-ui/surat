'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MajuraGateEscorts() {
  const services = [
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young and vibrant college girl companions in Majura Gate", price: "₹15,000+", rating: "4.7" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions in Majura Gate area", price: "₹17,000+", rating: "4.8" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Charming dinner date companions in Majura Gate", price: "₹16,000+", rating: "4.6" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services in Majura Gate", price: "₹14,000+", rating: "4.5" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "Premium call girl services in Majura Gate", price: "₹19,000+", rating: "4.9" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services from Majura Gate", price: "₹21,000+", rating: "5.0" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companions for exclusive events in Majura Gate", price: "₹25,000+", rating: "5.0" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Majura Gate", price: "₹24,000+", rating: "4.8" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Majura Gate", price: "₹20,000+", rating: "4.7" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Hotel escort services in Majura Gate area", price: "₹18,000+", rating: "4.6" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Outcall escort services in Majura Gate", price: "₹19,000+", rating: "4.6" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Majura Gate", price: "₹22,000+", rating: "4.8" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions in Majura Gate", price: "₹26,000+", rating: "4.9" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Majura Gate", price: "₹21,000+", rating: "4.7" },
    { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature housewife companions in Majura Gate", price: "₹17,000+", rating: "4.5" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Party escort services in Majura Gate", price: "₹18,000+", rating: "4.6" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services in Majura Gate", price: "₹27,000+", rating: "4.9" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model companions in Majura Gate", price: "₹29,000+", rating: "5.0" },
    { title: "Special Service", image: "/images/services/Special Service.webp", description: "Special personalized services in Majura Gate", price: "₹23,000+", rating: "4.8" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding event companions in Majura Gate", price: "₹20,000+", rating: "4.7" }
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
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-lime-500 to-lime-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Majura Gate Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-lime-100 max-w-3xl mx-auto animate-fadeInUp">
            Premium escort services near Majura Gate - Historical charm meets modern companionship
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-lime-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-lime-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-lime-700 mb-6">
                About Majura Gate Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Majura Gate is a historic landmark area in Surat, blending traditional heritage with 
                modern amenities. Our escort services in Majura Gate provide sophisticated companions 
                perfect for this culturally rich neighborhood with easy connectivity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-lime-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lime-700 mb-2">🏛️ Historic Landmark</h3>
                  <p className="text-sm text-lime-600">Rich cultural heritage</p>
                </div>
                <div className="bg-lime-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lime-700 mb-2">🚉 Well Connected</h3>
                  <p className="text-sm text-lime-600">Easy access from all areas</p>
                </div>
                <div className="bg-lime-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lime-700 mb-2">🏨 Hotels Available</h3>
                  <p className="text-sm text-lime-600">Multiple accommodation options</p>
                </div>
                <div className="bg-lime-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lime-700 mb-2">🛍️ Shopping Area</h3>
                  <p className="text-sm text-lime-600">Markets and shopping centers</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-lime-100 to-lime-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-lime-800 mb-4">Why Choose Our Majura Gate Escorts?</h3>
              <ul className="space-y-3 text-lime-700">
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span>Culturally aware and sophisticated companions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span>Perfect for both traditional and modern settings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span>Familiar with the area&apos;s best locations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span>Discreet and professional service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span>Available 24/7 for your convenience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-lime-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lime-700 mb-4">
              Our Premium Services in Majura Gate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional escort services tailored for Majura Gate area
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-lime-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lime-600 font-semibold">{service.price}</span>
                    <span className="text-yellow-500">⭐ {service.rating}</span>
                  </div>
                  <Link
                    href={`/services/${getServiceSlug(service.title)}`}
                    className="block w-full bg-lime-500 hover:bg-lime-600 text-white text-center py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-lime-500 to-lime-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Companion in Majura Gate?
          </h2>
          <p className="text-xl text-lime-100 mb-8">
            Contact us now for premium escort services in Majura Gate area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-lime-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-lime-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
