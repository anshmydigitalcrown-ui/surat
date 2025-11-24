'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CitylightEscorts() {
 const services = [
 { title: "VIP Companionship", image: "/images/services/VIP Companionship.webp", description: "Elite companions for exclusive events in Citylight", price: "₹25,000+", rating: "4.9" },
 { title: "Party Escort", image: "/images/services/Party Escort.webp", description: "Perfect party companions in Citylight entertainment district", price: "₹16,000+", rating: "4.8" },
 { title: "Social Events", image: "/images/services/Social Events.webp", description: "Professional companions for Citylight social gatherings", price: "₹15,000+", rating: "4.8" },
 { title: "Dinner Dates", image: "/images/services/Dinner Dates.webp", description: "Elegant dining companions in Citylight restaurants", price: "₹12,000+", rating: "4.7" },
 { title: " Call Girl", image: "/images/services/ Call Girl.webp", description: "High-class call girl services in Citylight", price: "₹20,000+", rating: "4.9" },
 { title: "Hotel Escort", image: "/images/services/Hotel Escort.webp", description: " hotel escort services in Citylight area", price: "₹18,000+", rating: "4.6" },
 { title: "Air Hostess", image: "/images/services/Air Hostess.webp", description: "Professional air hostess companions in Citylight", price: "₹24,000+", rating: "4.9" },
 { title: "Business Meetings", image: "/images/services/Business Meetings.webp", description: "Business meeting companions in Citylight", price: "₹21,000+", rating: "4.9" },
 { title: "Corporate Event", image: "/images/services/Corporate Event.webp", description: "Corporate event companions in Citylight", price: "₹22,000+", rating: "4.8" },
 { title: "Travel Companion", image: "/images/services/Travel Companion.webp", description: "Travel companion services from Citylight", price: "₹23,000+", rating: "5.0" },
 { title: "Private Model", image: "/images/services/Private Model.webp", description: "Private model services in Citylight", price: "₹28,000+", rating: "4.9" },
 { title: "Weekend Special", image: "/images/services/Weekend Special.webp", description: "Weekend special companions in Citylight", price: "₹21,000+", rating: "4.8" },
 { title: "Russian Model", image: "/images/services/Russian Model.webp", description: "Russian model companions in Citylight", price: "₹30,000+", rating: "5.0" },
 { title: "Celebrity Look-alike", image: "/images/services/Celebrity Look-alike.webp", description: "Celebrity look-alike companions in Citylight", price: "₹26,000+", rating: "4.8" },
 { title: "College Girl", image: "/images/services/College Girl.webp", description: "Young college girl companions in Citylight", price: "₹14,000+", rating: "4.7" },
 { title: "Housewife", image: "/images/services/Housewife.webp", description: "Mature housewife companions in Citylight", price: "₹17,000+", rating: "4.8" },
 { title: "In-call Service", image: "/images/services/In-call Service.webp", description: "Comfortable in-call services in Citylight", price: "₹16,000+", rating: "4.5" },
 { title: "Outcall Service", image: "/images/services/Outcall Service.webp", description: "Professional outcall services in Citylight", price: "₹18,000+", rating: "4.6" },
 { title: "Special Service", image: "/images/services/Special Service.webp", description: "Specialized escort services in Citylight", price: "₹23,000+", rating: "4.9" },
 { title: "Wedding Escort", image: "/images/services/Wedding Escort.webp", description: "Wedding companion services in Citylight", price: "₹20,000+", rating: "4.7" }
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
 <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
 {/* Hero Section */}
 <section className="relative py-32 bg-gradient-to-br from-purple-400 to-purple-600 text-white overflow-hidden">
 <div className="absolute inset-0 bg-black/20"></div>
 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 {/* Service Icons */}
 <div className="flex justify-center gap-4 sm:gap-6 mb-10">
 <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/30">
 <span className="text-4xl">🎉</span>
 </div>
 <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/30">
 <span className="text-4xl">💎</span>
 </div>
 <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/30">
 <span className="text-4xl">⭐</span>
 </div>
 </div>
 <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
 Citylight Escorts Services
 </h1>
 <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto animate-fadeInUp">
 escort services in Citylight - Entertainment district with fine dining and luxury venues
 </p>
 <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
 <Link
 href="/contact"
 className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
 >
 Book Now
 </Link>
 <Link
 href="/services"
 className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
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
 <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
 About Citylight Area
 </h2>
 <p className="text-lg text-gray-700 mb-6 leading-relaxed">
 Citylight is Surat&apos;s premier entertainment district, known for its vibrant nightlife, 
 fine dining restaurants, luxury venues, and sophisticated entertainment options. Our escort 
 services in Citylight cater to the dynamic and cosmopolitan atmosphere of this exciting area.
 </p>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div className="bg-purple-50 p-4 rounded-lg">
 <h3 className="font-semibold text-purple-700 mb-2">🎭 Entertainment Hub</h3>
 <p className="text-sm text-purple-600">Clubs, bars, and entertainment venues</p>
 </div>
 <div className="bg-purple-50 p-4 rounded-lg">
 <h3 className="font-semibold text-purple-700 mb-2">🍽️ Fine Dining</h3>
 <p className="text-sm text-purple-600"> restaurants and luxury dining</p>
 </div>
 <div className="bg-purple-50 p-4 rounded-lg">
 <h3 className="font-semibold text-purple-700 mb-2">🏨 Luxury Hotels</h3>
 <p className="text-sm text-purple-600">High-end accommodations and suites</p>
 </div>
 <div className="bg-purple-50 p-4 rounded-lg">
 <h3 className="font-semibold text-purple-700 mb-2">🌃 Nightlife</h3>
 <p className="text-sm text-purple-600">Vibrant nightlife and social scene</p>
 </div>
 </div>
 </div>
 <div className="relative">
 <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl p-8 h-96 flex items-center justify-center">
 <div className="text-center">
 <div className="text-8xl mb-4">✨</div>
 <h3 className="text-2xl font-bold text-purple-700">Citylight Entertainment District</h3>
 <p className="text-purple-600 mt-2"> escort services available 24/7</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Services Grid */}
 <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
 Our Citylight Services
 </h2>
 <p className="text-xl text-purple-600 max-w-3xl mx-auto">
 Entertainment and companion services for Citylight&apos;s vibrant social scene
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
 alt={`${service.title} - Citylight Escort Service in Surat`}
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

 {/* Why Choose Citylight */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
 Why Choose Our Citylight Services
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="text-center p-6 bg-purple-50 rounded-xl">
 <div className="text-4xl mb-4">🎭</div>
 <h3 className="text-xl font-semibold text-purple-700 mb-2">Entertainment Ready</h3>
 <p className="text-purple-600">Perfect companions for Citylight&apos;s vibrant entertainment scene</p>
 </div>
 <div className="text-center p-6 bg-purple-50 rounded-xl">
 <div className="text-4xl mb-4">🔒</div>
 <h3 className="text-xl font-semibold text-purple-700 mb-2">Discreet Service</h3>
 <p className="text-purple-600">Professional discretion in Citylight&apos;s social environment</p>
 </div>
 <div className="text-center p-6 bg-purple-50 rounded-xl">
 <div className="text-4xl mb-4">⭐</div>
 <h3 className="text-xl font-semibold text-purple-700 mb-2">Social Expertise</h3>
 <p className="text-purple-600">Companions skilled in Citylight&apos;s sophisticated social scene</p>
 </div>
 </div>
 </div>
 </section>

 {/* Escorts in City Light Content Section */}
 <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-purple-50 to-indigo-100">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-800 mb-6">
 Escorts in City Light - Premier Entertainment Companionship
 </h2>
 <p className="text-lg sm:text-xl text-purple-700 max-w-4xl mx-auto leading-relaxed">
 Experience elite escort services in City Light, Surat&apos;s vibrant entertainment hub offering 
 sophisticated nightlife, fine dining, and companionship in the city&apos;s most dynamic district
 </p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
 <div className="space-y-6">
 <h3 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4">
 Why Choose City Light Escorts?
 </h3>
 <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
 City Light has emerged as Surat&apos;s premier entertainment and nightlife destination, featuring 
 upscale restaurants, trendy bars, entertainment venues, and cultural spaces. Our escort 
 services in City Light are designed to complement this vibrant atmosphere, offering sophisticated 
 companions who excel in social environments and understand the dynamic energy of this bustling district.
 </p>
 <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
 Known for its cosmopolitan lifestyle, modern entertainment venues, and thriving social scene, 
 City Light attracts young professionals, socialites, and visitors seeking contemporary experiences. 
 Our carefully selected companions are well-versed in the area&apos;s entertainment culture and can 
 seamlessly integrate into any social situation with charm and sophistication.
 </p>
 </div>

 <div className="space-y-6">
 <h3 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4">
 Entertainment Services Available
 </h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div className="bg-white p-4 rounded-lg shadow-md border border-purple-100">
 <h4 className="font-semibold text-purple-700 mb-2">Party Companions</h4>
 <p className="text-sm text-gray-600">Energetic escorts for nightlife, clubs, and party venues</p>
 </div>
 <div className="bg-white p-4 rounded-lg shadow-md border border-purple-100">
 <h4 className="font-semibold text-purple-700 mb-2">Fine Dining Escorts</h4>
 <p className="text-sm text-gray-600">Sophisticated companions for upscale restaurants and cafes</p>
 </div>
 <div className="bg-white p-4 rounded-lg shadow-md border border-purple-100">
 <h4 className="font-semibold text-purple-700 mb-2">Social Events</h4>
 <p className="text-sm text-gray-600">Professional companions for networking and social gatherings</p>
 </div>
 <div className="bg-white p-4 rounded-lg shadow-md border border-purple-100">
 <h4 className="font-semibold text-purple-700 mb-2">Entertainment Venues</h4>
 <p className="text-sm text-gray-600">Cultured escorts for theaters, art galleries, and cultural events</p>
 </div>
 </div>
 </div>
 </div>

 <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 sm:p-12 text-white mb-12">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
 <div>
 <h3 className="text-2xl sm:text-3xl font-bold mb-4">
 City Light&apos;s Entertainment Excellence
 </h3>
 <p className="text-purple-100 leading-relaxed mb-6">
 As Surat&apos;s most vibrant entertainment district, City Light pulsates with energy from its 
 trendy restaurants, sophisticated bars, live music venues, and cultural spaces. Our escort 
 services are perfectly aligned with this dynamic environment, providing companions who 
 understand nightlife culture, appreciate fine dining, and can enhance your entertainment 
 experiences with their engaging personalities and social skills.
 </p>
 <div className="flex flex-wrap gap-4">
 <span className="bg-purple-500 px-4 py-2 rounded-full text-sm font-medium">Nightlife Ready</span>
 <span className="bg-purple-500 px-4 py-2 rounded-full text-sm font-medium">Social Excellence</span>
 <span className="bg-purple-500 px-4 py-2 rounded-full text-sm font-medium">Entertainment Focus</span>
 </div>
 </div>
 <div className="text-center">
 <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
 <div className="text-4xl mb-4">🎭</div>
 <h4 className="text-xl font-bold mb-2">Entertainment Hub</h4>
 <p className="text-purple-100 text-sm">
 Located in Surat&apos;s premier entertainment district with vibrant nightlife, 
 fine dining, and cultural venues
 </p>
 </div>
 </div>
 </div>
 </div>

 <div className="text-center">
 <h3 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-6">
 Book Entertainment Escorts in City Light Today
 </h3>
 <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
 Experience the finest companionship services in Surat&apos;s most dynamic entertainment district. 
 Our professional escorts are perfect for nightlife adventures, fine dining experiences, 
 social events, or cultural activities in the vibrant City Light area.
 </p>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
 <div className="text-center">
 <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-2xl text-white">🎪</span>
 </div>
 <h4 className="font-bold text-purple-700 mb-2">Entertainment Expertise</h4>
 <p className="text-sm text-gray-600">Companions who excel in City Light&apos;s vibrant entertainment scene</p>
 </div>
 <div className="text-center">
 <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-2xl text-white">🌃</span>
 </div>
 <h4 className="font-bold text-purple-700 mb-2">Nightlife Ready</h4>
 <p className="text-sm text-gray-600">Perfect for clubs, bars, and late-night entertainment venues</p>
 </div>
 <div className="text-center">
 <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-2xl text-white">🎨</span>
 </div>
 <h4 className="font-bold text-purple-700 mb-2">Cultural Sophistication</h4>
 <p className="text-sm text-gray-600">Educated companions for cultural events and artistic venues</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Detailed Content Section */}
 <section className="py-20 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="prose prose-lg max-w-none">
 <h2 className="text-4xl font-bold text-red-700 mb-8">Discover Escort Services in Citylight - Your Ultimate Companion Guide</h2>

 <p className="text-gray-700 leading-relaxed mb-6">
 Welcome to Surat&apos;s most trusted <strong>escort service in Citylight</strong>, where luxury meets discretion in one of the city&apos;s most distinguished locations. Citylight has established itself as a prime destination for companionship services, offering an perfect blend of sophistication, privacy, and professional excellence. Whether you&apos;re a business executive, tourist, or local resident seeking high-class companionship, our <strong>Citylight escorts</strong> deliver exceptional experiences tailored to your unique preferences and requirements.
 </p>

 <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Why Citylight is Perfect for Elite Escort Services</h3>

 <p className="text-gray-700 leading-relaxed mb-6">
 Citylight represents one of Surat&apos;s most prominent areas, characterized by its vibrant entertainment nature. This strategic location provides the ideal environment for <strong>escort services in Citylight</strong>. The area features excellent infrastructure, luxury accommodations, fine dining establishments, and entertainment venues that create the perfect backdrop for memorable companionship experiences. Our <strong>call girls in Citylight</strong> are intimately familiar with the locality, ensuring seamless arrangements whether you prefer hotel meetings, private residences, or public venues.
 </p>

 <p className="text-gray-700 leading-relaxed mb-6">
 The distinctive character of Citylight entertainment district offers unique advantages for those seeking <strong>escorts in Citylight</strong>. With its blend of modern amenities and convenient accessibility, the area ensures both comfort and confidentiality. The presence of hotels, upscale restaurants, and exclusive venues makes it effortless to arrange discreet meetings. Our professional escorts understand the importance of maintaining absolute privacy in this prestigious location and conduct all interactions with the highest level of discretion and professionalism.
 </p>

 <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Comprehensive Escort Services in Citylight</h3>

 <p className="text-gray-700 leading-relaxed mb-6">
 Our <strong>Citylight escort service</strong> provides an extensive array of companionship options designed to satisfy diverse tastes and occasions. We maintain rigorous quality standards, ensuring every client receives an unforgettable and gratifying experience. From sophisticated VIP companions to charming college girl escorts, professional air hostesses to elegant housewife companions, our diverse portfolio includes professionals with various backgrounds, specializations, and expertise levels to match your specific desires.
 </p>

 <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4"> In-Call Services</h4>
 <p className="text-gray-700 leading-relaxed mb-6">
 Our <strong>in-call escort services in Citylight</strong> offer clients the convenience of meeting our companions at carefully selected, secure locations throughout the area. These discreet venues feature luxurious interiors, modern amenities, and private access points ensuring complete confidentiality. In-call services are ideal for clients who prefer not to host at their personal residences or hotels. Our Citylight locations are strategically positioned in upscale neighborhoods, providing easy accessibility while maintaining absolute privacy. Whether you require a brief encounter or an extended session, our in-call services deliver flexibility and superior comfort.
 </p>

 <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4">Discreet Outcall Services</h4>
 <p className="text-gray-700 leading-relaxed mb-6">
 For those who value the privacy of their own environment, our <strong>outcall escort services in Citylight</strong> deliver our stunning companions directly to your preferred location. Whether you&apos;re staying at a luxury hotel in Citylight, your private apartment, or any other venue, our escorts arrive promptly, elegantly dressed, and ready to provide exceptional companionship. Outcall services are especially popular among business travelers and discerning clients who appreciate the convenience of having a beautiful companion come to them. Our escorts ensure discretion from arrival to departure, maintaining professionalism throughout the entire experience.
 </p>

 <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Our Elite Citylight Escort Collection</h3>

 <p className="text-gray-700 leading-relaxed mb-6">
 Our selection of <strong>call girls in Citylight</strong> represents the finest professional companions available in Surat. Each escort has been meticulously selected based on beauty, personality, intelligence, and exceptional service capabilities. We implement comprehensive verification procedures to guarantee all our escorts meet the highest standards of quality, reliability, and professionalism. Our diverse portfolio ranges from youthful college companions to sophisticated career professionals, ensuring we can match you with the perfect companion for any situation or preference.
 </p>

 <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4">VIP Escorts and Elite Models</h4>
 <p className="text-gray-700 leading-relaxed mb-6">
 Our <strong>VIP escorts in Citylight</strong> cater exclusively to distinguished clients who expect quality in every aspect. These elite companions possess exceptional beauty, refined intelligence, and impeccable social skills, making them perfect for high-profile events, corporate dinners, or intimate private meetings. Many of our VIP escorts work as professional models, successful entrepreneurs, or in prestigious careers, offering companionship as an exclusive service. They are well-educated, fluent in multiple languages, and capable of engaging discussions on diverse subjects, ensuring you have a companion who complements your status and sophistication.
 </p>

 <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4">Young College Companions</h4>
 <p className="text-gray-700 leading-relaxed mb-6">
 For clients seeking fresh energy and youthful charm, our <strong>college girl escorts in Citylight</strong> provide delightful companionship experiences. These vibrant, enthusiastic companions bring spontaneity and fun to every encounter. They&apos;re perfect for casual outings, shopping dates, or exploring Citylight&apos;s entertainment venues. Despite their youthful spirit, these escorts maintain exceptional professionalism and strict confidentiality, ensuring every meeting is both enjoyable and discreet. Their natural beauty and genuine personalities create authentic, memorable experiences.
 </p>

 <h4 className="text-2xl font-bold text-red-600 mt-8 mb-4">Russian and International Models</h4>
 <p className="text-gray-700 leading-relaxed mb-6">
 Our portfolio includes stunning <strong>Russian escorts and international models in Citylight</strong> who bring exotic beauty and international sophistication to your companionship experience. These gorgeous companions feature striking European looks, elegant demeanor, and cultured backgrounds. Perfect for clients seeking something extraordinary, our international escorts offer a unique blend of physical beauty and intellectual charm that sets them apart from conventional companionship services.
 </p>

 <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Simple Booking and Complete Confidentiality</h3>

 <p className="text-gray-700 leading-relaxed mb-6">
 Booking <strong>escorts in Citylight</strong> through our service is streamlined, secure, and completely confidential. We recognize that discretion is essential for our clients, which is why we&apos;ve established robust privacy protocols throughout the entire booking process. Our encrypted communication channels, secure data management systems, and professionally trained staff ensure your personal information and booking details remain absolutely confidential. Whether you contact us via website, WhatsApp, or phone, your privacy is guaranteed and protected.
 </p>

 <p className="text-gray-700 leading-relaxed mb-6">
 The booking process starts with browsing our comprehensive escort gallery featuring detailed profiles. Each profile provides extensive information about the companion&apos;s appearance, available services, rates, and schedule. After selecting your preferred escort, our professional booking team coordinates all details including timing, venue, duration, and any special requirements. We recommend advance booking for popular escorts or peak periods, though we accommodate last-minute requests whenever possible. Our 24/7 customer service ensures assistance is always available when you need it.
 </p>

 <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Safety Standards and Verification</h3>

 <p className="text-gray-700 leading-relaxed mb-6">
 Safety is paramount at our <strong>Citylight escort service</strong>. We implement comprehensive verification procedures for all parties. Every escort undergoes thorough background verification, identity confirmation, and regular health screening to meet our stringent safety standards. For high-value bookings, we may request basic client verification to ensure escort safety. These measures create a secure environment where everyone can enjoy their time with complete confidence and peace of mind.
 </p>

 <h3 className="text-3xl font-bold text-red-600 mt-10 mb-6">Transparent Pricing and Flexible Payment</h3>

 <p className="text-gray-700 leading-relaxed mb-6">
 Our <strong>Citylight escort pricing</strong> is competitive, transparent, and free from hidden charges. We offer various packages accommodating different budgets and needs, from brief one-hour meetings to complete overnight companionship. services, VIP escorts, and specialized requests may involve additional fees, always communicated clearly during booking. We accept multiple payment methods including cash, digital payments, and bank transfers for maximum convenience. Regular clients and extended bookings enjoy special discounts and exclusive packages.
 </p>

 <p className="text-gray-700 leading-relaxed mb-6">
 Experience Surat&apos;s finest <strong>escort service in Citylight</strong> with our professional, discreet, and companionship solutions. Contact us now to book your ideal companion and discover why we&apos;re the most trusted name in Citylight escort services. Available 24/7 for your convenience!
 </p>
 </div>
 </div>
 </section>


 {/* Related Services Section */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">Popular Services in Citylight</h2>
 <p className="text-xl text-gray-600">Explore our escort services</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

 <Link
 href="/services/vip-companionship"
 className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-pink-200"
 >
 <h3 className="text-xl font-bold text-pink-700 mb-3">VIP Companionship</h3>
 <p className="text-gray-600 mb-4"> vip companionship service available in Citylight</p>
 <span className="text-pink-600 font-semibold hover:text-pink-700">View Details →</span>
 </Link>

 <Link
 href="/services/call-girl"
 className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-pink-200"
 >
 <h3 className="text-xl font-bold text-pink-700 mb-3"> Call Girl</h3>
 <p className="text-gray-600 mb-4"> call girl service available in Citylight</p>
 <span className="text-pink-600 font-semibold hover:text-pink-700">View Details →</span>
 </Link>

 <Link
 href="/services/hotel-escort"
 className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-pink-200"
 >
 <h3 className="text-xl font-bold text-pink-700 mb-3">Hotel Escort</h3>
 <p className="text-gray-600 mb-4"> hotel escort service available in Citylight</p>
 <span className="text-pink-600 font-semibold hover:text-pink-700">View Details →</span>
 </Link>

 <Link
 href="/services/travel-companion"
 className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-pink-200"
 >
 <h3 className="text-xl font-bold text-pink-700 mb-3">Travel Companion</h3>
 <p className="text-gray-600 mb-4"> travel companion service available in Citylight</p>
 <span className="text-pink-600 font-semibold hover:text-pink-700">View Details →</span>
 </Link>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">Frequently Asked Questions</h2>
 <p className="text-xl text-gray-600">Common questions about escort services in Citylight</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="space-y-6">
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-purple-700 mb-3">How to book escorts in Citylight?</h3>
 <p className="text-gray-600">You can book through our website, WhatsApp, or by calling us directly. We provide 24/7 booking services for Citylight area.</p>
 </div>
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-purple-700 mb-3">Are the escorts verified?</h3>
 <p className="text-gray-600">Yes, all our escorts in Citylight are thoroughly verified with authentic profiles and genuine photos.</p>
 </div>
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-purple-700 mb-3">What is the price range?</h3>
 <p className="text-gray-600">Our services in Citylight start from ₹14,000 and go up to ₹29,000+ depending on the service type and duration.</p>
 </div>
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-purple-700 mb-3">Is advance booking required?</h3>
 <p className="text-gray-600">While we accept last-minute bookings, advance booking is recommended for better availability in Citylight.</p>
 </div>
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-purple-700 mb-3">Do you provide outcall services?</h3>
 <p className="text-gray-600">Yes, we provide both incall and outcall services throughout Citylight and surrounding areas.</p>
 </div>
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-purple-700 mb-3">What payment methods are accepted?</h3>
 <p className="text-gray-600">We accept cash, UPI, and online transfers for all bookings in Citylight area.</p>
 </div>
 </div>
 <div className="space-y-6">
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-purple-700 mb-3">Is discretion guaranteed?</h3>
 <p className="text-gray-600">Absolutely. We maintain complete privacy and confidentiality for all our clients in Citylight.</p>
 </div>
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-purple-700 mb-3">Are services available 24/7?</h3>
 <p className="text-gray-600">Yes, our escort services in Citylight are available round the clock, all days of the week.</p>
 </div>
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-purple-700 mb-3">Can I choose a specific escort?</h3>
 <p className="text-gray-600">Yes, you can browse profiles and select your preferred companion for Citylight area.</p>
 </div>
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-purple-700 mb-3">What areas do you cover near Citylight?</h3>
 <p className="text-gray-600">We cover Citylight and all nearby areas with prompt service delivery.</p>
 </div>
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-purple-700 mb-3">Are there any hidden charges?</h3>
 <p className="text-gray-600">No, we maintain complete transparency. The price quoted is the final price with no hidden charges.</p>
 </div>
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-purple-700 mb-3">How do I cancel or reschedule?</h3>
 <p className="text-gray-600">You can cancel or reschedule by contacting us at least 2 hours before the booking time.</p>
 </div>
 </div>
 </div>
 </div>
 </section>


 {/* Contact Section */}
 <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
 <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
 <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Citylight Escorts?</h2>
 <p className="text-xl mb-8 text-purple-100">
 Contact us today to arrange escort services in Citylight&apos;s entertainment district
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link
 href="/contact"
 className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
 >
 Contact Us Now
 </Link>
 <Link
 href="tel:+91XXXXXXXXX"
 className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
 >
 Call Directly
 </Link>
 </div>
 </div>
 </section>
 </div>
 );
}