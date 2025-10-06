'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function UdhnaEscorts() {
  const services = [
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Professional outcall services in Udhna industrial area", price: "₹16,000+" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services in Udhna", price: "₹14,000+" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Hotel escort services in Udhna business hotels", price: "₹18,000+" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "Premium call girl services in Udhna area", price: "₹20,000+" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Udhna", price: "₹17,000+" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services from Udhna", price: "₹22,000+" },
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young college girl companions in Udhna", price: "₹15,000+" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Udhna", price: "₹24,000+" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companions for exclusive events in Udhna", price: "₹25,000+" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model escorts in Udhna", price: "₹27,000+" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Udhna", price: "₹19,000+" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Udhna", price: "₹21,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-orange-500 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Udhna Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto animate-fadeInUp">
            Professional escort services in Udhna - Reliable companions for industrial area professionals
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
                About Udhna Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Udhna is a major industrial and commercial hub in Surat, home to numerous factories, 
                warehouses, and business establishments. Our escort services in Udhna provide reliable 
                companionship for the area&apos;s hardworking business community and visitors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-700 mb-2">🏭 Industrial Hub</h3>
                  <p className="text-sm text-orange-600">Major factories and manufacturing units</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-700 mb-2">🚛 Logistics Center</h3>
                  <p className="text-sm text-orange-600">Transportation and distribution hubs</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-700 mb-2">🏪 Commercial Area</h3>
                  <p className="text-sm text-orange-600">Business centers and trade complexes</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-700 mb-2">🛣️ Great Connectivity</h3>
                  <p className="text-sm text-orange-600">Well-connected highways and roads</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🏭</div>
                  <h3 className="text-2xl font-bold text-orange-700">Udhna Industrial Area</h3>
                  <p className="text-orange-600 mt-2">Professional escort services available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-700 mb-6">
              Our Udhna Services
            </h2>
            <p className="text-xl text-orange-600 max-w-3xl mx-auto">
              Reliable escort services for Udhna&apos;s industrial community and business professionals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-slate-50 to-gray-50">
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
                  <h3 className="text-xl font-semibold text-orange-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-bold text-lg">{service.price}</span>
                    <Link
                      href="/contact"
                      className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors duration-300"
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

      {/* Why Choose Udhna */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-700 mb-6">
              Why Choose Our Udhna Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">Efficient Service</h3>
              <p className="text-orange-600">Quick and reliable companions for busy industrial professionals</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">Professional Approach</h3>
              <p className="text-orange-600">Understanding the work culture of Udhna industrial area</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">Dependable Quality</h3>
              <p className="text-orange-600">Consistent and reliable escort services in Udhna</p>
            </div>
          </div>
        </div>
      </section>

      {/* Escorts in Udhna Content Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-orange-50 to-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-800 mb-6">
              Escorts in Udhna - Industrial Area Premium Companionship
            </h2>
            <p className="text-lg sm:text-xl text-orange-700 max-w-4xl mx-auto leading-relaxed">
              Experience exceptional escort services in Udhna, Surat&apos;s prominent industrial hub offering 
              professional companionship, reliable service, and dedicated support for industrial professionals 
              and business communities in this dynamic manufacturing zone
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-4">
                Why Choose Udhna Escorts?
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Udhna stands as one of Surat&apos;s most significant industrial areas, renowned for its 
                manufacturing units, textile mills, and industrial infrastructure. Our premium escort 
                services in Udhna are specifically designed to serve the hardworking professionals, 
                industrialists, and business owners who drive Surat&apos;s economic engine.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Understanding the demanding schedules and high-pressure environment of industrial work, 
                our companions provide the perfect relaxation and professional support needed by busy 
                professionals. Whether you&apos;re managing a textile unit, running a manufacturing business, 
                or working in the industrial sector, our escorts offer reliable and refreshing companionship.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-4">
                Industrial Area Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-orange-100">
                  <h4 className="font-semibold text-orange-700 mb-2">Manufacturing Support</h4>
                  <p className="text-sm text-gray-600">Companion services for industrial professionals and managers</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-orange-100">
                  <h4 className="font-semibold text-orange-700 mb-2">Business Meetings</h4>
                  <p className="text-sm text-gray-600">Professional support for industrial business meetings</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-orange-100">
                  <h4 className="font-semibold text-orange-700 mb-2">Stress Relief</h4>
                  <p className="text-sm text-gray-600">Relaxation services for high-pressure industrial work</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-orange-100">
                  <h4 className="font-semibold text-orange-700 mb-2">Factory Visits</h4>
                  <p className="text-sm text-gray-600">Companion services for industrial site visits and tours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-amber-700 rounded-2xl p-8 sm:p-12 text-white mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Udhna&apos;s Industrial Heritage
                </h3>
                <p className="text-orange-100 leading-relaxed mb-6">
                  As a major industrial hub in Surat, Udhna houses numerous textile mills, manufacturing 
                  units, and industrial establishments that form the backbone of the city&apos;s economy. 
                  Our escort services recognize the unique needs of this industrial community, providing 
                  companions who understand the demands of manufacturing work and can offer the relaxation 
                  and professional support that busy industrialists deserve.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-orange-500 px-4 py-2 rounded-full text-sm font-medium">Industrial Focus</span>
                  <span className="bg-orange-500 px-4 py-2 rounded-full text-sm font-medium">Manufacturing Support</span>
                  <span className="bg-orange-500 px-4 py-2 rounded-full text-sm font-medium">Professional Relief</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🏭</div>
                  <h4 className="text-xl font-bold mb-2">Industrial Hub</h4>
                  <p className="text-orange-100 text-sm">
                    Located in Surat&apos;s major industrial area with textile mills, 
                    manufacturing units, and industrial infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-6">
              Book Professional Escorts in Udhna Today
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Experience dedicated companionship in Surat&apos;s industrial powerhouse. Our professional 
              escorts understand the demands of industrial work and provide the perfect relaxation and 
              professional support for busy manufacturers, industrialists, and business professionals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚙️</span>
                </div>
                <h4 className="font-bold text-orange-700 mb-2">Industrial Understanding</h4>
                <p className="text-sm text-gray-600">Companions who appreciate the demands of manufacturing and industrial work</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔧</span>
                </div>
                <h4 className="font-bold text-orange-700 mb-2">Reliable Service</h4>
                <p className="text-sm text-gray-600">Dependable companionship matching the reliability of industrial operations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💼</span>
                </div>
                <h4 className="font-bold text-orange-700 mb-2">Professional Support</h4>
                <p className="text-sm text-gray-600">Expert companions providing stress relief and professional assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Udhna Escorts?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Contact us today to arrange professional escort services in Udhna&apos;s industrial area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="tel:+91XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}