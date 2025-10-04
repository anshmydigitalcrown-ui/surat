'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-sweet-pink-50/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-sweet-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sweet-pink-400 to-light-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RK</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">RashmiKapoor</h1>
                <p className="text-sm text-sweet-pink-600">Premium Escort Service</p>
              </div>
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-sweet-pink-500 font-medium transition-all duration-200 hover:scale-105 transform relative group"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sweet-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-sweet-pink-500 font-medium transition-all duration-200 hover:scale-105 transform relative group"
            >
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sweet-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-sweet-pink-500 font-medium transition-all duration-200 hover:scale-105 transform relative group"
            >
              Services
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sweet-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </Link>
            <Link 
              href="/gallery" 
              className="text-gray-700 hover:text-sweet-pink-500 font-medium transition-all duration-200 hover:scale-105 transform relative group"
            >
              Gallery
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sweet-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-sweet-pink-500 font-medium transition-all duration-200 hover:scale-105 transform relative group"
            >
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sweet-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </Link>
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            
            {/* Call Button */}
            <a 
              href="tel:+919876543210"
              className="relative bg-gradient-to-r from-sweet-pink-500 via-light-red-500 to-sweet-pink-600 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-light-red-400 to-sweet-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span className="relative z-10">Call Now</span>
              <div className="absolute inset-0 rounded-full border border-white/20"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-sweet-pink-500 focus:outline-none focus:text-sweet-pink-500 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fadeInUp">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-sweet-pink-200 mb-4">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-700 hover:text-sweet-pink-500 hover:bg-sweet-pink-50 rounded-md transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-sweet-pink-500 hover:bg-sweet-pink-50 rounded-md transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-gray-700 hover:text-sweet-pink-500 hover:bg-sweet-pink-50 rounded-md transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/gallery" 
                className="block px-3 py-2 text-gray-700 hover:text-sweet-pink-500 hover:bg-sweet-pink-50 rounded-md transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-sweet-pink-500 hover:bg-sweet-pink-50 rounded-md transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile WhatsApp Button */}
              <a 
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 my-2 bg-green-500 text-white px-4 py-2 rounded-full text-center hover:bg-green-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                📱 WhatsApp
              </a>
              
              {/* Mobile Call Button */}
              <a 
                href="tel:+919876543210"
                className="block mx-3 my-2 bg-gradient-to-r from-sweet-pink-500 via-light-red-500 to-sweet-pink-600 text-white px-4 py-3 rounded-full text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-light-red-400 to-sweet-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">📞 Call Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}