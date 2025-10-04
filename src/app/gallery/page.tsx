'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    { title: "VIP Companionship", image: "/images/gallery/VIP Companionship.webp", category: "Premium" },
    { title: "Social Events", image: "/images/gallery/Social Events.webp", category: "Social" },
    { title: "Business Meetings", image: "/images/gallery/Business Meetings.webp", category: "Business" },
    { title: "Travel Companion", image: "/images/gallery/Travel Companion.webp", category: "Travel" },
    { title: "Dinner Dates", image: "/images/gallery/Dinner Dates.webp", category: "Social" },
    { title: "Party Escort", image: "/images/gallery/Party Escort.webp", category: "Entertainment" },
    { title: "Private Model", image: "/images/gallery/Private Model.webp", category: "Premium" },
    { title: "Hotel Escort", image: "/images/gallery/Hotel Escort.webp", category: "Standard" },
    { title: "Celebrity Look-alike", image: "/images/gallery/Celebrity Look-alike.webp", category: "Premium" },
    { title: "College Girl", image: "/images/gallery/College Girl.webp", category: "Young" },
    { title: "Housewife", image: "/images/gallery/Housewife.webp", category: "Mature" },
    { title: "Air Hostess", image: "/images/gallery/Air Hostess.webp", category: "Professional" },
    { title: "Russian Model", image: "/images/gallery/Russian Model.webp", category: "International" },
    { title: "Corporate Event", image: "/images/gallery/Corporate Event.webp", category: "Business" },
    { title: "Wedding Escort", image: "/images/gallery/Wedding Escort.webp", category: "Special" },
    { title: "Premium Call Girl", image: "/images/gallery/Premium Call Girl.webp", category: "Premium" },
    { title: "Outcall Service", image: "/images/gallery/Outcall Service.webp", category: "Outcall" },
    { title: "In-call Service", image: "/images/gallery/In-call Service.webp", category: "Incall" },
    { title: "Weekend Special", image: "/images/gallery/Weekend Special.webp", category: "Special" },
    { title: "Special Service", image: "/images/gallery/Special Service.webp", category: "Premium" }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'Premium', name: 'Premium', icon: '💎' },
    { id: 'Business', name: 'Business', icon: '💼' },
    { id: 'Social', name: 'Social', icon: '🥂' },
    { id: 'Travel', name: 'Travel', icon: '✈️' },
    { id: 'Entertainment', name: 'Entertainment', icon: '🎭' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-sweet-pink-600 via-light-red-500 to-sweet-pink-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Premium Escorts In Surat - Our Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fadeInUp">
            Explore our comprehensive collection of premium escort services with elegant presentation
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-sweet-pink-500 to-light-red-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-sweet-pink-100 hover:text-sweet-pink-600'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
              {selectedCategory === 'all' ? 'Complete Gallery' : `${selectedCategory} Services`}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional Call Girls & VIP Companions Available 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border-2 border-pink-300"
              >
                {/* Service Image */}
                <div className="h-80 relative bg-pink-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain object-center p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-200/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                    {service.category}
                  </div>
                  
                  {/* Available Badge */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg">
                    Available
                  </div>
                </div>
                
                <div className="p-6 bg-pink-50">
                  <h2 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-pink-600 to-red-500 bg-clip-text mb-6 leading-tight">
                    {service.title}
                  </h2>
                  
                  {/* Centered Book Now Button */}
                  <div className="flex justify-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No services found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Text Service Section */}
      <section className="py-20 bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Our Premium Services in Surat
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* VIP Escort Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">VIP Escort Service</h3>
              <p className="text-gray-700 leading-relaxed">
                Exclusive VIP companions for discerning clients seeking premium escort service in Surat. Professional, elegant, and sophisticated.
              </p>
            </div>

            {/* Event Companions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Event Companions</h3>
              <p className="text-gray-700 leading-relaxed">
                Perfect companions for business events, parties, and social gatherings in Surat. Professional and well-educated.
              </p>
            </div>

            {/* Premium Call Girls */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Premium Call Girls</h3>
              <p className="text-gray-700 leading-relaxed">
                High-class call girls service with verified profiles and complete discretion in Surat. 24/7 availability.
              </p>
            </div>
          </div>

          {/* Why We're the Top Choice */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-12">
              Why We&apos;re the Top Choice in Surat
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Quality Assurance */}
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-6">Quality Assurance</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Verified escorts</span>
                    <span className="text-gray-600">- All profiles thoroughly verified</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Professional training</span>
                    <span className="text-gray-600">- Well-trained companions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Regular health checkups</span>
                    <span className="text-gray-600">- Health and safety priority</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Background verification</span>
                    <span className="text-gray-600">- Complete security screening</span>
                  </li>
                </ul>
              </div>

              {/* Service Excellence */}
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-6">Service Excellence</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Prompt response</span>
                    <span className="text-gray-600">- Quick booking confirmation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Customer support</span>
                    <span className="text-gray-600">- 24/7 customer assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Flexible booking</span>
                    <span className="text-gray-600">- Easy scheduling options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Satisfaction guaranteed</span>
                    <span className="text-gray-600">- 100% satisfaction commitment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surat Locations Section */}
      <section className="py-20 bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Our Location Areas in Surat
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Premium escort locations available across all major areas of Surat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Row 1 */}
            <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Varachha</h3>
              <p className="text-red-100">Premium escort locations in Varachha area</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Adajan</h3>
              <p className="text-blue-100">High-class companions in Adajan locality</p>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Vesu</h3>
              <p className="text-green-100">VIP escort locations in Vesu residential area</p>
            </div>

            {/* Row 2 */}
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Citylight</h3>
              <p className="text-purple-100">Professional companions in Citylight area</p>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Althan</h3>
              <p className="text-pink-100">Elite escort locations in Althan locality</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Piplod</h3>
              <p className="text-indigo-100">Luxury companions in Piplod commercial area</p>
            </div>

            {/* Row 3 */}
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Udhna</h3>
              <p className="text-orange-100">Premium locations in Udhna industrial area</p>
            </div>
            <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Athwa</h3>
              <p className="text-teal-100">High-end escort locations in Athwa</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Rander</h3>
              <p className="text-yellow-100">Quality companions in Rander area</p>
            </div>

            {/* Row 4 */}
            <div className="bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Ghod Dod Road</h3>
              <p className="text-rose-100">VIP locations on Ghod Dod Road</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Ring Road</h3>
              <p className="text-cyan-100">Professional escorts near Ring Road</p>
            </div>
            <div className="bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Nanpura</h3>
              <p className="text-violet-100">Elite companions in Nanpura city center</p>
            </div>
          </div>
        </div>
      </section>

      {/* Escorts in Surat Content Section */}
      <section className="py-20 bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4 mb-6">
              <span className="text-4xl">⭐</span>
              <h2 className="text-5xl md:text-6xl font-black text-white">
                What Our Premium Clients Say About Us
              </h2>
              <span className="text-4xl">⭐</span>
            </div>
            <div className="flex justify-center items-center gap-2 mb-8">
              <span className="text-2xl">💎</span>
              <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
                Thousands of satisfied clients across Surat trust us for premium escort services
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Premium Quality */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
              <p className="text-white/90 leading-relaxed">
                Handpicked professional escorts with guaranteed satisfaction
              </p>
            </div>

            {/* 100% Discrete */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">100% Discrete</h3>
              <p className="text-white/90 leading-relaxed">
                Complete privacy and confidentiality for all our VIP clients
              </p>
            </div>

            {/* 24/7 Available */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">24/7 Available</h3>
              <p className="text-white/90 leading-relaxed">
                Round the clock service with instant booking confirmation
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30">
              🏠 5000+ Happy Clients
            </div>
            <div className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30">
              💯 100% Satisfaction
            </div>
            <div className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30">
              👑 Premium Service
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 via-pink-400 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Book Your Premium Companion Today
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to experience the finest escort services in Surat? Contact us now for instant booking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* WhatsApp */}
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
               className="bg-green-500 hover:bg-green-600 text-white rounded-3xl p-8 text-center transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
              <p className="text-green-100 mb-4">Instant messaging & calls</p>
              <div className="text-lg font-semibold">+91 98765 43210</div>
            </a>

            {/* Phone Call */}
            <a href="tel:+919876543210"
               className="bg-blue-500 hover:bg-blue-600 text-white rounded-3xl p-8 text-center transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-2">Phone Call</h3>
              <p className="text-blue-100 mb-4">Direct voice calls</p>
              <div className="text-lg font-semibold">+91 98765 43210</div>
            </a>

            {/* Email */}
            <a href="mailto:info@suratescorts.com"
               className="bg-purple-500 hover:bg-purple-600 text-white rounded-3xl p-8 text-center transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <p className="text-purple-100 mb-4">Professional inquiries</p>
              <div className="text-lg font-semibold">info@suratescorts.com</div>
            </a>

            {/* Live Chat */}
            <div className="bg-orange-500 hover:bg-orange-600 text-white rounded-3xl p-8 text-center transition-all duration-300 transform hover:scale-105 shadow-2xl cursor-pointer">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-2">Live Chat</h3>
              <p className="text-orange-100 mb-4">Chat with our team</p>
              <div className="text-lg font-semibold">Available 24/7</div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-4">🌟 Ready to Book? 🌟</h3>
              <p className="text-xl text-white/90 mb-6">
                Contact us through any of the methods above for instant booking confirmation. 
                Our premium escorts are available 24/7 across all locations in Surat.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full font-semibold">
                  ✨ Instant Confirmation
                </span>
                <span className="bg-green-400 text-green-900 px-6 py-2 rounded-full font-semibold">
                  🔒 100% Discrete
                </span>
                <span className="bg-blue-400 text-blue-900 px-6 py-2 rounded-full font-semibold">
                  👑 Premium Quality
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sweet-pink-600 to-light-red-600 bg-clip-text text-transparent mb-4">Our Gallery Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Statistics that showcase our excellence and commitment to quality service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '�',
                number: '23+',
                title: 'Service Categories',
                description: 'Comprehensive range of premium services'
              },
              {
                icon: '💎',
                number: '95%',
                title: 'Client Satisfaction',
                description: 'Exceptional quality and professional service'
              },
              {
                icon: '🏆',
                number: '24/7',
                title: 'Availability',
                description: 'Round-the-clock professional service'
              },
              {
                icon: '🔒',
                number: '100%',
                title: 'Discretion',
                description: 'Complete privacy and confidentiality'
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-sweet-pink-50 to-light-red-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-sweet-pink-600 to-light-red-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sweet-pink-600 to-light-red-600 bg-clip-text text-transparent mb-4">What Makes Our Gallery Special</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service in our gallery represents our commitment to excellence and professional standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎭',
                title: 'Professional Excellence',
                description: 'Every service demonstrates our commitment to professionalism and quality standards.'
              },
              {
                icon: '🌟',
                title: 'Diverse Portfolio',
                description: 'From business events to social gatherings, we provide comprehensive service options.'
              },
              {
                icon: '👔',
                title: 'Sophisticated Approach',
                description: 'Our companions bring elegance and sophistication to every occasion and setting.'
              },
              {
                icon: '🤝',
                title: 'Client-Centric',
                description: 'Each service is tailored to meet specific client requirements and preferences.'
              },
              {
                icon: '🔍',
                title: 'Quality Assurance',
                description: 'Rigorous screening and training ensure consistent high-quality service delivery.'
              },
              {
                icon: '💼',
                title: 'Business Ready',
                description: 'Professional companions suitable for corporate events and business functions.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sweet-pink-500 to-light-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Our Services?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today to discuss how we can provide the perfect companion for your next occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-sweet-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Book Your Service
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-sweet-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}