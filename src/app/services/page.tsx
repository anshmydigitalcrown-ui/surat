'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    { title: "VIP Companionship", image: "/images/services/vip-companion.jpg", price: "₹15,000/hr", category: "Premium", rating: 5 },
    { title: "Social Events", image: "/images/services/social-events.jpg", price: "₹12,000/hr", category: "Social", rating: 5 },
    { title: "Business Meetings", image: "/images/services/business.jpg", price: "₹18,000/hr", category: "Business", rating: 5 },
    { title: "Travel Companion", image: "/images/services/travel.jpg", price: "₹25,000/day", category: "Travel", rating: 5 },
    { title: "Dinner Dates", image: "/images/services/dinner.jpg", price: "₹10,000/hr", category: "Social", rating: 5 },
    { title: "Party Escort", image: "/images/services/party.jpg", price: "₹14,000/hr", category: "Entertainment", rating: 5 },
    { title: "Private Model", image: "/images/services/model.jpg", price: "₹20,000/hr", category: "Premium", rating: 5 },
    { title: "Hotel Escort", image: "/images/services/hotel.jpg", price: "₹8,000/hr", category: "Standard", rating: 4 },
    { title: "Celebrity Look-alike", image: "/images/services/celebrity.jpg", price: "₹22,000/hr", category: "Premium", rating: 5 },
    { title: "College Girl", image: "/images/services/college.jpg", price: "₹9,000/hr", category: "Young", rating: 4 },
    { title: "Housewife", image: "/images/services/housewife.jpg", price: "₹11,000/hr", category: "Mature", rating: 4 },
    { title: "Air Hostess", image: "/images/services/airhostess.jpg", price: "₹16,000/hr", category: "Professional", rating: 5 },
    { title: "Russian Model", image: "/images/services/russian.jpg", price: "₹30,000/hr", category: "International", rating: 5 },
    { title: "Corporate Event", image: "/images/services/corporate.jpg", price: "₹19,000/hr", category: "Business", rating: 5 },
    { title: "Wedding Escort", image: "/images/services/wedding.jpg", price: "₹17,000/hr", category: "Special", rating: 5 },
    { title: "Premium Call Girl", image: "/images/services/premium.jpg", price: "₹13,000/hr", category: "Premium", rating: 5 },
    { title: "Independent", image: "/images/services/independent.jpg", price: "₹12,000/hr", category: "Independent", rating: 4 },
    { title: "High Profile", image: "/images/services/high-profile.jpg", price: "₹35,000/hr", category: "Elite", rating: 5 },
    { title: "Massage Service", image: "/images/services/massage.jpg", price: "₹7,000/hr", category: "Wellness", rating: 4 },
    { title: "Outcall Service", image: "/images/services/outcall.jpg", price: "₹15,000/hr", category: "Outcall", rating: 5 },
    { title: "In-call Service", image: "/images/services/incall.jpg", price: "₹10,000/hr", category: "Incall", rating: 4 },
    { title: "Weekend Special", image: "/images/services/weekend.jpg", price: "₹20,000/day", category: "Special", rating: 5 },
    { title: "24/7 Available", image: "/images/services/24-7.jpg", price: "₹12,000/hr", category: "Always", rating: 5 }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Premium: "from-sweet-pink-500 to-light-red-500",
      Elite: "from-purple-500 to-pink-500",
      International: "from-blue-500 to-purple-500",
      Business: "from-gray-500 to-blue-500",
      Social: "from-green-500 to-teal-500",
      Entertainment: "from-orange-500 to-red-500",
      Professional: "from-indigo-500 to-purple-500",
      Travel: "from-cyan-500 to-blue-500",
      Special: "from-pink-500 to-rose-500",
      Standard: "from-gray-400 to-gray-500",
      Young: "from-pink-400 to-rose-400",
      Mature: "from-amber-500 to-orange-500",
      Independent: "from-teal-500 to-green-500",
      Wellness: "from-emerald-500 to-teal-500",
      Outcall: "from-violet-500 to-purple-500",
      Incall: "from-sky-500 to-blue-500",
      Always: "from-red-500 to-pink-500"
    };
    return colors[category] || "from-sweet-pink-500 to-light-red-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-sweet-pink-600 via-light-red-500 to-sweet-pink-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">Our Premium Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fadeInUp">
            Discover our comprehensive range of luxury escort services designed for discerning clients in Surat
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Service Cards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sweet-pink-600 to-light-red-600 bg-clip-text text-transparent mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our extensive collection of premium services, each designed to exceed your expectations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="relative aspect-[4/5]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <p className="text-sm font-medium">{service.category}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-sweet-pink-500 to-light-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {service.price}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                    {service.category}
                  </div>
                  
                  {/* Availability Badge */}
                  <div className="absolute bottom-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Available Now
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-sm mb-2 group-hover:text-sweet-pink-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(service.rating)].map((_, starIndex) => (
                        <svg key={starIndex} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({service.rating}.0)</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-sweet-pink-500 to-light-red-500 text-white px-3 py-2 rounded-lg text-xs font-medium hover:from-sweet-pink-600 hover:to-light-red-600 transition-all duration-200">
                      Book Now
                    </button>
                    <button className="px-3 py-2 border border-sweet-pink-300 text-sweet-pink-600 rounded-lg text-xs font-medium hover:bg-sweet-pink-50 transition-all duration-200">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sweet-pink-600 to-light-red-600 bg-clip-text text-transparent mb-4">Why Choose Our Services</h2>
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
                className="bg-gradient-to-br from-sweet-pink-50 to-light-red-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
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
      <section className="py-20 bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sweet-pink-600 to-light-red-600 bg-clip-text text-transparent mb-4">Simple Booking Process</h2>
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
                <div className="bg-gradient-to-br from-sweet-pink-500 to-light-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="border-t-2 border-dashed border-sweet-pink-300 transform translate-x-4"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sweet-pink-500 to-light-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Your Service?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today to discuss your requirements and schedule your preferred service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-sweet-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <a 
              href="tel:+91XXXXXXXXX" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-sweet-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}