import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Achievements = () => {
  const [isHoveredExplore, setIsHoveredExplore] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  // Ketika gambar dijangkau, setel gambar yang sedang aktif
  const handleImageHover = (index) => {
    setActiveImage(index);
  };

  return (
    <>
      <section className="relative bg-[#f5eedc] w-[1264px] h-[680px] flex flex-col justify-start items-center text-white overflow-hidden">
        {/* Flex container untuk label "Achievements" dan deskripsi */}
        <div className="flex justify-start items-start px-6 sm:px-12 w-full gap-[72px] mt-[30px] max-w-full">
          {/* Label "Achievements" di kiri */}
          <div className="font-glancyrsemibold font-bold text-xl sm:text-2xl text-[#00264d] mr-[50px]">
            [Achievements]
          </div>

          {/* Deskripsi di sebelah kanan "Achievements" */}
          <p className="font-glancyrlight font-semibold max-w-full text-[36px] leading-[44px] text-[#00264d] text-opacity-90">
            A visual journey through the lens, one snapshot at a time capturing
            the essence of our travel adventures around the world.
          </p>
        </div>

        {/* Bagian bawah untuk gambar dan tombol Explore More */}
        <div className="flex justify-between items-center px-6 sm:px-12 pb-10 w-full gap-[0px] flex-wrap mt-[30px]">
          {/* Tombol Explore More di pojok kiri bawah */}
          <div
            className="group inline-flex items-center text-xl font-semibold text-[#00264d] cursor-pointer absolute bottom-4 left-6"
            onMouseEnter={() => setIsHoveredExplore(true)}
            onMouseLeave={() => setIsHoveredExplore(false)}
          >
            <div className="relative w-[125px] h-8 mr-2">
              <span
                className={`absolute transition-opacity duration-700 ease-in-out ${
                  isHoveredExplore ? "opacity-0" : "opacity-100"
                }`}
              >
                Explore More
              </span>
              <span
                className={`absolute transition-opacity duration-700 ease-in-out ${
                  isHoveredExplore ? "opacity-100" : "opacity-0"
                }`}
              >
                Scroll down
              </span>
            </div>
            <FontAwesomeIcon
              icon={faArrowRight} // Menggunakan ikon panah kanan
              className={`w-4 h-4 transition-transform duration-500 ease-in-out ${
                !isHoveredExplore ? "rotate-[310deg]" : "rotate-0"
              }`}
            />
          </div>

          {/* Gambar yang berjajar di bawah deskripsi dan berada di pojok kanan bawah */}
          <div className="absolute bottom-0 left-50 flex gap-[0px] whitespace-nowrap overflow-hidden">
                {/* Gambar 1 */}
                <div
                  className={`w-[325px] h-[504px] rounded-[32px] p-[25px] transition-all duration-500 ease-in-out transform ${
                    activeImage === 0 ? "scale-x-125 translate-x-10" : ""
                  }`}
                  onMouseEnter={() => handleImageHover(0)}
                  onMouseLeave={() => setActiveImage(null)}
                >
                  <div className="relative w-full h-full">
                    <img
                      src="/src/assets/robot1.jpg"
                      alt="Achievement 1"
                      className="w-full h-full object-cover rounded-[24px]"
                    />
                    {activeImage === 0 && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold">
                        Achievement 1
                      </div>
                    )}
                  </div>
                </div>

                {/* Gambar 2 */}
                <div
                  className={`w-[325px] h-[504px] rounded-[24px] p-[25px] transition-all duration-500 ease-in-out transform ${
                    activeImage === 1
                      ? "scale-x-125 translate-x-10"
                      : activeImage === 0
                      ? "translate-x-[20%]"
                      : ""
                  }`}
                  onMouseEnter={() => handleImageHover(1)}
                  onMouseLeave={() => setActiveImage(null)}
                >
                  <div className="relative w-full h-full">
                    <img
                      src="/src/assets/robot1.jpg"
                      alt="Achievement 2"
                      className="w-full h-full object-cover rounded-[24px]"
                    />
                    {activeImage === 1 && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold">
                        Achievement 2
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Gambar 3 */}
                <div
                  className={`w-[325px] h-[504px] rounded-[24px] p-[25px] transition-all duration-500 ease-in-out transform ${
                    activeImage === 2
                      ? "scale-x-125 translate-x-10"
                      : activeImage === 1
                      ? "translate-x-[20%]"
                      : activeImage === 0
                      ? "translate-x-[20%]"
                      : ""
                  }`}
                  onMouseEnter={() => handleImageHover(2)}
                  onMouseLeave={() => setActiveImage(null)}
                >
                  <div className="relative w-full h-full">
                    <img
                      src="/src/assets/robot1.jpg"
                      alt="Achievement 3"
                      className="w-full h-full object-cover rounded-[24px]"
                    />
                    {activeImage === 2 && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold">
                        Achievement 3
                      </div>
                    )}
                  </div>
                </div>

              {/* Gambar 4 */}
              <div
                className={`w-[325px] h-[504px] rounded-[24px] p-[25px] transition-all duration-500 ease-in-out transform ${
                  activeImage === 3
                    ? "scale-x-125 translate-x-10"
                    : activeImage === 2
                    ? "translate-x-[20%]"
                    : activeImage === 1
                    ? "translate-x-[20%]"
                    : activeImage === 0
                    ? "translate-x-[20%]"
                    : ""
                }`}
                onMouseEnter={() => handleImageHover(3)}
                onMouseLeave={() => setActiveImage(null)}
              >
                <div className="relative w-full h-full">
                  <img
                    src="/src/assets/robot1.jpg"
                    alt="Achievement 4"
                    className="w-full h-full object-cover rounded-[24px]"
                  />
                  {activeImage === 3 && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold">
                      Achievement 4
                    </div>
                  )}
                </div>
              </div>

              {/* Gambar 5 */}
              <div
                className={`w-[325px] h-[504px] rounded-[24px] p-[25px] transition-all duration-500 ease-in-out transform ${
                  activeImage === 4
                    ? "scale-x-125 translate-x-10"
                    : activeImage === 3
                    ? "translate-x-[20%]"
                    : activeImage === 2
                    ? "translate-x-[20%]"
                    : activeImage === 1
                    ? "translate-x-[20%]"
                    : activeImage === 0
                    ? "translate-x-[20%]"
                    : ""
                }`}
                onMouseEnter={() => handleImageHover(4)}
                onMouseLeave={() => setActiveImage(null)}
              >
                <div className="relative w-full h-full">
                  <img
                    src="/src/assets/robot1.jpg"
                    alt="Achievement 5"
                    className="w-full h-full object-cover rounded-[24px]"
                  />
                  {activeImage === 4 && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold">
                      Achievement 5
                    </div>
                  )}
                </div>
              </div>

              {/* Gambar 6 */}
              <div
                className={`w-[325px] h-[504px] rounded-[24px] p-[25px] transition-all duration-500 ease-in-out transform ${
                  activeImage === 5
                    ? "scale-x-125 translate-x-10"
                    : activeImage === 4
                    ? "translate-x-[20%]"
                    : activeImage === 3
                    ? "translate-x-[20%]"
                    : activeImage === 2
                    ? "translate-x-[20%]"
                    : activeImage === 1
                    ? "translate-x-[20%]"
                    : activeImage === 0
                    ? "translate-x-[20%]"
                    : ""
                }`}
                onMouseEnter={() => handleImageHover(5)}
                onMouseLeave={() => setActiveImage(null)}
              >
                <div className="relative w-full h-full">
                  <img
                    src="/src/assets/robot1.jpg"
                    alt="Achievement 6"
                    className="w-full h-full object-cover rounded-[24px]"
                  />
                  {activeImage === 5 && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold">
                      Achievement 6
                    </div>
                  )}
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
