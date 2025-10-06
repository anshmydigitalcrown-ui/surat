'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function VesuEscorts() {
  const services = [
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "Elite companions for exclusive events in Vesu", price: "₹25,000+" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Luxury travel companion services from Vesu", price: "₹22,000+" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Perfect companions for social gatherings in Vesu", price: "₹15,000+" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Exclusive private model services in Vesu", price: "₹28,000+" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "High-class call girl services in Vesu", price: "₹20,000+" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Elegant wedding escort services in Vesu", price: "₹18,000+" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Vesu", price: "₹24,000+" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Vesu", price: "₹21,000+" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Vesu", price: "₹22,000+" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Elegant dinner companions in Vesu", price: "₹16,000+" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Premium hotel escort services in Vesu", price: "₹18,000+" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "International Russian model companions in Vesu", price: "₹30,000+" }
  ];

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-green-50 to-pink-50">
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
                  <h3 className="text-xl font-semibold text-green-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold text-lg">{service.price}</span>
                    <Link
                      href="/contact"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-300"
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