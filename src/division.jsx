import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import robot1 from '../src/assets/robot1.jpg'; 

const HoverCard = ({ image, title, height, width }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative p-2 overflow-hidden rounded-[20px] transition-transform duration-300 ease-in-out`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ height: `${height}px`, width: `${width}px` }} // Set dynamic height and width
    >
      <img
        src={robot1}
        alt={title}
        className="w-full h-full object-cover rounded-[20px]"
      />
      
      {/* Background Blur Effect */}
      <div
        className={`absolute inset-5 bg-blur bg-opacity-50 rounded-[20px] transition-all duration-300 ease-in-out ${hovered ? "backdrop-blur-md" : ""}`}
      ></div>

      {/* Title Section */} 
      <div
        className={`absolute bottom-[10px] left-1 right-0 p-6 text-white z-10 transition-all duration-300 ease-in-out ${hovered ? "translate-y-[-110px] text-6xl" : "text-4xl"}`}
      >
        <h2 className="font-glancyrmedium text-left">{title}</h2>
      </div>

      {/* Description Section */}
      {hovered && (
        <div className="absolute bottom-[20px] left-1 right-0 p-6 text-white z-10">
          <p className="font-sfpro text-lg text-left">Description of {title}</p>
        </div>
      )} 

      {/* Arrow Icon */}
      <div
        className="absolute top-[20px] right-[20px] z-20 transition-all duration-300 ease-in-out"
        style={{ width: "60px", height: "60px" }}
      >
        <div
          className={`rounded-full w-full h-full flex items-center justify-center transition-all duration-300 ease-in-out ${
            hovered ? "bg-white text-black" : "bg-transparent text-white border border-white"
          }`}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`text-2xl transform transition-transform duration-300 ${
              hovered ? "rotate-[-45deg]" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

const Division = () => {
  return (
    <div className="bg-[#f5eedc] min-h-screen p-8">
      {/* Header Section */}
      <div className="mb-6 ml-2">
        <h1 className="text-xl font-glancyrsemibold font-bold text-[black]">
          [Technical Division]
        </h1>
      </div>

      {/* Description Section */}
      <div className="mb-12 ml-2 flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-10">
        <p className="font-glancyrlight max-w-xl text-2xl text-[black]">
          The core pillars of technological development at ROBOTIIK technical divisions driving innovation in the world of robotics.
        </p>
        <p className="font-sfpro font-semibold text-base max-w-md text-[black]">
          Explore diverse technical divisions that push boundaries, sharpen skills, and open new opportunities through collaboration and technological development.
        </p>
      </div>

      {/* Card Section */}
      <div className="flex">
        <HoverCard 
            image="/src/assets/robot1.jpg" 
            title="Division 1" 
            height={550} 
            width={400} 
        />
        <HoverCard 
            src={robot1}
            alt="Division 2" 
            height={550} 
            width={800} 
        />
      </div>
      <div className="flex">
        <HoverCard 
            image="/src/assets/robot1.jpg" 
            title="Division 3" 
            height={550} 
            width={800} 
        />
        <HoverCard 
            image="/src/assets/robot1.jpg" 
            title="Division 4" 
            height={550} 
            width={400} 
        />
      </div>
    </div>
  );
};

export default Division;
