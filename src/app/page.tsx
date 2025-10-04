'use client';

import Link from 'next/link';
import Image from 'next/image';

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
              {/* Image Name Above Container */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-2">
                  RashmiKapoor
                </h3>
                <p className="text-gray-600 font-medium">Premium Escort Service</p>
              </div>
              
              <div className="relative">
                {/* Main Image Card */}
                <div className="bg-gradient-to-br from-sweet-pink-200 via-sweet-pink-300 to-light-red-200 rounded-3xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500 p-3">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-inner">
                    <div className="aspect-[3/4] relative bg-gradient-to-br from-gray-100 to-gray-200">
                      {/* Hero Image */}
                      <Image 
                        src="/images/hero/sexy-wet-bhabhi.webp" 
                        alt="RashmiKapoor - Premium Escort Service" 
                        fill
                        className="object-contain"
                        priority
                        quality={95}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Subtle Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2">
                          <h3 className="text-lg font-bold mb-1 drop-shadow-lg">Available Now</h3>
                          <p className="text-xs opacity-90 drop-shadow-lg">Professional Service</p>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-3 right-3 w-2 h-2 bg-white/40 rounded-full"></div>
                      <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                      <div className="absolute bottom-16 left-4 w-3 h-3 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-3 rounded-2xl shadow-lg transform rotate-12 z-10">
                  <div className="text-center">
                    <div className="text-2xl font-bold">No.1</div>
                    <div className="text-xs">In Surat</div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 bg-sweet-pink-200 rounded-full opacity-50"></div>
                <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-light-red-200 rounded-full opacity-40"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-20 bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Premium Escorts In Surat - Our Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional Call Girls & VIP Companions Available 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp" },
              { title: "Social Events", image: "/images/services/Social Events.webp" },
              { title: "Business Meetings", image: "/images/services/Business Meetings.webp" },
              { title: "Travel Companion", image: "/images/services/Travel Companion.webp" },
              { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp" },
              { title: "Party Escort", image: "/images/services/Party Escort.webp" },
              { title: "Private Model", image: "/images/services/Private Model.webp" },
              { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp" },
              { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp" },
              { title: "College Girl", image: "/images/services/College Girl.webp" },
              { title: "Housewife", image: "/images/services/Housewife.webp" },
              { title: "Air Hostess", image: "/images/services/Air Hostess.webp" },
              { title: "Russian Model", image: "/images/services/Russian Model.webp" },
              { title: "Corporate Event", image: "/images/services/Corporate Event.webp" },
              { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp" },
              { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp" },
              { title: "Outcall Service", image: "/images/services/Outcall Service.webp" },
              { title: "In-call Service", image: "/images/services/In-call Service.webp" },
              { title: "Weekend Special", image: "/images/services/Weekend Special.webp" },
              { title: "Special Service", image: "/images/services/Special Service.webp" }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border-2 border-pink-300"
              >
                <div className="relative h-80 bg-pink-50">
                  {/* Service Image */}
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-contain object-center p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-200/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Available Badge */}
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg">
                    Available
                  </div>
                </div>
                
                <div className="p-6 bg-pink-50">
                  <h2 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-pink-600 to-red-500 bg-clip-text mb-6 leading-tight">
                    {service.title}
                  </h2>
                  
                  {/* Buttons aligned to left */}
                  <div className="flex flex-col items-start space-y-3">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg">
                      {service.image.split('/').pop()?.replace('.webp', '')}
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg">
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

      {/* Text Service Section */}
      <section className="py-20 bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Our Premium Services in Surat
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* VIP Escort Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">VIP Escort Service</h3>
              <p className="text-gray-700 leading-relaxed">
                Exclusive VIP companions for discerning clients seeking premium escort service in Surat. Professional, elegant, and sophisticated.
              </p>
            </div>

            {/* Event Companions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Event Companions</h3>
              <p className="text-gray-700 leading-relaxed">
                Perfect companions for business events, parties, and social gatherings in Surat. Professional and well-educated.
              </p>
            </div>

            {/* Premium Call Girls */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Premium Call Girls</h3>
              <p className="text-gray-700 leading-relaxed">
                High-class call girls service with verified profiles and complete discretion in Surat. 24/7 availability.
              </p>
            </div>
          </div>

          {/* Why We're the Top Choice */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-12">
              Why We&apos;re the Top Choice in Surat
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Quality Assurance */}
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-6">Quality Assurance</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Verified escorts</span>
                    <span className="text-gray-600">- All profiles thoroughly verified</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Professional training</span>
                    <span className="text-gray-600">- Well-trained companions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Regular health checkups</span>
                    <span className="text-gray-600">- Health and safety priority</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Background verification</span>
                    <span className="text-gray-600">- Complete security screening</span>
                  </li>
                </ul>
              </div>

              {/* Service Excellence */}
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-6">Service Excellence</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Prompt response</span>
                    <span className="text-gray-600">- Quick booking confirmation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Customer support</span>
                    <span className="text-gray-600">- 24/7 customer assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Flexible booking</span>
                    <span className="text-gray-600">- Easy scheduling options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-800 mr-2">• Satisfaction guaranteed</span>
                    <span className="text-gray-600">- 100% satisfaction commitment</span>
                  </li>
                </ul>
              </div>
            </div>
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
