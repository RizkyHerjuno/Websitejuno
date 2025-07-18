import React from "react";
import { motion } from "framer-motion";
import robot1 from '../src/assets/robot1.jpg'; 

const images = [
  { src: robot1, title: "Robot 1" },
  { src: robot1, title: "Robot 2" },
  { src: robot1, title: "Robot 3" },
  { src: robot1, title: "Robot 4" },
];

const About = () => {
  return (
    <>
      <section
        className="w-full h-[555px] overflow-hidden justify justify-between" // Mengubah lebar menjadi full agar responsif
        style={{
          backgroundColor: "#f5eedc", // cream background
          paddingTop: "80px",
          paddingBottom: "272px", // disesuaikan agar total tinggi 544px
          paddingLeft: "45px",
          paddingRight: "45px",
          height: "544px",
          boxSizing: "border-box",
          overflow: "hidden", // Pastikan overflow-nya tersembunyi di luar batas
        }}
      >
        <div className="flex">
          {/* Judul */}
          <h2
            className="text-[16px] max-w-[100000px] font-bold mb-[2px] mr-[150px]"
            style={{
              fontFamily: "Glancyr, sans-serif",
              color: "#0B0C0C",
            }}
          >
            [About Us]
          </h2>
          {/* Paragraf */}
          <p
            className=" font-bold max-w-[900px] text-[18px] leading-[20px] mb-[64px]"
            style={{
              fontFamily: "sfpro, sans-serif",
              color: "#0B0C0C",
            }}
          >
            The development of robotics in Indonesia signals a promising future,
            driven by the capabilities of researchers and academics. As a form of
            support, the Faculty of Computer Science at Universitas Brawijaya
            (FILKOM UB) provides a platform for its students through a robotics
            community known as ROBOTIIK. ROBOTIIK, or PTIIK Robotics, is a
            robotics community under the supervision of the Computer Systems and
            Robotics Laboratory at FILKOM UB. It is dedicated to fostering
            creativity in robotics, conducting research, competing in robotics
            competitions, and promoting robotics to the wider community by
            advancing science and technology.
          </p>
        </div>

        {/* Animasi Gambar */}
        <div className="mx-auto">
          <div className="overflow-x-auto whitespace-nowrap">
            {/* Membuat scroll horizontal di kontainer gambar */}
            <div className="flex gap-4">
              {/* Gambar Pertama */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
              >
                {images.map((image, index) => {
                  const sizeClass =
                    index % 2 === 0
                      ? "w-[150px] h-[150px]" 
                      : "w-[220px] h-[150px]"; 

                  return (
                    <img
                      className={`${sizeClass} rounded-t-[28px] p-[12px]`}
                      src={image.src}
                      alt={image.title}
                      key={index}
                    />
                  );
                })}
              </motion.div>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
              >
                {images.map((image, index) => {
                  const sizeClass =
                    index % 2 === 0
                      ? "w-[150px] h-[150px]" 
                      : "w-[220px] h-[150px]";

                  return (
                    <img
                      className={`${sizeClass} rounded-t-[28px] p-[12px]`}
                      src={image.src}
                      alt={image.title}
                      key={index}
                    />
                  );
                })}
              </motion.div>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
              >
                {images.map((image, index) => {
                  const sizeClass =
                    index % 2 === 0
                      ? "w-[150px] h-[150px]" 
                      : "w-[220px] h-[150px]"; 

                  return (
                    <img
                      className={`${sizeClass} rounded-t-[28px] p-[12px]`}
                      src={image.src}
                      alt={image.title}
                      key={index}
                    />
                  );
                })}
              </motion.div>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
              >
                {images.map((image, index) => {
                  const sizeClass =
                    index % 2 === 0
                      ? "w-[150px] h-[150px]" 
                      : "w-[220px] h-[150px]";

                  return (
                    <img
                      className={`${sizeClass} rounded-t-[28px] p-[12px]`}
                      src={image.src}
                      alt={image.title}
                      key={index}
                    />
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
