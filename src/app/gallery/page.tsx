'use client';

import { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    { title: "VIP Companionship", image: "/images/gallery/vip-companion.jpg", category: "Premium", rating: 5 },
    { title: "Social Events", image: "/images/gallery/social-events.jpg", category: "Social", rating: 5 },
    { title: "Business Meetings", image: "/images/gallery/business.jpg", category: "Business", rating: 5 },
    { title: "Travel Companion", image: "/images/gallery/travel.jpg", category: "Travel", rating: 5 },
    { title: "Dinner Dates", image: "/images/gallery/dinner.jpg", category: "Social", rating: 5 },
    { title: "Party Escort", image: "/images/gallery/party.jpg", category: "Entertainment", rating: 5 },
    { title: "Private Model", image: "/images/gallery/model.jpg", category: "Premium", rating: 5 },
    { title: "Hotel Escort", image: "/images/gallery/hotel.jpg", category: "Standard", rating: 4 },
    { title: "Celebrity Look-alike", image: "/images/gallery/celebrity.jpg", category: "Premium", rating: 5 },
    { title: "College Girl", image: "/images/gallery/college.jpg", category: "Young", rating: 4 },
    { title: "Housewife", image: "/images/gallery/housewife.jpg", category: "Mature", rating: 4 },
    { title: "Air Hostess", image: "/images/gallery/airhostess.jpg", category: "Professional", rating: 5 },
    { title: "Russian Model", image: "/images/gallery/russian.jpg", category: "International", rating: 5 },
    { title: "Corporate Event", image: "/images/gallery/corporate.jpg", category: "Business", rating: 5 },
    { title: "Wedding Escort", image: "/images/gallery/wedding.jpg", category: "Special", rating: 5 },
    { title: "Premium Call Girl", image: "/images/gallery/premium.jpg", category: "Premium", rating: 5 },
    { title: "Independent", image: "/images/gallery/independent.jpg", category: "Independent", rating: 4 },
    { title: "High Profile", image: "/images/gallery/high-profile.jpg", category: "Elite", rating: 5 },
    { title: "Massage Service", image: "/images/gallery/massage.jpg", category: "Wellness", rating: 4 },
    { title: "Outcall Service", image: "/images/gallery/outcall.jpg", category: "Outcall", rating: 5 },
    { title: "In-call Service", image: "/images/gallery/incall.jpg", category: "Incall", rating: 4 },
    { title: "Weekend Special", image: "/images/gallery/weekend.jpg", category: "Special", rating: 5 },
    { title: "24/7 Available", image: "/images/gallery/24-7.jpg", category: "Always", rating: 5 }
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

  const getCategoryGradient = (category: string) => {
    const gradients: { [key: string]: string } = {
      Premium: "from-sweet-pink-400 via-light-red-400 to-sweet-pink-500",
      Elite: "from-purple-400 via-pink-400 to-purple-500",
      International: "from-blue-400 via-purple-400 to-blue-500",
      Business: "from-gray-400 via-blue-400 to-gray-500",
      Social: "from-green-400 via-teal-400 to-green-500",
      Entertainment: "from-orange-400 via-red-400 to-orange-500",
      Professional: "from-indigo-400 via-purple-400 to-indigo-500",
      Travel: "from-cyan-400 via-blue-400 to-cyan-500",
      Special: "from-pink-400 via-rose-400 to-pink-500",
      Standard: "from-gray-400 via-gray-500 to-gray-400",
      Young: "from-pink-300 via-rose-300 to-pink-400",
      Mature: "from-amber-400 via-orange-400 to-amber-500",
      Independent: "from-teal-400 via-green-400 to-teal-500",
      Wellness: "from-emerald-400 via-teal-400 to-emerald-500",
      Outcall: "from-violet-400 via-purple-400 to-violet-500",
      Incall: "from-sky-400 via-blue-400 to-sky-500",
      Always: "from-red-400 via-pink-400 to-red-500"
    };
    return gradients[category] || "from-sweet-pink-400 via-light-red-400 to-sweet-pink-500";
  };

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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                {/* Service Image/Gradient */}
                <div className={`bg-gradient-to-br ${getCategoryGradient(service.category)} h-80 relative`}>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
                    <div>
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                      <div className="flex items-center justify-center space-x-1">
                        {[...Array(service.rating)].map((_, starIndex) => (
                          <svg key={starIndex} className="w-4 h-4 text-yellow-300 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                    {service.category}
                  </div>
                  
                  {/* Available Badge */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Available
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm mb-3">Premium {service.category.toLowerCase()} service</p>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-sweet-pink-500 to-light-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-sweet-pink-600 hover:to-light-red-600 transition-all duration-200">
                      View Details
                    </button>
                    <button className="px-3 py-2 border border-white/50 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-200">
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