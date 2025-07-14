import React, { useState } from "react";
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Page1 = () => {
  const [isHoveredPartner, setIsHoveredPartner] = useState(false);
  const [isHoveredExplore, setIsHoveredExplore] = useState(false);

  const handlePartnerClick = () => {
    alert("Tombol diklik!");
  };

  return (
    <>
      <Navbar />

      <section className="relative bg-[#001F3F] min-h-[calc(100vh-80px)] flex flex-col justify-center text-white overflow-hidden">
        {/* Judul utama */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-glancyrmedium text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-wide">
            Satu Visi, Wujud Aksi,
            <br />
            Bangga Raih Prestasi
          </h1>
        </div>

        {/* Bagian bawah */}
        <div className="flex justify-between items-end px-6 sm:px-12 pb-10 w-full max-w-7xl mx-auto flex-wrap gap-10">
          {/* Kiri: Tombol & Deskripsi */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Tombol Partner With Us */}
            <button
              onMouseEnter={() => setIsHoveredPartner(true)}
              onMouseLeave={() => setIsHoveredPartner(false)}
              onClick={handlePartnerClick}
              className="relative flex items-center rounded-[32px] transition-all duration-500 ease-in-out px-4 cursor-pointer focus:outline-none"
              style={{
                width: "255px",
                height: "57px",
                backgroundColor: isHoveredPartner ? "#000000" : "#ffffff",
                justifyContent: isHoveredPartner
                  ? "flex-start"
                  : "space-between",
              }}
            >
              {isHoveredPartner ? (
                // Saat hover: ikon kiri, teks kanan
                <div className="flex items-center gap-2 pl-[4px]">
                  {/* Icon */}
                  <div
                    className="transition-all duration-500 ease-in-out"
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      borderRadius: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="w-[20px] h-[20px] transition-transform duration-500 ease-in-out"
                      style={{ transform: "rotate(-135deg)" }}
                    />
                  </div>

                  {/* Text */}
                  <span
                    className="text-[18px] font-normal leading-[30px] whitespace-nowrap transition-colors duration-500"
                    style={{
                      color: "#ffffff",
                      fontFamily: "Glancyr, sans-serif",
                    }}
                  >
                    Click Here Now !!
                  </span>
                </div>
              ) : (
                // Saat normal: teks kiri, ikon kanan
                <>
                  <span
                    className="font-sfpro font-semibold text-[18px] font-normal leading-[30px] whitespace-nowrap transition-colors duration-500"
                    style={{
                      color: "#0B0C0C",
                      fontFamily: "Glancyr, sans-serif",
                      paddingLeft: "8px",
                    }}
                  >
                    Partner With Us
                  </span>

                  <div
                    className="transition-all duration-500 ease-in-out mr-[4px]"
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "#000000",
                      color: "#ffffff",
                      borderRadius: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="w-[20px] h-[20px] transition-transform duration-500 ease-in-out"
                      style={{ transform: "rotate(-45deg)" }}
                    />
                  </div>
                </>
              )}
            </button>

            {/* Deskripsi */}
            <p className="font-sfpro font-semibold max-w-md text-sm sm:text-base text-white text-opacity-90">
              Discover the captivating world of robotics where innovation,
              cross-division collaboration, and limitless exploration come to
              life.
            </p>
          </div>

          {/* Kanan: Scroll Down */}
          <div
            className="group inline-flex items-center text-sm font-semibold text-white cursor-pointer"
            onMouseEnter={() => setIsHoveredExplore(true)}
            onMouseLeave={() => setIsHoveredExplore(false)}
          >
            <div className="relative w-[90px] h-5 ">
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
              icon={faArrowUp}
              className={`w-4 h-4 transition-transform duration-500 ease-in-out ${
                isHoveredExplore ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page1;
