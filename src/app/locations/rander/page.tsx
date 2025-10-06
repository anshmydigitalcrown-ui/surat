'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function RanderEscorts() {
  const services = [
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Professional outcall services in Rander riverside area", price: "₹17,000+", rating: "4.6" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services along Rander waterfront", price: "₹23,000+", rating: "5.0" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Romantic dinner date companions in Rander", price: "₹16,000+", rating: "4.7" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Hotel escort services in Rander area", price: "₹18,000+", rating: "4.6" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "Premium call girl services in Rander", price: "₹21,000+", rating: "4.9" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companionship for Rander riverside experiences", price: "₹26,000+", rating: "4.9" },
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young college girl companions in Rander", price: "₹15,000+", rating: "4.7" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Rander", price: "₹24,000+", rating: "4.9" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Rander", price: "₹20,000+", rating: "4.9" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model escorts in Rander", price: "₹28,000+", rating: "5.0" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding escort services in Rander", price: "₹22,000+", rating: "4.7" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Rander", price: "₹19,000+", rating: "4.8" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions in Rander", price: "₹26,000+", rating: "4.8" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Rander", price: "₹21,000+", rating: "4.8" },
    { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature housewife companions in Rander", price: "₹17,000+", rating: "4.8" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services in Rander", price: "₹16,000+", rating: "4.5" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Party escort services in Rander", price: "₹18,000+", rating: "4.8" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services in Rander", price: "₹27,000+", rating: "4.9" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions in Rander", price: "₹17,000+", rating: "4.8" },
    { title: "Special Service", image: "/images/services/Special Service.webp", description: "Specialized escort services in Rander", price: "₹23,000+", rating: "4.9" }
  ];

  // Function to convert service title to URL slug
  const getServiceSlug = (title: string): string => {
    return title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Rander Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto animate-fadeInUp">
            Premium escort services in Rander - Riverside companions for scenic and memorable experiences
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-6">
                About Rander Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Rander is a picturesque area in Surat located along the riverside, known for its 
                scenic beauty, historical significance, and peaceful atmosphere. Our escort services 
                in Rander offer companions for romantic riverside experiences and cultural exploration.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-700 mb-2">🌊 Riverside Location</h3>
                  <p className="text-sm text-yellow-600">Beautiful waterfront views and walks</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-700 mb-2">🏛️ Historical Sites</h3>
                  <p className="text-sm text-yellow-600">Ancient temples and monuments</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-700 mb-2">🌅 Scenic Beauty</h3>
                  <p className="text-sm text-yellow-600">Sunset views and natural landscapes</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-700 mb-2">🚤 River Activities</h3>
                  <p className="text-sm text-yellow-600">Boat rides and water sports</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌊</div>
                  <h3 className="text-2xl font-bold text-yellow-700">Rander Riverside</h3>
                  <p className="text-yellow-600 mt-2">Scenic escort services available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-6">
              Our Rander Services
            </h2>
            <p className="text-xl text-yellow-600 max-w-3xl mx-auto">
              Riverside escort services for romantic and scenic experiences in Rander
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href={`/services/${getServiceSlug(service.title)}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 block"
              >
                {/* Service Image - Consistent with Main Page */}
                <div className="relative h-48 sm:h-56 lg:h-64 bg-gray-50 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain object-center p-2"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
                    loading={index < 8 ? "eager" : "lazy"}
                  />
                </div>
                
                {/* Service Content - Mobile-Optimized */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-pink-800 mb-2 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-pink-600 mb-3 sm:mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Price and Rating - Mobile Optimized */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs sm:text-sm font-medium text-pink-700 bg-pink-100 px-2 py-1 rounded-full">
                      {service.price}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-xs sm:text-sm text-gray-600 ml-1">{service.rating}</span>
                    </div>
                  </div>
                  
                  {/* Service Page Button - Mobile Optimized */}
                  <div className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 sm:py-3 px-4 rounded-lg font-medium text-xs sm:text-sm transition-colors duration-300 text-center">
                    View {service.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Rander */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-6">
              Why Choose Our Rander Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-4xl mb-4">🌅</div>
              <h3 className="text-xl font-semibold text-yellow-700 mb-2">Scenic Romance</h3>
              <p className="text-yellow-600">Perfect companions for Rander&apos;s beautiful riverside experiences</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-yellow-700 mb-2">Cultural Knowledge</h3>
              <p className="text-yellow-600">Companions familiar with Rander&apos;s historical significance</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-semibold text-yellow-700 mb-2">Waterfront Expertise</h3>
              <p className="text-yellow-600">Specialized companions for riverside activities and relaxation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Escorts in Rander Content Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-yellow-50 to-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-800 mb-6">
              Escorts in Rander - Riverside Historical Companionship
            </h2>
            <p className="text-lg sm:text-xl text-yellow-700 max-w-4xl mx-auto leading-relaxed">
              Experience premium escort services in Rander, Surat&apos;s historic riverside area offering 
              scenic companionship, waterfront romance, and cultural exploration along the beautiful 
              Tapi River with its rich maritime heritage and natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-800 mb-4">
                Why Choose Rander Escorts?
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Rander holds a special place in Surat&apos;s history as a significant riverside area 
                along the Tapi River, known for its scenic beauty, historical importance, and 
                waterfront charm. Our premium escort services in Rander are designed to complement 
                the area&apos;s natural beauty and historical significance, offering companions who 
                appreciate both scenic romance and cultural heritage.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Whether you&apos;re exploring the riverside walkways, visiting historical sites, 
                or enjoying the peaceful waterfront ambiance, our companions bring sophistication 
                and cultural awareness to enhance your Rander experience. They excel in creating 
                romantic moments against the backdrop of Rander&apos;s scenic riverside setting.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-800 mb-4">
                Riverside Heritage Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-yellow-100">
                  <h4 className="font-semibold text-yellow-700 mb-2">Riverside Romance</h4>
                  <p className="text-sm text-gray-600">Romantic companions for scenic waterfront experiences</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-yellow-100">
                  <h4 className="font-semibold text-yellow-700 mb-2">Historical Tours</h4>
                  <p className="text-sm text-gray-600">Cultural escorts for heritage and historical site exploration</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-yellow-100">
                  <h4 className="font-semibold text-yellow-700 mb-2">Waterfront Dining</h4>
                  <p className="text-sm text-gray-600">Elegant companions for riverside dining and entertainment</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-yellow-100">
                  <h4 className="font-semibold text-yellow-700 mb-2">Evening Strolls</h4>
                  <p className="text-sm text-gray-600">Romantic escorts for sunset walks along the Tapi River</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-600 to-amber-700 rounded-2xl p-8 sm:p-12 text-white mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Rander&apos;s Riverside Heritage
                </h3>
                <p className="text-yellow-100 leading-relaxed mb-6">
                  Situated along the scenic Tapi River, Rander combines natural beauty with historical 
                  significance, offering a unique blend of waterfront charm and cultural heritage. 
                  Our escort services embrace this special character, providing companions who can 
                  appreciate the romantic riverside setting while being knowledgeable about the area&apos;s 
                  rich maritime history and cultural importance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-yellow-500 px-4 py-2 rounded-full text-sm font-medium">Riverside Romance</span>
                  <span className="bg-yellow-500 px-4 py-2 rounded-full text-sm font-medium">Historical Heritage</span>
                  <span className="bg-yellow-500 px-4 py-2 rounded-full text-sm font-medium">Scenic Beauty</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🌊</div>
                  <h4 className="text-xl font-bold mb-2">Riverside Paradise</h4>
                  <p className="text-yellow-100 text-sm">
                    Located along the beautiful Tapi River with scenic waterfront, 
                    historical sites, and romantic riverside settings
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-800 mb-6">
              Book Riverside Escorts in Rander Today
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Experience romantic companionship along Surat&apos;s scenic riverside. Our professional 
              escorts are perfect for waterfront dining, romantic walks, historical exploration, 
              or peaceful moments along the beautiful Tapi River in historic Rander.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌅</span>
                </div>
                <h4 className="font-bold text-yellow-700 mb-2">Scenic Romance</h4>
                <p className="text-sm text-gray-600">Companions who excel in creating romantic moments by the riverside</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏛️</span>
                </div>
                <h4 className="font-bold text-yellow-700 mb-2">Cultural Heritage</h4>
                <p className="text-sm text-gray-600">Knowledgeable escorts familiar with Rander&apos;s historical significance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💫</span>
                </div>
                <h4 className="font-bold text-yellow-700 mb-2">Waterfront Excellence</h4>
                <p className="text-sm text-gray-600">Specialized companions for riverside activities and scenic experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Rander Escorts?</h2>
          <p className="text-xl mb-8 text-yellow-100">
            Contact us today to arrange scenic escort services in Rander&apos;s riverside area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="tel:+91XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}