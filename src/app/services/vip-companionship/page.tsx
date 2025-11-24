'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function VIPCompanionshipService() {
 const serviceFeatures = [
 "Exclusive VIP treatment and service",
 "Exceptional beauty and sophistication",
 "High-class social etiquette knowledge",
 "Multilingual communication abilities",
 "Experience with luxury lifestyle",
 "Absolute discretion and professionalism"
 ];

 const availableLocations = [
 { name: "Varachha", link: "/locations/varachha", price: "₹35,000+" },
 { name: "Adajan", link: "/locations/adajan", price: "₹34,000+" },
 { name: "Vesu", link: "/locations/vesu", price: "₹37,000+" },
 { name: "Citylight", link: "/locations/citylight", price: "₹35,000+" },
 { name: "Althan", link: "/locations/althan", price: "₹35,000+" },
 { name: "Piplod", link: "/locations/piplod", price: "₹37,000+" },
 { name: "Udhna", link: "/locations/udhna", price: "₹35,000+" },
 { name: "Athwa", link: "/locations/athwa", price: "₹35,000+" },
 { name: "Rander", link: "/locations/rander", price: "₹35,000+" },
 { name: "Ghod Dod Road", link: "/locations/ghod-dod-road", price: "₹37,000+" },
 { name: "Ring Road", link: "/locations/ring-road", price: "₹35,000+" },
 { name: "Nanpura", link: "/locations/nanpura", price: "₹35,000+" }
 ];

 return (
 <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
 {/* Hero Section */}
 <section className="relative py-32 bg-gradient-to-br from-violet-600 to-purple-700 text-white overflow-hidden">
 <div className="absolute inset-0 bg-black/20"></div>
 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <div className="flex justify-center mb-8">
 <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
 <span className="text-5xl">💎</span>
 </div>
 </div>
 <h1 className="text-5xl md:text-7xl font-bold mb-6">VIP Companionship</h1>
 <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto">
 Ultra-exclusive VIP companionship for the most discerning clients seeking luxury and elegance
 </p>
 </div>
 </section>

 {/* Service Details */}
 <section className="py-20">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
 <div>
 <h2 className="text-4xl font-bold text-gray-800 mb-6">VIP Companionship Service</h2>
 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 Our VIP Companionship service represents the pinnacle of luxury and exclusivity. 
 Designed for elite clients who demand nothing but the finest, our VIP companions 
 are exceptional individuals who embody sophistication, beauty, and intelligence.
 </p>

 <div className="space-y-4">
 <h3 className="text-2xl font-bold text-violet-600 mb-4">Service Features:</h3>
 {serviceFeatures.map((feature, index) => (
 <div key={index} className="flex items-start">
 <span className="mr-3 text-violet-500 text-xl">💎</span>
 <span className="text-gray-700">{feature}</span>
 </div>
 ))}
 </div>
 </div>

 <div className="relative">
 <div className="aspect-w-4 aspect-h-5 rounded-3xl overflow-hidden shadow-2xl">
 <Image
 src="/images/services/VIP Companionship.webp"
 alt="VIP Companionship Service in Surat"
 width={600}
 height={750}
 className="w-full h-full object-contain bg-gradient-to-br from-violet-100 to-purple-100"
 priority
 />
 </div>
 </div>
 </div>

 {/* Booking Information */}
 <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-12 mb-16">
 <h3 className="text-3xl font-bold text-center text-violet-800 mb-8">Booking Information</h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="text-center">
 <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-2xl text-white">📞</span>
 </div>
 <h4 className="text-xl font-bold text-violet-700 mb-2">24/7 Booking</h4>
 <p className="text-gray-600">Available round the clock for your convenience</p>
 </div>
 <div className="text-center">
 <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-2xl text-white">🔒</span>
 </div>
 <h4 className="text-xl font-bold text-violet-700 mb-2">Complete Privacy</h4>
 <p className="text-gray-600">Absolute discretion and confidentiality guaranteed</p>
 </div>
 <div className="text-center">
 <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-2xl text-white">⭐</span>
 </div>
 <h4 className="text-xl font-bold text-violet-700 mb-2"> Quality</h4>
 <p className="text-gray-600">Verified professionals with excellent reviews</p>
 </div>
 </div>
 </div>

 {/* Available Locations */}
 <div className="mb-16">
 <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Available in All Surat Locations</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {availableLocations.map((location, index) => (
 <Link 
 key={index}
 href={location.link}
 className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-violet-100"
 >
 <div className="flex items-center justify-between">
 <div>
 <h4 className="text-xl font-bold text-violet-700 mb-2">{location.name}</h4>
 <p className="text-violet-600 font-semibold">{location.price}</p>
 </div>
 <span className="text-3xl">💎</span>
 </div>
 </Link>
 ))}
 </div>
 </div>

 {/* Call to Action */}
 <div className="text-center bg-gradient-to-r from-violet-500 to-purple-600 rounded-3xl p-12 text-white">
 <h3 className="text-3xl font-bold mb-6">Ready to Book VIP Companionship Service?</h3>
 <p className="text-xl mb-8 text-violet-100">Experience ultimate luxury with our exclusive VIP companions</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link href="/contact" className="bg-white text-violet-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-violet-50 transition-all duration-300 transform hover:scale-105">
 Book Now
 </Link>
 <Link href="/gallery" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-violet-600 transition-all duration-300 transform hover:scale-105">
 View Gallery
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* Comprehensive Content Section */}
 <section className="py-20 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="prose prose-lg max-w-none">
 <h2 className="text-4xl font-bold text-violet-700 mb-8">Discover Elite Escorts Service in VIP Companionship - Unparalleled Luxury Awaits</h2>

 <p className="text-gray-700 leading-relaxed mb-6">
 Welcome to Surat&apos;s most prestigious <strong>escorts service in VIP companionship</strong>, where extraordinary luxury meets impeccable discretion. Our VIP companionship service represents the absolute pinnacle of elite escort experiences, carefully crafted for distinguished clients who accept nothing less than perfection. Whether you&apos;re a successful business executive, international dignitary, celebrity, or discerning individual seeking the finest companionship, our <strong>VIP companionship escorts service</strong> delivers experiences that transcend ordinary expectations and redefine luxury companionship standards.
 </p>

 <h3 className="text-3xl font-bold text-violet-600 mt-10 mb-6">What Makes Our Escorts Service in VIP Companionship Exceptional</h3>

 <p className="text-gray-700 leading-relaxed mb-6">
 Our <strong>escorts service in VIP companionship</strong> distinguishes itself through uncompromising commitment to excellence, sophistication, and personalized service. Every VIP companion in our exclusive portfolio has been meticulously selected based on exceptional beauty, refined intelligence, cultured background, and innate sophistication. These aren&apos;t merely attractive companions—they are accomplished professionals, successful models, educated intellectuals, and worldly individuals who bring substance, charm, and genuine class to every encounter. Our VIP companions possess the rare combination of stunning physical beauty, sharp intellect, cultural awareness, and social grace that makes them perfect for any high-profile situation.
 </p>

 <p className="text-gray-700 leading-relaxed mb-6">
 The distinction of our <strong>VIP companionship escorts service</strong> lies in attention to every minute detail. From the moment you initiate contact, you&apos;ll experience the difference that true luxury service provides. Our dedicated VIP concierge team handles every aspect of your booking with utmost professionalism and discretion. We understand that our elite clientele demands perfection, and we deliver exactly that through comprehensive planning, flawless execution, and absolute commitment to your satisfaction and privacy.
 </p>

 <h3 className="text-3xl font-bold text-violet-600 mt-10 mb-6">Comprehensive VIP Companionship Services</h3>

 <p className="text-gray-700 leading-relaxed mb-6">
 Our <strong>escorts service in VIP companionship</strong> encompasses a wide spectrum of experiences tailored to your specific requirements. Whether you need an elegant companion for a high-profile business dinner, a sophisticated date for a charity gala, a charming partner for international travel, or intimate private companionship in luxurious surroundings, our VIP escorts deliver exceptional experiences that exceed your highest expectations. Each service is customized to reflect your personal preferences, ensuring every moment feels perfectly tailored to your desires.
 </p>

 <h4 className="text-2xl font-bold text-violet-600 mt-8 mb-4">Elite Social Companionship</h4>
 <p className="text-gray-700 leading-relaxed mb-6">
 Our <strong>VIP companionship escorts service</strong> excels in providing stunning companions for elite social occasions. Whether attending corporate galas, charity events, art exhibitions, fashion shows, or exclusive private parties, our VIP escorts bring elegance, sophistication, and social grace that enhances your presence at any gathering. They understand high society etiquette, engage effortlessly in intelligent conversation, and present themselves with the poise and refinement expected in prestigious social circles. Your VIP companion will seamlessly integrate into any social environment, making you look distinguished while ensuring you enjoy captivating company throughout the event.
 </p>

 <h4 className="text-2xl font-bold text-violet-600 mt-8 mb-4">Luxury Travel Companions</h4>
 <p className="text-gray-700 leading-relaxed mb-6">
 Experience the world in extraordinary company with our <strong>escorts service in VIP companionship</strong> for luxury travel. Our VIP companions are perfect travel partners for international business trips, exotic vacations, weekend getaways, or cultural expeditions. They bring adventure, sophistication, and delightful companionship that transforms ordinary trips into unforgettable journeys. With valid passports and international travel experience, our VIP escorts can accompany you anywhere in the world, providing engaging conversation, pleasant company, and memorable experiences throughout your travels.
 </p>

 <h4 className="text-2xl font-bold text-violet-600 mt-8 mb-4">Private Luxury Experiences</h4>
 <p className="text-gray-700 leading-relaxed mb-6">
 For those seeking intimate private companionship in luxurious settings, our <strong>VIP companionship escorts service</strong> provides discreet, sophisticated encounters in locations. Whether at five-star hotels, exclusive private residences, luxury penthouses, or secluded villas, our VIP companions create intimate, memorable experiences characterized by genuine connection, sensual elegance, and complete discretion. These private encounters offer the perfect opportunity to relax, unwind, and enjoy exceptional companionship away from public scrutiny.
 </p>

 <h3 className="text-3xl font-bold text-violet-600 mt-10 mb-6">Our Distinguished VIP Companions</h3>

 <p className="text-gray-700 leading-relaxed mb-6">
 The companions representing our <strong>escorts service in VIP companionship</strong> are truly exceptional individuals. Many hold advanced degrees from prestigious universities, speak multiple languages fluently, have successful careers in modeling or business, and possess extensive cultural knowledge from international travel and diverse life experiences. They are articulate conversationalists capable of discussing art, business, politics, culture, or any subject with intelligence and insight. Beyond their intellectual capabilities, these companions possess stunning beauty, impeccable style, and magnetic personalities that make every moment in their company absolutely captivating.
 </p>

 <h4 className="text-2xl font-bold text-violet-600 mt-8 mb-4">International Models and Beauty Queens</h4>
 <p className="text-gray-700 leading-relaxed mb-6">
 Our <strong>VIP companionship escorts service</strong> features stunning international models and beauty pageant winners who represent the epitome of physical perfection and refined elegance. These exceptional companions have graced fashion runways, appeared in prestigious publications, and participated in international beauty competitions. They bring professional modeling experience, photogenic beauty, and practiced poise to every encounter. Perfect for clients who appreciate extraordinary beauty combined with professional sophistication, these companions guarantee you&apos;ll have the most stunning date at any event.
 </p>

 <h4 className="text-2xl font-bold text-violet-600 mt-8 mb-4">Accomplished Professionals</h4>
 <p className="text-gray-700 leading-relaxed mb-6">
 Many companions in our <strong>escorts service in VIP companionship</strong> are successful professionals in their own right—entrepreneurs, executives, artists, and influencers who offer companionship as an exclusive service. These accomplished individuals bring real-world success, business acumen, and genuine substance to conversations. They understand the demands of professional life, appreciate discretion, and can relate to your experiences at the highest levels. Their companionship feels authentic and engaging because they bring genuine life experience and accomplishment to every interaction.
 </p>

 <h3 className="text-3xl font-bold text-violet-600 mt-10 mb-6">Exclusive Booking Process</h3>

 <p className="text-gray-700 leading-relaxed mb-6">
 Booking our <strong>VIP companionship escorts service</strong> is a seamless, luxurious experience from start to finish. Our dedicated VIP concierge team provides personalized service, understanding your specific requirements, preferences, and expectations in detail. We take time to match you with the perfect companion based on your stated preferences regarding appearance, personality, interests, and the nature of your engagement. Whether you need a last-minute companion for tonight or want to plan an extensive international trip months in advance, our concierge team ensures every detail is handled with meticulous care and professional excellence.
 </p>

 <p className="text-gray-700 leading-relaxed mb-6">
 The process begins with a confidential consultation where we discuss your needs in complete privacy. Our experienced team asks relevant questions to understand exactly what you&apos;re seeking, then recommends suitable companions from our exclusive portfolio. You&apos;ll receive detailed profiles including professional photos, background information, and service specialties. Once you&apos;ve selected your preferred companion, we coordinate all arrangements including timing, location, transportation, and any special requests. Our 24/7 VIP concierge service ensures you have dedicated support before, during, and after your booking.
 </p>

 <h3 className="text-3xl font-bold text-violet-600 mt-10 mb-6">Absolute Discretion and Privacy</h3>

 <p className="text-gray-700 leading-relaxed mb-6">
 Privacy and discretion are fundamental pillars of our <strong>escorts service in VIP companionship</strong>. We understand that our elite clientele requires absolute confidentiality, and we implement the most rigorous privacy protocols in the industry. All communications are encrypted, personal information is stored securely with strict access controls, and we never share client details with anyone under any circumstances. Our VIP companions are carefully vetted professionals who understand and respect the critical importance of discretion. They maintain absolute confidentiality about all clients and encounters, ensuring your privacy is protected at all times.
 </p>

 <p className="text-gray-700 leading-relaxed mb-6">
 Our <strong>VIP companionship escorts service</strong> employs sophisticated privacy measures including secure communication channels, discreet transportation arrangements, and careful coordination to avoid unwanted attention. We can arrange private entrances at hotels, coordinate timing to ensure maximum discretion, and handle all logistics with the utmost care for your privacy. Our companions arrive and depart discreetly, dress appropriately for the situation, and conduct themselves with the professionalism expected of true VIP service.
 </p>

 <h3 className="text-3xl font-bold text-violet-600 mt-10 mb-6"> Pricing and Exclusive Packages</h3>

 <p className="text-gray-700 leading-relaxed mb-6">
 Our <strong>escorts service in VIP companionship</strong> reflects its nature through competitive yet exclusive pricing. VIP companionship represents the highest tier of escort services, and our rates reflect the exceptional quality, sophistication, and exclusivity you receive. We offer transparent pricing with no hidden fees, and all costs are clearly communicated during the booking process. Our rates vary based on companion selection, duration of engagement, services required, and whether travel is involved. Extended bookings, overnight companionship, and international travel arrangements are available with specially tailored packages.
 </p>

 <p className="text-gray-700 leading-relaxed mb-6">
 We accept various payment methods for your convenience, including cash, bank transfers, and cryptocurrency for maximum privacy. Regular clients enjoy priority access to our most sought-after companions, special rates for extended bookings, and exclusive membership benefits. Our VIP client program rewards loyalty with enhanced services, complimentary upgrades, and access to special companions reserved exclusively for our most valued clients. We also offer bespoke packages for clients requiring regular companionship services, providing excellent value while maintaining our uncompromising standards of quality and discretion.
 </p>

 <h3 className="text-3xl font-bold text-violet-600 mt-10 mb-6">Safety, Verification and Standards</h3>

 <p className="text-gray-700 leading-relaxed mb-6">
 Our <strong>VIP companionship escorts service</strong> maintains the highest standards of safety and verification. Every companion undergoes comprehensive background verification, identity confirmation, and regular health screening. We maintain strict health and wellness protocols, with all companions providing updated health certificates and adhering to rigorous hygiene standards. For significant bookings, we may request basic client verification to ensure mutual safety and respect. These measures create a secure, professional environment where both clients and companions can interact with complete confidence.
 </p>

 <h3 className="text-3xl font-bold text-violet-600 mt-10 mb-6">Available Across All Locations</h3>

 <p className="text-gray-700 leading-relaxed mb-6">
 Our <strong>escorts service in VIP companionship</strong> is available throughout Surat&apos;s most prestigious locations including Vesu, Piplod, Citylight, Adajan, Ghod Dod Road, and all other upscale areas. We also serve clients in luxury hotels, exclusive resorts, private residences, and can arrange international travel companionship to any destination worldwide. Whether you&apos;re in Surat or traveling globally, our VIP concierge service ensures you have access to exceptional companionship wherever you are.
 </p>

 <p className="text-gray-700 leading-relaxed mb-6">
 Experience the ultimate in luxury companionship with our exclusive <strong>escorts service in VIP companionship</strong>. Contact our VIP concierge team now to begin your journey into extraordinary companionship. Available 24/7 to serve the world&apos;s most discerning clients. Discover why sophisticated individuals worldwide choose our service for the finest VIP companionship experiences. Your unforgettable luxury experience awaits!
 </p>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-20 bg-gradient-to-br from-violet-50 via-white to-purple-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold text-violet-700 mb-4">Frequently Asked Questions</h2>
 <p className="text-xl text-gray-600">Common questions about our escorts service in VIP companionship</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="space-y-6">
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-violet-700 mb-3">What makes your escorts service in VIP companionship different from regular escort services?</h3>
 <p className="text-gray-600">Our VIP companionship service offers the highest tier of luxury escorts featuring internationally recognized models, accomplished professionals, and exceptionally cultured individuals. These companions possess advanced education, multilingual abilities, and extensive social experience making them perfect for elite events and sophisticated clientele.</p>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-violet-700 mb-3">How do I book escorts service in VIP companionship?</h3>
 <p className="text-gray-600">Contact our VIP concierge team via phone, WhatsApp, or website. We provide personalized consultation to understand your requirements, recommend suitable companions, and handle all arrangements with complete discretion. Advance booking is recommended for popular companions and international travel.</p>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-violet-700 mb-3">What is the pricing for escorts service in VIP companionship?</h3>
 <p className="text-gray-600">Our VIP companionship rates start from ₹35,000 and vary based on companion selection, duration, and services required. We offer transparent pricing with no hidden charges. Extended bookings, overnight companionship, and international travel have specialized packages. Contact our concierge for detailed pricing.</p>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-violet-700 mb-3">Can VIP companions travel internationally?</h3>
 <p className="text-gray-600">Yes! Our escorts service in VIP companionship includes luxury travel companions with valid passports and international experience. They can accompany you anywhere in the world for business trips, vacations, or events. We handle all travel arrangements including flights, accommodation, and documentation.</p>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-violet-700 mb-3">How is privacy maintained in your escorts service in VIP companionship?</h3>
 <p className="text-gray-600">We implement military-grade privacy protocols including encrypted communications, secure data storage, and strict confidentiality agreements. Our VIP companions are vetted professionals who understand discretion. We arrange private entrances, discreet transportation, and coordinate all logistics to ensure maximum privacy.</p>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-violet-700 mb-3">What languages do your VIP companions speak?</h3>
 <p className="text-gray-600">Our escorts service in VIP companionship features multilingual companions fluent in English, Hindi, Gujarati, and many also speak Russian, French, Spanish, German, or other international languages. We can match you with companions who speak your preferred languages for seamless communication.</p>
 </div>
 </div>

 <div className="space-y-6">
 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-violet-700 mb-3">Are your VIP companions verified and safe?</h3>
 <p className="text-gray-600">Absolutely. Every companion in our escorts service in VIP companionship undergoes comprehensive background verification, identity confirmation, and regular health screening. We maintain strict health protocols with updated certificates. Your safety and wellbeing are our top priorities.</p>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-violet-700 mb-3">Can I request a specific type of companion?</h3>
 <p className="text-gray-600">Yes! Our VIP concierge team works to match your exact preferences regarding appearance, personality, interests, background, and specialties. Whether you prefer international models, accomplished professionals, or specific characteristics, we customize selections to meet your requirements perfectly.</p>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-violet-700 mb-3">What events are suitable for escorts service in VIP companionship?</h3>
 <p className="text-gray-600">Our VIP companions are perfect for corporate galas, charity events, business dinners, fashion shows, art exhibitions, weddings, private parties, luxury travel, cultural events, and intimate private meetings. They adapt gracefully to any sophisticated social situation with appropriate attire and etiquette.</p>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-violet-700 mb-3">How far in advance should I book?</h3>
 <p className="text-gray-600">For escorts service in VIP companionship, we recommend booking 24-48 hours in advance, especially for popular companions or special occasions. For international travel or extended bookings, advance notice of 1-2 weeks is ideal. However, we also accommodate last-minute VIP requests when possible.</p>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-violet-700 mb-3">Do you offer extended or overnight VIP companionship?</h3>
 <p className="text-gray-600">Yes! Our escorts service in VIP companionship includes extended engagements, overnight companionship, weekend packages, and multi-day arrangements. These extended bookings receive special rates and allow for deeper connection and more relaxed, enjoyable experiences with your chosen companion.</p>
 </div>

 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
 <h3 className="text-xl font-bold text-violet-700 mb-3">What payment methods do you accept?</h3>
 <p className="text-gray-600">We accept cash, bank transfers, and cryptocurrency for maximum convenience and privacy. All transactions are processed securely and discreetly. Payment terms are clearly communicated during booking, and we offer flexible options for regular clients and extended engagements.</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 </div>
 );
}