import React from "react"; 

const Information = () => {
  return (
    <div className="font-glancyrlight bg-[#f5eedc] min-h-screen p-8">
      {/* Header Section */}
      <div className="mb-12 flex justify-between items-start mr-0">
        <div className="w-1/2 pr-0">
          <h1 className="text-1xl font-semibold text-[black]">
            What's New in Robotics...
          </h1>
          <p className="mt-2 text-3xl text-[black] font-semibold">
            Stay ahead with exclusive insights on robotics trends, research, and innovation.
          </p>
        </div>

        <div className="font-sfpro font-semibold w-1/4">
          <p className="text-s text-[black]">
            Whether you're seeking hands-on innovation, collaborative engineering projects, or an inspiring tech-driven environment, ROBOTIIK has the perfect place for you to grow.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex space-x-6 overflow-x-auto absolute flex gap-[0px] whitespace-nowrap overflow-hidden">
        {/* Card 1 */}
        <div className="relative w-[325px] h-[400px] p-2 flex flex-col justify-between">
          <img
            src="/src/assets/robot1.jpg"
            alt="image1"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center items-center text-white">
            <h2 className="text-3xl font-semibold">Amarine</h2> {/* Increased text size */}
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-[325px] h-[400px] p-2 flex flex-col justify-between">
          <img
            src="/src/assets/robot1.jpg"
            alt="image2"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center items-center text-white">
            <h2 className="text-3xl font-semibold">Quadcopter</h2> {/* Increased text size */}
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative w-[325px] h-[400px] p-2 flex flex-col justify-between">
          <img
            src="/src/assets/robot1.jpg"
            alt="image4"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center items-center text-white">
            <h2 className="text-3xl font-semibold">RnD</h2> {/* Increased text size */}
          </div>
        </div>
        {/* Card 3 */}
        <div className="relative w-[325px] h-[400px] p-2 flex flex-col justify-between">
          <img
            src="/src/assets/robot1.jpg"
            alt="image3"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center items-center text-white">
            <h2 className="text-3xl font-semibold">Humanoid</h2> {/* Increased text size */}
          </div>
        </div>

        {/* Card 5 */}
        <div className="relative w-[325px] h-[400px] p-2 flex flex-col justify-between">
          <img
            src="/src/assets/robot1.jpg"
            alt="image5"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center items-center text-white">
            <h2 className="text-3xl font-semibold">MIT</h2> {/* Increased text size */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
