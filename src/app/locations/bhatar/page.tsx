'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BhatarEscorts() {
  const services = [
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young and vibrant college girl companions in Bhatar", price: "₹15,000+", rating: "4.7" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions in Bhatar area", price: "₹17,000+", rating: "4.8" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Charming dinner date companions in Bhatar", price: "₹16,000+", rating: "4.6" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services in Bhatar", price: "₹14,000+", rating: "4.5" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "Premium call girl services in Bhatar", price: "₹19,000+", rating: "4.9" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services from Bhatar", price: "₹21,000+", rating: "5.0" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companions for exclusive events in Bhatar", price: "₹25,000+", rating: "5.0" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Bhatar", price: "₹24,000+", rating: "4.8" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Bhatar", price: "₹20,000+", rating: "4.7" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Hotel escort services in Bhatar area", price: "₹18,000+", rating: "4.6" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Outcall escort services in Bhatar", price: "₹19,000+", rating: "4.6" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Bhatar", price: "₹22,000+", rating: "4.8" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions in Bhatar", price: "₹26,000+", rating: "4.9" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Bhatar", price: "₹21,000+", rating: "4.7" },
    { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature housewife companions in Bhatar", price: "₹17,000+", rating: "4.5" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Party escort services in Bhatar", price: "₹18,000+", rating: "4.6" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services in Bhatar", price: "₹27,000+", rating: "4.9" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model companions in Bhatar", price: "₹29,000+", rating: "5.0" },
    { title: "Special Service", image: "/images/services/Special Service.webp", description: "Special personalized services in Bhatar", price: "₹23,000+", rating: "4.8" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding event companions in Bhatar", price: "₹20,000+", rating: "4.7" }
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-orange-500 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Bhatar Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto animate-fadeInUp">
            Premium escort services in Bhatar - Educational hub with sophisticated companionship
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-orange-700 mb-6">
                About Bhatar Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bhatar is a prominent area in Surat, known for its educational institutions and 
                coastal road. Our escort services in Bhatar offer refined companions perfect for this 
                vibrant locality with student community, beaches, and modern amenities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-700 mb-2">🎓 Educational Hub</h3>
                  <p className="text-sm text-orange-600">Colleges and universities</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-700 mb-2">🏖️ Beach Road</h3>
                  <p className="text-sm text-orange-600">Scenic coastal area</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-700 mb-2">🏘️ Residential Area</h3>
                  <p className="text-sm text-orange-600">Well-developed locality</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-700 mb-2">🛍️ Shopping Options</h3>
                  <p className="text-sm text-orange-600">Markets and stores</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Why Choose Our Bhatar Escorts?</h3>
              <ul className="space-y-3 text-orange-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Youthful and energetic companions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Perfect for college events and parties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Familiar with beachside and educational areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Discreet and professional service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Available 24/7 for your convenience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-700 mb-4">
              Our Premium Services in Bhatar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional escort services tailored for Bhatar area
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
                  <h3 className="text-xl font-bold text-orange-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-orange-600 font-semibold">{service.price}</span>
                    <span className="text-yellow-500">⭐ {service.rating}</span>
                  </div>
                  <Link
                    href={`/services/${getServiceSlug(service.title)}`}
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-full font-semibold transition-all duration-300"
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
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Companion in Bhatar?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Contact us now for premium escort services in Bhatar area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
