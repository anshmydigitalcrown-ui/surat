'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NanpuraEscorts() {
  const services = [
    { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young and vibrant college girl companions in Nanpura", price: "₹15,000+", rating: "4.7" },
    { title: "Social Events", image: "/images/services/Social Events.webp", description: "Social event companions in Nanpura area", price: "₹17,000+", rating: "4.8" },
    { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Charming dinner date companions in Nanpura", price: "₹16,000+", rating: "4.6" },
    { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services in Nanpura", price: "₹14,000+", rating: "4.5" },
    { title: "Premium Call Girl", image: "/images/services/Premium Call Girl.webp", description: "Premium call girl services in Nanpura", price: "₹19,000+", rating: "4.9" },
    { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services from Nanpura", price: "₹21,000+", rating: "5.0" },
    { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "VIP companions for exclusive events in Nanpura", price: "₹25,000+", rating: "5.0" },
    { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Nanpura", price: "₹24,000+", rating: "4.8" },
    { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Nanpura", price: "₹20,000+", rating: "4.7" },
    { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: "Hotel escort services in Nanpura area", price: "₹18,000+", rating: "4.6" },
    { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Outcall escort services in Nanpura", price: "₹19,000+", rating: "4.6" },
    { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Nanpura", price: "₹22,000+", rating: "4.8" },
    { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions in Nanpura", price: "₹26,000+", rating: "4.9" },
    { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Nanpura", price: "₹21,000+", rating: "4.7" },
    { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature housewife companions in Nanpura", price: "₹17,000+", rating: "4.5" },
    { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Party escort services in Nanpura", price: "₹18,000+", rating: "4.6" },
    { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services in Nanpura", price: "₹27,000+", rating: "4.9" },
    { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model companions in Nanpura", price: "₹29,000+", rating: "5.0" },
    { title: "Special Service", image: "/images/services/Special Service.webp", description: "Special personalized services in Nanpura", price: "₹23,000+", rating: "4.8" },
    { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding event companions in Nanpura", price: "₹20,000+", rating: "4.7" }
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
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-violet-500 to-violet-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Service Icons */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-10">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/30">
              <span className="text-4xl">🏙️</span>
            </div>
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/30">
              <span className="text-4xl">💎</span>
            </div>
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/30">
              <span className="text-4xl">⭐</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Nanpura Escorts Services
          </h1>
          <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto animate-fadeInUp">
            Youthful escort services in Nanpura - Vibrant companions for energetic and social experiences
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-violet-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-violet-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-violet-600 transition-all duration-300 transform hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-violet-700 mb-6">
                About Nanpura Area
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nanpura is a vibrant area in Surat known for its youthful energy, educational 
                institutions, and lively social scene. Our escort services in Nanpura provide 
                energetic and charming companions perfect for the area&apos;s dynamic atmosphere.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-violet-700 mb-2">🎓 Educational Hub</h3>
                  <p className="text-sm text-violet-600">Colleges and educational institutions</p>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-violet-700 mb-2">🌟 Youthful Energy</h3>
                  <p className="text-sm text-violet-600">Vibrant young community</p>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-violet-700 mb-2">🎉 Social Scene</h3>
                  <p className="text-sm text-violet-600">Active social and cultural life</p>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-violet-700 mb-2">🍽️ Cafes & Restaurants</h3>
                  <p className="text-sm text-violet-600">Trendy dining and social spots</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-violet-200 to-violet-300 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold text-violet-700">Nanpura Vibrant Area</h3>
                  <p className="text-violet-600 mt-2">Youthful escort services available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-violet-700 mb-6">
              Our Nanpura Services
            </h2>
            <p className="text-xl text-violet-600 max-w-3xl mx-auto">
              Vibrant escort services for Nanpura&apos;s energetic and youthful community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${getServiceSlug(service.title)}`}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <div className="relative h-64 bg-gray-50">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
                      loading={index < 8 ? "eager" : "lazy"}
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs font-medium">
                        {service.price}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(parseFloat(service.rating)) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-1">({service.rating})</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {service.description}
                    </p>
                    
                    <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors group-hover:bg-pink-700">
                      View {service.title}
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Nanpura */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-violet-700 mb-6">
              Why Choose Our Nanpura Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-violet-50 rounded-xl">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-xl font-semibold text-violet-700 mb-2">Youthful Energy</h3>
              <p className="text-violet-600">Vibrant companions matching Nanpura&apos;s energetic atmosphere</p>
            </div>
            <div className="text-center p-6 bg-violet-50 rounded-xl">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold text-violet-700 mb-2">Social Expertise</h3>
              <p className="text-violet-600">Perfect companions for Nanpura&apos;s active social scene</p>
            </div>
            <div className="text-center p-6 bg-violet-50 rounded-xl">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-violet-700 mb-2">Fresh & Charming</h3>
              <p className="text-violet-600">Young and charming companions for memorable experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Escorts in Nanpura Content Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-violet-50 to-purple-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-800 mb-6">
              Escorts in Nanpura - Youthful Vibrant Companionship
            </h2>
            <p className="text-lg sm:text-xl text-violet-700 max-w-4xl mx-auto leading-relaxed">
              Experience energetic escort services in Nanpura, Surat&apos;s vibrant youth-centric area offering 
              youthful companionship, social energy, and dynamic experiences in this lively neighborhood 
              known for its young atmosphere, social activities, and energetic community spirit
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-violet-800 mb-4">
                Why Choose Nanpura Escorts?
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Nanpura represents the youthful and energetic side of Surat, known for its vibrant 
                social scene, young demographic, and dynamic community atmosphere. Our escort services 
                in Nanpura are specially curated to match this energetic vibe, offering companions 
                who embody youth, enthusiasm, and social charm perfect for the area&apos;s lively 
                character.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our young and vibrant companions excel in social settings, energetic entertainment, 
                and creating memorable experiences that reflect Nanpura&apos;s youthful spirit. Whether 
                attending social events, exploring the local scene, or enjoying casual entertainment, 
                our escorts bring the perfect blend of youth, charm, and social sophistication.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-violet-800 mb-4">
                Youthful Energy Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-violet-100">
                  <h4 className="font-semibold text-violet-700 mb-2">College Companions</h4>
                  <p className="text-sm text-gray-600">Young and vibrant college-age companions for social activities</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-violet-100">
                  <h4 className="font-semibold text-violet-700 mb-2">Social Events</h4>
                  <p className="text-sm text-gray-600">Energetic escorts for parties, gatherings, and social functions</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-violet-100">
                  <h4 className="font-semibold text-violet-700 mb-2">Casual Dating</h4>
                  <p className="text-sm text-gray-600">Fun and charming companions for casual dates and outings</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-violet-100">
                  <h4 className="font-semibold text-violet-700 mb-2">Youth Entertainment</h4>
                  <p className="text-sm text-gray-600">Dynamic companions for youth-oriented entertainment and activities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl p-8 sm:p-12 text-white mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Nanpura&apos;s Youthful Spirit
                </h3>
                <p className="text-violet-100 leading-relaxed mb-6">
                  As one of Surat&apos;s most youthful and energetic neighborhoods, Nanpura attracts 
                  young professionals, students, and social enthusiasts who appreciate vibrant community 
                  life and dynamic social experiences. Our escort services embrace this youthful energy, 
                  providing companions who understand and embody the area&apos;s spirited atmosphere while 
                  maintaining professional excellence and social charm.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-violet-500 px-4 py-2 rounded-full text-sm font-medium">Youthful Energy</span>
                  <span className="bg-violet-500 px-4 py-2 rounded-full text-sm font-medium">Social Vibrancy</span>
                  <span className="bg-violet-500 px-4 py-2 rounded-full text-sm font-medium">Dynamic Spirit</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🎉</div>
                  <h4 className="text-xl font-bold mb-2">Youth Hub</h4>
                  <p className="text-violet-100 text-sm">
                    Located in Surat&apos;s vibrant youth-centric area with energetic social scene, 
                    dynamic community activities, and youthful atmosphere
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-violet-800 mb-6">
              Book Youthful Escorts in Nanpura Today
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Experience vibrant companionship in Surat&apos;s most energetic neighborhood. Our youthful 
              escorts are perfect for social events, casual dates, dynamic entertainment, or 
              experiencing the lively social scene in the spirited Nanpura area.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💫</span>
                </div>
                <h4 className="font-bold text-violet-700 mb-2">Youthful Charm</h4>
                <p className="text-sm text-gray-600">Young and vibrant companions matching Nanpura&apos;s energetic spirit</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎭</span>
                </div>
                <h4 className="font-bold text-violet-700 mb-2">Social Excellence</h4>
                <p className="text-sm text-gray-600">Expert companions for parties, events, and social gatherings</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">✨</span>
                </div>
                <h4 className="font-bold text-violet-700 mb-2">Dynamic Energy</h4>
                <p className="text-sm text-gray-600">Energetic and enthusiastic escorts for memorable experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-red-700 mb-8">Discover Premium Escort Services in Nanpura - Your Ultimate Companion Guide</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to Surat&apos;s most trusted <strong>escort service in Nanpura</strong>, where luxury meets discretion in one of the city&apos;s most distinguished locations. Nanpura has established itself as a prime destination for premium companionship services, offering an perfect blend of sophistication, privacy, and professional excellence. Whether you&apos;re a business executive, tourist, or local resident seeking high-class companionship, our <strong>Nanpura escorts</strong> deliver exceptional experiences tailored to your unique preferences and requirements.
            </p>

            <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Why Nanpura is Perfect for Elite Escort Services</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Nanpura represents one of Surat&apos;s most prominent areas, characterized by its central nature. This strategic location provides the ideal environment for premium <strong>escort services in Nanpura</strong>. The area features excellent infrastructure, luxury accommodations, fine dining establishments, and entertainment venues that create the perfect backdrop for memorable companionship experiences. Our <strong>call girls in Nanpura</strong> are intimately familiar with the locality, ensuring seamless arrangements whether you prefer hotel meetings, private residences, or public venues.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The distinctive character of Nanpura city center offers unique advantages for those seeking <strong>escorts in Nanpura</strong>. With its blend of modern amenities and convenient accessibility, the area ensures both comfort and confidentiality. The presence of premium hotels, upscale restaurants, and exclusive venues makes it effortless to arrange discreet meetings. Our professional escorts understand the importance of maintaining absolute privacy in this prestigious location and conduct all interactions with the highest level of discretion and professionalism.
            </p>

            <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Comprehensive Escort Services in Nanpura</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>Nanpura escort service</strong> provides an extensive array of companionship options designed to satisfy diverse tastes and occasions. We maintain rigorous quality standards, ensuring every client receives an unforgettable and gratifying experience. From sophisticated VIP companions to charming college girl escorts, professional air hostesses to elegant housewife companions, our diverse portfolio includes professionals with various backgrounds, specializations, and expertise levels to match your specific desires.
            </p>

            <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4">Premium In-Call Services</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>in-call escort services in Nanpura</strong> offer clients the convenience of meeting our companions at carefully selected, secure locations throughout the area. These discreet venues feature luxurious interiors, modern amenities, and private access points ensuring complete confidentiality. In-call services are ideal for clients who prefer not to host at their personal residences or hotels. Our Nanpura locations are strategically positioned in upscale neighborhoods, providing easy accessibility while maintaining absolute privacy. Whether you require a brief encounter or an extended session, our in-call services deliver flexibility and superior comfort.
            </p>

            <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4">Discreet Outcall Services</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              For those who value the privacy of their own environment, our <strong>outcall escort services in Nanpura</strong> deliver our stunning companions directly to your preferred location. Whether you&apos;re staying at a luxury hotel in Nanpura, your private apartment, or any other venue, our escorts arrive promptly, elegantly dressed, and ready to provide exceptional companionship. Outcall services are especially popular among business travelers and discerning clients who appreciate the convenience of having a beautiful companion come to them. Our escorts ensure discretion from arrival to departure, maintaining professionalism throughout the entire experience.
            </p>

            <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Our Elite Nanpura Escort Collection</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Our selection of <strong>call girls in Nanpura</strong> represents the finest professional companions available in Surat. Each escort has been meticulously selected based on beauty, personality, intelligence, and exceptional service capabilities. We implement comprehensive verification procedures to guarantee all our escorts meet the highest standards of quality, reliability, and professionalism. Our diverse portfolio ranges from youthful college companions to sophisticated career professionals, ensuring we can match you with the perfect companion for any situation or preference.
            </p>

            <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4">VIP Escorts and Elite Models</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>VIP escorts in Nanpura</strong> cater exclusively to distinguished clients who expect premium quality in every aspect. These elite companions possess exceptional beauty, refined intelligence, and impeccable social skills, making them perfect for high-profile events, corporate dinners, or intimate private meetings. Many of our VIP escorts work as professional models, successful entrepreneurs, or in prestigious careers, offering companionship as an exclusive premium service. They are well-educated, fluent in multiple languages, and capable of engaging discussions on diverse subjects, ensuring you have a companion who complements your status and sophistication.
            </p>

            <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4">Young College Companions</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              For clients seeking fresh energy and youthful charm, our <strong>college girl escorts in Nanpura</strong> provide delightful companionship experiences. These vibrant, enthusiastic companions bring spontaneity and fun to every encounter. They&apos;re perfect for casual outings, shopping dates, or exploring Nanpura&apos;s entertainment venues. Despite their youthful spirit, these escorts maintain exceptional professionalism and strict confidentiality, ensuring every meeting is both enjoyable and discreet. Their natural beauty and genuine personalities create authentic, memorable experiences.
            </p>

            <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4">Russian and International Models</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our portfolio includes stunning <strong>Russian escorts and international models in Nanpura</strong> who bring exotic beauty and international sophistication to your companionship experience. These gorgeous companions feature striking European looks, elegant demeanor, and cultured backgrounds. Perfect for clients seeking something extraordinary, our international escorts offer a unique blend of physical beauty and intellectual charm that sets them apart from conventional companionship services.
            </p>

            <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Simple Booking and Complete Confidentiality</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Booking <strong>escorts in Nanpura</strong> through our service is streamlined, secure, and completely confidential. We recognize that discretion is essential for our clients, which is why we&apos;ve established robust privacy protocols throughout the entire booking process. Our encrypted communication channels, secure data management systems, and professionally trained staff ensure your personal information and booking details remain absolutely confidential. Whether you contact us via website, WhatsApp, or phone, your privacy is guaranteed and protected.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The booking process starts with browsing our comprehensive escort gallery featuring detailed profiles. Each profile provides extensive information about the companion&apos;s appearance, available services, rates, and schedule. After selecting your preferred escort, our professional booking team coordinates all details including timing, venue, duration, and any special requirements. We recommend advance booking for popular escorts or peak periods, though we accommodate last-minute requests whenever possible. Our 24/7 customer service ensures assistance is always available when you need it.
            </p>

            <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Safety Standards and Verification</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Safety is paramount at our <strong>Nanpura escort service</strong>. We implement comprehensive verification procedures for all parties. Every escort undergoes thorough background verification, identity confirmation, and regular health screening to meet our stringent safety standards. For high-value bookings, we may request basic client verification to ensure escort safety. These measures create a secure environment where everyone can enjoy their time with complete confidence and peace of mind.
            </p>

            <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Transparent Pricing and Flexible Payment</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>Nanpura escort pricing</strong> is competitive, transparent, and free from hidden charges. We offer various packages accommodating different budgets and needs, from brief one-hour meetings to complete overnight companionship. Premium services, VIP escorts, and specialized requests may involve additional fees, always communicated clearly during booking. We accept multiple payment methods including cash, digital payments, and bank transfers for maximum convenience. Regular clients and extended bookings enjoy special discounts and exclusive packages.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Experience Surat&apos;s finest <strong>escort service in Nanpura</strong> with our professional, discreet, and premium companionship solutions. Contact us now to book your ideal companion and discover why we&apos;re the most trusted name in Nanpura escort services. Available 24/7 for your convenience!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-violet-700 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about escort services in Nanpura</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-violet-700 mb-3">How to book escorts in Nanpura?</h3>
                <p className="text-gray-600">You can book through our website, WhatsApp, or by calling us directly. We provide 24/7 booking services for Nanpura area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-violet-700 mb-3">Are the escorts verified?</h3>
                <p className="text-gray-600">Yes, all our escorts in Nanpura are thoroughly verified with authentic profiles and genuine photos.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-violet-700 mb-3">What is the price range?</h3>
                <p className="text-gray-600">Our services in Nanpura start from ₹14,000 and go up to ₹29,000+ depending on the service type and duration.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-violet-700 mb-3">Is advance booking required?</h3>
                <p className="text-gray-600">While we accept last-minute bookings, advance booking is recommended for better availability in Nanpura.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-violet-700 mb-3">Do you provide outcall services?</h3>
                <p className="text-gray-600">Yes, we provide both incall and outcall services throughout Nanpura and surrounding areas.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-violet-700 mb-3">What payment methods are accepted?</h3>
                <p className="text-gray-600">We accept cash, UPI, and online transfers for all bookings in Nanpura area.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-violet-700 mb-3">Is discretion guaranteed?</h3>
                <p className="text-gray-600">Absolutely. We maintain complete privacy and confidentiality for all our clients in Nanpura.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-violet-700 mb-3">Are services available 24/7?</h3>
                <p className="text-gray-600">Yes, our escort services in Nanpura are available round the clock, all days of the week.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-violet-700 mb-3">Can I choose a specific escort?</h3>
                <p className="text-gray-600">Yes, you can browse profiles and select your preferred companion for Nanpura area.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-violet-700 mb-3">What areas do you cover near Nanpura?</h3>
                <p className="text-gray-600">We cover Nanpura and all nearby areas with prompt service delivery.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-violet-700 mb-3">Are there any hidden charges?</h3>
                <p className="text-gray-600">No, we maintain complete transparency. The price quoted is the final price with no hidden charges.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-violet-700 mb-3">How do I cancel or reschedule?</h3>
                <p className="text-gray-600">You can cancel or reschedule by contacting us at least 2 hours before the booking time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-violet-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Nanpura Escorts?</h2>
          <p className="text-xl mb-8 text-violet-100">
            Contact us today to arrange vibrant escort services in Nanpura&apos;s energetic area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-violet-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-violet-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="tel:+91XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-violet-600 transition-all duration-300 transform hover:scale-105"
            >
              Call Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}