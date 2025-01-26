import React from 'react';
import { Users, Clock } from 'lucide-react'; 
const AboutCard = () => {
  return (
    <div className="py-10 px-6 sm:px-16 md:px-24">
      
      <div className="flex justify-center mb-20">
        <div className="w-150 h-80 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          
          <p className="text-xl font-semibold text-gray-800 mb-4">A Maid for You</p>

          
          <h1 className="text-2xl font-bold text-blue-600 mb-4">Cleaner Place</h1>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            
            <div className="flex items-center gap-2 flex-col text-center">
              <Users size={24} className="text-blue-600 mb-2" />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Professional Cleaning</h2>
              <p className="text-sm text-gray-600">
                Expert cleaning services ensuring a clean and tidy space for you.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-col text-center">
              <Clock size={24} className="text-blue-600 mb-2" />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Fast and Efficient</h2>
              <p className="text-sm text-gray-600">
                Quick and efficient cleaning without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
