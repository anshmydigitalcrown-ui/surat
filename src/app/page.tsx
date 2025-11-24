'use client';

import Link from 'next/link';
import Image from 'next/image';

// Utility function to convert service title to URL slug
function getServiceSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-12 sm:py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-pink-300 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-rose-300 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-pink-200 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            
            {/* Left Side - Website Description */}
            <div className="space-y-6 sm:space-y-8 animate-fadeInUp order-2 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg sm:text-xl">RK</span>
                  </div>
                  <div>
                    <p className="text-pink-600 font-medium text-base sm:text-lg">Premium Escort Service</p>
                  </div>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Surat&apos;s Most
                  <span className="block bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
                    Trusted Companion
                  </span>
                  Service
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
                  Experience luxury and sophistication with Surat&apos;s premier escort service. We offer discreet, professional companionship tailored to your needs with complete privacy and elegance.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base sm:text-lg font-medium">24/7 Premium Service Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base sm:text-lg font-medium">Complete Discretion & Privacy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base sm:text-lg font-medium">Professional & Sophisticated</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Link 
                  href="/contact" 
                  className="relative bg-gradient-to-r from-pink-500 via-pink-600 to-rose-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Book Consultation</span>
                  <div className="absolute inset-0 rounded-full border border-white/20"></div>
                </Link>
                <a 
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative border-2 border-green-500 text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-green-500 hover:text-white transition-all duration-300 text-center flex items-center justify-center space-x-2 group shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Side - Image Card */}
            <div className="relative animate-fadeInUp order-1 lg:order-2" style={{animationDelay: '0.3s'}}>
              {/* Image Name Above Container */}
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-2">
                  RashmiKapoor
                </h3>
                <p className="text-red-600 font-medium text-sm sm:text-base">Premium Escort Service</p>
              </div>
              
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Main Image Card */}
                <div className="bg-gradient-to-br from-sweet-pink-200 via-sweet-pink-300 to-light-red-200 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500 p-2 sm:p-3">
                  <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-inner">
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
                      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white">
                        <div className="bg-black/30 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                          <h3 className="text-base sm:text-lg font-bold mb-0.5 sm:mb-1 drop-shadow-lg">Available Now</h3>
                          <p className="text-xs opacity-90 drop-shadow-lg">Professional Service</p>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-2 h-2 bg-white/40 rounded-full"></div>
                      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                      <div className="absolute bottom-12 sm:bottom-16 left-2 sm:left-4 w-3 h-3 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg transform rotate-12 z-10">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold">No.1</div>
                    <div className="text-xs">In Surat</div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -z-10 -top-4 sm:-top-8 -left-4 sm:-left-8 w-24 sm:w-32 h-24 sm:h-32 bg-sweet-pink-200 rounded-full opacity-50"></div>
                <div className="absolute -z-10 -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-24 h-20 sm:h-24 bg-light-red-200 rounded-full opacity-40"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-pink-700 to-pink-900 bg-clip-text text-transparent mb-4 sm:mb-6">
              Escorts  in Surat- Our Services
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-pink-800 max-w-3xl mx-auto leading-relaxed px-4">
              Professional Call Girls & VIP Companions Available 24/7
            </p>
          </div>

          {/* Service Grid - 4 Cards Per Row with Larger Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[
              { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "Elite companions for exclusive events and occasions", price: "Premium", rating: "4.9" },
              { title: "Social Events", image: "/images/services/Social Events.webp", description: "Perfect companions for social gatherings and parties", price: "Standard", rating: "4.8" },
              { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Professional support for corporate events", price: "Premium", rating: "4.9" },
              { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Elegant travel partners for business or leisure", price: "Luxury", rating: "5.0" },
              { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Sophisticated dining companions", price: "Standard", rating: "4.7" },
              { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Fun and engaging party companions", price: "Standard", rating: "4.8" },
              { title: "Private Model", image: "/images/services/Private Model.webp", description: "Exclusive modeling and photography sessions", price: "Luxury", rating: "4.9" },
              { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Discreet hotel visit arrangements", price: "Standard", rating: "4.6" },
              { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Companions resembling famous personalities", price: "Premium", rating: "4.8" },
              { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young and vibrant companions", price: "Standard", rating: "4.7" },
              { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature and experienced companions", price: "Standard", rating: "4.8" },
              { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional airline crew companions", price: "Premium", rating: "4.9" },
              { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "International model companions", price: "Luxury", rating: "5.0" },
              { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Business event support and networking", price: "Premium", rating: "4.8" },
              { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Elegant companions for wedding events", price: "Premium", rating: "4.7" },
              { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "High-end escort services", price: "Luxury", rating: "4.9" },
              { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Professional outcall escort services", price: "Standard", rating: "4.6" },
              { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call arrangements", price: "Standard", rating: "4.5" },
              { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Special weekend companion packages", price: "Premium", rating: "4.8" },
              { title: "Special Service", image: "/images/services/Special Service.webp", description: "Customized special occasion services", price: "Luxury", rating: "4.9" }
            ].map((service, index) => (
              <Link
                key={index}
                href={`/services/${getServiceSlug(service.title)}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 block group"
              >
                {/* Service Image - Extra Large Sizes, No Cropping */}
                <div className="relative h-72 sm:h-80 lg:h-96 xl:h-80 bg-gray-50 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={`${service.title} - Premium Escort Service in Surat`}
                    fill
                    className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading={index < 8 ? "eager" : "lazy"}
                  />
                </div>
                
                {/* Service Content - Enhanced Spacing */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Price and Rating - Enhanced Design */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm sm:text-base font-semibold text-pink-700 bg-pink-100 px-3 py-1.5 rounded-full">
                      {service.price}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-lg">★</span>
                      <span className="text-sm sm:text-base text-gray-700 ml-1 font-medium">{service.rating}</span>
                    </div>
                  </div>
                  
                  {/* Service Page Button - Enhanced Style */}
                  <div className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white py-3 sm:py-4 px-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 text-center shadow-lg hover:shadow-xl">
                    View {service.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* View All Services Button */}
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="bg-gradient-to-r from-pink-700 via-pink-800 to-pink-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
            >
              View All Services
            </Link>
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

            {/* Row 5 */}
            <div className="bg-gradient-to-br from-lime-400 to-lime-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Majura Gate</h3>
              <p className="text-lime-100 mb-4">Premium companions near Majura Gate</p>
              <Link href="/locations/majura-gate" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Majura Gate Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Pal</h3>
              <p className="text-amber-100 mb-4">VIP escort services in Pal area</p>
              <Link href="/locations/pal" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Pal Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Katargam</h3>
              <p className="text-emerald-100 mb-4">Luxury companions in Katargam locality</p>
              <Link href="/locations/katargam" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Katargam Escorts
              </Link>
            </div>

            {/* Row 6 */}
            <div className="bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Sagrampura</h3>
              <p className="text-sky-100 mb-4">Professional escorts in Sagrampura</p>
              <Link href="/locations/sagrampura" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Sagrampura Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Mota Varachha</h3>
              <p className="text-fuchsia-100 mb-4">Elite companions in Mota Varachha</p>
              <Link href="/locations/mota-varachha" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Mota Varachha Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Magdalla</h3>
              <p className="text-red-100 mb-4">Premium services in Magdalla port area</p>
              <Link href="/locations/magdalla" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Magdalla Escorts
              </Link>
            </div>

            {/* Row 7 */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Dumas Road</h3>
              <p className="text-blue-100 mb-4">Beachside companions on Dumas Road</p>
              <Link href="/locations/dumas-road" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Dumas Road Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Someshwara</h3>
              <p className="text-green-100 mb-4">High-class escorts in Someshwara</p>
              <Link href="/locations/someshwara" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Someshwara Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Kamrej</h3>
              <p className="text-purple-100 mb-4">Professional companions in Kamrej area</p>
              <Link href="/locations/kamrej" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Kamrej Escorts
              </Link>
            </div>

            {/* Row 8 */}
            <div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Bhatar</h3>
              <p className="text-pink-100 mb-4">VIP companions in Bhatar locality</p>
              <Link href="/locations/bhatar" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Bhatar Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">Pandesara</h3>
              <p className="text-indigo-100 mb-4">Luxury escorts in Pandesara industrial hub</p>
              <Link href="/locations/pandesara" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                Pandesara Escorts
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-xl font-bold mb-2">New Civil Hospital Road</h3>
              <p className="text-orange-100 mb-4">Elite escorts near New Civil Hospital</p>
              <Link href="/locations/new-civil-hospital-road" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
                NCH Road Escorts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-br from-pink-300 via-pink-200 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-red-600 max-w-4xl mx-auto leading-relaxed">
              What our satisfied clients say about our premium escort services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Amazing Service */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-red-600 mb-6">Amazing Service</h3>
              <p className="text-red-600 italic leading-relaxed mb-6">
                &ldquo;Professional, discrete, and exactly what I was looking for. The booking process was simple and the service exceeded expectations.&rdquo;
              </p>
              <p className="text-pink-600 font-bold">- VIP Client, Varachha</p>
            </div>

            {/* Highly Recommend */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-red-600 mb-6">Highly Recommend</h3>
              <p className="text-red-600 italic leading-relaxed mb-6">
                &ldquo;Outstanding companions and excellent customer service. Very professional team that maintains complete privacy and confidentiality.&rdquo;
              </p>
              <p className="text-blue-600 font-bold">- Regular Client, Adajan</p>
            </div>

            {/* Premium Quality */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span className="text-3xl text-yellow-500">⭐</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-red-600 mb-6">Premium Quality</h3>
              <p className="text-red-600 italic leading-relaxed mb-6">
                &ldquo;Top-notch service with beautiful and intelligent companions. The 24/7 availability and quick response time is impressive.&rdquo;
              </p>
              <p className="text-orange-600 font-bold">- Business Client, Vesu</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Premium Clients Say About Us */}
      <section className="py-20 bg-gradient-to-br from-pink-300 via-pink-200 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              ⭐ What Our Premium Clients Say About Us ⭐
            </h2>
            <p className="text-xl text-red-600 max-w-4xl mx-auto leading-relaxed">
              💎 Thousands of satisfied clients across Surat trust us for premium escort services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Premium Quality */}
            <div className="bg-gradient-to-br from-pink-400 via-pink-300 to-pink-200 rounded-3xl p-8 text-center border border-pink-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">Premium Quality</h3>
              <p className="text-red-600 leading-relaxed font-medium">
                Handpicked professional escorts with guaranteed satisfaction
              </p>
            </div>

            {/* 100% Discrete */}
            <div className="bg-gradient-to-br from-purple-400 via-purple-300 to-pink-300 rounded-3xl p-8 text-center border border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-6">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">100% Discrete</h3>
              <p className="text-red-600 leading-relaxed font-medium">
                Complete privacy and confidentiality for all our VIP clients
              </p>
            </div>

            {/* 24/7 Available */}
            <div className="bg-gradient-to-br from-orange-400 via-pink-300 to-pink-200 rounded-3xl p-8 text-center border border-orange-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">24/7 Available</h3>
              <p className="text-red-600 leading-relaxed font-medium">
                Round the clock service with instant booking confirmation
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              ⭐ 5000+ Happy Clients
            </div>
            <div className="bg-gradient-to-r from-red-400 to-pink-400 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              💯 100% Satisfaction
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              🔥 Premium Service
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us & Get In Touch Section */}
      <section className="py-16 bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-pink-500 rounded-full mr-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Visit Us & Get In Touch
            </h2>
            <div className="w-3 h-3 bg-pink-500 rounded-full ml-4"></div>
          </div>
          
          <p className="text-lg md:text-xl text-pink-700 max-w-3xl mx-auto leading-relaxed">
            Find us easily with our location map or contact us directly through our premium booking form
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Map */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent mb-4">
                  Find Us in Surat
                </h2>
                <p className="text-xl text-pink-600">
                  We provide premium escort services across all major areas of Surat
                </p>
              </div>
              <div className="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59616.944!2d72.83!3d21.195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1696234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Surat Location Map"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-pink-800 to-pink-900 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Contact Us</h3>
                <p className="text-pink-100">
                  Get in touch with us for premium escort services in Surat
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-pink-100 font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300 bg-white/10 text-white placeholder-pink-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-pink-100 font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300 bg-white/10 text-white placeholder-pink-200"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-pink-100 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300 bg-white/10 text-white placeholder-pink-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-pink-100 font-semibold mb-2">Location Preference</label>
                  <select className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300 bg-white/10 text-white">
                    <option value="">Select Preferred Area</option>
                    <option value="varachha">Varachha</option>
                    <option value="adajan">Adajan</option>
                    <option value="vesu">Vesu</option>
                    <option value="althan">Althan</option>
                    <option value="citylight">City Light</option>
                    <option value="athwa">Athwa</option>
                    <option value="katargam">Katargam</option>
                    <option value="piplod">Piplod</option>
                    <option value="udhana">Udhana</option>
                    <option value="ringsroad">Ring Road</option>
                    <option value="nanpura">Nanpura</option>
                    <option value="other">Other Area</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-pink-100 font-semibold mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300 resize-none bg-white/10 text-white placeholder-pink-200"
                    placeholder="Tell us about your preferences and requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white font-bold py-4 px-6 rounded-lg hover:from-pink-700 hover:to-pink-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message 💌
                </button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-pink-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-pink-300">📱</span>
                    <span className="text-pink-100">24/7 Available</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-pink-300">🔒</span>
                    <span className="text-pink-100">100% Confidential</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-pink-25 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Call Us Now */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-pink-600 mb-2">Call Us Now</h3>
                <p className="text-2xl font-bold text-pink-800 mb-2">+91 98765-43210</p>
                <p className="text-pink-600">24/7 Available</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-2">WhatsApp</h3>
                <p className="text-2xl font-bold text-pink-800 mb-2">+91 98765-43210</p>
                <p className="text-pink-600">Instant Response</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Email Us</h3>
                <p className="text-lg font-bold text-pink-800 mb-2">info@suratescorts.com</p>
                <p className="text-pink-600">Quick Response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Fixed Size & Responsive UI/UX */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 faq-container">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-pink-600 max-w-3xl mx-auto leading-relaxed">
              Common questions about our premium escort services and professional companions
            </p>
          </div>

          {/* FAQ Grid - Responsive 1-2 Columns with Consistent Sizing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Left Column */}
            <div className="space-y-4 md:space-y-6">
              {/* FAQ Item 1 */}
              <details className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 faq-item">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-pink-800 pr-4">Are your services available 24/7?</h3>
                  <svg className="w-6 h-6 text-pink-600 transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-pink-700">
                  <p className="text-sm md:text-base leading-relaxed">Yes, our premium escort services are available 24/7. We provide round-the-clock assistance to ensure you can book our services at any time that suits your schedule.</p>
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 faq-item">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">How do I make a booking?</h3>
                  <svg className="w-6 h-6 text-pink-600 transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700">
                  <p className="text-sm md:text-base leading-relaxed">You can make a booking by calling us directly, sending a WhatsApp message, or filling out our contact form. Our team will respond promptly to confirm your booking details.</p>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 faq-item">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">What types of services do you offer?</h3>
                  <svg className="w-6 h-6 text-pink-600 transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700">
                  <p className="text-sm md:text-base leading-relaxed">We offer a wide range of premium companion services including social events, business meetings, dinner dates, and travel companionship. All services are provided with complete professionalism.</p>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 faq-item">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">What are your service charges?</h3>
                  <svg className="w-6 h-6 text-pink-600 transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700">
                  <p className="text-sm md:text-base leading-relaxed">Our service charges vary based on the type of service, duration, and specific requirements. Please contact us directly for detailed pricing information and package options.</p>
                </div>
              </details>

              {/* FAQ Item 9 */}
              <details className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 faq-item">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">Can I choose my companion?</h3>
                  <svg className="w-6 h-6 text-pink-600 transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700">
                  <p className="text-sm md:text-base leading-relaxed">Yes, you can browse our gallery and select your preferred companion based on your preferences. We strive to match you with companions that meet your specific requirements.</p>
                </div>
              </details>

              {/* FAQ Item 10 */}
              <details className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 faq-item">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">What payment methods do you accept?</h3>
                  <svg className="w-6 h-6 text-pink-600 transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700">
                  <p className="text-sm md:text-base leading-relaxed">We accept multiple payment methods including cash, online transfers, and digital payment platforms. Payment details and preferred methods will be discussed during the booking confirmation.</p>
                </div>
              </details>
            </div>

            {/* Right Column */}
            <div className="space-y-4 md:space-y-6">
              {/* FAQ Item 5 */}
              <details className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 faq-item">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">What areas in Surat do you cover?</h3>
                  <svg className="w-6 h-6 text-pink-600 transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700">
                  <p className="text-sm md:text-base leading-relaxed">We provide services across all major areas in Surat including Varachha, Adajan, Vesu, Nanpura, City Light, and surrounding locations. Contact us for specific area availability.</p>
                </div>
              </details>

              {/* FAQ Item 6 */}
              <details className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 faq-item">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">Is privacy and discretion guaranteed?</h3>
                  <svg className="w-6 h-6 text-pink-600 transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700">
                  <p className="text-sm md:text-base leading-relaxed">Absolutely! We maintain the highest standards of privacy and discretion. All client information is kept strictly confidential, and our companions are trained to handle all interactions professionally.</p>
                </div>
              </details>

              {/* FAQ Item 7 */}
              <details className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 faq-item">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">Are your companions verified?</h3>
                  <svg className="w-6 h-6 text-pink-600 transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700">
                  <p className="text-sm md:text-base leading-relaxed">Yes, all our companions undergo thorough verification processes including background checks, health certificates, and professional training to ensure the highest quality service.</p>
                </div>
              </details>

              {/* FAQ Item 8 */}
              <details className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 faq-item">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">Do you provide hotel bookings assistance?</h3>
                  <svg className="w-6 h-6 text-pink-600 transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700">
                  <p className="text-sm md:text-base leading-relaxed">Yes, we can assist with hotel bookings and venue arrangements to ensure a comfortable and convenient experience. Our team can recommend suitable locations based on your preferences.</p>
                </div>
              </details>

              {/* FAQ Item 11 */}
              <details className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 faq-item">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">How far in advance should I book?</h3>
                  <svg className="w-6 h-6 text-pink-600 transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700">
                  <p className="text-sm md:text-base leading-relaxed">While we accept same-day bookings subject to availability, we recommend booking at least 2-4 hours in advance to ensure your preferred companion is available and to allow proper arrangements.</p>
                </div>
              </details>

              {/* FAQ Item 12 */}
              <details className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 faq-item">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">Do you offer outcall and incall services?</h3>
                  <svg className="w-6 h-6 text-pink-600 transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700">
                  <p className="text-sm md:text-base leading-relaxed">Yes, we provide both outcall services where our companions visit your location, and incall services at pre-arranged safe and comfortable venues. Choose the option that best suits your needs.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Guide About Escorts in Surat */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              🌟 Complete Guide to Premium Escort Services in Surat 🌟
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover everything you need to know about professional escort services in Surat - Your ultimate resource for premium companionship experiences
            </p>
          </div>

          <div className="prose max-w-none">
            {/* Introduction Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">📍</span> Welcome to Surat&apos;s Premier Escort Services
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Surat, known as the Diamond City of India, is not only famous for its textile and diamond industries but also for its vibrant social scene and premium lifestyle services. 💎 In this comprehensive guide, we&apos;ll explore everything about professional escort services in Surat, helping you understand the industry, services available, and how to make informed decisions when seeking companionship.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The escort industry in Surat has evolved significantly over the years, adapting to modern standards of professionalism, discretion, and quality service. Whether you&apos;re a resident or visiting this beautiful city, understanding the landscape of escort services can help you make the right choices for your social and professional needs. 🏙️
              </p>
            </div>

            {/* Understanding Escort Services */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
              <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
                <span className="mr-3">🎭</span> Understanding Professional Escort Services
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Professional escort services encompass a wide range of companionship options designed to meet various social, professional, and personal needs. 🤝 These services are legal when conducted within appropriate frameworks and focus on providing sophisticated companionship for various occasions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">🌟 Social Companionship</h4>
                  <p className="text-gray-700">Professional companions for social events, business functions, cultural activities, and entertainment venues. These services focus on providing articulate, well-educated companions who can engage in meaningful conversations.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">🏢 Business Events</h4>
                  <p className="text-gray-700">Corporate event companions who understand business etiquette and can professionally represent clients at conferences, seminars, trade shows, and networking events.</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                The modern escort industry emphasizes consent, professionalism, and mutual respect. 🤝 Reputable agencies ensure their companions are well-trained, articulate, and capable of adapting to various social situations while maintaining the highest standards of discretion and professionalism.
              </p>
            </div>

            {/* Surat's Unique Position */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
              <h3 className="text-3xl font-bold text-purple-800 mb-6 flex items-center">
                <span className="mr-3">💎</span> Why Surat is Special for Premium Services
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Surat&apos;s status as a major commercial hub in Gujarat makes it an ideal location for premium escort services. 🏙️ The city&apos;s cosmopolitan culture, business-friendly environment, and affluent population create a natural demand for sophisticated companionship services.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <div className="text-4xl mb-4">🏭</div>
                  <h4 className="text-xl font-bold text-purple-700 mb-3">Industrial Hub</h4>
                  <p className="text-gray-700">Major textile and diamond trading center attracting international business professionals</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h4 className="text-xl font-bold text-purple-700 mb-3">Cosmopolitan Culture</h4>
                  <p className="text-gray-700">Diverse population with modern outlook and appreciation for quality services</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h4 className="text-xl font-bold text-purple-700 mb-3">Vibrant Lifestyle</h4>
                  <p className="text-gray-700">Active social scene with numerous events, celebrations, and networking opportunities</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                The city&apos;s strategic location, excellent connectivity, and modern infrastructure make it convenient for both local residents and visiting professionals to access premium services. 🚄 Surat&apos;s progressive business environment has fostered a culture that values quality, professionalism, and sophisticated lifestyle choices.
              </p>
            </div>

            {/* Types of Services Available */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
              <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center">
                <span className="mr-3">🎪</span> Comprehensive Service Categories
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
                    <span className="mr-2">🌃</span> Social Escort Services
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><span className="mr-2">✨</span> Dinner date companions for fine dining experiences</li>
                    <li className="flex items-start"><span className="mr-2">🎭</span> Cultural event accompaniment for theaters and exhibitions</li>
                    <li className="flex items-start"><span className="mr-2">🎉</span> Party escorts for social gatherings and celebrations</li>
                    <li className="flex items-start"><span className="mr-2">🏖️</span> Travel companions for tourism and leisure activities</li>
                    <li className="flex items-start"><span className="mr-2">🎵</span> Entertainment event partners for concerts and shows</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
                    <span className="mr-2">💼</span> Professional Services
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><span className="mr-2">🏢</span> Corporate event representation</li>
                    <li className="flex items-start"><span className="mr-2">🤝</span> Business meeting accompaniment</li>
                    <li className="flex items-start"><span className="mr-2">📊</span> Conference and seminar partnerships</li>
                    <li className="flex items-start"><span className="mr-2">🎯</span> Networking event assistance</li>
                    <li className="flex items-start"><span className="mr-2">💎</span> VIP client entertainment</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-2xl mb-6">
                <h4 className="text-xl font-bold text-yellow-800 mb-3 flex items-center">
                  <span className="mr-2">⚠️</span> Important Note
                </h4>
                <p className="text-yellow-800">
                  All services are provided within legal frameworks and focus on companionship, social interaction, and professional representation. 📋 Clients should always verify the legitimacy and licensing of service providers.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                The diversity of services available in Surat reflects the city&apos;s cosmopolitan nature and the varied needs of its residents and visitors. 🌈 Professional agencies ensure that all companions are well-trained, culturally aware, and capable of adapting to different social and professional environments.
              </p>
            </div>

            {/* Quality and Standards */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
              <h3 className="text-3xl font-bold text-red-800 mb-6 flex items-center">
                <span className="mr-3">⭐</span> Quality Standards and Professionalism
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The escort industry in Surat has established high standards of professionalism that distinguish reputable agencies from less reliable operators. 🏆 Understanding these quality markers can help clients make informed decisions and ensure positive experiences.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">🎓</div>
                    <h4 className="text-xl font-bold text-red-700">Education & Training</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Professional etiquette training</li>
                    <li>• Language proficiency</li>
                    <li>• Cultural awareness programs</li>
                    <li>• Communication skills development</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">🛡️</div>
                    <h4 className="text-xl font-bold text-red-700">Safety & Verification</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Background verification</li>
                    <li>• Health certifications</li>
                    <li>• Identity authentication</li>
                    <li>• Regular safety protocols</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">🤐</div>
                    <h4 className="text-xl font-bold text-red-700">Privacy & Discretion</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Confidentiality agreements</li>
                    <li>• Secure communication channels</li>
                    <li>• Data protection measures</li>
                    <li>• Professional boundaries</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Reputable agencies in Surat invest significantly in training their companions to meet international standards of service quality. 🌍 This includes not only appearance and social skills but also professional conduct, cultural sensitivity, and the ability to handle various social situations with grace and confidence.
              </p>
            </div>

            {/* Geographic Coverage */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
              <h3 className="text-3xl font-bold text-indigo-800 mb-6 flex items-center">
                <span className="mr-3">🗺️</span> Service Areas Across Surat
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Surat&apos;s extensive urban landscape offers numerous prime locations for escort services, each with its unique characteristics and clientele. 🏙️ Understanding the different areas can help clients choose the most suitable locations for their needs.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-indigo-700 mb-3 flex items-center">
                    <span className="mr-2">🏢</span> Business Districts
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Varachha - Commercial hub</li>
                    <li>• Adajan - Modern business center</li>
                    <li>• Ring Road - Corporate corridor</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-indigo-700 mb-3 flex items-center">
                    <span className="mr-2">🏠</span> Upscale Residential
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Vesu - Premium residential</li>
                    <li>• Althan - Elite neighborhoods</li>
                    <li>• Citylight - Upscale living</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-indigo-700 mb-3 flex items-center">
                    <span className="mr-2">🎯</span> Central Areas
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Nanpura - City center</li>
                    <li>• Athwa - Heritage district</li>
                    <li>• Rander - Riverside area</li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-r-2xl">
                <h4 className="text-xl font-bold text-indigo-800 mb-3">🚗 Convenient Accessibility</h4>
                <p className="text-indigo-800">
                  All service areas are well-connected through Surat&apos;s excellent transportation network, including metro connectivity, major roads, and proximity to hotels and entertainment venues. This ensures convenient access for both incall and outcall services.
                </p>
              </div>
            </div>

            {/* Booking and Safety Guidelines */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
              <h3 className="text-3xl font-bold text-orange-800 mb-6 flex items-center">
                <span className="mr-3">📱</span> Booking Process and Safety Guidelines
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="text-2xl font-bold text-orange-700 mb-4 flex items-center">
                    <span className="mr-2">📞</span> How to Book Services
                  </h4>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-3 bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                      <span>Initial contact through verified channels (phone, website, or app)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                      <span>Consultation to understand your specific requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                      <span>Selection of appropriate companion based on preferences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                      <span>Confirmation of booking details and payment arrangements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                      <span>Final confirmation and meeting arrangements</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="text-2xl font-bold text-orange-700 mb-4 flex items-center">
                    <span className="mr-2">🔒</span> Safety Considerations
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">🛡️</span>
                      <span>Always book through verified and licensed agencies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">📋</span>
                      <span>Verify companion credentials and agency authorization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">💳</span>
                      <span>Use secure payment methods and get proper receipts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">📱</span>
                      <span>Maintain communication through official channels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🤝</span>
                      <span>Respect boundaries and maintain professional conduct</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-2xl">
                <h4 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                  <span className="mr-2">⚠️</span> Important Safety Reminder
                </h4>
                <p className="text-red-800">
                  Always prioritize safety and legality when engaging escort services. Verify the legitimacy of agencies, understand the legal framework, and ensure all interactions are consensual and professional. Report any suspicious activities to appropriate authorities.
                </p>
              </div>
            </div>

            {/* Cultural and Social Context */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
              <h3 className="text-3xl font-bold text-pink-800 mb-6 flex items-center">
                <span className="mr-3">🎭</span> Cultural Context and Social Acceptance
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Understanding the cultural context of escort services in Surat requires appreciating the city&apos;s progressive outlook while respecting traditional values. 🏛️ Surat&apos;s cosmopolitan environment has created space for various lifestyle services while maintaining cultural sensitivity.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-pink-700 mb-4">🌍 Modern Perspectives</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Growing acceptance of professional companionship services</li>
                    <li>• Recognition of legitimate business and social needs</li>
                    <li>• Emphasis on professionalism and ethical conduct</li>
                    <li>• Integration with modern lifestyle and business practices</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-pink-700 mb-4">🏛️ Cultural Sensitivity</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Respect for local customs and traditions</li>
                    <li>• Discrete and professional service delivery</li>
                    <li>• Cultural awareness in companion training</li>
                    <li>• Balance between modern services and traditional values</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                The escort industry in Surat operates with awareness of cultural sensitivities while providing modern, professional services. 🤝 This balance has contributed to the growth of reputable agencies that serve both local and international clientele with appropriate cultural considerations.
              </p>
            </div>

            {/* Future Trends and Conclusion */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-8 md:p-12 shadow-lg">
              <h3 className="text-3xl font-bold text-teal-800 mb-6 flex items-center">
                <span className="mr-3">🚀</span> Future Trends and Industry Evolution
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The escort industry in Surat continues to evolve with changing social dynamics, technological advancement, and increasing demand for professional services. 📈 Several trends are shaping the future of this industry in the Diamond City.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <div className="text-4xl mb-4">💻</div>
                  <h4 className="text-xl font-bold text-teal-700 mb-3">Digital Integration</h4>
                  <p className="text-gray-700">Online platforms, mobile apps, and digital booking systems are making services more accessible and transparent</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <div className="text-4xl mb-4">🎓</div>
                  <h4 className="text-xl font-bold text-teal-700 mb-3">Enhanced Training</h4>
                  <p className="text-gray-700">Continuous professional development and specialized training programs for companions</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <div className="text-4xl mb-4">🌐</div>
                  <h4 className="text-xl font-bold text-teal-700 mb-3">International Standards</h4>
                  <p className="text-gray-700">Adoption of global best practices and quality standards to serve international clientele</p>
                </div>
              </div>

              <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-r-2xl mb-6">
                <h4 className="text-xl font-bold text-teal-800 mb-3">🎯 Conclusion</h4>
                <p className="text-teal-800 leading-relaxed">
                  Surat&apos;s escort industry represents a mature, professional service sector that caters to diverse social and business needs while maintaining high standards of quality, safety, and discretion. As the city continues to grow as a major commercial hub, the demand for sophisticated companionship services is likely to expand, driving further professionalization and quality improvements in the industry.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you&apos;re seeking companionship for business events, social occasions, or cultural activities, Surat offers a range of professional services designed to meet your specific needs. 🌟 By choosing reputable agencies and following proper protocols, clients can enjoy safe, professional, and satisfying experiences that enhance their social and professional lives in this vibrant Diamond City.
              </p>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
