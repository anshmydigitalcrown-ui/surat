'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function KamrejEscorts() {
  const services = [
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young and vibrant college girl companions in Kamrej", price: "₹15,000+", rating: "4.7" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions in Kamrej area", price: "₹17,000+", rating: "4.8" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Charming dinner date companions in Kamrej", price: "₹16,000+", rating: "4.6" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services in Kamrej", price: "₹14,000+", rating: "4.5" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "Premium call girl services in Kamrej", price: "₹19,000+", rating: "4.9" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services from Kamrej", price: "₹21,000+", rating: "5.0" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companions for exclusive events in Kamrej", price: "₹25,000+", rating: "5.0" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Kamrej", price: "₹24,000+", rating: "4.8" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Kamrej", price: "₹20,000+", rating: "4.7" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Hotel escort services in Kamrej area", price: "₹18,000+", rating: "4.6" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Outcall escort services in Kamrej", price: "₹19,000+", rating: "4.6" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Kamrej", price: "₹22,000+", rating: "4.8" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions in Kamrej", price: "₹26,000+", rating: "4.9" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Kamrej", price: "₹21,000+", rating: "4.7" },
    { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature housewife companions in Kamrej", price: "₹17,000+", rating: "4.5" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Party escort services in Kamrej", price: "₹18,000+", rating: "4.6" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services in Kamrej", price: "₹27,000+", rating: "4.9" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model companions in Kamrej", price: "₹29,000+", rating: "5.0" },
    { title: "Special Service", image: "/images/services/Special Service.webp", description: "Special personalized services in Kamrej", price: "₹23,000+", rating: "4.8" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding event companions in Kamrej", price: "₹20,000+", rating: "4.7" }
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
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-fuchsia-500 to-fuchsia-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Kamrej Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-fuchsia-100 max-w-3xl mx-auto animate-fadeInUp">
            Premium escort services in Kamrej - Rural charm with sophisticated companionship
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-fuchsia-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-fuchsia-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-fuchsia-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-fuchsia-700 mb-6">
                About Kamrej Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Kamrej is a growing suburb of Surat, offering a blend of rural tranquility and modern 
                development. Our escort services in Kamrej provide elegant companions ideal for this 
                emerging area with peaceful environment and expanding infrastructure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-fuchsia-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-fuchsia-700 mb-2">🌾 Suburban Area</h3>
                  <p className="text-sm text-fuchsia-600">Growing locality</p>
                </div>
                <div className="bg-fuchsia-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-fuchsia-700 mb-2">🚗 Easy Access</h3>
                  <p className="text-sm text-fuchsia-600">Well connected by roads</p>
                </div>
                <div className="bg-fuchsia-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-fuchsia-700 mb-2">🏡 Peaceful Living</h3>
                  <p className="text-sm text-fuchsia-600">Quiet environment</p>
                </div>
                <div className="bg-fuchsia-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-fuchsia-700 mb-2">🏗️ Developing Area</h3>
                  <p className="text-sm text-fuchsia-600">Modern infrastructure</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-fuchsia-100 to-fuchsia-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-fuchsia-800 mb-4">Why Choose Our Kamrej Escorts?</h3>
              <ul className="space-y-3 text-fuchsia-700">
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">✓</span>
                  <span>Perfect for private and intimate encounters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">✓</span>
                  <span>Ideal for peaceful and discreet meetings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">✓</span>
                  <span>Familiar with suburban settings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">✓</span>
                  <span>Confidential and secure service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">✓</span>
                  <span>Available 24/7 for your convenience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-fuchsia-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-fuchsia-700 mb-4">
              Our Premium Services in Kamrej
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional escort services tailored for Kamrej area
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
                  <h3 className="text-xl font-bold text-fuchsia-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-fuchsia-600 font-semibold">{service.price}</span>
                    <span className="text-yellow-500">⭐ {service.rating}</span>
                  </div>
                  <Link
                    href={`/services/${getServiceSlug(service.title)}`}
                    className="block w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-center py-3 rounded-full font-semibold transition-all duration-300"
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
      <section className="py-20 bg-gradient-to-br from-fuchsia-500 to-fuchsia-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Companion in Kamrej?
          </h2>
          <p className="text-xl text-fuchsia-100 mb-8">
            Contact us now for premium escort services in Kamrej area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-fuchsia-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-fuchsia-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-fuchsia-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
