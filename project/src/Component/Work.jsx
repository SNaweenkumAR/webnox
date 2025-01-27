import React from "react";
import { PlayCircle } from "lucide-react";
import Stats from "./Stats";

const Work = () => {
  return (
<>

    <div  id="work"
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=600')",
      }}
    >
     
      <div className="absolute inset-0 bg-black opacity-50"></div>

     
      <div className="relative z-10 text-white px-6 sm:px-10">
        
        <div className="flex justify-center mb-6">
          <PlayCircle className="text-blue-600 w-24 h-24" />
        </div>

       
        <h3 className="text-lg font-semibold mb-4">Cleaning Your Worries Away</h3>
        <h1 className="text-3xl sm:text-5xl font-bold mb-6">
          Need Help with Cleaning?
        </h1>

        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300">
          Request Call Back
        </button>
      </div>
    </div>

    <div className=" mx-18 opacity-100 bg-white">
                  <Stats/>
    </div>

    </>
  );
};

export default Work;
