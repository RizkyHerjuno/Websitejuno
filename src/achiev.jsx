// Importing necessary libraries and components
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";

// New Image component with imports
const AchievementImage = ({ index, activeImage, handleImageHover }) => {
  import("path/to/robot1.jpg").then(image => {
    const src = image.default; // Ensure you have the correct path based on your configuration.

    return (
      <div 
        className={`w-[325px] h-[504px] rounded-[24px] p-[25px] transition-all duration-500 ease-in-out transform ${
          activeImage === index ? "scale-x-125 translate-x-10" : ""
        }`}
        onMouseEnter={() => handleImageHover(index)}
        onMouseLeave={() => handleImageHover(null)} // Reset active on mouse leave
      >
        <div className="relative w-full h-full">
          <img
            src={src}
            alt={`Achievement ${index + 1}`}
            className="w-full h-full object-cover rounded-[24px]"
          />
          {activeImage === index && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold">
              {`Achievement ${index + 1}`}
            </div>
          )}
        </div>
      </div>
    );
  });
};

const Achievements = () => {
  const [isHoveredExplore, setIsHoveredExplore] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  
  const handleImageHover = (index) => {
    setActiveImage(index);
  };

  return (
    <section className="relative bg-[#f5eedc] w-[1264px] h-[680px] flex flex-col justify-start items-center text-white overflow-hidden">
      <div className="flex justify-start items-start px-6 sm:px-12 w-full gap-[72px] mt-[30px] max-w-full">
        <div className="font-glancyrsemibold font-bold text-xl sm:text-2xl text-[black] mr-[50px]">
          [Achievements]
        </div>
        <p className="font-glancyrlight font-semibold max-w-full text-[36px] leading-[44px] text-[black] text-opacity-90">
          A visual journey through the lens, one snapshot at a time capturing
          the essence of our travel adventures around the world.
        </p>
      </div>

      <div className="flex justify-between items-center px-6 sm:px-12 pb-10 w-full gap-[0px] flex-wrap mt-[30px]">
        <div
          className="group inline-flex items-center text-xl font-semibold text-[#00264d] cursor-pointer absolute bottom-4 left-6"
          onMouseEnter={() => setIsHoveredExplore(true)}
          onMouseLeave={() => setIsHoveredExplore(false)}
        >
          <div className="relative w-[125px] h-8 mr-2">
            <span
              className={`absolute transition-opacity duration-700 ease-in-out ${isHoveredExplore ? "opacity-0" : "opacity-100"}`}
            >
              Explore More
            </span>
            <span
              className={`absolute transition-opacity duration-700 ease-in-out ${isHoveredExplore ? "opacity-100" : "opacity-0"}`}
            >
              Scroll down
            </span>
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`w-4 h-4 transition-transform duration-500 ease-in-out ${!isHoveredExplore ? "rotate-[310deg]" : "rotate-0"}`}
          />
        </div>

        <div className="absolute bottom-0 left-50 flex gap-[0px] whitespace-nowrap overflow-hidden">
          {[...Array(6)].map((_, index) => (
            <AchievementImage 
              key={index} 
              index={index} 
              activeImage={activeImage} 
              handleImageHover={handleImageHover} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
