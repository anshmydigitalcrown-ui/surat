'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "No.1 Best Escorts Service Surat",
      subtitle: "RashmiKapoor - Premium Experience",
      description: "Professional and sophisticated companion services for discerning individuals.",
      image: "bg-gradient-to-br from-primary-400 via-accent-500 to-primary-600"
    },
    {
      title: "Luxury Companionship",
      subtitle: "Discretion & Professionalism",
      description: "Tailored services designed to exceed your expectations with complete privacy.",
      image: "bg-gradient-to-br from-accent-400 via-primary-500 to-accent-600"
    },
    {
      title: "Premium Service",
      subtitle: "Available 24/7",
      description: "Round-the-clock availability for your convenience and comfort.",
      image: "bg-gradient-to-br from-primary-500 via-accent-400 to-primary-700"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${slide.image} transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            {heroSlides[currentSlide].title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-pink-200 animate-fadeInUp">
            {heroSlides[currentSlide].subtitle}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-pink-100 animate-fadeInUp">
            {heroSlides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 hover-glow transition-all duration-300 transform hover:scale-105"
            >
              Book Consultation
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Why Choose RashmiKapoor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide unparalleled companion services with a focus on elegance, discretion, and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌟",
                title: "Premium Quality",
                description: "Exceptional standards in every aspect of our service delivery."
              },
              {
                icon: "🔒",
                title: "Complete Discretion",
                description: "Your privacy and confidentiality are our highest priorities."
              },
              {
                icon: "⏰",
                title: "24/7 Availability",
                description: "Round-the-clock service to meet your schedule and needs."
              },
              {
                icon: "💎",
                title: "Luxury Experience",
                description: "Sophisticated companions for the most discerning clients."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-glow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored experiences designed to meet your unique preferences and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Social Companionship",
                description: "Elegant companions for social events, dinners, and business functions.",
                features: ["Professional Etiquette", "Multilingual", "Well-Educated", "Socially Adept"]
              },
              {
                title: "Travel Companion",
                description: "Sophisticated travel partners for business trips and leisure vacations.",
                features: ["Travel Experience", "Cultural Knowledge", "Flexible Schedule", "Passport Ready"]
              },
              {
                title: "Personal Assistant",
                description: "Professional support for busy executives and entrepreneurs.",
                features: ["Business Acumen", "Organizational Skills", "Confidentiality", "Reliability"]
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="bg-gradient-to-r from-primary-500 to-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover-glow transition-all duration-300 transform hover:scale-105 inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-accent-800 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-pink-200 max-w-3xl mx-auto">
              Hear what our valued clients have to say about their experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mr. A. Patel",
                title: "Business Executive",
                content: "Exceptional service with the highest level of professionalism. Highly recommended for business events.",
                rating: 5
              },
              {
                name: "Ms. R. Shah",
                title: "Entrepreneur",
                content: "Outstanding experience! The attention to detail and discretion exceeded all expectations.",
                rating: 5
              },
              {
                name: "Dr. K. Mehta",
                title: "Medical Professional",
                content: "Professional, reliable, and sophisticated. Perfect for important social gatherings.",
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
                <p className="text-pink-100 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-pink-200 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Luxury?</h2>
          <p className="text-xl mb-8 text-pink-100">
            Contact us today to discuss your requirements and schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 hover-glow transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link 
              href="tel:+91XXXXXXXXX" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
