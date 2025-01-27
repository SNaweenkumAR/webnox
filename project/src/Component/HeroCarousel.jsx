import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const images = [
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", 
   "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=600", 
    "https://images.pexels.com/photos/4099264/pexels-photo-4099264.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[500px]">
     
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentSlide]})` }}
      ></div>

     
      <div className="absolute inset-0  bg-opacity-100">
     
        <div className="absolute top-5 left-5 text-white flex flex-wrap gap-5 sm:flex hidden">
          <p className="text-xs sm:text-sm">Phone: +123 456 789</p>
          <p className="text-xs sm:text-sm">Email: info@example.com</p>
        </div>

        <div className="absolute top-5 right-5 flex flex-wrap items-center gap-4 sm:flex hidden">
          <a href="https://facebook.com"><FaFacebook className="text-white text-xl sm:text-xl" /></a>
          <a href="https://twitter.com"><FaTwitter className="text-white text-xl sm:text-xl" /></a>
          <a href="https://linkedin.com"><FaLinkedin className="text-white text-xl sm:text-xl" /></a>
          <a href="https://instagram.com"><FaInstagram className="text-white text-xl sm:text-xl" /></a>
          <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm sm:text-base">Sign Up</button>
        </div>

        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-xl sm:text-xl font-semibold mb-2">
            Renew your Look
          </h2>
          <p className="text-white text-lg sm:text-3xl mb-4">A tradition of cleaning</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full text-sm sm:text-base">
            Contact Us
          </button>
        </div>

      
        <button
          className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-3xl sm:text-4xl"
          onClick={prevSlide}
        >
          &#8249;
        </button>
        <button
          className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white text-3xl sm:text-4xl"
          onClick={nextSlide}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
