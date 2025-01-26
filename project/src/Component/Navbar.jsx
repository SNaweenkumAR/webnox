import React from 'react'
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="fixed top-18 left-1/2 transform -translate-x-1/2 w-[80%] bg-white shadow-md rounded-lg z-50">
        <div className="flex justify-between items-center py-4 px-6">
         
          <div className="text-xl font-bold text-blue-600">
            <a href="#home">Amiso</a>
          </div>
  
          
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#team" className="text-gray-700 hover:text-blue-600">
              Team
            </a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600">
              Blog
            </a>
          </div>
  
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
  
      
        {isMenuOpen && (
          <div className="md:hidden bg-gray-100">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a
                href="#home"
                className="block text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#services"
                className="block text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#team"
                className="block text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Team
              </a>
              <a
                href="#blog"
                className="block text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Blog
              </a>
            </div>
          </div>
        )}
      </nav>
    );
}

export default Navbar
