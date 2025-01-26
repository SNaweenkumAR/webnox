import HeroCarousel from './HeroCarousel';
import React from 'react';
import { Brush, Zap, RefreshCw } from 'lucide-react'; 

function Hero() {
  return (
    <div className="Hero">
      <HeroCarousel />

      <div className="w-full min-h-[700px] bg-blue-400 py-10 px-6 sm:px-16 md:px-24 ">
        <div className="relative top-20 space-y-16">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
           
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="flex justify-center mb-4">
                <Brush size={25} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-center mb-4">Professional Cleaning</h2>
              <p className="text-center">
                Housekeeping is responsible for minor security in the hotel ecosystem for food and cleaner through.
              </p>
            </div>

        
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="flex justify-center mb-4">
                <Zap size={25} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-center mb-4">Fast and Efficient</h2>
              <p className="text-center">
                Our aim is to keep the house clean. Your aim will help through Digital Innovation World Summit.
              </p>
            </div>

           
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="flex justify-center mb-4">
                <RefreshCw size={25} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-center mb-4">Renew Your Look</h2>
              <p className="text-center">
                Both of us take a lot of time in getting cleaned and beautiful. Clean home. Professional service.
              </p>
            </div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
           
            <div className="w-full">
              <p className="text-center ">
                <span className="font-bold text-blue-900 text-4xl">A Clean House is a Happy Place!</span> <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, nam...
              </p>
            </div>

           
            <div className="w-full">
              <p className="text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad obcaecati esse eius quis at
                cupiditate beatae ducimus, quod veniam id, nisi error, veritatis sapiente sed quo accusamus illo
                dolores!
              </p>
            </div>

           
            <div className="w-full">
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repellat sed tempora eos, ab omnis
                harum et porro, facere dicta vel esse asperiores? Laboriosam aspernatur quae praesentium, illo
              
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
