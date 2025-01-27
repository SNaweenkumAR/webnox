import React from 'react';
import Slider from "react-slick";  // Importing the carousel component
import { Home, Briefcase, Monitor } from 'lucide-react';

const ServiceCarousel = () => {
  // Carousel settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Only show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
  };

  return (
    
    <div id="service"className=" py-10 px-6 sm:px-16 md:px-24">

      <Slider {...settings}>
   
        <div className="slide1 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.pexels.com/photos/4176036/pexels-photo-4176036.jpeg?auto=compress&cs=tinysrgb&w=600')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white py-20">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Why Choose Us</h3>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Great Services</h1>
            <p className="text-gray-200 max-w-xl mx-auto">
              We offer exceptional and reliable services tailored to your needs.
            </p>
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-20 mt-10 relative z-10">
        
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex justify-center items-center mb-4">
                <Home size={40} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Home Cleaning</h2>
              <p className="text-center text-gray-600">
                Our home cleaning services will leave your living space spotless and fresh.
              </p>
            </div>

           
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex justify-center items-center mb-4">
                <Monitor size={40} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Window Cleaning</h2>
              <p className="text-center text-gray-600">
                We offer professional window cleaning that brings a shine to every surface.
              </p>
            </div>

        
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex justify-center items-center mb-4">
                <Briefcase size={40} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Office Cleaning</h2>
              <p className="text-center text-gray-600">
                Keep your workspace clean and productive with our office cleaning services.
              </p>
            </div>
          </div>
        </div>


        <div className="slide2 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.pexels.com/photos/1149792/pexels-photo-1149792.jpeg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white py-20">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Why Choose Us</h3>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Premium Services</h1>
            <p className="text-gray-200 max-w-xl mx-auto">
              Experience top-notch quality and care with our premium services.
            </p>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-20 mt-10 relative z-10">
      
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex justify-center items-center mb-4">
                <Home size={40} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Home Cleaning</h2>
              <p className="text-center text-gray-600">
                Our home cleaning services will leave your living space spotless and fresh.
              </p>
            </div>

         
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex justify-center items-center mb-4">
                <Monitor size={40} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Window Cleaning</h2>
              <p className="text-center text-gray-600">
                We offer professional window cleaning that brings a shine to every surface.
              </p>
            </div>

      
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex justify-center items-center mb-4">
                <Briefcase size={40} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Office Cleaning</h2>
              <p className="text-center text-gray-600">
                Keep your workspace clean and productive with our office cleaning services.
              </p>
            </div>
          </div>
        </div>

       
      </Slider>
    </div>
    
  );
};

export default ServiceCarousel;
