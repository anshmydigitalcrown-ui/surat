'use client';

import { useState } from 'react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('events');

  const categories = [
    { id: 'events', name: 'Social Events', icon: '🥂' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'travel', name: 'Travel', icon: '✈️' },
    { id: 'lifestyle', name: 'Lifestyle', icon: '🌟' }
  ];

  // Placeholder gallery items with gradient backgrounds instead of images
  const galleryItems = {
    events: [
      {
        title: 'Elegant Dinner Companion',
        description: 'Professional companionship for fine dining experiences',
        gradient: 'bg-gradient-to-br from-pink-400 to-rose-600'
      },
      {
        title: 'Gala Event Attendance',
        description: 'Sophisticated presence at high-profile events',
        gradient: 'bg-gradient-to-br from-purple-400 to-pink-600'
      },
      {
        title: 'Social Gathering',
        description: 'Charming companionship for social occasions',
        gradient: 'bg-gradient-to-br from-rose-400 to-pink-500'
      },
      {
        title: 'Wedding Companion',
        description: 'Elegant presence at wedding celebrations',
        gradient: 'bg-gradient-to-br from-pink-500 to-rose-500'
      },
      {
        title: 'Art Gallery Opening',
        description: 'Cultural event companionship',
        gradient: 'bg-gradient-to-br from-rose-300 to-pink-600'
      },
      {
        title: 'Charity Fundraiser',
        description: 'Professional presence at charitable events',
        gradient: 'bg-gradient-to-br from-pink-400 to-purple-500'
      }
    ],
    business: [
      {
        title: 'Conference Companion',
        description: 'Professional support at business conferences',
        gradient: 'bg-gradient-to-br from-blue-400 to-purple-600'
      },
      {
        title: 'Corporate Meeting',
        description: 'Business meeting accompaniment',
        gradient: 'bg-gradient-to-br from-indigo-400 to-pink-600'
      },
      {
        title: 'Trade Show Support',
        description: 'Professional presence at industry events',
        gradient: 'bg-gradient-to-br from-purple-400 to-rose-600'
      },
      {
        title: 'Business Dinner',
        description: 'Executive dining companionship',
        gradient: 'bg-gradient-to-br from-pink-400 to-indigo-600'
      }
    ],
    travel: [
      {
        title: 'Business Trip Companion',
        description: 'Professional travel accompaniment',
        gradient: 'bg-gradient-to-br from-green-400 to-blue-600'
      },
      {
        title: 'Vacation Partner',
        description: 'Leisure travel companionship',
        gradient: 'bg-gradient-to-br from-teal-400 to-pink-600'
      },
      {
        title: 'International Travel',
        description: 'Global travel experiences',
        gradient: 'bg-gradient-to-br from-blue-400 to-purple-600'
      },
      {
        title: 'Cultural Tours',
        description: 'Educational and cultural travel',
        gradient: 'bg-gradient-to-br from-cyan-400 to-rose-600'
      }
    ],
    lifestyle: [
      {
        title: 'Personal Shopping',
        description: 'Luxury shopping experiences',
        gradient: 'bg-gradient-to-br from-yellow-400 to-pink-600'
      },
      {
        title: 'Spa & Wellness',
        description: 'Relaxation and wellness activities',
        gradient: 'bg-gradient-to-br from-green-400 to-teal-600'
      },
      {
        title: 'Cultural Activities',
        description: 'Theater, concerts, and cultural events',
        gradient: 'bg-gradient-to-br from-orange-400 to-pink-600'
      },
      {
        title: 'Fine Dining',
        description: 'Gourmet dining experiences',
        gradient: 'bg-gradient-to-br from-red-400 to-rose-600'
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary-600 via-accent-500 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">Gallery</h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto animate-fadeInUp">
            Discover the elegance and sophistication of our professional companion services.
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'text-primary-600 border-b-2 border-primary-600 transform scale-105'
                    : 'text-gray-600 hover:text-primary-500'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
            {galleryItems[activeCategory as keyof typeof galleryItems].map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                {/* Gradient Background instead of image */}
                <div className={`${item.gradient} h-80 flex items-center justify-center relative`}>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Icon placeholder */}
                  <div className="relative z-10 text-white text-center">
                    <div className="text-6xl mb-4">📸</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  </div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-pink-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Features */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">What Our Gallery Represents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our gallery showcases the diverse range of professional companion services we provide across various settings and occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎭',
                title: 'Professional Excellence',
                description: 'Every interaction demonstrates our commitment to professionalism and quality.'
              },
              {
                icon: '🌟',
                title: 'Diverse Occasions',
                description: 'From business events to social gatherings, we adapt to any setting.'
              },
              {
                icon: '👔',
                title: 'Sophisticated Presence',
                description: 'Our companions bring elegance and sophistication to every occasion.'
              },
              {
                icon: '🤝',
                title: 'Client Satisfaction',
                description: 'Each image represents a successful and satisfying client experience.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Gallery */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-accent-800 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Experiences</h2>
            <p className="text-xl text-pink-200 max-w-3xl mx-auto">
              Real experiences from our satisfied clients across various services and occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                experience: 'Business Conference',
                feedback: 'Professional, knowledgeable, and perfectly suited for the corporate environment.',
                client: 'Corporate Executive',
                rating: 5
              },
              {
                experience: 'Wedding Reception',
                feedback: 'Elegant, charming, and made the celebration even more special.',
                client: 'Event Organizer',
                rating: 5
              },
              {
                experience: 'International Travel',
                feedback: 'Excellent travel companion, culturally aware and adaptable.',
                client: 'Business Traveler',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <span key={starIndex} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3">{testimonial.experience}</h3>
                <p className="text-pink-100 mb-6 italic">&ldquo;{testimonial.feedback}&rdquo;</p>
                <p className="text-pink-200 text-sm">— {testimonial.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Your Own Experience?</h2>
          <p className="text-xl mb-8 text-pink-100">
            Contact us today to discuss how we can provide the perfect companion for your next occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 hover-glow transition-all duration-300 transform hover:scale-105"
            >
              Book Your Service
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}