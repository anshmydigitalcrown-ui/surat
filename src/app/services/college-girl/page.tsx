'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CollegeGirlService() {
  const serviceFeatures = [
    "Youthful energy and vibrant personality",
    "Smart and educated companions",
    "Fun-loving and adventurous nature",
    "Fresh and contemporary appearance",
    "Excellent conversation skills",
    "Enthusiastic and engaging presence"
  ];

  const availableLocations = [
    { name: "Varachha", link: "/locations/varachha", price: "₹18,000+" },
    { name: "Adajan", link: "/locations/adajan", price: "₹17,000+" },
    { name: "Vesu", link: "/locations/vesu", price: "₹19,000+" },
    { name: "Citylight", link: "/locations/citylight", price: "₹18,000+" },
    { name: "Althan", link: "/locations/althan", price: "₹18,000+" },
    { name: "Piplod", link: "/locations/piplod", price: "₹19,000+" },
    { name: "Udhna", link: "/locations/udhna", price: "₹18,000+" },
    { name: "Athwa", link: "/locations/athwa", price: "₹18,000+" },
    { name: "Rander", link: "/locations/rander", price: "₹18,000+" },
    { name: "Ghod Dod Road", link: "/locations/ghod-dod-road", price: "₹19,000+" },
    { name: "Ring Road", link: "/locations/ring-road", price: "₹18,000+" },
    { name: "Nanpura", link: "/locations/nanpura", price: "₹18,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-500 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-5xl">📚</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">College Girl Service</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Youthful and vibrant companions with fresh energy and intelligent conversation
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">College Girl Companions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Enjoy the company of youthful, energetic, and educated companions who bring fresh perspectives 
                and vibrant personalities to any occasion. Our college girl companions are smart, fun-loving, 
                and perfect for those seeking engaging conversations and lively companionship.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Service Features:</h3>
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-3 text-purple-500 text-xl">📚</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/College Girl.webp"
                  alt="College Girl Service in Surat"
                  width={600}
                  height={750}
                  className="w-full h-full object-contain bg-gradient-to-br from-purple-100 to-indigo-100"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-12 mb-16">
            <h3 className="text-3xl font-bold text-center text-purple-800 mb-8">Booking Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📞</span>
                </div>
                <h4 className="text-xl font-bold text-purple-700 mb-2">24/7 Booking</h4>
                <p className="text-gray-600">Available round the clock for your convenience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔒</span>
                </div>
                <h4 className="text-xl font-bold text-purple-700 mb-2">Complete Privacy</h4>
                <p className="text-gray-600">Absolute discretion and confidentiality guaranteed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⭐</span>
                </div>
                <h4 className="text-xl font-bold text-purple-700 mb-2">Premium Quality</h4>
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
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-purple-700 mb-2">{location.name}</h4>
                      <p className="text-purple-600 font-semibold">{location.price}</p>
                    </div>
                    <span className="text-3xl">📚</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Book College Girl Service?</h3>
            <p className="text-xl mb-8 text-purple-100">Experience youthful energy with our vibrant college girl companions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
                Book Now
              </Link>
              <Link href="/gallery" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}