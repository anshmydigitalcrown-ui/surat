'use client';

import { useState } from 'react';
import Link from 'next/link';

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
      <section className="relative py-32 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 text-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Service Icons */}
          <div className="flex justify-center space-x-12 mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
              <span className="text-4xl">🏢</span>
            </div>
            <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
              <span className="text-4xl">🎯</span>
            </div>
            <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
              <span className="text-4xl">💎</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 bg-clip-text text-transparent">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-fadeInUp leading-relaxed">
            Where <span className="font-semibold text-pink-600">sophistication</span> meets <span className="font-semibold text-orange-500">exclusivity</span> — experience unparalleled elegance, absolute discretion, and bespoke luxury companionship services in the heart of Surat.
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-400/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-orange-400/20 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-500/40 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Tab Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-8 py-6 font-semibold transition-all duration-300 rounded-t-2xl ${
                  activeTab === tab.id
                    ? 'text-primary-600 border-b-4 border-primary-600 transform scale-105 bg-gradient-to-t from-pink-50 to-white shadow-lg'
                    : 'text-gray-600 hover:text-primary-500 hover:bg-gray-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg' 
                    : 'bg-gray-100'
                }`}>
                  <span className="text-2xl">{tab.icon}</span>
                </div>
                <span className="text-lg">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="animate-fadeInUp">
            {activeTab === 'story' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl mr-6">
                      <span className="text-4xl">📖</span>
                    </div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Our Story</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border-l-4 border-pink-500 shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-2xl">🏛️</span>
                        </div>
                        <p className="text-gray-800 text-lg leading-relaxed font-medium">
                          Founded with a vision to provide unparalleled companion services in Surat, we have established 
                          ourselves as the premier destination for sophisticated and professional companionship.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-500 shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-2xl">💎</span>
                        </div>
                        <p className="text-gray-800 text-lg leading-relaxed font-medium">
                          Our journey began with a simple yet profound understanding: that every individual deserves 
                          access to refined, elegant, and trustworthy companion services that enhance their personal 
                          and professional experiences.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border-l-4 border-green-500 shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-2xl">🏆</span>
                        </div>
                        <p className="text-gray-800 text-lg leading-relaxed font-medium">
                          Over the years, we have built a reputation based on trust, discretion, and excellence. 
                          Our commitment to maintaining the highest standards has made us the preferred choice for 
                          discerning clients across Surat and beyond.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full h-[500px] bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="text-white text-center space-y-6">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                        <span className="text-8xl">🏛️</span>
                      </div>
                      <h3 className="text-3xl font-bold">Established Excellence</h3>
                      <p className="text-xl text-pink-100 px-8">Building trust since our inception with unmatched dedication</p>
                      <div className="flex justify-center space-x-6 mt-8">
                        <div className="text-center">
                          <div className="text-4xl mb-2">🌟</div>
                          <p className="text-sm text-pink-100">Premium Quality</p>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl mb-2">🤝</div>
                          <p className="text-sm text-pink-100">Trusted Service</p>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl mb-2">🔒</div>
                          <p className="text-sm text-pink-100">Complete Discretion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative floating elements */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-70 animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="text-center max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl mr-6">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Our Mission</h2>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-12 shadow-2xl border border-blue-100">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <span className="text-5xl">🎯</span>
                  </div>
                  <p className="text-2xl text-gray-800 mb-12 leading-relaxed font-medium">
                    To provide exceptional, professional, and discreet companion services that exceed expectations 
                    while maintaining the highest standards of integrity, elegance, and confidentiality.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🌟</span>
                      </div>
                      <h4 className="font-bold text-xl text-yellow-600 mb-3">Excellence</h4>
                      <p className="text-gray-700">Delivering superior quality in every interaction with unmatched attention to detail</p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🤝</span>
                      </div>
                      <h4 className="font-bold text-xl text-green-600 mb-3">Trust</h4>
                      <p className="text-gray-700">Building lasting relationships through reliability and consistent professional service</p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🔒</span>
                      </div>
                      <h4 className="font-bold text-xl text-purple-600 mb-3">Discretion</h4>
                      <p className="text-gray-700">Maintaining complete confidentiality and privacy in all our professional engagements</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <div className="flex items-center justify-center mb-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl mr-6">
                    <span className="text-4xl">💎</span>
                  </div>
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">Our Core Values</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '🎭',
                      title: 'Professionalism',
                      description: 'Maintaining the highest standards of professional conduct in all our services.',
                      gradient: 'from-blue-500 to-cyan-500',
                      bgGradient: 'from-blue-50 to-cyan-50',
                      borderColor: 'border-blue-200'
                    },
                    {
                      icon: '💼',
                      title: 'Confidentiality',
                      description: 'Absolute discretion and privacy protection for all our valued clients.',
                      gradient: 'from-purple-500 to-indigo-500',
                      bgGradient: 'from-purple-50 to-indigo-50',
                      borderColor: 'border-purple-200'
                    },
                    {
                      icon: '⭐',
                      title: 'Quality',
                      description: 'Delivering exceptional experiences that exceed expectations consistently.',
                      gradient: 'from-yellow-500 to-orange-500',
                      bgGradient: 'from-yellow-50 to-orange-50',
                      borderColor: 'border-yellow-200'
                    },
                    {
                      icon: '🎨',
                      title: 'Elegance',
                      description: 'Bringing sophistication and refinement to every aspect of our service.',
                      gradient: 'from-pink-500 to-rose-500',
                      bgGradient: 'from-pink-50 to-rose-50',
                      borderColor: 'border-pink-200'
                    },
                    {
                      icon: '🏆',
                      title: 'Excellence',
                      description: 'Striving for perfection in everything we do, every single time.',
                      gradient: 'from-green-500 to-emerald-500',
                      bgGradient: 'from-green-50 to-emerald-50',
                      borderColor: 'border-green-200'
                    },
                    {
                      icon: '💎',
                      title: 'Luxury',
                      description: 'Providing premium experiences that define the standards of luxury service.',
                      gradient: 'from-violet-500 to-purple-500',
                      bgGradient: 'from-violet-50 to-purple-50',
                      borderColor: 'border-violet-200'
                    }
                  ].map((value, index) => (
                    <div 
                      key={index}
                      className={`bg-gradient-to-br ${value.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border ${value.borderColor}`}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto`}>
                        <span className="text-3xl">{value.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{value.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-center">{value.description}</p>
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

      {/* What Our Premium Clients Say About Us */}
      <section className="py-20 bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center space-x-4">
              <span className="text-5xl">⭐</span>
              <span>What Our Premium Clients Say About Us</span>
              <span className="text-5xl">⭐</span>
            </h2>
            <p className="text-2xl md:text-3xl text-red-600 max-w-4xl mx-auto font-bold">
              💎 Thousands of satisfied clients across Surat trust us for premium escort services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Premium Quality */}
            <div className="bg-gradient-to-br from-pink-400 via-pink-300 to-pink-200 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-6">🏆</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">Premium Quality</h3>
              <p className="text-xl text-red-600 font-bold leading-relaxed">
                Handpicked professional escorts with guaranteed satisfaction
              </p>
            </div>

            {/* 100% Discrete */}
            <div className="bg-gradient-to-br from-purple-400 via-purple-300 to-purple-200 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-6">🔒</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">100% Discrete</h3>
              <p className="text-xl text-red-600 font-bold leading-relaxed">
                Complete privacy and confidentiality for all our VIP clients
              </p>
            </div>

            {/* 24/7 Available */}
            <div className="bg-gradient-to-br from-orange-400 via-orange-300 to-pink-300 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">24/7 Available</h3>
              <p className="text-xl text-red-600 font-bold leading-relaxed">
                Round the clock service with instant booking confirmation
              </p>
            </div>
          </div>

          {/* Bottom Pills */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="text-2xl font-bold text-white flex items-center space-x-2">
                <span>👑</span>
                <span>5000+ Happy Clients</span>
              </span>
            </div>
            <div className="bg-gradient-to-r from-pink-400 to-red-400 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="text-2xl font-bold text-white flex items-center space-x-2">
                <span>💯</span>
                <span>100% Satisfaction</span>
              </span>
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="text-2xl font-bold text-white flex items-center space-x-2">
                <span>💎</span>
                <span>Premium Service</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              🏢 About Our Premium Services
            </h2>
            <p className="text-2xl md:text-3xl text-pink-700 max-w-4xl mx-auto font-medium leading-relaxed">
              Discover the excellence, professionalism, and luxury that define our companion services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Our Heritage */}
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-pink-300">
              <div className="text-6xl mb-6 text-center">🏛️</div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent mb-4 text-center">Our Heritage</h3>
              <p className="text-lg text-pink-700 font-medium leading-relaxed text-center">
                Built on years of trust and excellence, we&apos;ve established ourselves as Surat&apos;s premier companion service provider with unwavering commitment to quality.
              </p>
            </div>

            {/* Professional Standards */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-purple-300">
              <div className="text-6xl mb-6 text-center">⭐</div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4 text-center">Professional Standards</h3>
              <p className="text-lg text-purple-700 font-medium leading-relaxed text-center">
                Every companion undergoes rigorous screening and training to ensure they meet our exceptionally high standards of professionalism and elegance.
              </p>
            </div>

            {/* Client Commitment */}
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-indigo-300">
              <div className="text-6xl mb-6 text-center">💎</div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent mb-4 text-center">Client Commitment</h3>
              <p className="text-lg text-indigo-700 font-medium leading-relaxed text-center">
                Your satisfaction is our priority. We go above and beyond to ensure every experience exceeds expectations with personalized attention to detail.
              </p>
            </div>

            {/* Luxury Experience */}
            <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-teal-300">
              <div className="text-6xl mb-6 text-center">✨</div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent mb-4 text-center">Luxury Experience</h3>
              <p className="text-lg text-teal-700 font-medium leading-relaxed text-center">
                From elegant dining to sophisticated events, our companions are trained to enhance every moment with grace, intelligence, and charm.
              </p>
            </div>

            {/* Safety & Security */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-orange-300">
              <div className="text-6xl mb-6 text-center">🔒</div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-4 text-center">Safety & Security</h3>
              <p className="text-lg text-orange-700 font-medium leading-relaxed text-center">
                Complete privacy protection and secure arrangements ensure your peace of mind throughout every interaction and service experience.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-gradient-to-br from-rose-100 to-rose-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-rose-300">
              <div className="text-6xl mb-6 text-center">🚀</div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent mb-4 text-center">Innovation</h3>
              <p className="text-lg text-rose-700 font-medium leading-relaxed text-center">
                We continuously evolve our services with modern booking systems, enhanced privacy measures, and innovative service offerings.
              </p>
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
            <p className="text-xl md:text-2xl text-red-600 max-w-3xl mx-auto leading-relaxed">
              Premium escort locations available across all major areas of Surat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Row 1 */}
            <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Varachha</h3>
              <p className="text-red-100 mb-4">Premium escort locations in Varachha area</p>
              <Link href="/locations/varachha" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Varachha Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Adajan</h3>
              <p className="text-blue-100 mb-4">High-class companions in Adajan locality</p>
              <Link href="/locations/adajan" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Adajan Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Vesu</h3>
              <p className="text-green-100 mb-4">VIP escort locations in Vesu residential area</p>
              <Link href="/locations/vesu" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Vesu Escorts
              </Link>
            </div>

            {/* Row 2 */}
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Citylight</h3>
              <p className="text-purple-100 mb-4">Professional companions in Citylight area</p>
              <Link href="/locations/citylight" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Citylight Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Althan</h3>
              <p className="text-pink-100 mb-4">Elite escort locations in Althan locality</p>
              <Link href="/locations/althan" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Althan Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Piplod</h3>
              <p className="text-indigo-100 mb-4">Luxury companions in Piplod commercial area</p>
              <Link href="/locations/piplod" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Piplod Escorts
              </Link>
            </div>

            {/* Row 3 */}
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Udhna</h3>
              <p className="text-orange-100 mb-4">Premium locations in Udhna industrial area</p>
              <Link href="/locations/udhna" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Udhna Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Athwa</h3>
              <p className="text-teal-100 mb-4">High-end escort locations in Athwa</p>
              <Link href="/locations/athwa" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Athwa Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Rander</h3>
              <p className="text-yellow-100 mb-4">Quality companions in Rander area</p>
              <Link href="/locations/rander" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Rander Escorts
              </Link>
            </div>

            {/* Row 4 */}
            <div className="bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Ghod Dod Road</h3>
              <p className="text-rose-100 mb-4">VIP locations on Ghod Dod Road</p>
              <Link href="/locations/ghod-dod-road" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Ghod Dod Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Ring Road</h3>
              <p className="text-cyan-100 mb-4">Professional escorts near Ring Road</p>
              <Link href="/locations/ring-road" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Ring Road Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Nanpura</h3>
              <p className="text-violet-100 mb-4">Elite companions in Nanpura city center</p>
              <Link href="/locations/nanpura" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Nanpura Escorts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-2xl md:text-3xl text-pink-700 max-w-4xl mx-auto font-medium leading-relaxed">
              Get answers to common questions about our premium companion services in Surat
            </p>
          </div>

          {/* FAQ Grid - 3 Rows x 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Row 1 */}
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-300">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-lg">💰</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-pink-700 mb-3 text-center">Pricing?</h3>
              <p className="text-pink-600 text-sm text-center leading-relaxed">
                Competitive rates with transparent pricing. Contact us for detailed packages and special offers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-300">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-lg">🕐</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 text-center">Availability?</h3>
              <p className="text-purple-600 text-sm text-center leading-relaxed">
                24/7 availability with advance booking. Same-day bookings subject to availability.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-300">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-lg">📍</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mb-3 text-center">Service Areas?</h3>
              <p className="text-indigo-600 text-sm text-center leading-relaxed">
                We serve all major areas in Surat including Varachha, Adajan, Vesu, and surrounding locations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-teal-300">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-lg">🔒</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-3 text-center">Privacy?</h3>
              <p className="text-teal-600 text-sm text-center leading-relaxed">
                Complete confidentiality guaranteed. All client information is kept strictly private and secure.
              </p>
            </div>

            {/* Row 2 */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-300">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-lg">📋</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-orange-700 mb-3 text-center">Booking Process?</h3>
              <p className="text-orange-600 text-sm text-center leading-relaxed">
                Simple 4-step process: Consultation, Selection, Confirmation, and Service Delivery.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-red-300">
              <div className="bg-gradient-to-r from-red-500 to-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-lg">💳</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-3 text-center">Payment Methods?</h3>
              <p className="text-red-600 text-sm text-center leading-relaxed">
                We accept cash, bank transfers, and digital payments. Secure payment options available.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-300">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-lg">⭐</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-3 text-center">Quality Assurance?</h3>
              <p className="text-green-600 text-sm text-center leading-relaxed">
                Rigorous screening process and continuous training ensure exceptional service quality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-yellow-300">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-lg">📞</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-700 mb-3 text-center">Customer Support?</h3>
              <p className="text-yellow-600 text-sm text-center leading-relaxed">
                24/7 customer support available via phone, WhatsApp, and email for any assistance.
              </p>
            </div>

            {/* Row 3 */}
            <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-cyan-300">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-lg">🎯</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-cyan-700 mb-3 text-center">Special Requests?</h3>
              <p className="text-cyan-600 text-sm text-center leading-relaxed">
                We accommodate special requests and preferences. Contact us to discuss your specific requirements.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-100 to-rose-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-300">
              <div className="bg-gradient-to-r from-rose-500 to-rose-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-lg">📅</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-rose-700 mb-3 text-center">Advance Booking?</h3>
              <p className="text-rose-600 text-sm text-center leading-relaxed">
                We recommend booking 2-4 hours in advance, though same-day bookings are available based on availability.
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-100 to-violet-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-violet-300">
              <div className="bg-gradient-to-r from-violet-500 to-violet-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-lg">🌟</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-violet-700 mb-3 text-center">Service Packages?</h3>
              <p className="text-violet-600 text-sm text-center leading-relaxed">
                Multiple service packages available including hourly, extended stays, and overnight companionship options.
              </p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-100 to-fuchsia-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-fuchsia-300">
              <div className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-lg">🎁</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-fuchsia-700 mb-3 text-center">Gift Vouchers?</h3>
              <p className="text-fuchsia-600 text-sm text-center leading-relaxed">
                Gift vouchers available for premium experiences. Perfect for special occasions and celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}