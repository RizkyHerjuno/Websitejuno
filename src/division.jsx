import React from "react";

const Division = () => {
  return (
    <div className="bg-[#f5eedc] min-h-screen p-8">
      {/* Header Section */}
      <div className="mb-0">
        <h1 className="text-xl font-glancyrsemibold font-bold text-[black]">
          [Technical Division]
        </h1>
      </div>

      {/* Description Section */}
      <div className=" mb-15 flex justify-between items-start">
        <p className="font-glancyrlight mt-3 max-w-180 text-3xl text-[black]">
          The core pillars of technological development at ROBOTIIK technical
          divisions driving innovation in the world of robotics.
        </p>
        <p className="font-sfpro font-semibold text-l max-w-80 text-[black]">
          Explore diverse technical divisions that push boundaries, sharpen
          skills, and open new opportunities through collaboration and
          technological development.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Card 1 */}
        <div className="relative w-[450px] h-[500px] p-2 flex flex-col justify-between">
          <img
            src="/src/assets/robot1.jpg"
            alt="image1"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center items-center text-white">
            <h2 className="text-3xl font-semibold">Div 1</h2>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-[750px] h-[500px] p-2 flex flex-col justify-between">
          <img
            src="/src/assets/robot1.jpg"
            alt="image2"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center items-center text-white">
            <h2 className="text-3xl font-semibold">Div 2</h2>
          </div>
        </div>
        </div>

<div className="flex">
        {/* Card 3 */}
        <div className="relative w-[750px] h-[500px] p-2 flex flex-col justify-between">
          <img
            src="/src/assets/robot1.jpg"
            alt="image3"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center items-center text-white">
            <h2 className="text-3xl font-semibold">Div 3</h2>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative w-[450px] h-[500px] p-2 flex flex-col justify-between">
          <img
            src="/src/assets/robot1.jpg"
            alt="image4"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center items-center text-white">
            <h2 className="text-3xl font-semibold">Div 4</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Division;
