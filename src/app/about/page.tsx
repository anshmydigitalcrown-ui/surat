'use client';

import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'Our Story', icon: '📖' },
    { id: 'mission', label: 'Mission', icon: '🎯' },
    { id: 'values', label: 'Values', icon: '💎' },
    { id: 'team', label: 'Team', icon: '👥' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary-600 via-accent-500 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">About Us</h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto animate-fadeInUp">
            Discover our commitment to excellence, discretion, and luxury companionship services in Surat.
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Tab Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-primary-600 border-b-2 border-primary-600 transform scale-105'
                    : 'text-gray-600 hover:text-primary-500'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="animate-fadeInUp">
            {activeTab === 'story' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold gradient-text mb-6">Our Story</h2>
                  <div className="space-y-4 text-gray-700 text-lg">
                    <p>
                      Founded with a vision to provide unparalleled companion services in Surat, we have established 
                      ourselves as the premier destination for sophisticated and professional companionship.
                    </p>
                    <p>
                      Our journey began with a simple yet profound understanding: that every individual deserves 
                      access to refined, elegant, and trustworthy companion services that enhance their personal 
                      and professional experiences.
                    </p>
                    <p>
                      Over the years, we have built a reputation based on trust, discretion, and excellence. 
                      Our commitment to maintaining the highest standards has made us the preferred choice for 
                      discerning clients across Surat and beyond.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-4">🏛️</div>
                      <h3 className="text-2xl font-bold">Established Excellence</h3>
                      <p className="text-pink-100">Building trust since our inception</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold gradient-text mb-8">Our Mission</h2>
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12">
                  <div className="text-6xl mb-6">🚀</div>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    To provide exceptional, professional, and discreet companion services that exceed expectations 
                    while maintaining the highest standards of integrity, elegance, and confidentiality.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center">
                      <div className="text-3xl mb-3">🌟</div>
                      <h4 className="font-bold text-primary-600 mb-2">Excellence</h4>
                      <p className="text-gray-600">Delivering superior quality in every interaction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-3">🤝</div>
                      <h4 className="font-bold text-primary-600 mb-2">Trust</h4>
                      <p className="text-gray-600">Building lasting relationships through reliability</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-3">🔒</div>
                      <h4 className="font-bold text-primary-600 mb-2">Discretion</h4>
                      <p className="text-gray-600">Ensuring complete privacy and confidentiality</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '🎭',
                      title: 'Professionalism',
                      description: 'Maintaining the highest standards of professional conduct in all our services.'
                    },
                    {
                      icon: '💼',
                      title: 'Confidentiality',
                      description: 'Absolute discretion and privacy protection for all our valued clients.'
                    },
                    {
                      icon: '⭐',
                      title: 'Quality',
                      description: 'Delivering exceptional experiences that exceed expectations consistently.'
                    },
                    {
                      icon: '🎨',
                      title: 'Elegance',
                      description: 'Bringing sophistication and refinement to every aspect of our service.'
                    },
                    {
                      icon: '🏆',
                      title: 'Excellence',
                      description: 'Striving for perfection in everything we do, every single time.'
                    },
                    {
                      icon: '💎',
                      title: 'Luxury',
                      description: 'Providing premium experiences that define the standards of luxury service.'
                    }
                  ].map((value, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-primary-100"
                    >
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'team' && (
              <div className="text-center">
                <h2 className="text-4xl font-bold gradient-text mb-8">Our Team</h2>
                <div className="max-w-3xl mx-auto mb-12">
                  <p className="text-xl text-gray-700 mb-8">
                    Our carefully selected team consists of experienced professionals who share our commitment 
                    to excellence, discretion, and client satisfaction.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      role: 'Client Relations',
                      description: 'Dedicated to understanding and fulfilling your unique requirements.',
                      icon: '🤝'
                    },
                    {
                      role: 'Quality Assurance',
                      description: 'Ensuring every experience meets our exacting standards.',
                      icon: '✅'
                    },
                    {
                      role: 'Customer Support',
                      description: '24/7 support team ready to assist with any inquiries.',
                      icon: '💬'
                    }
                  ].map((team, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="text-5xl mb-4">{team.icon}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{team.role}</h3>
                      <p className="text-gray-600">{team.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl mb-8 text-pink-100">
            Discover why we are Surat&apos;s premier choice for sophisticated companion services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 hover-glow transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}