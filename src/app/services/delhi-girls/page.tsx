'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DelhiGirlsService() {
  const serviceFeatures = [
    "Premium verified Delhi companions",
    "24/7 availability across Surat",
    "Complete privacy and discretion",
    "High-quality exclusive service",
    "Flexible in-call and outcall options",
    "Sophisticated and cultured companions"
  ];

  const availableLocations = [
    { name: "Varachha", link: "/locations/varachha", price: "₹35,000+" },
    { name: "Adajan", link: "/locations/adajan", price: "₹35,000+" },
    { name: "Vesu", link: "/locations/vesu", price: "₹40,000+" },
    { name: "Citylight", link: "/locations/citylight", price: "₹35,000+" },
    { name: "Althan", link: "/locations/althan", price: "₹35,000+" },
    { name: "Piplod", link: "/locations/piplod", price: "₹40,000+" },
    { name: "Udhna", link: "/locations/udhna", price: "₹35,000+" },
    { name: "Athwa", link: "/locations/athwa", price: "₹35,000+" },
    { name: "Rander", link: "/locations/rander", price: "₹35,000+" },
    { name: "Ghod Dod Road", link: "/locations/ghod-dod-road", price: "₹40,000+" },
    { name: "Ring Road", link: "/locations/ring-road", price: "₹35,000+" },
    { name: "Nanpura", link: "/locations/nanpura", price: "₹35,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-5xl">👑</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Delhi Girls Escort Service in Surat</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Premium Delhi escort companions providing sophisticated companionship with complete discretion across Surat
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Premium Delhi Girls Escort Service</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Experience the finest Delhi girls escort service in Surat with verified, sophisticated companions available 24/7. 
                Our Delhi escorts provide exclusive, high-quality companionship for discerning clients who appreciate elegance, 
                culture, and personalized attention with complete privacy.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Service Features:</h3>
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-3 text-purple-500 text-xl">👑</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/Delhi-Girls.webp"
                  alt="Delhi Girls Escort Service in Surat"
                  width={600}
                  height={750}
                  className="w-full h-full object-contain bg-gradient-to-br from-purple-100 to-pink-100"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 mb-16">
            <h3 className="text-3xl font-bold text-center text-purple-800 mb-8">Booking Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📞</span>
                </div>
                <h4 className="text-xl font-bold text-purple-700 mb-2">24/7 Booking</h4>
                <p className="text-gray-600">Available round the clock for your convenience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔒</span>
                </div>
                <h4 className="text-xl font-bold text-purple-700 mb-2">Complete Privacy</h4>
                <p className="text-gray-600">Absolute discretion and confidentiality guaranteed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⭐</span>
                </div>
                <h4 className="text-xl font-bold text-purple-700 mb-2">Premium Quality</h4>
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
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-purple-700 mb-2">{location.name}</h4>
                      <p className="text-purple-600 font-semibold">{location.price}</p>
                    </div>
                    <span className="text-3xl">👑</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Book Delhi Girls Service?</h3>
            <p className="text-xl mb-8 text-purple-100">Experience premium companionship with our verified Delhi escorts across Surat</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
                Book Now
              </Link>
              <Link href="/gallery" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
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
            <h2 className="text-4xl font-bold text-purple-700 mb-8">Discover Delhi Girls Escort Service in Surat - Premium Companionship Available 24/7</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to Surat&apos;s most exclusive <strong>Delhi girls escort service</strong>, where premium quality meets absolute sophistication. Our Delhi girls escort service represents the finest in high-end companionship, carefully curated for discerning clients who appreciate elegance, culture, and personalized attention. Whether you&apos;re seeking companionship for business events, social occasions, or intimate encounters, our <strong>Delhi girls escort service in Surat</strong> delivers unforgettable experiences that exceed your expectations.
            </p>

            <h3 className="text-3xl font-bold text-purple-600 mt-10 mb-6">Why Choose Our Delhi Girls Escort Service</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>Delhi girls escort service</strong> stands out through unwavering commitment to quality, professionalism, and client satisfaction. Each Delhi companion has been carefully selected based on beauty, sophistication, intelligence, and professional service capabilities. We maintain the highest standards of verification, ensuring every escort meets our rigorous quality requirements. Our Delhi companions are educated, cultured, and understand the importance of discretion, respect, and creating genuine connections.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              What distinguishes our <strong>Delhi girls escort service in Surat</strong> is our dedication to premium experiences. We understand that clients seeking Delhi escorts appreciate sophistication, elegance, and refined companionship. Our professional booking team takes time to understand your specific requirements, recommending companions who perfectly match your preferences. From initial contact through your entire experience, we ensure seamless service, absolute confidentiality, and complete satisfaction.
            </p>

            <h3 className="text-3xl font-bold text-purple-600 mt-10 mb-6">Comprehensive Delhi Girls Services</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>Delhi girls escort service</strong> encompasses a wide range of premium companionship options designed to fulfill diverse needs and occasions. Whether you require a sophisticated companion for corporate events, business dinners, social gatherings, travel, or private meetings, we provide flexible services tailored to your situation. Each service is customized to reflect your personal preferences and the high standards you expect.
            </p>

            <h4 className="text-2xl font-bold text-purple-600 mt-8 mb-4">Exclusive In-Call Experiences</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>Delhi girls escort service in Surat</strong> includes premium in-call options at carefully selected, secure luxury locations throughout the city. These exclusive venues feature sophisticated interiors, modern amenities, and complete privacy. Perfect for clients who prefer not to host at personal residences, our in-call locations provide elegant, comfortable settings for memorable encounters. Each venue maintains the highest standards of luxury and discretion.
            </p>

            <h4 className="text-2xl font-bold text-purple-600 mt-8 mb-4">Convenient Outcall Services</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              For maximum convenience and privacy, our <strong>Delhi girls escort service</strong> offers outcall services where companions come directly to your preferred location. Whether you&apos;re at a luxury hotel, private residence, or any other venue across Surat, our Delhi escorts arrive promptly, elegantly presented, and ready to provide exceptional companionship. Outcall services are particularly popular among business travelers and clients who value comfort and privacy.
            </p>

            <h3 className="text-3xl font-bold text-purple-600 mt-10 mb-6">Our Exceptional Delhi Girls Companions</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              The companions representing our <strong>Delhi girls escort service in Surat</strong> are truly exceptional individuals. Each Delhi escort brings unique qualities, sophistication, and specializations that cater to discerning client preferences. Our selection process is thorough and comprehensive, ensuring only the most beautiful, intelligent, cultured, and professional companions join our exclusive roster. We verify identities, conduct background checks, and maintain regular health screenings.
            </p>

            <h4 className="text-2xl font-bold text-purple-600 mt-8 mb-4">Verified Premium Escorts</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every companion in our <strong>Delhi girls escort service</strong> undergoes comprehensive verification. We confirm identities, verify photos, and ensure all information is accurate and genuine. This verification process protects both clients and companions, creating a safe, trustworthy environment for all interactions. Our Delhi companions are professional, reliable, and committed to providing outstanding service.
            </p>

            <h4 className="text-2xl font-bold text-purple-600 mt-8 mb-4">Sophisticated and Cultured Companions</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>Delhi girls escort service in Surat</strong> features sophisticated, well-educated companions who are comfortable in any social setting. Whether attending high-profile business events, fine dining experiences, cultural occasions, or private meetings, our Delhi escorts adapt gracefully with appropriate etiquette, conversation skills, and social awareness. Browse our detailed gallery with verified photos and comprehensive profiles.
            </p>

            <h3 className="text-3xl font-bold text-purple-600 mt-10 mb-6">Simple Booking Process</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Booking our <strong>Delhi girls escort service</strong> is straightforward, secure, and completely confidential. Our user-friendly process ensures you can arrange premium companionship quickly and discreetly. Start by browsing our online gallery featuring detailed companion profiles with verified photos, service descriptions, availability, and rates. Once you&apos;ve selected your preferred Delhi escort, contact our booking team via phone, WhatsApp, or website.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our booking team operates 24/7, ensuring you can arrange companionship whenever you desire. We recommend advance booking for popular companions or special occasions, though we accommodate same-day requests whenever possible. All communications are handled with complete discretion and professionalism.
            </p>

            <h3 className="text-3xl font-bold text-purple-600 mt-10 mb-6">Absolute Privacy and Discretion</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Privacy is fundamental to our <strong>Delhi girls escort service in Surat</strong>. We implement comprehensive confidentiality protocols protecting all client information. Our secure communication channels, encrypted data storage, and strict privacy policies ensure your personal details remain completely confidential. We never share client information under any circumstances.
            </p>

            <h3 className="text-3xl font-bold text-purple-600 mt-10 mb-6">Transparent Premium Pricing</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>Delhi girls escort service</strong> features honest, transparent pricing with no hidden charges. Rates reflect the premium quality and exclusivity of our Delhi companions. We clearly communicate all costs during booking, ensuring you understand exactly what to expect. Our pricing is competitive while reflecting the exceptional quality and professionalism we deliver.
            </p>

            <h3 className="text-3xl font-bold text-purple-600 mt-10 mb-6">Safety and Verification Standards</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Safety is paramount in our <strong>Delhi girls escort service in Surat</strong>. We maintain rigorous health and safety protocols. All companions undergo regular health screenings and maintain updated health certificates. We implement verification procedures for both escorts and clients to ensure mutual safety and respect.
            </p>

            <h3 className="text-3xl font-bold text-purple-600 mt-10 mb-6">Available Across All Surat Locations</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>Delhi girls escort service</strong> operates throughout Surat including Varachha, Adajan, Vesu, Piplod, Citylight, Althan, Udhna, Athwa, Rander, Ghod Dod Road, Ring Road, Nanpura, and all other areas. Wherever you are in Surat, our premium companionship service is readily accessible with prompt, professional delivery.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Experience the finest <strong>Delhi girls escort service in Surat</strong> with our professional, sophisticated, and discreet companionship solutions. Contact us now to book your ideal Delhi companion and discover why we&apos;re the most trusted name in premium escort services. Available 24/7 for your convenience!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about Delhi Girls escort service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-700 mb-3">How do I book Delhi Girls escort service?</h3>
                <p className="text-gray-600">You can book through our website, WhatsApp, or phone call. Browse our gallery, select your preferred Delhi companion, and contact our booking team. We handle all arrangements with complete discretion and professionalism. Available 24/7.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-700 mb-3">What areas do you cover in Surat?</h3>
                <p className="text-gray-600">Our Delhi girls escort service is available throughout Surat including Varachha, Adajan, Vesu, Piplod, Citylight, Althan, Udhna, Athwa, Rander, Ghod Dod Road, Ring Road, Nanpura, and all other locations.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-700 mb-3">Are your Delhi escorts verified and safe?</h3>
                <p className="text-gray-600">Yes, absolutely. Every Delhi companion undergoes comprehensive verification including identity confirmation, background checks, and regular health screening. We maintain strict safety protocols ensuring secure, professional experiences.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-700 mb-3">What are your rates and payment options?</h3>
                <p className="text-gray-600">Our premium rates start from ₹35,000+ and vary based on companion selection, duration, and services. We offer transparent pricing with no hidden charges. Payment methods include cash, bank transfer, and digital payments.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-700 mb-3">How is my privacy protected?</h3>
                <p className="text-gray-600">Privacy is our top priority. We use encrypted communications, secure data storage, and strict confidentiality protocols. All client information remains completely private. Our companions maintain absolute discretion.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-700 mb-3">What makes Delhi girls special?</h3>
                <p className="text-gray-600">Our Delhi companions are sophisticated, well-educated, cultured, and experienced in providing premium companionship. They combine beauty with intelligence, elegance with charm, making them perfect for high-end occasions and discerning clients.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-700 mb-3">Do you offer both in-call and outcall services?</h3>
                <p className="text-gray-600">Yes, our Delhi girls escort service includes both in-call services at premium private locations and outcall services where companions come to your preferred venue—luxury hotel, residence, or any location across Surat.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-700 mb-3">How far in advance should I book?</h3>
                <p className="text-gray-600">We recommend booking 2-4 hours in advance for best availability, especially for popular Delhi companions. However, we also accommodate same-day requests whenever possible. Contact us anytime—we operate 24/7.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-700 mb-3">What occasions are Delhi escorts suitable for?</h3>
                <p className="text-gray-600">Delhi escorts are perfect for corporate events, business dinners, social gatherings, travel companionship, private meetings, and intimate occasions. They adapt gracefully to any situation with appropriate etiquette and conversation skills.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-700 mb-3">Are photos of Delhi escorts genuine?</h3>
                <p className="text-gray-600">Yes, all photos in our gallery are 100% genuine and verified. We maintain honest representation with real photos of our Delhi companions. What you see is exactly who you meet—no fake photos or misleading images.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-700 mb-3">Do you offer extended or overnight bookings?</h3>
                <p className="text-gray-600">Yes! We offer hourly rates, extended sessions, full-night companionship, and multi-day packages. Extended bookings receive special rates and allow for more relaxed, intimate experiences with your chosen Delhi companion.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-700 mb-3">What makes your Delhi girls service different?</h3>
                <p className="text-gray-600">Our commitment to premium quality, verified sophisticated companions, transparent pricing, absolute discretion, 24/7 availability, and personalized service sets us apart. We focus on exceptional experiences for discerning clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
