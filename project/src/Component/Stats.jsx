import React from "react";
import { Smile, Home, Award, Wine, SeparatorVertical } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: <Smile className="text-blue-600 w-12 h-12" />,
      count: "385",
      label: "Happy Clients",
    },
    {
      icon: <Home className="text-blue-600 w-12 h-12" />,
      count: "842",
      label: "Houses Cleaned",
    },
    {
      icon: <Award className="text-blue-600 w-12 h-12" />,
      count: "240",
      label: "Awards Received",
    },
    {
      icon: <Wine className="text-blue-600 w-12 h-12" />,
      count: "1234",
      label: "Glass Cleaned",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center w-full mx-auto py-6 gap-6">
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          
          <div className="flex items-center justify-center flex-col bg-white shadow-lg rounded-lg px-4 py-4 w-full sm:w-60">
            
            <div className="mb-2">{stat.icon}</div>

           
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{stat.count}</h1>

            <p className="text-gray-600 text-center">{stat.label}</p>
          </div>

          {index < stats.length - 1 && (
            <div className="hidden sm:flex justify-center items-center">
              <SeparatorVertical className="text-gray-300 w-10 h-10" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stats;
