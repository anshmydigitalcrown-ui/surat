'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('social');

  const serviceCategories = [
    { id: 'social', name: 'Social Companionship', icon: '🥂' },
    { id: 'travel', name: 'Travel Companions', icon: '✈️' },
    { id: 'business', name: 'Business Support', icon: '💼' },
    { id: 'personal', name: 'Personal Assistant', icon: '👔' }
  ];

  const services = {
    social: [
      {
        title: 'Dinner Companions',
        description: 'Elegant companions for fine dining experiences and social gatherings.',
        features: ['Fine dining etiquette', 'Engaging conversation', 'Professional appearance', 'Cultural awareness'],
        price: 'Starting from ₹5,000',
        duration: '3-4 hours'
      },
      {
        title: 'Event Companions',
        description: 'Sophisticated partners for galas, premieres, and high-profile events.',
        features: ['Red carpet experience', 'Networking support', 'Fashion coordination', 'Social grace'],
        price: 'Starting from ₹8,000',
        duration: '4-6 hours'
      },
      {
        title: 'Social Gatherings',
        description: 'Charming companions for parties, weddings, and celebrations.',
        features: ['Social adaptability', 'Conversation skills', 'Party etiquette', 'Positive energy'],
        price: 'Starting from ₹6,000',
        duration: '4-5 hours'
      }
    ],
    travel: [
      {
        title: 'Business Travel',
        description: 'Professional travel companions for business trips and conferences.',
        features: ['Business acumen', 'Travel coordination', 'Meeting support', 'Cultural liaison'],
        price: 'Starting from ₹15,000',
        duration: '1-3 days'
      },
      {
        title: 'Leisure Travel',
        description: 'Delightful companions for vacations and leisure trips.',
        features: ['Travel planning', 'Local expertise', 'Adventure spirit', 'Photography skills'],
        price: 'Starting from ₹12,000',
        duration: '1-7 days'
      },
      {
        title: 'International Travel',
        description: 'Experienced companions for international business and leisure travel.',
        features: ['Passport ready', 'Multi-lingual', 'Cultural knowledge', 'Travel experience'],
        price: 'Starting from ₹25,000',
        duration: '3-14 days'
      }
    ],
    business: [
      {
        title: 'Conference Support',
        description: 'Professional assistance for business conferences and meetings.',
        features: ['Industry knowledge', 'Networking skills', 'Presentation support', 'Client relations'],
        price: 'Starting from ₹10,000',
        duration: '8 hours'
      },
      {
        title: 'Corporate Events',
        description: 'Elegant representation at corporate functions and launches.',
        features: ['Brand awareness', 'Professional demeanor', 'Client interaction', 'Event coordination'],
        price: 'Starting from ₹12,000',
        duration: '6-8 hours'
      },
      {
        title: 'Business Dinners',
        description: 'Sophisticated companions for important business dinners.',
        features: ['Business etiquette', 'Conversation skills', 'Professional appearance', 'Cultural sensitivity'],
        price: 'Starting from ₹8,000',
        duration: '3-4 hours'
      }
    ],
    personal: [
      {
        title: 'Executive Assistant',
        description: 'Professional support for busy executives and entrepreneurs.',
        features: ['Schedule management', 'Communication support', 'Task coordination', 'Confidentiality'],
        price: 'Starting from ₹20,000',
        duration: 'Full day'
      },
      {
        title: 'Lifestyle Management',
        description: 'Comprehensive lifestyle and personal management services.',
        features: ['Personal shopping', 'Appointment scheduling', 'Event planning', 'Travel arrangements'],
        price: 'Starting from ₹15,000',
        duration: 'Flexible'
      },
      {
        title: 'Concierge Services',
        description: 'Luxury concierge services for personalized assistance.',
        features: ['Reservation management', 'Personal errands', 'Special requests', 'Luxury coordination'],
        price: 'Starting from ₹10,000',
        duration: 'Flexible'
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary-600 via-accent-500 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">Our Services</h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto animate-fadeInUp">
            Comprehensive companion services tailored to your unique needs and preferences.
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            {serviceCategories.map((category) => (
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
            {services[activeCategory as keyof typeof services].map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-primary-100"
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-800">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="font-bold text-primary-600">{service.price}</p>
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="w-full bg-gradient-to-r from-primary-500 to-accent-600 text-white py-3 rounded-full font-semibold text-center hover-glow transition-all duration-300 transform hover:scale-105 block"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We set the standard for excellence in companion services with our unique approach and commitment to quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Educated Professionals',
                description: 'All our companions are well-educated and professionally trained.'
              },
              {
                icon: '🔍',
                title: 'Thorough Screening',
                description: 'Comprehensive background verification and quality assessment.'
              },
              {
                icon: '🤝',
                title: 'Personalized Matching',
                description: 'Careful selection based on your preferences and requirements.'
              },
              {
                icon: '📞',
                title: '24/7 Support',
                description: 'Round-the-clock customer support for your peace of mind.'
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Simple Booking Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures a hassle-free experience from inquiry to service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Contact us to discuss your requirements and preferences.',
                icon: '📋'
              },
              {
                step: '02',
                title: 'Service Selection',
                description: 'Choose from our range of professional companion services.',
                icon: '✅'
              },
              {
                step: '03',
                title: 'Confirmation',
                description: 'Confirm booking details and complete the arrangement.',
                icon: '🔄'
              },
              {
                step: '04',
                title: 'Service Delivery',
                description: 'Enjoy your professional companion service experience.',
                icon: '🌟'
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-primary-500 to-accent-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="border-t-2 border-dashed border-primary-300 transform translate-x-4"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Your Service?</h2>
          <p className="text-xl mb-8 text-pink-100">
            Contact us today to discuss your requirements and schedule your preferred service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 hover-glow transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <a 
              href="tel:+91XXXXXXXXX" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}