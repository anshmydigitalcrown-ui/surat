'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-rose-50/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RK</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">RashmiKapoor</h1>
                <p className="text-sm text-rose-600">Premium Escort Service</p>
              </div>
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
            <Link 
              href="/" 
              className="text-rose-700 hover:text-pink-600 font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-rose-700 hover:text-pink-600 font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-rose-700 hover:text-pink-600 font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              Services
            </Link>
            <Link 
              href="/gallery" 
              className="text-rose-700 hover:text-pink-600 font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              Gallery
            </Link>
            <Link 
              href="/contact" 
              className="text-rose-700 hover:text-pink-600 font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              Contact
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
              className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full hover:shadow-lg hover-glow transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-rose-700 hover:text-pink-600 focus:outline-none focus:text-pink-600 transition-colors duration-200"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-rose-50 rounded-lg shadow-lg border border-pink-200 mb-4">
              <Link 
                href="/" 
                className="block px-3 py-2 text-rose-700 hover:text-pink-600 hover:bg-rose-100 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-rose-700 hover:text-pink-600 hover:bg-rose-100 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-rose-700 hover:text-pink-600 hover:bg-rose-100 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/gallery" 
                className="block px-3 py-2 text-rose-700 hover:text-pink-600 hover:bg-rose-100 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-rose-700 hover:text-pink-600 hover:bg-rose-100 rounded-md transition-colors duration-200"
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
                className="block mx-3 my-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full text-center hover-glow transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                📞 Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}