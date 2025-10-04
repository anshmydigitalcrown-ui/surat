'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    { title: "VIP Companionship", image: "/images/services/0a20e49ae8e5c1e434883d78060d899f.webp", price: "₹15,000/hr", category: "Premium", rating: 5 },
    { title: "Social Events", image: "/images/services/126d43d48bee88fc5a017727b8a72014.webp", price: "₹12,000/hr", category: "Social", rating: 5 },
    { title: "Business Meetings", image: "/images/services/147dbdc5427bd3a11d9e25e07d9f4946.webp", price: "₹18,000/hr", category: "Business", rating: 5 },
    { title: "Travel Companion", image: "/images/services/17911c1f21775f2eb0efdf3042b357e9.webp", price: "₹25,000/day", category: "Travel", rating: 5 },
    { title: "Dinner Dates", image: "/images/services/1d03177c6a9121224f554f86eea6561f.webp", price: "₹10,000/hr", category: "Social", rating: 5 },
    { title: "Party Escort", image: "/images/services/2386653014fbf30a7d46eb5655ea6898.webp", price: "₹14,000/hr", category: "Entertainment", rating: 5 },
    { title: "Private Model", image: "/images/services/30df14b020334832be7512dec3f06c4b.webp", price: "₹20,000/hr", category: "Premium", rating: 5 },
    { title: "Hotel Escort", image: "/images/services/370287632d7ba5c61bf52b7ea2212f8d.webp", price: "₹8,000/hr", category: "Standard", rating: 4 },
    { title: "Celebrity Look-alike", image: "/images/services/45e43dc8762a49f7e32fec09f46c4beb (1).webp", price: "₹22,000/hr", category: "Premium", rating: 5 },
    { title: "College Girl", image: "/images/services/4ca5679430a6cb5fb444e8b5ba88a5c2.webp", price: "₹9,000/hr", category: "Young", rating: 4 },
    { title: "Housewife", image: "/images/services/50fa4974d71fae7cb6aa6beeabf23aff.webp", price: "₹11,000/hr", category: "Mature", rating: 4 },
    { title: "Air Hostess", image: "/images/services/520f8cc23be016013e09dd18f7ca2ff8.webp", price: "₹16,000/hr", category: "Professional", rating: 5 },
    { title: "Russian Model", image: "/images/services/68968a4787acc7d223d5f39d6af50fa7.webp", price: "₹30,000/hr", category: "International", rating: 5 },
    { title: "Corporate Event", image: "/images/services/73f131c170a6c3b3c69e0740b045de2e.webp", price: "₹19,000/hr", category: "Business", rating: 5 },
    { title: "Wedding Escort", image: "/images/services/8bbc046f619ed3007b7c5325809a6fd1.webp", price: "₹17,000/hr", category: "Special", rating: 5 },
    { title: "Premium Call Girl", image: "/images/services/8bf807d95f77baca1a5d9e72e1ef44f5.webp", price: "₹13,000/hr", category: "Premium", rating: 5 },
    { title: "Independent", image: "/images/services/909c82445d71d59a58ca574da8309883.webp", price: "₹12,000/hr", category: "Independent", rating: 4 },
    { title: "High Profile", image: "/images/services/bc5368c8af5984c25c38a4e15db52749.webp", price: "₹35,000/hr", category: "Elite", rating: 5 },
    { title: "Massage Service", image: "/images/services/d27db602cbde448ca76765ba688d5c11.webp", price: "₹7,000/hr", category: "Wellness", rating: 4 },
    { title: "Outcall Service", image: "/images/services/d924afd90a7aa9e4e2ae4b720a687b66.webp", price: "₹15,000/hr", category: "Outcall", rating: 5 },
    { title: "In-call Service", image: "/images/services/db0819ebec732befe549e66887ee5069.webp", price: "₹10,000/hr", category: "Incall", rating: 4 },
    { title: "Weekend Special", image: "/images/services/e561da040eab9be77db2e99451ef0d79.webp", price: "₹20,000/day", category: "Special", rating: 5 },
    { title: "24/7 Available", image: "/images/services/eb6f5ed0106779f0081f58fb20e41001.webp", price: "₹12,000/hr", category: "Always", rating: 5 },
    { title: "Special Service", image: "/images/services/f0f35e374ec067f5c6c933c57c831fbc.webp", price: "₹14,000/hr", category: "Premium", rating: 5 }
  ];

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 overflow-hidden border border-sweet-pink-100"
              >
                <div className="relative h-80 bg-gray-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain object-center p-2 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-sweet-pink-500 to-light-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {service.price}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-2 rounded-full text-sm font-medium shadow-lg">
                    {service.category}
                  </div>
                  
                  {/* Availability Badge */}
                  <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg">
                    Available Now
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
                      Book Now
                    </button>
                    <button className="px-4 py-2 border border-sweet-pink-300 text-sweet-pink-600 rounded-lg text-sm font-medium hover:bg-sweet-pink-50 transition-all duration-200 shadow-lg">
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