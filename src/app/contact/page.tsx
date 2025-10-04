'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your inquiry! We will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        location: '',
        date: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-pink-400 via-pink-300 to-pink-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">Contact Us</h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto animate-fadeInUp">
            Get in touch to discuss your requirements and schedule your preferred service.
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Contact Form & Map */}
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
                  We provide premium escort services across all major areas of Surat
                </p>
              </div>
              <div className="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41583263078!2d72.74109452431642!3d21.17024370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1696234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Surat Location Map"
                />
              </div>
              
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4 text-center">
                  <div className="text-pink-600 text-2xl mb-2">📍</div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600 text-sm">Surat, Gujarat, India</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4 text-center">
                  <div className="text-pink-600 text-2xl mb-2">📱</div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600 text-sm">+91 XXXXX XXXXX</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4 text-center">
                  <div className="text-pink-600 text-2xl mb-2">✉️</div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600 text-sm">info@escortsinsurat.com</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4 text-center">
                  <div className="text-pink-600 text-2xl mb-2">🕒</div>
                  <h4 className="font-semibold text-gray-800">Availability</h4>
                  <p className="text-gray-600 text-sm">24/7 Available</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Send us a Message</h3>
                <p className="text-gray-600">
                  Get in touch with us for premium escort services in Surat
                </p>
              </div>

              {submitMessage && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service of Interest</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="social-companion">Social Companionship</option>
                    <option value="travel-companion">Travel Companion</option>
                    <option value="business-support">Business Support</option>
                    <option value="personal-assistant">Personal Assistant</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Location Preference</label>
                  <select 
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300"
                  >
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
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your preferences and requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-4 px-6 rounded-lg hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message 💌'}
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our services and booking process.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do I book a service?",
                answer: "Simply contact us through phone, email, or the contact form above. We'll discuss your requirements and arrange everything professionally."
              },
              {
                question: "What are your booking requirements?",
                answer: "We require advance booking with clear specifications of your requirements. All bookings are confirmed after initial consultation."
              },
              {
                question: "Is my privacy protected?",
                answer: "Absolutely. We maintain strict confidentiality and discretion. Your privacy and personal information are completely protected."
              },
              {
                question: "What areas do you serve?",
                answer: "We provide services throughout Surat and surrounding areas. For locations outside Surat, please discuss during booking."
              },
              {
                question: "What are your payment methods?",
                answer: "We accept various payment methods including cash, bank transfers, and digital payments. Payment terms are discussed during booking."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}