'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SocialEventsService() {
  const serviceFeatures = [
    "Perfect for social gatherings and parties",
    "Excellent networking and social skills",
    "Charming and engaging personalities",
    "Experience with various social settings",
    "Professional social etiquette",
    "Confident in group environments"
  ];

  const availableLocations = [
    { name: "Varachha", link: "/locations/varachha", price: "₹15,000+" },
    { name: "Adajan", link: "/locations/adajan", price: "₹14,000+" },
    { name: "Vesu", link: "/locations/vesu", price: "₹16,000+" },
    { name: "Citylight", link: "/locations/citylight", price: "₹15,000+" },
    { name: "Althan", link: "/locations/althan", price: "₹15,000+" },
    { name: "Piplod", link: "/locations/piplod", price: "₹16,000+" },
    { name: "Udhna", link: "/locations/udhna", price: "₹15,000+" },
    { name: "Athwa", link: "/locations/athwa", price: "₹15,000+" },
    { name: "Rander", link: "/locations/rander", price: "₹15,000+" },
    { name: "Ghod Dod Road", link: "/locations/ghod-dod-road", price: "₹16,000+" },
    { name: "Ring Road", link: "/locations/ring-road", price: "₹15,000+" },
    { name: "Nanpura", link: "/locations/nanpura", price: "₹15,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-lime-600 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-5xl">🎭</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Social Events</h1>
          <p className="text-xl md:text-2xl text-lime-100 max-w-3xl mx-auto">
            Charming companions perfect for social gatherings, networking events, and parties
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Social Event Companions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Make every social occasion memorable with our charming and sophisticated companions. 
                Perfect for networking events, social gatherings, community functions, and parties 
                where you want an engaging and personable partner by your side.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-lime-600 mb-4">Service Features:</h3>
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-3 text-lime-500 text-xl">🎭</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/Social Events.webp"
                  alt="Social Events Service in Surat"
                  width={600}
                  height={750}
                  className="w-full h-full object-contain bg-gradient-to-br from-lime-100 to-green-100"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-3xl p-12 mb-16">
            <h3 className="text-3xl font-bold text-center text-lime-800 mb-8">Booking Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📞</span>
                </div>
                <h4 className="text-xl font-bold text-lime-700 mb-2">24/7 Booking</h4>
                <p className="text-gray-600">Available round the clock for your convenience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔒</span>
                </div>
                <h4 className="text-xl font-bold text-lime-700 mb-2">Complete Privacy</h4>
                <p className="text-gray-600">Absolute discretion and confidentiality guaranteed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⭐</span>
                </div>
                <h4 className="text-xl font-bold text-lime-700 mb-2">Premium Quality</h4>
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
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-lime-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-lime-700 mb-2">{location.name}</h4>
                      <p className="text-lime-600 font-semibold">{location.price}</p>
                    </div>
                    <span className="text-3xl">🎭</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-lime-600 to-green-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Book Social Events Service?</h3>
            <p className="text-xl mb-8 text-lime-100">Charming companions for your social gatherings and networking events</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-lime-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-lime-50 transition-all duration-300 transform hover:scale-105">
                Book Now
              </Link>
              <Link href="/gallery" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-lime-600 transition-all duration-300 transform hover:scale-105">
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
            <h2 className="text-4xl font-bold text-lime-700 mb-8">Discover Premium Social Events Escort Service in Surat - Luxury Companionship Redefined</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to Surat&apos;s most trusted <strong>social-event-escort-service</strong>, where exceptional quality meets absolute discretion. Our social events service represents the finest in professional companionship, carefully designed for discerning clients who appreciate excellence, sophistication, and personalized attention. Whether you&apos;re seeking companionship for special occasions, intimate encounters, or simply desire the pleasure of beautiful company, our <strong>social-event-escort-service in Surat</strong> delivers unforgettable experiences that exceed your highest expectations.
            </p>

            <h3 className="text-3xl font-bold text-lime-600 mt-10 mb-6">Why Choose Our Social Events Escort Service</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>social-event-escort-service</strong> stands out through unwavering commitment to quality, professionalism, and client satisfaction. Each companion in our exclusive collection has been carefully selected based on beauty, personality, intelligence, and professional service capabilities. We maintain the highest standards of verification, ensuring every escort meets our rigorous quality requirements. Our companions understand the importance of discretion, respect, and creating genuine connections that make every moment memorable.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              What distinguishes our <strong>social-event-escort-service in Surat</strong> is our dedication to personalized experiences. We understand that every client has unique preferences, desires, and expectations. Our professional booking team takes time to understand your specific requirements, recommending companions who perfectly match your preferences. From initial contact through your entire experience, we ensure seamless service, absolute confidentiality, and complete satisfaction. Our 24/7 availability means you can access premium companionship whenever you desire.
            </p>

            <h3 className="text-3xl font-bold text-lime-600 mt-10 mb-6">Comprehensive Social Events Services</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>social-event-escort-service</strong> encompasses a wide range of companionship options designed to fulfill diverse needs and occasions. Whether you require a companion for social events, business functions, romantic dinners, private meetings, or extended companionship, we provide flexible services tailored to your situation. Each service is customized to reflect your personal preferences, ensuring experiences that feel perfectly suited to your desires and circumstances.
            </p>

            <h4 className="text-2xl font-bold text-lime-600 mt-8 mb-4">Premium In-Call Experiences</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>social-event-escort-service in Surat</strong> includes premium in-call options at carefully selected, secure locations throughout the city. These discreet venues feature luxurious interiors, modern amenities, and complete privacy. Perfect for clients who prefer not to host at personal residences, our in-call locations provide comfortable, elegant settings for memorable encounters. Each venue maintains the highest standards of cleanliness, luxury, and discretion, creating the ideal atmosphere for your companionship experience.
            </p>

            <h4 className="text-2xl font-bold text-lime-600 mt-8 mb-4">Convenient Outcall Services</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              For maximum convenience and privacy, our <strong>social-event-escort-service</strong> offers outcall services where companions come directly to your preferred location. Whether you&apos;re at a luxury hotel, private residence, or any other venue across Surat, our escorts arrive promptly, elegantly presented, and ready to provide exceptional companionship. Outcall services are particularly popular among business travelers and clients who value the comfort and privacy of their own environment.
            </p>

            <h3 className="text-3xl font-bold text-lime-600 mt-10 mb-6">Our Exceptional Social Events Companions</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The companions representing our <strong>social-event-escort-service in Surat</strong> are truly exceptional individuals. Each escort brings unique qualities, personality, and specializations that cater to diverse client preferences. Our selection process is thorough and comprehensive, ensuring only the most beautiful, intelligent, and professional companions join our exclusive roster. We verify identities, conduct background checks, and maintain regular health screenings to guarantee safety and quality.
            </p>

            <h4 className="text-2xl font-bold text-lime-600 mt-8 mb-4">Verified Professional Escorts</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every companion in our <strong>social-event-escort-service</strong> undergoes comprehensive verification. We confirm identities, verify photos, and ensure all information is accurate and genuine. This verification process protects both clients and companions, creating a safe, trustworthy environment for all interactions. Our companions are professional, reliable, and committed to providing outstanding service that leaves you completely satisfied.
            </p>

            <h4 className="text-2xl font-bold text-lime-600 mt-8 mb-4">Diverse Selection for Every Preference</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>social-event-escort-service in Surat</strong> features a diverse collection of companions to suit every taste. Whether you prefer Indian beauties, international models, petite companions, or curvaceous figures, fair complexions or dusky skin tones, youthful energy or mature sophistication—we have companions matching every preference. Browse our detailed gallery with verified photos, comprehensive descriptions, and honest service information to find your perfect match.
            </p>

            <h3 className="text-3xl font-bold text-lime-600 mt-10 mb-6">Simple Booking Process</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Booking our <strong>social-event-escort-service</strong> is straightforward, secure, and completely confidential. Our user-friendly process ensures you can arrange companionship quickly and discreetly. Start by browsing our online gallery featuring detailed companion profiles with verified photos, service descriptions, availability, and rates. Once you&apos;ve selected your preferred escort, contact our booking team via phone, WhatsApp, or website.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our booking team operates 24/7, ensuring you can arrange companionship whenever you desire. We recommend advance booking for popular companions or special occasions, though we accommodate same-day and last-minute requests whenever possible. All communications are handled with complete discretion and professionalism.
            </p>

            <h3 className="text-3xl font-bold text-lime-600 mt-10 mb-6">Absolute Privacy and Discretion</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Privacy is fundamental to our <strong>social-event-escort-service in Surat</strong>. We implement comprehensive confidentiality protocols protecting all client information. Our secure communication channels, encrypted data storage, and strict privacy policies ensure your personal details remain completely confidential. We never share client information with third parties under any circumstances.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              From initial contact through your entire experience, we maintain absolute discretion. Our companions arrive and depart discreetly, dress appropriately for each situation, and conduct themselves with professionalism. We coordinate timing and logistics carefully to ensure maximum privacy.
            </p>

            <h3 className="text-3xl font-bold text-lime-600 mt-10 mb-6">Transparent Pricing</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>social-event-escort-service</strong> features honest, transparent pricing with no hidden charges. Rates vary based on companion selection, service duration, and specific requirements. We clearly communicate all costs during booking, ensuring you understand exactly what to expect. Our pricing is competitive while reflecting the premium quality and professionalism we deliver.
            </p>

            <h3 className="text-3xl font-bold text-lime-600 mt-10 mb-6">Safety and Verification Standards</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Safety is paramount in our <strong>social-event-escort-service in Surat</strong>. We maintain rigorous health and safety protocols. All companions undergo regular health screenings and maintain updated health certificates. We implement verification procedures for both escorts and clients to ensure mutual safety and respect.
            </p>

            <h3 className="text-3xl font-bold text-lime-600 mt-10 mb-6">Available Across All Surat Locations</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>social-event-escort-service</strong> operates throughout Surat including Varachha, Adajan, Vesu, Piplod, Citylight, Althan, Udhna, Athwa, Rander, Ghod Dod Road, Ring Road, Nanpura, and all other areas. Wherever you are in Surat, our premium companionship service is readily accessible with prompt, professional delivery.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Experience the finest <strong>social-event-escort-service in Surat</strong> with our professional, discreet, and premium companionship solutions. Contact us now to book your ideal companion and discover why we&apos;re the most trusted name in Surat escort services. Available 24/7 for your convenience!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-lime-50 via-white to-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lime-700 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about social events escort service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-lime-700 mb-3">How do I book social events escort service?</h3>
                <p className="text-gray-600">You can book through our website, WhatsApp, or phone call. Browse our gallery, select your preferred companion, and contact our booking team. We handle all arrangements with complete discretion and professionalism. Available 24/7.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-lime-700 mb-3">What areas do you cover in Surat?</h3>
                <p className="text-gray-600">Our social-event-escort-service is available throughout Surat including Varachha, Adajan, Vesu, Piplod, Citylight, Althan, Udhna, Athwa, Rander, Ghod Dod Road, Ring Road, Nanpura, and all other locations across the city.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-lime-700 mb-3">Are your escorts verified and safe?</h3>
                <p className="text-gray-600">Yes, absolutely. Every companion undergoes comprehensive verification including identity confirmation, background checks, and regular health screening. We maintain strict safety protocols ensuring secure, professional experiences for all clients.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-lime-700 mb-3">What are your rates and payment options?</h3>
                <p className="text-gray-600">Our rates vary based on companion selection, duration, and services. We offer transparent pricing with no hidden charges. Payment methods include cash, bank transfer, and digital payments. All costs are clearly communicated during booking.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-lime-700 mb-3">How is my privacy protected?</h3>
                <p className="text-gray-600">Privacy is our top priority. We use encrypted communications, secure data storage, and strict confidentiality protocols. All client information remains completely private. Our companions are professionals who maintain absolute discretion.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-lime-700 mb-3">Can I request specific preferences?</h3>
                <p className="text-gray-600">Absolutely! Our booking team works to match your exact preferences regarding appearance, personality, age, services, and any special requirements. We customize every booking to ensure your complete satisfaction.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-lime-700 mb-3">Do you offer both in-call and outcall services?</h3>
                <p className="text-gray-600">Yes, our social-event-escort-service includes both in-call services at secure private locations and outcall services where companions come to your preferred venue—hotel, residence, or any location across Surat.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-lime-700 mb-3">How far in advance should I book?</h3>
                <p className="text-gray-600">We recommend booking 2-4 hours in advance for best availability, especially for popular companions. However, we also accommodate same-day and last-minute requests whenever possible. Contact us anytime—we operate 24/7.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-lime-700 mb-3">What types of occasions do you cater to?</h3>
                <p className="text-gray-600">We provide companions for all occasions including business events, dinner dates, parties, social gatherings, travel, private meetings, and intimate companionship. Our escorts adapt gracefully to any situation with appropriate attire and etiquette.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-lime-700 mb-3">Are photos of escorts genuine?</h3>
                <p className="text-gray-600">Yes, all photos in our gallery are 100% genuine and verified. We maintain honest representation with real photos of our companions. What you see is exactly who you meet—no fake photos or misleading images.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-lime-700 mb-3">Do you offer extended or overnight bookings?</h3>
                <p className="text-gray-600">Yes! We offer hourly rates, extended sessions, full-night companionship, and multi-day packages. Extended bookings receive special rates and allow for more relaxed, intimate experiences with your chosen companion.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-lime-700 mb-3">What makes your service different from others?</h3>
                <p className="text-gray-600">Our commitment to quality, verified escorts, transparent pricing, absolute discretion, 24/7 availability, and personalized service sets us apart. We focus on genuine client satisfaction, not just transactions. Experience the difference yourself!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}