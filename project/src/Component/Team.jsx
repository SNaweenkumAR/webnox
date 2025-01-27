import React from 'react';
import Slider from 'react-slick'; 

const Team = () => {
  // Carousel settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 4 cards at a time
    slidesToScroll: 1, // Scroll one card at a time
    centerMode: false, // Disabling center mode so all items are aligned
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id='team' className="py-10 px-6 sm:px-16 md:px-24">
      
      <div className="text-center mb-10">
        <p className="text-lg font-semibold text-blue-600 mb-2">MEET OUR</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">OUR TEAM</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Our team is passionate, driven, and dedicated to delivering the best results for our clients. We believe in collaboration, creativity, and innovation, striving to exceed expectations and provide exceptional value in everything we do.
        </p>
      </div>

      <Slider {...settings}>
  
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm h-95">
          <img src="https://images.pexels.com/photos/6944684/pexels-photo-6944684.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team Member 1" className="w-full h-80  mb-4" />
            <div className='w-60 h-20 bg-white-400 shadow-lg flex flex-col items-center justify-center  -mt-4 z-10 mx-10 bg-white'>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">John Doe</h3>
            <p className="text-center text-gray-600 ">CEO</p>
            </div>
        </div>


        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg h-95">
          <img src="https://images.pexels.com/photos/6943947/pexels-photo-6943947.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team Member 2" className="w-full h-80  mb-4" />
          <div className='w-60 h-20 bg-white-400 shadow-lg flex flex-col items-center justify-center  -mt-4 z-10 mx-10 bg-white'>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">John Doe</h3>
            <p className="text-center text-gray-600 ">CEO</p>
            </div>
        </div>

       
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg h-95">
          <img src="https://images.pexels.com/photos/6943958/pexels-photo-6943958.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team Member 3" className="w-full h-80  mb-4" />
          <div className='w-60 h-20 bg-white-400 shadow-lg flex flex-col items-center justify-center  -mt-4 z-10 mx-10 bg-white'>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">John Doe</h3>
            <p className="text-center text-gray-600 ">CEO</p>
            </div>
        </div>

       
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg ">
          <img src="https://images.pexels.com/photos/6943947/pexels-photo-6943947.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team Member 4" className="w-full h-80  mb-4" />
          <div className='w-60 h-20 bg-white-400 shadow-lg  flex flex-col items-center justify-center  -mt-4 z-10 mx-10 bg-white'>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">John Doe</h3>
            <p className="text-center text-gray-600 ">CEO</p>
            </div>
        </div>

        
      </Slider>
    </div>
  );
};

export default Team;
