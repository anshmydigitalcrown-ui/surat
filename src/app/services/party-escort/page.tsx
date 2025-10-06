'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PartyEscortService() {
  const serviceFeatures = [
    "Fun and energetic party companions",
    "Social events and celebration expertise",
    "Outgoing and charismatic personalities",
    "Experience with nightlife and entertainment",
    "Professional party etiquette",
    "Vibrant and engaging presence"
  ];

  const availableLocations = [
    { name: "Varachha", link: "/locations/varachha", price: "₹19,000+" },
    { name: "Adajan", link: "/locations/adajan", price: "₹18,000+" },
    { name: "Vesu", link: "/locations/vesu", price: "₹20,000+" },
    { name: "Citylight", link: "/locations/citylight", price: "₹19,000+" },
    { name: "Althan", link: "/locations/althan", price: "₹19,000+" },
    { name: "Piplod", link: "/locations/piplod", price: "₹20,000+" },
    { name: "Udhna", link: "/locations/udhna", price: "₹19,000+" },
    { name: "Athwa", link: "/locations/athwa", price: "₹19,000+" },
    { name: "Rander", link: "/locations/rander", price: "₹19,000+" },
    { name: "Ghod Dod Road", link: "/locations/ghod-dod-road", price: "₹20,000+" },
    { name: "Ring Road", link: "/locations/ring-road", price: "₹19,000+" },
    { name: "Nanpura", link: "/locations/nanpura", price: "₹19,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-yellow-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-5xl">🎉</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Party Escort</h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto">
            Fun and energetic companions perfect for parties, celebrations, and social events
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Party Escort Companions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Bring life to your celebrations with our vibrant and energetic party escort companions. 
                Perfect for birthdays, social gatherings, nightlife adventures, and any occasion where 
                you want an outgoing and fun-loving partner to share the excitement.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">Service Features:</h3>
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-3 text-yellow-500 text-xl">🎉</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/Party Escort.webp"
                  alt="Party Escort Service in Surat"
                  width={600}
                  height={750}
                  className="w-full h-full object-contain bg-gradient-to-br from-yellow-100 to-orange-100"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-12 mb-16">
            <h3 className="text-3xl font-bold text-center text-yellow-800 mb-8">Booking Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📞</span>
                </div>
                <h4 className="text-xl font-bold text-yellow-700 mb-2">24/7 Booking</h4>
                <p className="text-gray-600">Available round the clock for your convenience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔒</span>
                </div>
                <h4 className="text-xl font-bold text-yellow-700 mb-2">Complete Privacy</h4>
                <p className="text-gray-600">Absolute discretion and confidentiality guaranteed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⭐</span>
                </div>
                <h4 className="text-xl font-bold text-yellow-700 mb-2">Premium Quality</h4>
                <p className="text-gray-600">Verified professionals with excellent reviews</p>
              </div>
            </div>
          </div>

          {/* Available Locations */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Available in All Surat Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableLocations.map((location, index) => (
                <Link 
                  key={index}
                  href={location.link}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-yellow-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-yellow-700 mb-2">{location.name}</h4>
                      <p className="text-yellow-600 font-semibold">{location.price}</p>
                    </div>
                    <span className="text-3xl">🎉</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-yellow-500 to-orange-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Book Party Escort Service?</h3>
            <p className="text-xl mb-8 text-yellow-100">Fun and vibrant companions for your celebrations and social events</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-yellow-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">
                Book Now
              </Link>
              <Link href="/gallery" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}