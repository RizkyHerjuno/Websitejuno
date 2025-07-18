import React, { useState } from "react";
import robot1 from "/src/assets/robot1.jpg";

const Information = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="font-glancyrlight bg-[#f5eedc] h-[650px] p-8 overflow-x-hidden">
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
      <div className="flex space-x-0 overflow-x-auto absolute flex gap-[0px] whitespace-nowrap overflow-hidden">
        {/* Card 1 */}
        <div
          className="relative w-[400px] h-[425px] p-2 flex flex-col justify-between image-card"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={robot1}
            alt="image1"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div
            className={`absolute bottom-0 left-0 right-0 p-6 flex text-white transition-all duration-500 ease-in-out ${
              hovered === 1 ? "translate-y-[-30px]" : "translate-y-0"
            }`}
          >
            <h2 className="text-3xl font-semibold">Amarine</h2>
          </div>
          <div
            className={`absolute bottom-0 left-0 right-0 p-6 text-white flex transition-all duration-500 ease-in-out ${
              hovered === 1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xl">This is a description of Amarine.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative w-[400px] h-[425px] p-2 flex flex-col justify-between image-card"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={robot1}
            alt="image2"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div
            className={`absolute bottom-0 left-0 right-0 p-6 flex text-white transition-all duration-500 ease-in-out ${
              hovered === 2 ? "translate-y-[-30px]" : "translate-y-0"
            }`}
          >
            <h2 className="text-3xl font-semibold">Quadcopter</h2>
          </div>
          <div
            className={`absolute bottom-0 left-0 right-0 p-6 text-white flex transition-all duration-500 ease-in-out ${
              hovered === 2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xl">This is a description of Quadcopter.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="relative w-[400px] h-[425px] p-2 flex flex-col justify-between image-card"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={robot1}
            alt="image3"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div
            className={`absolute bottom-0 left-0 right-0 p-6 flex text-white transition-all duration-500 ease-in-out ${
              hovered === 3 ? "translate-y-[-30px]" : "translate-y-0"
            }`}
          >
            <h2 className="text-3xl font-semibold">RnD</h2>
          </div>
          <div
            className={`absolute bottom-0 left-0 right-0 p-6 text-white flex transition-all duration-500 ease-in-out ${
              hovered === 3
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xl">This is a description of RnD.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="relative w-[400px] h-[425px] p-2 flex flex-col justify-between image-card"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={robot1}
            alt="image4"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div
            className={`absolute bottom-0 left-0 right-0 p-6 flex text-white transition-all duration-500 ease-in-out ${
              hovered === 4 ? "translate-y-[-30px]" : "translate-y-0"
            }`}
          >
            <h2 className="text-3xl font-semibold">Humanoid</h2>
          </div>
          <div
            className={`absolute bottom-0 left-0 right-0 p-6 text-white flex transition-all duration-500 ease-in-out ${
              hovered === 4
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xl">This is a description of Humanoid.</p>
          </div>
        </div>

        {/* Card 5 */}
        <div
          className="relative w-[400px] h-[425px] p-2 flex flex-col justify-between image-card"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={robot1}
            alt="image5"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div
            className={`absolute bottom-16 left-0 right-0 p-6 flex justify-center items-center text-white transition-all duration-500 ease-in-out ${
              hovered === 5 ? "translate-y-[-30px]" : "translate-y-0"
            }`}
          >
            <h2 className="text-3xl font-semibold">MIT</h2>
          </div>
          <div
            className={`absolute bottom-0 left-0 right-0 p-6 text-white justify-center items-center flex transition-all duration-500 ease-in-out ${
              hovered === 5
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xl">This is a description of MIT.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
