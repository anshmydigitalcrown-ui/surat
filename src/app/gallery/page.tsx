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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-pink-100 hover:border-pink-300"
              >
                {/* Service Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg ${
                      service.category === 'Premium' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      service.category === 'Business' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      service.category === 'Travel' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      service.category === 'Entertainment' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                      'bg-gradient-to-r from-pink-500 to-pink-600'
                    }`}>
                      {service.category}
                    </span>
                  </div>
                  
                  {/* Available Badge */}
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg animate-pulse">
                    Available Now
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-1 group-hover:text-pink-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                    View Gallery
                  </button>
                </div>
                
                {/* Hover Effect Shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
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
              <p className="text-red-100 mb-4">Premium escort locations in Varachha area</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200">
                Varachha Escorts
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Adajan</h3>
              <p className="text-blue-100 mb-4">High-class companions in Adajan locality</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200">
                Adajan Escorts
              </button>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Vesu</h3>
              <p className="text-green-100 mb-4">VIP escort locations in Vesu residential area</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200">
                Vesu Escorts
              </button>
            </div>

            {/* Row 2 */}
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Citylight</h3>
              <p className="text-purple-100 mb-4">Professional companions in Citylight area</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200">
                Citylight Escorts
              </button>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Althan</h3>
              <p className="text-pink-100 mb-4">Elite escort locations in Althan locality</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200">
                Althan Escorts
              </button>
            </div>
            <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Piplod</h3>
              <p className="text-indigo-100 mb-4">Luxury companions in Piplod commercial area</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200">
                Piplod Escorts
              </button>
            </div>

            {/* Row 3 */}
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Udhna</h3>
              <p className="text-orange-100 mb-4">Premium locations in Udhna industrial area</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200">
                Udhna Escorts
              </button>
            </div>
            <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Athwa</h3>
              <p className="text-teal-100 mb-4">High-end escort locations in Athwa</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200">
                Athwa Escorts
              </button>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Rander</h3>
              <p className="text-yellow-100 mb-4">Quality companions in Rander area</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200">
                Rander Escorts
              </button>
            </div>

            {/* Row 4 */}
            <div className="bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Ghod Dod Road</h3>
              <p className="text-rose-100 mb-4">VIP locations on Ghod Dod Road</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200">
                Ghod Dod Escorts
              </button>
            </div>
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Ring Road</h3>
              <p className="text-cyan-100 mb-4">Professional escorts near Ring Road</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200">
                Ring Road Escorts
              </button>
            </div>
            <div className="bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Nanpura</h3>
              <p className="text-violet-100 mb-4">Elite companions in Nanpura city center</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200">
                Nanpura Escorts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-br from-pink-300 via-pink-200 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              What our satisfied clients say about our premium escort services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Amazing Service */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Amazing Service</h3>
              <p className="text-gray-600 italic leading-relaxed mb-6">
                &ldquo;Professional, discrete, and exactly what I was looking for. The booking process was simple and the service exceeded expectations.&rdquo;
              </p>
              <p className="text-pink-600 font-bold">- VIP Client, Varachha</p>
            </div>

            {/* Highly Recommend */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Highly Recommend</h3>
              <p className="text-gray-600 italic leading-relaxed mb-6">
                &ldquo;Outstanding companions and excellent customer service. Very professional team that maintains complete privacy and confidentiality.&rdquo;
              </p>
              <p className="text-blue-600 font-bold">- Regular Client, Adajan</p>
            </div>

            {/* Premium Quality */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Premium Quality</h3>
              <p className="text-gray-600 italic leading-relaxed mb-6">
                &ldquo;Top-notch service with beautiful and intelligent companions. The 24/7 availability and quick response time is impressive.&rdquo;
              </p>
              <p className="text-orange-600 font-bold">- Business Client, Vesu</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Premium Clients Say About Us */}
      <section className="py-20 bg-gradient-to-br from-pink-300 via-pink-200 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              ⭐ What Our Premium Clients Say About Us ⭐
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              💎 Thousands of satisfied clients across Indore trust us for premium escort services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Premium Quality */}
            <div className="bg-gradient-to-br from-pink-400 via-pink-300 to-pink-200 rounded-3xl p-8 text-center border border-pink-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">Premium Quality</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Handpicked professional escorts with guaranteed satisfaction
              </p>
            </div>

            {/* 100% Discrete */}
            <div className="bg-gradient-to-br from-purple-400 via-purple-300 to-pink-300 rounded-3xl p-8 text-center border border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-6">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">100% Discrete</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Complete privacy and confidentiality for all our VIP clients
              </p>
            </div>

            {/* 24/7 Available */}
            <div className="bg-gradient-to-br from-orange-400 via-pink-300 to-pink-200 rounded-3xl p-8 text-center border border-orange-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">24/7 Available</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Round the clock service with instant booking confirmation
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              ⭐ 5000+ Happy Clients
            </div>
            <div className="bg-gradient-to-r from-red-400 to-pink-400 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              💯 100% Satisfaction
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              🔥 Premium Service
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Map */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent mb-4">
                  Find Us in Surat
                </h2>
                <p className="text-xl text-gray-600">
                  We provide premium escort services across all major areas of Surat
                </p>
              </div>
              <div className="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41583263078!2d72.74109452431642!3d21.17024370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1696234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Surat Location Map"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h3>
                <p className="text-gray-600">
                  Get in touch with us for premium escort services in Surat
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Location Preference</label>
                  <select className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300">
                    <option value="">Select Preferred Area</option>
                    <option value="varachha">Varachha</option>
                    <option value="adajan">Adajan</option>
                    <option value="vesu">Vesu</option>
                    <option value="althan">Althan</option>
                    <option value="citylight">City Light</option>
                    <option value="athwa">Athwa</option>
                    <option value="katargam">Katargam</option>
                    <option value="piplod">Piplod</option>
                    <option value="udhana">Udhana</option>
                    <option value="ringsroad">Ring Road</option>
                    <option value="nanpura">Nanpura</option>
                    <option value="other">Other Area</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your preferences and requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-4 px-6 rounded-lg hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message 💌
                </button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-pink-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-pink-600">📱</span>
                    <span className="text-gray-700">24/7 Available</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-pink-600">🔒</span>
                    <span className="text-gray-700">100% Confidential</span>
                  </div>
                </div>
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