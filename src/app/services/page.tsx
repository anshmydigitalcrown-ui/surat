'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
 // Function to convert service title to URL slug
 const getServiceSlug = (title: string): string => {
 return title.toLowerCase()
 .replace(/\s+/g, '-')
 .replace(/[^\w\-]+/g, '')
 .replace(/\-\-+/g, '-')
 .replace(/^-+/, '')
 .replace(/-+$/, '');
 };

 const services = [
 { title: "VIP Companionship", image: "/images/services/VIP-Companionship.webp", category: "", description: "Elite companions for exclusive events and occasions", price: "₹25,000+", rating: "4.9", features: ["Verified Profile", "24/7 Available", "Discrete Service"] },
 { title: "Social Events", image: "/images/services/Social-Events.webp", category: "Social", description: "Perfect companions for social gatherings and parties", price: "₹15,000+", rating: "4.8", features: ["Event Ready", "Social Skills", "Professional"] },
 { title: "Business Meetings", image: "/images/services/Business-Meetings.webp", category: "Business", description: "Professional support for corporate events", price: "₹20,000+", rating: "4.9", features: ["Corporate Ready", "Professional", "Confidential"] },
 { title: "Travel Companion", image: "/images/services/Travel-Companion.webp", category: "Travel", description: "Elegant travel partners for business or leisure", price: "₹30,000+", rating: "5.0", features: ["Travel Ready", "Passport Valid", "International"] },
 { title: "Dinner Dates", image: "/images/services/Dinner-Dates.webp", category: "Social", description: "Sophisticated dining companions", price: "₹12,000+", rating: "4.7", features: ["Fine Dining", "Elegant", "Conversational"] },
 { title: "Party Escort", image: "/images/services/Party-Escort.webp", category: "Entertainment", description: "Fun and engaging party companions", price: "₹18,000+", rating: "4.8", features: ["Party Ready", "Energetic", "Fun Loving"] },
 { title: "Private Model", image: "/images/services/Private-Model.webp", category: "", description: "Exclusive modeling and photography sessions", price: "₹35,000+", rating: "4.9", features: ["Model Figure", "Photogenic", "Professional"] },
 { title: "Hotel Escort", image: "/images/services/Hotel-Escort.webp", category: "Standard", description: "Discreet hotel visit arrangements", price: "₹10,000+", rating: "4.6", features: ["Hotel Services", "Discrete", "Flexible Timing"] },
 { title: "Celebrity Look-alike", image: "/images/services/Celebrity-Look-alike.webp", category: "", description: "Companions resembling famous personalities", price: "₹40,000+", rating: "4.8", features: ["Celebrity Look", "Unique", "Exclusive"] },
 { title: "College Girl", image: "/images/services/College-Girl.webp", category: "Young", description: "Young and vibrant companions", price: "₹8,000+", rating: "4.7", features: ["Young & Fresh", "Energetic", "Student Look"] },
 { title: "Housewife", image: "/images/services/Housewife.webp", category: "Mature", description: "Mature and experienced companions", price: "₹14,000+", rating: "4.8", features: ["Mature", "Experienced", "Homely"] },
 { title: "Air Hostess", image: "/images/services/Air-Hostess.webp", category: "Professional", description: "Professional airline crew companions", price: "₹22,000+", rating: "4.9", features: ["Professional", "Well Groomed", "Service Oriented"] },
 { title: "Russian Model", image: "/images/services/Russian-Model.webp", category: "International", description: "International model companions", price: "₹50,000+", rating: "5.0", features: ["International", "Model Figure", "Exotic"] },
 { title: "Corporate Event", image: "/images/services/Corporate-Event.webp", category: "Business", description: "Business event support and networking", price: "₹25,000+", rating: "4.8", features: ["Corporate", "Professional", "Networking"] },
 { title: "Wedding Escort", image: "/images/services/Wedding-Escort.webp", category: "Special", description: "Elegant companions for wedding events", price: "₹20,000+", rating: "4.7", features: ["Wedding Ready", "Elegant", "Traditional"] },
 { title: "Premium Call Girl", image: "/images/services/Premium-Call-Girl.webp", category: "Luxury", description: "Exclusive premium call girl companionship", price: "₹30,000+", rating: "5.0", features: ["Premium Quality", "Luxury Experience", "VIP Service"] },
 { title: "Outcall Service", image: "/images/services/Outcall-Service.webp", category: "Outcall", description: "Professional outcall escort services", price: "₹15,000+", rating: "4.6", features: ["Outcall Only", "Your Location", "Flexible"] },
 { title: "In-call Service", image: "/images/services/In-call-Service.webp", category: "Incall", description: "Comfortable in-call arrangements", price: "₹12,000+", rating: "4.5", features: ["Incall Only", "Safe Location", "Private"] },
 { title: "Weekend Special", image: "/images/services/Weekend-Special.webp", category: "Special", description: "Special weekend companion packages", price: "₹25,000+", rating: "4.8", features: ["Weekend Only", "Special Rates", "Extended Time"] },
 { title: "Special Service", image: "/images/services/Special-Service.webp", category: "", description: "Customized special occasion services", price: "₹35,000+", rating: "4.9", features: ["Custom Service", "Special Events", "Personalized"] }
 ];

 return (
 <div className="min-h-screen bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
 {/* Hero Section */}
 <section className="relative py-32 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 text-pink-800 overflow-hidden">
 <div className="absolute inset-0 bg-white/10"></div>
 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 {/* Service Icons */}
 <div className="flex justify-center space-x-8 mb-8">
 <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
 <span className="text-2xl">💎</span>
 </div>
 <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
 <span className="text-2xl">👑</span>
 </div>
 <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
 <span className="text-2xl">⭐</span>
 </div>
 </div>

 <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 bg-clip-text text-transparent">Best Escort Service in Surat - Our Services</h1>
 <p className="text-xl md:text-2xl text-pink-700 max-w-3xl mx-auto animate-fadeInUp">
 Discover our comprehensive <strong>escort service in Surat</strong> - escorts service in Surat designed for discerning clients
 </p>
 </div>

 {/* Decorative Elements */}
 <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-400/30 rounded-full animate-pulse-slow"></div>
 <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-orange-400/20 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
 <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-500/40 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
 </section>

 {/* Feature Highlights */}
 <section className="py-12 bg-white">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white text-xl">🔒</span>
 </div>
 <h3 className="text-lg font-semibold text-pink-800 mb-2">100% Discrete</h3>
 <p className="text-pink-600 text-sm">Complete privacy and confidentiality guaranteed</p>
 </div>
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white text-xl">⚡</span>
 </div>
 <h3 className="text-lg font-semibold text-pink-800 mb-2">24/7 Available</h3>
 <p className="text-pink-600 text-sm">Round the clock service</p>
 </div>
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white text-xl">⭐</span>
 </div>
 <h3 className="text-lg font-semibold text-pink-800 mb-2"> Quality</h3>
 <p className="text-pink-600 text-sm">Verified profiles with exceptional service</p>
 </div>
 </div>
 </div>
 </section>

 {/* Service Cards Section */}
 <section className="py-20">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 bg-clip-text text-transparent mb-6">
 Complete Service Portfolio
 </h2>
 <p className="text-xl md:text-2xl text-pink-600 max-w-3xl mx-auto leading-relaxed">
 Professional Call Girls & VIP Companions Available 24/7
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
 {services.map((service, index) => (
 <Link
 key={index}
 href={`/services/${getServiceSlug(service.title)}`}
 className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
 >
 {/* Service Image Container */}
 <div className="relative h-64 bg-gray-50 overflow-hidden">
 <Image
 src={service.image}
 alt={`${service.title} - Escort Service in Surat | RashmiKapoor`}
 fill
 className="object-contain object-center p-2 transition-transform duration-300 hover:scale-105"
 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
 />
 </div>

 {/* Content */}
 <div className="p-4 text-center">
 <h3 className="text-lg font-semibold text-pink-800 mb-2">
 {service.title}
 </h3>
 <p className="text-pink-600 text-sm mb-4">
 {service.description}
 </p>

 {/* Action Button */}
 <div className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full font-medium text-sm transition-colors duration-300 inline-block">
 View Details
 </div>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* Text Service Section */}
 <section className="py-20 bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-6">
 Our Services in Surat
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
 {/* VIP Escort Service */}
 <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-pink-500">
 <h3 className="text-2xl font-bold text-pink-600 mb-4">VIP Escort Service</h3>
 <p className="text-pink-700 leading-relaxed">
 Exclusive VIP companions for discerning clients seeking escort service in Surat. Professional, elegant, and sophisticated.
 </p>
 </div>

 {/* Event Companions */}
 <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
 <h3 className="text-2xl font-bold text-blue-600 mb-4">Event Companions</h3>
 <p className="text-pink-700 leading-relaxed">
 Perfect companions for business events, parties, and social gatherings in Surat. Professional and well-educated.
 </p>
 </div>

 {/* Call Girls */}
 <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
 <h3 className="text-2xl font-bold text-purple-600 mb-4">Call Girls</h3>
 <p className="text-pink-700 leading-relaxed">
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
 <h4 className="text-2xl font-bold text-pink-800 mb-6">Quality Assurance</h4>
 <ul className="space-y-4">
 <li className="flex items-start">
 <span className="font-bold text-pink-800 mr-2">• Verified escorts</span>
 <span className="text-pink-600">- All profiles thoroughly verified</span>
 </li>
 <li className="flex items-start">
 <span className="font-bold text-pink-800 mr-2">• Professional training</span>
 <span className="text-pink-600">- Well-trained companions</span>
 </li>
 <li className="flex items-start">
 <span className="font-bold text-pink-800 mr-2">• Regular health checkups</span>
 <span className="text-pink-600">- Health and safety priority</span>
 </li>
 <li className="flex items-start">
 <span className="font-bold text-pink-800 mr-2">• Background verification</span>
 <span className="text-pink-600">- Complete security screening</span>
 </li>
 </ul>
 </div>

 {/* Service Excellence */}
 <div>
 <h4 className="text-2xl font-bold text-pink-800 mb-6">Service Excellence</h4>
 <ul className="space-y-4">
 <li className="flex items-start">
 <span className="font-bold text-pink-800 mr-2">• Prompt response</span>
 <span className="text-pink-600">- Quick booking confirmation</span>
 </li>
 <li className="flex items-start">
 <span className="font-bold text-pink-800 mr-2">• Customer support</span>
 <span className="text-pink-600">- 24/7 customer assistance</span>
 </li>
 <li className="flex items-start">
 <span className="font-bold text-pink-800 mr-2">• Flexible booking</span>
 <span className="text-pink-600">- Easy scheduling options</span>
 </li>
 <li className="flex items-start">
 <span className="font-bold text-pink-800 mr-2">• Satisfaction guaranteed</span>
 <span className="text-pink-600">- 100% satisfaction commitment</span>
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
 <p className="text-xl md:text-2xl text-pink-600 max-w-3xl mx-auto leading-relaxed">
 escort locations available across all major areas of Surat
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {/* Row 1 */}
 <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
 <h3 className="text-xl font-bold mb-2">Varachha</h3>
 <p className="text-red-100 mb-4"> escort locations in Varachha area</p>
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
 <p className="text-orange-100 mb-4"> locations in Udhna industrial area</p>
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
 <p className="text-lime-100 mb-4"> escorts at historic Majura Gate</p>
 <Link href="/locations/majura-gate" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
 Majura Gate Escorts
 </Link>
 </div>
 <div className="bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
 <h3 className="text-xl font-bold mb-2">Pal</h3>
 <p className="text-sky-100 mb-4">Elite companions in serene Pal locality</p>
 <Link href="/locations/pal" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
 Pal Escorts
 </Link>
 </div>
 <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
 <h3 className="text-xl font-bold mb-2">Katargam</h3>
 <p className="text-amber-100 mb-4">VIP escort services in Katargam hub</p>
 <Link href="/locations/katargam" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
 Katargam Escorts
 </Link>
 </div>

 {/* Row 6 */}
 <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
 <h3 className="text-xl font-bold mb-2">Sagrampura</h3>
 <p className="text-teal-100 mb-4"> locations in Sagrampura</p>
 <Link href="/locations/sagrampura" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
 Sagrampura Escorts
 </Link>
 </div>
 <div className="bg-gradient-to-br from-rose-500 to-rose-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
 <h3 className="text-xl font-bold mb-2">Mota Varachha</h3>
 <p className="text-rose-100 mb-4">High-class escorts in vibrant Mota Varachha</p>
 <Link href="/locations/mota-varachha" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
 Mota Varachha Escorts
 </Link>
 </div>
 <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
 <h3 className="text-xl font-bold mb-2">Magdalla</h3>
 <p className="text-indigo-100 mb-4">Luxury companions in upscale Magdalla</p>
 <Link href="/locations/magdalla" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
 Magdalla Escorts
 </Link>
 </div>

 {/* Row 7 */}
 <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
 <h3 className="text-xl font-bold mb-2">Dumas Road</h3>
 <p className="text-cyan-100 mb-4">Coastal charm escorts on Dumas Road</p>
 <Link href="/locations/dumas-road" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
 Dumas Road Escorts
 </Link>
 </div>
 <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
 <h3 className="text-xl font-bold mb-2">Someshwara</h3>
 <p className="text-emerald-100 mb-4">Spiritual serenity escorts in Someshwara</p>
 <Link href="/locations/someshwara" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
 Someshwara Escorts
 </Link>
 </div>
 <div className="bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
 <h3 className="text-xl font-bold mb-2">Kamrej</h3>
 <p className="text-fuchsia-100 mb-4">Rural charm companions in Kamrej</p>
 <Link href="/locations/kamrej" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
 Kamrej Escorts
 </Link>
 </div>

 {/* Row 8 */}
 <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
 <h3 className="text-xl font-bold mb-2">Bhatar</h3>
 <p className="text-orange-100 mb-4">Educational hub escorts in Bhatar</p>
 <Link href="/locations/bhatar" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
 Bhatar Escorts
 </Link>
 </div>
 <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
 <h3 className="text-xl font-bold mb-2">Pandesara</h3>
 <p className="text-blue-100 mb-4">Industrial excellence escorts in Pandesara</p>
 <Link href="/locations/pandesara" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
 Pandesara Escorts
 </Link>
 </div>
 <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
 <h3 className="text-xl font-bold mb-2">New Civil Hospital Road</h3>
 <p className="text-purple-100 mb-4">Central location escorts near Hospital Road</p>
 <Link href="/locations/new-civil-hospital-road" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block">
 Hospital Road Escorts
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
 <p className="text-xl text-pink-600 max-w-4xl mx-auto leading-relaxed">
 What our satisfied clients say about our escort services
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
 <h3 className="text-2xl font-bold text-pink-800 mb-6">Amazing Service</h3>
 <p className="text-pink-600 italic leading-relaxed mb-6">
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
 <h3 className="text-2xl font-bold text-pink-800 mb-6">Highly Recommend</h3>
 <p className="text-pink-600 italic leading-relaxed mb-6">
 &ldquo;Outstanding companions and excellent customer service. Very professional team that maintains complete privacy and confidentiality.&rdquo;
 </p>
 <p className="text-blue-600 font-bold">- Regular Client, Adajan</p>
 </div>

 {/* Quality */}
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
 <h3 className="text-2xl font-bold text-pink-800 mb-6"> Quality</h3>
 <p className="text-pink-600 italic leading-relaxed mb-6">
 &ldquo;Top-notch service with beautiful and intelligent companions. The 24/7 availability and quick response time is impressive.&rdquo;
 </p>
 <p className="text-orange-600 font-bold">- Business Client, Vesu</p>
 </div>
 </div>
 </div>
 </section>

 {/* What Our Clients Say About Us */}
 <section className="py-20 bg-gradient-to-br from-pink-300 via-pink-200 to-pink-100">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
 ⭐ What Our Clients Say About Us ⭐
 </h2>
 <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
 💎 Thousands of satisfied clients across Surat trust us for escort services
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
 {/* Quality */}
 <div className="bg-gradient-to-br from-pink-400 via-pink-300 to-pink-200 rounded-3xl p-8 text-center border border-pink-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
 <div className="text-5xl mb-6">🏆</div>
 <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md"> Quality</h3>
 <p className="text-gray-700 leading-relaxed font-medium">
 Handpicked professional escorts with guaranteed satisfaction
 </p>
 </div>

 {/* 100% Discrete */}
 <div className="bg-gradient-to-br from-purple-400 via-purple-300 to-pink-300 rounded-3xl p-8 text-center border border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
 <div className="text-5xl mb-6">🔒</div>
 <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">100% Discrete</h3>
 <p className="text-gray-700 leading-relaxed font-medium">
 Complete privacy and confidentiality for all our VIP clients
 </p>
 </div>

 {/* 24/7 Available */}
 <div className="bg-gradient-to-br from-orange-400 via-pink-300 to-pink-200 rounded-3xl p-8 text-center border border-orange-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
 <div className="text-5xl mb-6">⚡</div>
 <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">24/7 Available</h3>
 <p className="text-gray-700 leading-relaxed font-medium">
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
 🔥 Service
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
 Find us easily with our location map or contact us directly through our booking form
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
 <p className="text-xl text-gray-600">
 We provide escort services across all major areas of Surat
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
 <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-lg">
 <div className="text-center mb-8">
 <h3 className="text-3xl font-bold text-pink-800 mb-4">Contact Us</h3>
 <p className="text-pink-600">
 Get in touch with us for escort services in Surat
 </p>
 </div>

 <form className="space-y-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <label className="block text-pink-700 font-semibold mb-2">Name *</label>
 <input
 type="text"
 required
 className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300"
 placeholder="Your Name"
 />
 </div>
 <div>
 <label className="block text-pink-700 font-semibold mb-2">Phone *</label>
 <input
 type="tel"
 required
 className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300"
 placeholder="Your Phone Number"
 />
 </div>
 </div>

 <div>
 <label className="block text-pink-700 font-semibold mb-2">Email</label>
 <input
 type="email"
 className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300"
 placeholder="your.email@example.com"
 />
 </div>

 <div>
 <label className="block text-pink-700 font-semibold mb-2">Location Preference</label>
 <select className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300">
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
 <label className="block text-gray-700 font-semibold mb-2">Message</label>
 <textarea
 rows={4}
 className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
 placeholder="Tell us about your preferences and requirements..."
 />
 </div>

 <button
 type="submit"
 className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-4 px-6 rounded-lg hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
 >
 Send Message 💌
 </button>
 </form>

 <div className="mt-8 pt-6 border-t border-pink-200">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
 <div className="flex items-center justify-center space-x-2">
 <span className="text-pink-600">📱</span>
 <span className="text-gray-700">24/7 Available</span>
 </div>
 <div className="flex items-center justify-center space-x-2">
 <span className="text-pink-600">🔒</span>
 <span className="text-gray-700">100% Confidential</span>
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
 <p className="text-2xl font-bold text-gray-800 mb-2">+91 93726 62471</p>
 <p className="text-gray-600">24/7 Available</p>
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
 <p className="text-2xl font-bold text-gray-800 mb-2">+91 93726 62471</p>
 <p className="text-gray-600">Instant Response</p>
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
 <p className="text-lg font-bold text-gray-800 mb-2">info@suratescorts.com</p>
 <p className="text-gray-600">Quick Response</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-20 bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
 Frequently Asked Questions
 </h2>
 <p className="text-xl text-gray-700 max-w-3xl mx-auto">
 Get answers to common questions about our escort services in Surat
 </p>
 </div>

 {/* FAQ Grid - 3 Rows x 4 Columns */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {/* Row 1 */}
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white font-bold text-lg">?</span>
 </div>
 <h3 className="text-lg font-bold text-pink-600 mb-3">How to Book?</h3>
 <p className="text-gray-600 text-sm">
 Simply call us, WhatsApp, or fill out our contact form. We&apos;ll arrange everything professionally and discreetly.
 </p>
 </div>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white font-bold text-lg">💰</span>
 </div>
 <h3 className="text-lg font-bold text-purple-600 mb-3">Payment Methods?</h3>
 <p className="text-gray-600 text-sm">
 We accept cash, bank transfers, and digital payments. Payment terms are discussed during booking confirmation.
 </p>
 </div>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white font-bold text-lg">🔒</span>
 </div>
 <h3 className="text-lg font-bold text-green-600 mb-3">Privacy & Safety?</h3>
 <p className="text-gray-600 text-sm">
 Complete confidentiality guaranteed. All our companions are verified and we maintain strict privacy protocols.
 </p>
 </div>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white font-bold text-lg">📍</span>
 </div>
 <h3 className="text-lg font-bold text-blue-600 mb-3">Service Areas?</h3>
 <p className="text-gray-600 text-sm">
 We serve all major areas in Surat including Varachha, Adajan, Vesu, Nanpura, City Light, and surrounding locations.
 </p>
 </div>
 </div>

 {/* Row 2 */}
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white font-bold text-lg">⏰</span>
 </div>
 <h3 className="text-lg font-bold text-indigo-600 mb-3">Availability?</h3>
 <p className="text-gray-600 text-sm">
 24/7 availability with advance booking. Same-day bookings subject to availability. Weekend bookings recommended in advance.
 </p>
 </div>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white font-bold text-lg">✅</span>
 </div>
 <h3 className="text-lg font-bold text-red-600 mb-3">Verified Profiles?</h3>
 <p className="text-gray-600 text-sm">
 All companions are thoroughly verified with background checks, health certificates, and professional training.
 </p>
 </div>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white font-bold text-lg">📞</span>
 </div>
 <h3 className="text-lg font-bold text-yellow-600 mb-3">Customer Support?</h3>
 <p className="text-gray-600 text-sm">
 Dedicated customer support team available 24/7 to assist with bookings, queries, and any special requirements.
 </p>
 </div>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white font-bold text-lg">💎</span>
 </div>
 <h3 className="text-lg font-bold text-teal-600 mb-3"> Quality?</h3>
 <p className="text-gray-600 text-sm">
 High-quality services with elegant, educated, and professional companions. Satisfaction guarantee with every booking.
 </p>
 </div>
 </div>

 {/* Row 3 */}
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white font-bold text-lg">🏨</span>
 </div>
 <h3 className="text-lg font-bold text-orange-600 mb-3">Hotel Service?</h3>
 <p className="text-gray-600 text-sm">
 Yes, we provide both incall and outcall services. Our companions can visit your hotel or preferred location discreetly.
 </p>
 </div>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white font-bold text-lg">🎭</span>
 </div>
 <h3 className="text-lg font-bold text-cyan-600 mb-3">Event Companionship?</h3>
 <p className="text-gray-600 text-sm">
 Professional companions available for business events, social gatherings, parties, and formal occasions.
 </p>
 </div>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white font-bold text-lg">✈️</span>
 </div>
 <h3 className="text-lg font-bold text-rose-600 mb-3">Travel Companion?</h3>
 <p className="text-gray-600 text-sm">
 Travel companionship services available for business trips, vacations, and weekend getaways with professional escorts.
 </p>
 </div>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
 <div className="text-center">
 <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-white font-bold text-lg">🎁</span>
 </div>
 <h3 className="text-lg font-bold text-violet-600 mb-3">Special Packages?</h3>
 <p className="text-gray-600 text-sm">
 Customized packages available for extended services, special occasions, and recurring bookings with exclusive benefits.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Booking Process */}
 <section className="py-20 bg-gradient-to-br from-sweet-pink-50 via-white to-light-red-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sweet-pink-600 to-light-red-600 bg-clip-text text-transparent mb-4">Simple Booking Process</h2>
 <p className="text-2xl md:text-3xl text-pink-700 max-w-4xl mx-auto font-medium leading-relaxed">
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
 <div key={index} className="text-center relative group">
 <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
 {step.step}
 </div>
 <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
 <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 leading-tight">{step.title}</h3>
 <p className="text-lg md:text-xl text-pink-700 font-medium leading-relaxed">{step.description}</p>

 {index < 3 && (
 <div className="hidden md:block absolute top-10 left-full w-full">
 <div className="border-t-3 border-dashed border-gradient-to-r from-pink-400 to-purple-400 transform translate-x-4"></div>
 </div>
 )}
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Locations Section */}
 <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
 🏙️ Service Locations in Surat
 </h2>
 <p className="text-2xl md:text-3xl text-pink-700 max-w-4xl mx-auto font-medium leading-relaxed mb-4">
 Experience luxury companionship across Surat&apos;s most prestigious areas
 </p>
 <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
 {/* Location 1 - Varachha */}
 <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
 <div className="relative z-10">
 <div className="text-6xl mb-6 text-center">🏙️</div>
 <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">Varachha Road</h3>
 <div className="space-y-3 text-lg">
 <div className="flex items-center justify-center bg-white/20 rounded-full py-2 px-4">
 <span className="mr-2">🏢</span>
 <span>Business District</span>
 </div>
 <div className="flex items-center justify-center bg-white/20 rounded-full py-2 px-4">
 <span className="mr-2">🛍️</span>
 <span>Shopping Centers</span>
 </div>
 <div className="flex items-center justify-center bg-white/20 rounded-full py-2 px-4">
 <span className="mr-2">🏨</span>
 <span> Hotels</span>
 </div>
 </div>
 <p className="text-center mt-6 text-xl font-medium text-pink-100">
 VIP companionship services available 24/7 in Surat&apos;s commercial hub
 </p>
 </div>
 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
 </div>

 {/* Location 2 - Adajan */}
 <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
 <div className="relative z-10">
 <div className="text-6xl mb-6 text-center">🏞️</div>
 <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">Adajan Gam</h3>
 <div className="space-y-3 text-lg">
 <div className="flex items-center justify-center bg-white/20 rounded-full py-2 px-4">
 <span className="mr-2">🏡</span>
 <span>Residential Area</span>
 </div>
 <div className="flex items-center justify-center bg-white/20 rounded-full py-2 px-4">
 <span className="mr-2">🌳</span>
 <span>Peaceful Environment</span>
 </div>
 <div className="flex items-center justify-center bg-white/20 rounded-full py-2 px-4">
 <span className="mr-2">🚗</span>
 <span>Easy Accessibility</span>
 </div>
 </div>
 <p className="text-center mt-6 text-xl font-medium text-purple-100">
 Discreet services in Surat&apos;s upscale residential zone
 </p>
 </div>
 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
 </div>

 {/* Location 3 - City Light */}
 <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
 <div className="relative z-10">
 <div className="text-6xl mb-6 text-center">✨</div>
 <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">City Light</h3>
 <div className="space-y-3 text-lg">
 <div className="flex items-center justify-center bg-white/20 rounded-full py-2 px-4">
 <span className="mr-2">🌟</span>
 <span>Entertainment Hub</span>
 </div>
 <div className="flex items-center justify-center bg-white/20 rounded-full py-2 px-4">
 <span className="mr-2">🍽️</span>
 <span>Fine Dining</span>
 </div>
 <div className="flex items-center justify-center bg-white/20 rounded-full py-2 px-4">
 <span className="mr-2">💎</span>
 <span>Luxury Services</span>
 </div>
 </div>
 <p className="text-center mt-6 text-xl font-medium text-indigo-100">
 Elite companion services in Surat&apos;s entertainment district
 </p>
 </div>
 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
 </div>
 </div>

 {/* Service Features */}
 <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 rounded-3xl p-8 md:p-12">
 <h3 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent mb-8">
 🌟 Why Choose Our Location Services?
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 <div className="text-center p-6 bg-white/70 rounded-2xl hover:bg-white/90 transition-all duration-300">
 <div className="text-4xl mb-4">🚗</div>
 <h4 className="text-xl font-bold text-pink-700 mb-2">Quick Arrival</h4>
 <p className="text-pink-600">Fast response time across all Surat locations</p>
 </div>
 <div className="text-center p-6 bg-white/70 rounded-2xl hover:bg-white/90 transition-all duration-300">
 <div className="text-4xl mb-4">🔒</div>
 <h4 className="text-xl font-bold text-purple-700 mb-2">Complete Privacy</h4>
 <p className="text-purple-600">100% discreet services in all areas</p>
 </div>
 <div className="text-center p-6 bg-white/70 rounded-2xl hover:bg-white/90 transition-all duration-300">
 <div className="text-4xl mb-4">💎</div>
 <h4 className="text-xl font-bold text-indigo-700 mb-2"> Quality</h4>
 <p className="text-indigo-600">Luxury companions for every location</p>
 </div>
 <div className="text-center p-6 bg-white/70 rounded-2xl hover:bg-white/90 transition-all duration-300">
 <div className="text-4xl mb-4">⭐</div>
 <h4 className="text-xl font-bold text-pink-700 mb-2">5-Star Service</h4>
 <p className="text-pink-600">Exceptional experience guaranteed</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Comprehensive Article: Escorts in Surat */}
 <article className="py-20 bg-gradient-to-br from-white via-pink-50 to-purple-50">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 {/* Article Header */}
 <header className="text-center mb-16">
 <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
 Escorts in Surat: Complete Guide to Companionship Services 💎
 </h1>
 <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
 Discover the finest escort services in Surat with our comprehensive guide to professional companionship, 
 luxury experiences, and entertainment solutions in Gujarat&apos;s diamond city 🌟
 </p>
 <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-6"></div>
 </header>

 {/* Introduction Section */}
 <section className="mb-16">
 <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 sm:p-12 mb-12">
 <h2 className="text-3xl sm:text-4xl font-bold text-pink-800 mb-6 flex items-center">
 <span className="mr-4">🏙️</span>
 Welcome to Surat&apos;s Premier Escort Services
 </h2>
 <p className="text-lg text-gray-700 leading-relaxed mb-6">
 Surat, known globally as the diamond capital of the world and India&apos;s textile hub, has evolved into a cosmopolitan city 
 attracting business professionals, tourists, and discerning individuals from across the globe. In this vibrant metropolis, 
 the demand for sophisticated companionship services has grown exponentially, leading to the establishment of escort 
 agencies that cater to the refined tastes of modern clientele.
 </p>
 <p className="text-lg text-gray-700 leading-relaxed">
 Our escort services in Surat represent the pinnacle of professionalism, discretion, and luxury entertainment. We understand 
 that in today&apos;s fast-paced business environment, successful individuals require more than just casual companionship – they 
 seek intelligent, cultured, and elegant partners who can enhance their social presence, provide stimulating conversation, 
 and accompany them to various events with grace and sophistication 🎭
 </p>
 </div>
 </section>

 {/* Why Choose Surat for Escort Services */}
 <section className="mb-16">
 <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-8 flex items-center">
 <span className="mr-4">💼</span>
 Why Surat is the Perfect City for Escort Services
 </h2>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 <div className="space-y-6">
 <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-200">
 <h3 className="text-xl font-bold text-pink-700 mb-4 flex items-center">
 <span className="mr-3">💎</span>
 Economic Prosperity & Business Hub
 </h3>
 <p className="text-gray-700 leading-relaxed">
 Surat&apos;s status as India&apos;s diamond cutting and polishing center attracts wealthy businessmen, international traders, 
 and industry leaders who require sophisticated companionship for business meetings, social events, and personal entertainment. 
 The city&apos;s economic prosperity has created a discerning clientele that appreciates quality, exclusivity, and services.
 </p>
 </div>
 <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-200">
 <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
 <span className="mr-3">🌆</span>
 Modern Infrastructure & Luxury Hotels
 </h3>
 <p className="text-gray-700 leading-relaxed">
 The city boasts world-class infrastructure with luxury hotels, upscale restaurants, malls, and entertainment venues 
 that provide the perfect backdrop for escort services. Areas like Varachha, Adajan, and City Light offer sophisticated 
 environments where high-end companionship services can be enjoyed discreetly and comfortably.
 </p>
 </div>
 </div>
 <div className="space-y-6">
 <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-200">
 <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center">
 <span className="mr-3">🌍</span>
 International Business Community
 </h3>
 <p className="text-gray-700 leading-relaxed">
 Surat&apos;s position as a global trading center brings together businesspeople from various countries and cultures. 
 This international atmosphere creates demand for multilingual, culturally aware escorts who can provide companionship 
 to diverse clientele, making it essential for escort services to maintain the highest standards of professionalism.
 </p>
 </div>
 <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-200">
 <h3 className="text-xl font-bold text-pink-700 mb-4 flex items-center">
 <span className="mr-3">🎨</span>
 Cultural Sophistication & Arts Scene
 </h3>
 <p className="text-gray-700 leading-relaxed">
 The city&apos;s rich cultural heritage, combined with its modern outlook, creates a unique environment where traditional 
 values meet contemporary lifestyle. This cultural sophistication demands escort services that understand both local 
 customs and international etiquette, ensuring companions can adapt to various social situations seamlessly.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Types of Escort Services */}
 <section className="mb-16">
 <h2 className="text-3xl sm:text-4xl font-bold text-pink-800 mb-8 flex items-center">
 <span className="mr-4">🎯</span>
 Comprehensive Range of Escort Services in Surat
 </h2>
 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 Our escort agency in Surat offers an extensive portfolio of companionship services designed to meet the diverse needs 
 of our sophisticated clientele. Each service is carefully crafted to provide maximum satisfaction while maintaining 
 the highest standards of professionalism and discretion 🌟
 </p>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
 <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200">
 <h3 className="text-xl font-bold text-pink-700 mb-4 flex items-center">
 <span className="mr-3">👔</span>
 Business & Corporate Companions
 </h3>
 <p className="text-gray-700 leading-relaxed text-sm">
 Professional escorts who excel in corporate environments, perfect for business dinners, conferences, trade shows, 
 and networking events. These companions possess excellent communication skills, business acumen, and the ability 
 to engage in meaningful professional conversations while maintaining an elegant presence.
 </p>
 </div>

 <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
 <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
 <span className="mr-3">🎭</span>
 Social Event Companions
 </h3>
 <p className="text-gray-700 leading-relaxed text-sm">
 Sophisticated escorts specializing in social gatherings, parties, cultural events, and entertainment functions. 
 They understand social etiquette, can adapt to various cultural contexts, and provide engaging companionship 
 that enhances your social experience while ensuring you feel confident and comfortable.
 </p>
 </div>

 <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200">
 <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center">
 <span className="mr-3">✈️</span>
 Travel & Tourism Companions
 </h3>
 <p className="text-gray-700 leading-relaxed text-sm">
 Cultured travel companions who can accompany you on business trips, leisure vacations, or city tours. 
 These escorts are well-traveled, knowledgeable about local attractions, and skilled at making your journey 
 more enjoyable through their companionship and local insights.
 </p>
 </div>

 <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-6 border border-rose-200">
 <h3 className="text-xl font-bold text-rose-700 mb-4 flex items-center">
 <span className="mr-3">🍽️</span>
 Dining & Entertainment Escorts
 </h3>
 <p className="text-gray-700 leading-relaxed text-sm">
 Elegant companions perfect for fine dining experiences, theater visits, art gallery openings, and cultural events. 
 They possess refined tastes, appreciate arts and culture, and can provide stimulating conversation on various topics 
 while ensuring your dining and entertainment experiences are memorable.
 </p>
 </div>

 <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border border-teal-200">
 <h3 className="text-xl font-bold text-teal-700 mb-4 flex items-center">
 <span className="mr-3">🏨</span>
 Private & Intimate Companions
 </h3>
 <p className="text-gray-700 leading-relaxed text-sm">
 Discreet companions for private meetings, intimate dinners, and personal entertainment. These services are 
 conducted with the utmost confidentiality and professionalism, ensuring complete privacy and satisfaction 
 for clients seeking more personal companionship experiences.
 </p>
 </div>

 <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
 <h3 className="text-xl font-bold text-amber-700 mb-4 flex items-center">
 <span className="mr-3">👑</span>
 VIP & Celebrity Companions
 </h3>
 <p className="text-gray-700 leading-relaxed text-sm">
 Exclusive high-end escorts for VIP clients, celebrities, and high-profile individuals who require the highest 
 level of sophistication, discretion, and service. These companions are carefully selected for their 
 exceptional qualities, education, and ability to handle sensitive situations.
 </p>
 </div>
 </div>
 </section>

 {/* Service Areas in Surat */}
 <section className="mb-16">
 <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-8 flex items-center">
 <span className="mr-4">📍</span>
 Service Locations Across Surat
 </h2>
 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 Our escort services operate across all major areas of Surat, ensuring convenient access to companionship 
 wherever you are located in the city. Each area offers unique advantages and caters to different client preferences 🗺️
 </p>

 <div className="space-y-8">
 <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-8 border border-red-200">
 <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
 <span className="mr-3">🏢</span>
 Varachha Road - Commercial Excellence
 </h3>
 <p className="text-gray-700 leading-relaxed mb-4">
 Varachha Road stands as Surat&apos;s premier commercial district, housing numerous multinational companies, luxury hotels, 
 and upscale shopping centers. This area attracts business professionals who require sophisticated companionship for 
 corporate events, business meetings, and professional networking. Our escorts in Varachha are specially trained to 
 handle corporate environments and provide professional companionship that enhances business interactions.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 <div className="bg-white p-4 rounded-lg border border-red-200">
 <span className="font-semibold text-red-700">🏨 Luxury Hotels:</span>
 <p className="text-sm text-gray-600 mt-1"> accommodations for business travelers</p>
 </div>
 <div className="bg-white p-4 rounded-lg border border-red-200">
 <span className="font-semibold text-red-700">🛍️ Shopping Centers:</span>
 <p className="text-sm text-gray-600 mt-1">Upscale malls and retail destinations</p>
 </div>
 <div className="bg-white p-4 rounded-lg border border-red-200">
 <span className="font-semibold text-red-700">🍽️ Fine Dining:</span>
 <p className="text-sm text-gray-600 mt-1">World-class restaurants and cuisine</p>
 </div>
 </div>
 </div>

 <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
 <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
 <span className="mr-3">🏘️</span>
 Adajan - Residential Sophistication
 </h3>
 <p className="text-gray-700 leading-relaxed mb-4">
 Adajan represents the epitome of modern residential living in Surat, featuring luxury apartment complexes, 
 planned infrastructure, and a family-friendly environment. Our escort services in Adajan focus on discretion 
 and privacy, catering to residents who value sophisticated companionship in a peaceful, upscale setting. 
 The area&apos;s well-planned layout and modern amenities make it ideal for private meetings and intimate gatherings.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 <div className="bg-white p-4 rounded-lg border border-blue-200">
 <span className="font-semibold text-blue-700">🏡 Luxury Residences:</span>
 <p className="text-sm text-gray-600 mt-1">Modern apartments and gated communities</p>
 </div>
 <div className="bg-white p-4 rounded-lg border border-blue-200">
 <span className="font-semibold text-blue-700">🌳 Green Spaces:</span>
 <p className="text-sm text-gray-600 mt-1">Parks and recreational areas</p>
 </div>
 <div className="bg-white p-4 rounded-lg border border-blue-200">
 <span className="font-semibold text-blue-700">🔒 Privacy Focus:</span>
 <p className="text-sm text-gray-600 mt-1">Discreet and confidential services</p>
 </div>
 </div>
 </div>

 <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
 <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
 <span className="mr-3">✨</span>
 City Light - Entertainment Hub
 </h3>
 <p className="text-gray-700 leading-relaxed mb-4">
 City Light area has emerged as Surat&apos;s entertainment and nightlife center, featuring restaurants, 
 entertainment venues, and cultural spaces. This vibrant area attracts young professionals and socialites who 
 appreciate contemporary lifestyle and modern entertainment options. Our escorts in City Light specialize in 
 social events, party companionship, and entertainment-focused services.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 <div className="bg-white p-4 rounded-lg border border-purple-200">
 <span className="font-semibold text-purple-700">🎪 Entertainment:</span>
 <p className="text-sm text-gray-600 mt-1">Clubs, lounges, and event venues</p>
 </div>
 <div className="bg-white p-4 rounded-lg border border-purple-200">
 <span className="font-semibold text-purple-700">🍸 Nightlife:</span>
 <p className="text-sm text-gray-600 mt-1">Vibrant bars and social scenes</p>
 </div>
 <div className="bg-white p-4 rounded-lg border border-purple-200">
 <span className="font-semibold text-purple-700">🎭 Cultural Events:</span>
 <p className="text-sm text-gray-600 mt-1">Art galleries and performance venues</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Quality Standards and Safety */}
 <section className="mb-16">
 <h2 className="text-3xl sm:text-4xl font-bold text-pink-800 mb-8 flex items-center">
 <span className="mr-4">🛡️</span>
 Quality Standards, Safety, and Professionalism
 </h2>
 <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 rounded-2xl p-8 sm:p-12">
 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 At the heart of our escort services in Surat lies an unwavering commitment to quality, safety, and professionalism. 
 We understand that our clients deserve nothing less than exceptional service, complete discretion, and absolute 
 peace of mind when engaging our companionship services 🌟
 </p>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="space-y-6">
 <div className="bg-white rounded-lg p-6 shadow-md border border-pink-200">
 <h3 className="text-xl font-bold text-pink-700 mb-3 flex items-center">
 <span className="mr-3">✅</span>
 Rigorous Selection Process
 </h3>
 <p className="text-gray-700 text-sm leading-relaxed">
 Every escort undergoes a comprehensive selection process including background verification, personality assessment, 
 communication skills evaluation, and professional training. We ensure that only the most qualified, intelligent, 
 and sophisticated individuals join our team.
 </p>
 </div>

 <div className="bg-white rounded-lg p-6 shadow-md border border-purple-200">
 <h3 className="text-xl font-bold text-purple-700 mb-3 flex items-center">
 <span className="mr-3">🎓</span>
 Continuous Training & Development
 </h3>
 <p className="text-gray-700 text-sm leading-relaxed">
 Our companions receive ongoing training in etiquette, communication, cultural sensitivity, and professional conduct. 
 This ensures they can handle any social situation with grace and sophistication, whether it&apos;s a formal business 
 meeting or a casual social gathering.
 </p>
 </div>
 </div>

 <div className="space-y-6">
 <div className="bg-white rounded-lg p-6 shadow-md border border-indigo-200">
 <h3 className="text-xl font-bold text-indigo-700 mb-3 flex items-center">
 <span className="mr-3">🔒</span>
 Privacy & Confidentiality
 </h3>
 <p className="text-gray-700 text-sm leading-relaxed">
 We maintain strict confidentiality protocols to protect our clients&apos; privacy. All personal information, 
 meeting details, and service arrangements are kept completely confidential. Our escorts sign comprehensive 
 non-disclosure agreements to ensure absolute discretion.
 </p>
 </div>

 <div className="bg-white rounded-lg p-6 shadow-md border border-rose-200">
 <h3 className="text-xl font-bold text-rose-700 mb-3 flex items-center">
 <span className="mr-3">🏥</span>
 Health & Safety Protocols
 </h3>
 <p className="text-gray-700 text-sm leading-relaxed">
 All our escorts undergo regular health screenings and maintain the highest standards of personal hygiene and health. 
 We also implement safety protocols for both clients and companions, including secure meeting arrangements and 
 emergency support systems.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Booking Process and Customer Experience */}
 <section className="mb-16">
 <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-8 flex items-center">
 <span className="mr-4">📞</span>
 Seamless Booking Process and Exceptional Customer Experience
 </h2>
 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 We have designed our booking process to be simple, secure, and completely confidential. From your initial inquiry 
 to the completion of your service, every step is handled with professionalism and attention to detail 💫
 </p>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
 <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl p-6 text-center">
 <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-2xl text-white">1️⃣</span>
 </div>
 <h3 className="text-lg font-bold text-pink-700 mb-2">Initial Contact</h3>
 <p className="text-sm text-gray-700">
 Reach out via phone, WhatsApp, or our secure contact form to discuss your requirements and preferences.
 </p>
 </div>

 <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 text-center">
 <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-2xl text-white">2️⃣</span>
 </div>
 <h3 className="text-lg font-bold text-purple-700 mb-2">Consultation</h3>
 <p className="text-sm text-gray-700">
 Our team provides personalized consultation to understand your needs and recommend suitable companions.
 </p>
 </div>

 <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl p-6 text-center">
 <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-2xl text-white">3️⃣</span>
 </div>
 <h3 className="text-lg font-bold text-indigo-700 mb-2">Confirmation</h3>
 <p className="text-sm text-gray-700">
 Once you select your preferred companion, we handle all arrangement details and confirm your booking.
 </p>
 </div>

 <div className="bg-gradient-to-br from-rose-100 to-rose-200 rounded-xl p-6 text-center">
 <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-2xl text-white">4️⃣</span>
 </div>
 <h3 className="text-lg font-bold text-rose-700 mb-2">Service Delivery</h3>
 <p className="text-sm text-gray-700">
 Enjoy your companion experience with our professional and discreet service delivery.
 </p>
 </div>
 </div>
 </section>

 {/* Conclusion */}
 <section className="mb-16">
 <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-2xl p-8 sm:p-12 text-white">
 <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center">
 <span className="mr-4">🌟</span>
 Experience the Finest Escort Services in Surat
 </h2>
 <p className="text-lg leading-relaxed mb-6">
 Surat&apos;s dynamic business environment, cultural richness, and cosmopolitan lifestyle create the perfect setting for 
 escort services. Whether you&apos;re a business professional seeking sophisticated companionship for corporate 
 events, a visitor looking to explore the city with an elegant companion, or someone who simply appreciates the finer 
 things in life, our escort services in Surat are designed to exceed your expectations.
 </p>
 <p className="text-lg leading-relaxed mb-8">
 We take pride in setting new standards for professionalism, quality, and customer satisfaction in the escort industry. 
 Our commitment to excellence, combined with our understanding of Surat&apos;s unique business and social environment, 
 makes us the preferred choice for discerning clients who demand nothing but the best 💎
 </p>
 <div className="text-center">
 <p className="text-xl font-bold mb-4">Ready to experience companionship in Surat? 📞</p>
 <p className="text-pink-100">
 Contact us today to discover how our professional escort services can enhance your business, social, 
 and personal experiences in Gujarat&apos;s diamond city.
 </p>
 </div>
 </div>
 </section>
 </div>
 </article>
 </div>
 );
}
