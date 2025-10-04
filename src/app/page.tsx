'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-sweet-pink-50 via-sweet-pink-100 to-light-red-100 py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-sweet-pink-300 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-light-red-300 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-sweet-pink-200 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left Side - Website Description */}
            <div className="space-y-8 animate-fadeInUp">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">RK</span>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium text-lg">Premium Escort Service</p>
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Surat&apos;s Most
                  <span className="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                    Trusted Companion
                  </span>
                  Service
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                  Experience luxury and sophistication with Surat&apos;s premier escort service. We offer discreet, professional companionship tailored to your needs with complete privacy and elegance.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-800 text-lg font-medium">24/7 Premium Service Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-800 text-lg font-medium">Complete Discretion & Privacy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-800 text-lg font-medium">Professional & Sophisticated</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact" 
                  className="relative bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Book Consultation</span>
                  <div className="absolute inset-0 rounded-full border border-white/20"></div>
                </Link>
                <a 
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative border-2 border-green-500 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300 text-center flex items-center justify-center space-x-2 group shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Side - Image Card */}
            <div className="relative animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                {/* Main Image Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[3/4] bg-gradient-to-br from-red-300 via-red-400 to-red-500 relative">
                    {/* Placeholder for actual image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Premium</h3>
                        <p className="text-lg opacity-90">Escort Service</p>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="absolute top-8 right-8 w-2 h-2 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-8 left-6 w-4 h-4 bg-white/25 rounded-full"></div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-3 rounded-2xl shadow-lg transform rotate-12">
                  <div className="text-center">
                    <div className="text-2xl font-bold">No.1</div>
                    <div className="text-xs">In Surat</div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 bg-red-200 rounded-full opacity-50"></div>
                <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-red-300 rounded-full opacity-40"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-20 bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sweet-pink-600 to-light-red-600 bg-clip-text text-transparent mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of luxury escort services designed for discerning clients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[
              { title: "VIP Companionship", image: "/images/services/vip-companion.jpg", price: "₹15,000/hr" },
              { title: "Social Events", image: "/images/services/social-events.jpg", price: "₹12,000/hr" },
              { title: "Business Meetings", image: "/images/services/business.jpg", price: "₹18,000/hr" },
              { title: "Travel Companion", image: "/images/services/travel.jpg", price: "₹25,000/day" },
              { title: "Dinner Dates", image: "/images/services/dinner.jpg", price: "₹10,000/hr" },
              { title: "Party Escort", image: "/images/services/party.jpg", price: "₹14,000/hr" },
              { title: "Private Model", image: "/images/services/model.jpg", price: "₹20,000/hr" },
              { title: "Hotel Escort", image: "/images/services/hotel.jpg", price: "₹8,000/hr" },
              { title: "Celebrity Look-alike", image: "/images/services/celebrity.jpg", price: "₹22,000/hr" },
              { title: "College Girl", image: "/images/services/college.jpg", price: "₹9,000/hr" },
              { title: "Housewife", image: "/images/services/housewife.jpg", price: "₹11,000/hr" },
              { title: "Air Hostess", image: "/images/services/airhostess.jpg", price: "₹16,000/hr" },
              { title: "Russian Model", image: "/images/services/russian.jpg", price: "₹30,000/hr" },
              { title: "Corporate Event", image: "/images/services/corporate.jpg", price: "₹19,000/hr" },
              { title: "Wedding Escort", image: "/images/services/wedding.jpg", price: "₹17,000/hr" },
              { title: "Premium Call Girl", image: "/images/services/premium.jpg", price: "₹13,000/hr" },
              { title: "Independent", image: "/images/services/independent.jpg", price: "₹12,000/hr" },
              { title: "High Profile", image: "/images/services/high-profile.jpg", price: "₹35,000/hr" },
              { title: "Massage Service", image: "/images/services/massage.jpg", price: "₹7,000/hr" },
              { title: "Outcall Service", image: "/images/services/outcall.jpg", price: "₹15,000/hr" },
              { title: "In-call Service", image: "/images/services/incall.jpg", price: "₹10,000/hr" },
              { title: "Weekend Special", image: "/images/services/weekend.jpg", price: "₹20,000/day" },
              { title: "24/7 Available", image: "/images/services/24-7.jpg", price: "₹12,000/hr" }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="relative aspect-[4/5]">
                  <div className="absolute inset-0 bg-gradient-to-br from-sweet-pink-200 via-light-red-200 to-sweet-pink-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <p className="text-sm font-medium">Service {index + 1}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-sweet-pink-500 to-light-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {service.price}
                  </div>
                  
                  {/* Availability Badge */}
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Available
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-sm mb-2 group-hover:text-sweet-pink-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg key={starIndex} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <button className="bg-gradient-to-r from-sweet-pink-500 to-light-red-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:from-sweet-pink-600 hover:to-light-red-600 transition-all duration-200">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Services Button */}
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="bg-gradient-to-r from-sweet-pink-500 via-light-red-500 to-sweet-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
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
