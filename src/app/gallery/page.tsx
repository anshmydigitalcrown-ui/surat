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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">Service Gallery</h1>
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
            <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto mb-6 font-medium leading-relaxed">
              {filteredServices.length} premium services available for your selection
            </p>
            <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Browse through our carefully curated gallery showcasing the finest selection of professional services. Each image represents our commitment to excellence and quality.
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
                  
                  {/* Buttons aligned to left */}
                  <div className="flex flex-col items-start space-y-3">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg">
                      {service.image.split('/').pop()?.replace('.webp', '')}
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg">
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