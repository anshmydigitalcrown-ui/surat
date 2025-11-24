'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CallGirlService() {
  const serviceFeatures = [
    "Beautiful and elegant companions",
    "Professional and discreet service",
    "Verified profiles with genuine photos",
    "Available 24/7 for bookings",
    "Outcall and incall services",
    "Customized experiences for clients"
  ];

  const availableLocations = [
    { name: "Varachha", link: "/locations/varachha", price: "₹15,000+" },
    { name: "Adajan", link: "/locations/adajan", price: "₹14,000+" },
    { name: "Vesu", link: "/locations/vesu", price: "₹16,000+" },
    { name: "Citylight", link: "/locations/citylight", price: "₹15,000+" },
    { name: "Althan", link: "/locations/althan", price: "₹15,000+" },
    { name: "Piplod", link: "/locations/piplod", price: "₹16,000+" },
    { name: "Udhna", link: "/locations/udhna", price: "₹14,000+" },
    { name: "Athwa", link: "/locations/athwa", price: "₹15,000+" },
    { name: "Rander", link: "/locations/rander", price: "₹14,000+" },
    { name: "Ghod Dod Road", link: "/locations/ghod-dod-road", price: "₹16,000+" },
    { name: "Ring Road", link: "/locations/ring-road", price: "₹15,000+" },
    { name: "Nanpura", link: "/locations/nanpura", price: "₹15,000+" }
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Call Girl Service in Surat",
            "description": "Professional call girl service in Surat with verified companions available 24/7",
            "provider": {
              "@type": "LocalBusiness",
              "name": "RashmiKapoor Escort Service",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              }
            },
            "areaServed": "Surat",
            "url": "https://surat-escorts.vercel.app/services/call-girl"
          })
        }}
      />

    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-pink-500 to-rose-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-5xl">💕</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Call Girl Service in Surat</h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
            Professional call girls in Surat available 24/7 - Verified profiles with complete discretion
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Best Call Girl Service in Surat</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Looking for professional <strong>call girls in Surat</strong>? We provide the best <strong>call girl service in Surat</strong> with verified companions who are beautiful, sophisticated, and discreet. Our <strong>Surat call girls</strong> are available 24/7 for both incall and outcall services across all major locations.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-pink-600 mb-4">Service Features:</h3>
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-3 text-pink-500 text-xl">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/Premium Call Girl.webp"
                  alt="Call Girl Service in Surat - Professional Escorts"
                  width={600}
                  height={750}
                  className="w-full h-full object-contain bg-gradient-to-br from-pink-100 to-rose-100"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-12 mb-16">
            <h3 className="text-3xl font-bold text-center text-pink-800 mb-8">Booking Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📞</span>
                </div>
                <h4 className="text-xl font-bold text-pink-700 mb-2">24/7 Booking</h4>
                <p className="text-gray-600">Available round the clock for your convenience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔒</span>
                </div>
                <h4 className="text-xl font-bold text-pink-700 mb-2">Complete Privacy</h4>
                <p className="text-gray-600">100% discreet and confidential service</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">✓</span>
                </div>
                <h4 className="text-xl font-bold text-pink-700 mb-2">Verified Profiles</h4>
                <p className="text-gray-600">All companions are verified with genuine photos</p>
              </div>
            </div>
          </div>

          {/* SEO Content Section */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-4xl font-bold text-pink-700 mb-8">Call Girls in Surat - Professional Escort Service</h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Call Girl Service in Surat?</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When it comes to finding the best <strong>call girls in Surat</strong>, we stand out as the premier choice for discerning clients. Our <strong>call girl service in Surat</strong> is renowned for providing beautiful, sophisticated, and professional companions who understand the importance of discretion and quality service. Each of our <strong>Surat call girls</strong> is carefully selected and verified to ensure you receive an unforgettable experience.
              </p>

              <h4 className="text-xl font-bold text-pink-600 mb-3">Verified Call Girls in Surat</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                All our <strong>call girls Surat</strong> profiles are 100% verified with genuine photos. We maintain strict verification processes to ensure authenticity and quality. Whether you&apos;re looking for a companion for a social event, business meeting, or private encounter, our <strong>Surat call girl</strong> service offers a diverse selection of beautiful and intelligent women who can cater to your specific preferences and requirements.
              </p>

              <h4 className="text-xl font-bold text-pink-600 mb-3">24/7 Available Call Girl Service</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our <strong>call girl in Surat</strong> service operates 24 hours a day, 7 days a week. We understand that your schedule may be unpredictable, which is why we offer round-the-clock booking and service availability. Whether you need a companion during the day or late at night, our <strong>call girls service in Surat</strong> is always ready to provide you with exceptional companionship.
              </p>

              <h4 className="text-xl font-bold text-pink-600 mb-3">Complete Discretion and Privacy</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                Privacy is our top priority. When you book our <strong>call girl service Surat</strong>, you can be assured of complete confidentiality. We maintain strict privacy protocols and never share client information. All interactions and transactions are handled discreetly, ensuring your peace of mind when using our <strong>Surat call girls service</strong>.
              </p>

              <h4 className="text-xl font-bold text-pink-600 mb-3">Professional and Sophisticated Companions</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our <strong>call girls in Surat Gujarat</strong> are not just beautiful; they are well-educated, sophisticated, and possess excellent communication skills. They can accompany you to high-profile events, business dinners, or provide intimate companionship in private settings. Each <strong>Surat call girl service</strong> companion is trained to adapt to different social situations and provide the perfect company for any occasion.
              </p>

              <h4 className="text-xl font-bold text-pink-600 mb-3">Wide Range of Services</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                We offer comprehensive <strong>call girl services in Surat</strong> including both incall and outcall options. Whether you prefer the companion to visit your hotel room, residence, or want to meet at a pre-arranged location, our flexible <strong>call girls service Surat</strong> accommodates your preferences. From short encounters to overnight companionship, we provide various service packages to suit your needs.
              </p>

              <h4 className="text-xl font-bold text-pink-600 mb-3">All Major Locations Covered</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our <strong>call girl Surat service</strong> covers all major areas including Varachha, Adajan, Vesu, Citylight, Piplod, Athwa, and more. No matter where you are located in Surat, we can provide prompt and professional service. Our extensive network ensures that you can access the best <strong>call girls Surat service</strong> regardless of your location.
              </p>

              <h4 className="text-xl font-bold text-pink-600 mb-3">Easy Booking Process</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                Booking our <strong>Surat call girls</strong> is simple and straightforward. Contact us via phone, WhatsApp, or through our website. Our friendly support team will guide you through the selection process, help you choose the perfect companion, and arrange all details for your meeting. We accept advance bookings as well as same-day requests based on availability.
              </p>

              <h4 className="text-xl font-bold text-pink-600 mb-3">Competitive Pricing</h4>
              <p className="text-gray-700 leading-relaxed">
                We offer transparent and competitive pricing for our <strong>call girl in Surat Gujarat</strong> services. Our rates vary based on the companion&apos;s profile, duration, and type of service required. We maintain complete transparency with no hidden charges, ensuring you know exactly what you&apos;re paying for when you book our <strong>call girls in Surat</strong>.
              </p>
            </div>
          </div>

          {/* Available Locations */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-pink-700 mb-12">Available in All Surat Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {availableLocations.map((location, index) => (
                <Link
                  key={index}
                  href={location.link}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-pink-500"
                >
                  <h3 className="text-xl font-bold text-pink-700 mb-2">{location.name}</h3>
                  <p className="text-gray-600 mb-3">Call Girl Service Available</p>
                  <p className="text-pink-600 font-semibold">{location.price}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-3">How to book call girls in Surat?</h3>
                <p className="text-gray-600">Contact us via phone or WhatsApp. Our team will help you select a companion and arrange all booking details.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-3">Are the profiles verified?</h3>
                <p className="text-gray-600">Yes, all our call girls in Surat have verified profiles with genuine photos and complete background checks.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-3">What is the price range?</h3>
                <p className="text-gray-600">Our call girl service in Surat starts from ₹14,000 and varies based on companion profile and service duration.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-3">Is discretion guaranteed?</h3>
                <p className="text-gray-600">Absolutely. We maintain complete confidentiality and privacy for all our clients in Surat.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-3">Available 24/7?</h3>
                <p className="text-gray-600">Yes, our call girls service in Surat operates round the clock, all days of the week.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-3">Do you provide outcall services?</h3>
                <p className="text-gray-600">Yes, we provide both incall and outcall call girl services throughout Surat.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-3">Can I choose a specific companion?</h3>
                <p className="text-gray-600">Yes, you can browse our verified profiles and select your preferred call girl in Surat.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-3">What payment methods are accepted?</h3>
                <p className="text-gray-600">We accept cash, UPI, and online transfers for all call girl bookings in Surat.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-3">Is advance booking required?</h3>
                <p className="text-gray-600">While not mandatory, advance booking is recommended for better availability and selection.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-3">Which areas do you cover?</h3>
                <p className="text-gray-600">We provide call girl service across all major Surat locations including Varachha, Adajan, Vesu, and more.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-3">Are there any hidden charges?</h3>
                <p className="text-gray-600">No hidden charges. The quoted price for our call girls in Surat is final and transparent.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-3">How do I cancel or reschedule?</h3>
                <p className="text-gray-600">Contact us at least 2 hours before your booking time to cancel or reschedule your appointment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Book Call Girls in Surat Now</h2>
          <p className="text-xl mb-8 text-pink-100">
            Contact us for instant booking - Professional call girl service available 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <a
              href="https://wa.me/919372662471"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
