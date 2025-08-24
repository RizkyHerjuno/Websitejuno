import React, { useState } from "react";
import robot1 from "./assets/robot1.jpg";

const images = [
  {
    src: robot1,
    title: "Amarine",
    description: "This is a description of Amarine.",
  },
  {
    src: robot1,
    title: "Quadcopter",
    description: "This is a description of Quadcopter.",
  },
  {
    src: robot1,
    title: "RnD",
    description: "This is a description of RnD.",
  },
  {
    src: robot1,
    title: "Humanoid",
    description: "This is a description of Humanoid.",
  },
  {
    src: robot1,
    title: "MIT",
    description: "This is a description of MIT.",
  },
];

const Information = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="font-glancyrlight bg-[#f5eedc] p-8 overflow-hidden">
      {/* Header Section */}
      <div className="mb-5 flex justify-between items-start mr-0">
        <div className="w-1/2 pr-0">
          <h1 className="text-1xl font-semibold text-[black]">
            What's New in Robotics...
          </h1>
          <p className="mt-2 text-3xl text-[black] font-semibold">
            Stay ahead with exclusive insights on robotics trends, research, and
            innovation.
          </p>
        </div>
        <div className="font-sfpro font-semibold w-1/4">
          <p className="text-s text-[black]">
            Whether you're seeking hands-on innovation, collaborative
            engineering projects, or an inspiring tech-driven environment,
            ROBOTIIK has the perfect place for you to grow.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="overflow-hidden w-full h-full">
        {/* Flex container to allow horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto overflow-y-hidden whitespace-nowrap">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-[auto] h-[auto] p-2 flex flex-col justify-between image-card"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className=" max-h-[450px] max-w-[500px]" // Set a maximum height while keeping the width auto
              />
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 flex text-white transition-all duration-500 ease-in-out ${
                  hovered === index ? "translate-y-[-30px]" : "translate-y-0"
                }`}
              >
                <h2 className="text-3xl font-semibold">{image.title}</h2>
              </div>
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 text-white flex transition-all duration-500 ease-in-out ${
                  hovered === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-xl">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
