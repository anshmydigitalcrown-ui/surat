'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CelebrityLookAlikeService() {
  const serviceFeatures = [
    "Stunning resemblance to popular celebrities",
    "Professional makeup and styling expertise",
    "Entertainment and performance skills",
    "Photogenic appearance for events",
    "Charismatic personality and charm",
    "Custom looks to match your preferences"
  ];

  const availableLocations = [
    { name: "Varachha", link: "/locations/varachha", price: "₹28,000+" },
    { name: "Adajan", link: "/locations/adajan", price: "₹27,000+" },
    { name: "Vesu", link: "/locations/vesu", price: "₹29,000+" },
    { name: "Citylight", link: "/locations/citylight", price: "₹28,000+" },
    { name: "Althan", link: "/locations/althan", price: "₹28,000+" },
    { name: "Piplod", link: "/locations/piplod", price: "₹29,000+" },
    { name: "Udhna", link: "/locations/udhna", price: "₹28,000+" },
    { name: "Athwa", link: "/locations/athwa", price: "₹28,000+" },
    { name: "Rander", link: "/locations/rander", price: "₹28,000+" },
    { name: "Ghod Dod Road", link: "/locations/ghod-dod-road", price: "₹29,000+" },
    { name: "Ring Road", link: "/locations/ring-road", price: "₹28,000+" },
    { name: "Nanpura", link: "/locations/nanpura", price: "₹28,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-pink-500 to-rose-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-5xl">⭐</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Celebrity Look-alike</h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
            Stunning companions who resemble your favorite celebrities with glamorous appeal
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Celebrity Look-alike Companions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Experience the glamour of being accompanied by someone who bears stunning resemblance to your favorite 
                celebrities. Our celebrity look-alike companions combine natural beauty with professional styling to 
                create an unforgettable experience that will turn heads wherever you go.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-pink-600 mb-4">Service Features:</h3>
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-3 text-pink-500 text-xl">⭐</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/Celebrity Look-alike.webp"
                  alt="Celebrity Look-alike Service in Surat"
                  width={600}
                  height={750}
                  className="w-full h-full object-contain bg-gradient-to-br from-pink-100 to-rose-100"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-12 mb-16">
            <h3 className="text-3xl font-bold text-center text-pink-800 mb-8">Booking Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📞</span>
                </div>
                <h4 className="text-xl font-bold text-pink-700 mb-2">24/7 Booking</h4>
                <p className="text-gray-600">Available round the clock for your convenience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔒</span>
                </div>
                <h4 className="text-xl font-bold text-pink-700 mb-2">Complete Privacy</h4>
                <p className="text-gray-600">Absolute discretion and confidentiality guaranteed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⭐</span>
                </div>
                <h4 className="text-xl font-bold text-pink-700 mb-2">Premium Quality</h4>
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
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-pink-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-pink-700 mb-2">{location.name}</h4>
                      <p className="text-pink-600 font-semibold">{location.price}</p>
                    </div>
                    <span className="text-3xl">⭐</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Book Celebrity Look-alike Service?</h3>
            <p className="text-xl mb-8 text-pink-100">Experience glamour with our stunning celebrity look-alike companions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105">
                Book Now
              </Link>
              <Link href="/gallery" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}