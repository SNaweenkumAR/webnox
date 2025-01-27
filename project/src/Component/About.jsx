import React from 'react';
import { Users, Clock, CheckCircle } from 'lucide-react'; 
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div id='about' className="py-10 px-6 sm:px-16 md:px-24">
    
      <div className="text-center mb-10">
        <h3 className="text-lg font-semibold text-blue-600 mb-2">Why Choose Us</h3>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tradition Of Trust</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We specialize in intelligent & effective search and believe in the power of partnerships to grow businesses.
        </p>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-20">
      
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-amber-100 flex justify-center items-center mb-4">
            <Users size={40} className="text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Professional Team</h2>
          <p className="text-center text-gray-600">
            Our experienced and skilled professionals deliver top-notch services tailored to your needs.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-amber-100 flex justify-center items-center mb-4">
            <Clock size={40} className="text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">24/7 Services</h2>
          <p className="text-center text-gray-600">
            We are always available to assist you, ensuring uninterrupted services at all times.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-amber-100 flex justify-center items-center mb-4">
            <CheckCircle size={40} className="text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Service Guarantee</h2>
          <p className="text-center text-gray-600">
            Our commitment is to deliver guaranteed satisfaction and the best quality services.
          </p>
        </div>
      </div>


      <div className="relative mb-20">
        <img
          src="https://images.pexels.com/photos/3768910/pexels-photo-3768910.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image URL
          alt="Cleaning Service"
          className="w-150 h-auto  shadow-lg hidden md:block"
        />
        
        
         <div className="absolute top-15 right-2 z-10  hidden md:block">
          <AboutCard />
        </div> 



      </div>
    </div>
  );
};

export default About;
