'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    { title: "VIP Companionship", image: "/images/gallery/0a20e49ae8e5c1e434883d78060d899f.webp", category: "Premium", rating: 5 },
    { title: "Social Events", image: "/images/gallery/126d43d48bee88fc5a017727b8a72014.webp", category: "Social", rating: 5 },
    { title: "Business Meetings", image: "/images/gallery/147dbdc5427bd3a11d9e25e07d9f4946.webp", category: "Business", rating: 5 },
    { title: "Travel Companion", image: "/images/gallery/17911c1f21775f2eb0efdf3042b357e9.webp", category: "Travel", rating: 5 },
    { title: "Dinner Dates", image: "/images/gallery/1d03177c6a9121224f554f86eea6561f.webp", category: "Social", rating: 5 },
    { title: "Party Escort", image: "/images/gallery/2386653014fbf30a7d46eb5655ea6898.webp", category: "Entertainment", rating: 5 },
    { title: "Private Model", image: "/images/gallery/30df14b020334832be7512dec3f06c4b.webp", category: "Premium", rating: 5 },
    { title: "Hotel Escort", image: "/images/gallery/370287632d7ba5c61bf52b7ea2212f8d.webp", category: "Standard", rating: 4 },
    { title: "Celebrity Look-alike", image: "/images/gallery/45e43dc8762a49f7e32fec09f46c4beb (1).webp", category: "Premium", rating: 5 },
    { title: "College Girl", image: "/images/gallery/4ca5679430a6cb5fb444e8b5ba88a5c2.webp", category: "Young", rating: 4 },
    { title: "Housewife", image: "/images/gallery/50fa4974d71fae7cb6aa6beeabf23aff.webp", category: "Mature", rating: 4 },
    { title: "Air Hostess", image: "/images/gallery/520f8cc23be016013e09dd18f7ca2ff8.webp", category: "Professional", rating: 5 },
    { title: "Russian Model", image: "/images/gallery/68968a4787acc7d223d5f39d6af50fa7.webp", category: "International", rating: 5 },
    { title: "Corporate Event", image: "/images/gallery/73f131c170a6c3b3c69e0740b045de2e.webp", category: "Business", rating: 5 },
    { title: "Wedding Escort", image: "/images/gallery/8bbc046f619ed3007b7c5325809a6fd1.webp", category: "Special", rating: 5 },
    { title: "Premium Call Girl", image: "/images/gallery/8bf807d95f77baca1a5d9e72e1ef44f5.webp", category: "Premium", rating: 5 },
    { title: "Independent", image: "/images/gallery/909c82445d71d59a58ca574da8309883.webp", category: "Independent", rating: 4 },
    { title: "High Profile", image: "/images/gallery/bc5368c8af5984c25c38a4e15db52749.webp", category: "Elite", rating: 5 },
    { title: "Massage Service", image: "/images/gallery/d27db602cbde448ca76765ba688d5c11.webp", category: "Wellness", rating: 4 },
    { title: "Outcall Service", image: "/images/gallery/d924afd90a7aa9e4e2ae4b720a687b66.webp", category: "Outcall", rating: 5 },
    { title: "In-call Service", image: "/images/gallery/db0819ebec732befe549e66887ee5069.webp", category: "Incall", rating: 4 },
    { title: "Weekend Special", image: "/images/gallery/e561da040eab9be77db2e99451ef0d79.webp", category: "Special", rating: 5 },
    { title: "24/7 Available", image: "/images/gallery/eb6f5ed0106779f0081f58fb20e41001.webp", category: "Always", rating: 5 },
    { title: "Special Service", image: "/images/gallery/f0f35e374ec067f5c6c933c57c831fbc.webp", category: "Premium", rating: 5 }
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
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sweet-pink-600 to-light-red-600 bg-clip-text text-transparent mb-4">
              {selectedCategory === 'all' ? 'Complete Gallery' : `${selectedCategory} Services`}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredServices.length} premium services available for your selection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 overflow-hidden border border-sweet-pink-100"
              >
                {/* Service Image */}
                <div className="h-80 relative bg-gray-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain object-center p-2"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                    {service.category}
                  </div>
                  
                  {/* Available Badge */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg">
                    Available
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 text-lg mb-3 group-hover:text-sweet-pink-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  
                  {/* Image Info */}
                  <div className="mb-4 text-sm text-gray-600">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Container Size:</span>
                      <span>320x320px</span>
                    </div>
                    <div className="text-xs bg-gray-100 p-2 rounded-lg break-all">
                      <span className="font-medium">Image:</span> {service.image.split('/').pop()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(service.rating)].map((_, starIndex) => (
                        <svg key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 ml-2">({service.rating}.0)</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-sweet-pink-500 to-light-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-sweet-pink-600 hover:to-light-red-600 transition-all duration-200 shadow-lg">
                      View Details
                    </button>
                    <button className="px-4 py-2 border border-sweet-pink-300 text-sweet-pink-600 rounded-lg text-sm font-medium hover:bg-sweet-pink-50 transition-all duration-200 shadow-lg">
                      Book
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