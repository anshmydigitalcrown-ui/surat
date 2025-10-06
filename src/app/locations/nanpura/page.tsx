'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NanpuraEscorts() {
  const services = [
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young and vibrant college girl companions in Nanpura", price: "₹15,000+" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions in Nanpura area", price: "₹17,000+" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Charming dinner date companions in Nanpura", price: "₹16,000+" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services in Nanpura", price: "₹14,000+" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "Premium call girl services in Nanpura", price: "₹19,000+" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services from Nanpura", price: "₹21,000+" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companions for exclusive events in Nanpura", price: "₹25,000+" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Nanpura", price: "₹24,000+" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Nanpura", price: "₹20,000+" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Hotel escort services in Nanpura area", price: "₹18,000+" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Outcall escort services in Nanpura", price: "₹19,000+" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Nanpura", price: "₹22,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-violet-500 to-violet-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Nanpura Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto animate-fadeInUp">
            Youthful escort services in Nanpura - Vibrant companions for energetic and social experiences
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-violet-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-violet-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-violet-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-violet-700 mb-6">
                About Nanpura Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nanpura is a vibrant area in Surat known for its youthful energy, educational 
                institutions, and lively social scene. Our escort services in Nanpura provide 
                energetic and charming companions perfect for the area&apos;s dynamic atmosphere.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-violet-700 mb-2">🎓 Educational Hub</h3>
                  <p className="text-sm text-violet-600">Colleges and educational institutions</p>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-violet-700 mb-2">🌟 Youthful Energy</h3>
                  <p className="text-sm text-violet-600">Vibrant young community</p>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-violet-700 mb-2">🎉 Social Scene</h3>
                  <p className="text-sm text-violet-600">Active social and cultural life</p>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-violet-700 mb-2">🍽️ Cafes & Restaurants</h3>
                  <p className="text-sm text-violet-600">Trendy dining and social spots</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-violet-200 to-violet-300 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold text-violet-700">Nanpura Vibrant Area</h3>
                  <p className="text-violet-600 mt-2">Youthful escort services available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-violet-700 mb-6">
              Our Nanpura Services
            </h2>
            <p className="text-xl text-violet-600 max-w-3xl mx-auto">
              Vibrant escort services for Nanpura&apos;s energetic and youthful community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-yellow-50 to-orange-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-violet-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-violet-600 font-bold text-lg">{service.price}</span>
                    <Link
                      href="/contact"
                      className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Nanpura */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-violet-700 mb-6">
              Why Choose Our Nanpura Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-violet-50 rounded-xl">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-xl font-semibold text-violet-700 mb-2">Youthful Energy</h3>
              <p className="text-violet-600">Vibrant companions matching Nanpura&apos;s energetic atmosphere</p>
            </div>
            <div className="text-center p-6 bg-violet-50 rounded-xl">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold text-violet-700 mb-2">Social Expertise</h3>
              <p className="text-violet-600">Perfect companions for Nanpura&apos;s active social scene</p>
            </div>
            <div className="text-center p-6 bg-violet-50 rounded-xl">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-violet-700 mb-2">Fresh & Charming</h3>
              <p className="text-violet-600">Young and charming companions for memorable experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-violet-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Nanpura Escorts?</h2>
          <p className="text-xl mb-8 text-violet-100">
            Contact us today to arrange vibrant escort services in Nanpura&apos;s energetic area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-violet-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-violet-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="tel:+91XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-violet-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}