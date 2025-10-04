'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", category: "Premium" },
    { title: "Social Events", image: "/images/services/Social Events.webp", category: "Social" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", category: "Business" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", category: "Travel" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", category: "Social" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", category: "Entertainment" },
    { title: "Private Model", image: "/images/services/Private Model.webp", category: "Premium" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", category: "Standard" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", category: "Premium" },
    { title: "College Girl", image: "/images/services/College Girl.webp", category: "Young" },
    { title: "Housewife", image: "/images/services/Housewife.webp", category: "Mature" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", category: "Professional" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", category: "International" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", category: "Business" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", category: "Special" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", category: "Premium" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", category: "Outcall" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", category: "Incall" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", category: "Special" },
    { title: "Special Service", image: "/images/services/Special Service.webp", category: "Premium" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-sweet-pink-600 via-light-red-500 to-sweet-pink-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Premium Escorts In Surat - Our Services</h1>
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
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
              Complete Service Portfolio
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional Call Girls & VIP Companions Available 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border-2 border-pink-300"
              >
                <div className="relative h-80 bg-pink-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain object-center p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-200/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-2 rounded-full text-sm font-medium shadow-lg">
                    {service.category}
                  </div>
                  
                  {/* Availability Badge */}
                  <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg">
                    Available Now
                  </div>
                </div>
                
                <div className="p-6 bg-pink-50">
                  <h2 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-pink-600 to-red-500 bg-clip-text mb-6 leading-tight">
                    {service.title}
                  </h2>
                  
                  {/* Centered Book Now Button */}
                  <div className="flex justify-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
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

      {/* Surat Locations Section */}
      <section className="py-20 bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Our Location Areas in Surat
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Premium escort locations available across all major areas of Surat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Row 1 */}
            <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Varachha</h3>
              <p className="text-red-100">Premium escort locations in Varachha area</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Adajan</h3>
              <p className="text-blue-100">High-class companions in Adajan locality</p>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Vesu</h3>
              <p className="text-green-100">VIP escort locations in Vesu residential area</p>
            </div>

            {/* Row 2 */}
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Citylight</h3>
              <p className="text-purple-100">Professional companions in Citylight area</p>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Althan</h3>
              <p className="text-pink-100">Elite escort locations in Althan locality</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Piplod</h3>
              <p className="text-indigo-100">Luxury companions in Piplod commercial area</p>
            </div>

            {/* Row 3 */}
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Udhna</h3>
              <p className="text-orange-100">Premium locations in Udhna industrial area</p>
            </div>
            <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Athwa</h3>
              <p className="text-teal-100">High-end escort locations in Athwa</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Rander</h3>
              <p className="text-yellow-100">Quality companions in Rander area</p>
            </div>

            {/* Row 4 */}
            <div className="bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Ghod Dod Road</h3>
              <p className="text-rose-100">VIP locations on Ghod Dod Road</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Ring Road</h3>
              <p className="text-cyan-100">Professional escorts near Ring Road</p>
            </div>
            <div className="bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Nanpura</h3>
              <p className="text-violet-100">Elite companions in Nanpura city center</p>
            </div>
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