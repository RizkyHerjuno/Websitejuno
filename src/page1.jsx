import React from "react";
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Page1 = () => {
  return (
    <>
      <Navbar />

      <section className="relative bg-[#00264d] min-h-[calc(100vh-80px)] flex flex-col justify-center text-white overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-wide">
            Satu Visi, Wujud Aksi,
            <br />
            Bangga Raih Prestasi
          </h1>
        </div>

        <div className="flex justify-between items-end px-6 sm:px-12 pb-10 w-full max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold shadow hover:scale-105 transition"
            >
              Partner With Us
              <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
            </a>
            <p className="max-w-xl text-sm sm:text-base text-white text-opacity-90">
              Discover the captivating world of robotics where innovation,
              cross-division collaboration, and limitless exploration come to
              life.
            </p>
          </div>

          <div>
            <a
              href="#"
              className="text-white text-sm font-semibold flex items-center gap-1 hover:underline"
            >
              Explore More
              <span className="text-xs">↑</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page1;
