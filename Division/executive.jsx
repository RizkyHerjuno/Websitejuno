import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Menambahkan ikon FontAwesome
import robot1 from "../Division/assets/robot1.jpg"; // Gambar diimpor

// ProfileCard Component (Tanpa hover effect)
const ProfileCard = ({ image, title, subtitle, height, width }) => {
  return (
    <div
      className="relative p-2 overflow-hidden rounded-[20px] transition-transform duration-300 ease-in-out"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-[20px]"
      />
      <div className="absolute inset-5 top-50 bg-opacity-50 rounded-[20px]"></div>
      <div className="absolute bottom-[10px] left-1 right-0 p-6 text-white z-10">
        {/* Menambahkan dua HRD dengan border */}
        <div className="border-1 border-white rounded-full px-4 py-1 mb-2 inline-block">
          <p className="text-sm font-glancyrlight">{subtitle}</p>
        </div>
        <div className="border-2 border-white bg-white text-black rounded-full px-4 py-1 mb-2 inline-block ml-2">
          <p className="text-sm font-glancyrlight">HRD of Quadcopter</p>
        </div>
        <h2 className="font-glancyrmedium text-left text-4xl pb-2">{title}</h2>{" "}
        {/* Border untuk title */}
      </div>
    </div>
  );
};

// HoverCard Component (Untuk kegiatan dengan hover effect)
const HoverCard = ({ image, title, subtitle, height, width }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative p-2 overflow-hidden rounded-[20px] transition-transform duration-300 ease-in-out"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-[20px]"
      />
      <div
        className={`absolute inset-5 top-50 bg-opacity-50 rounded-[20px] transition-all duration-300 ease-in-out ${
          hovered ? "backdrop-blur-md" : ""
        }`}
      ></div>
      <div
        className={`absolute bottom-[10px] left-1 right-0 p-6 text-white z-10 transition-all duration-300 ease-in-out ${
          hovered ? "translate-y-[-110px] text-6xl" : "text-4xl"
        }`}
      >
        <h2 className="font-glancyrmedium text-left pb-2">{title}</h2>{" "}
        {/* Menghapus border dari title */}
        <p className="text-sm text-left">{subtitle}</p>
      </div>
      {hovered && (
        <div className="absolute bottom-[20px] left-1 right-0 p-6 text-white z-10">
          <p className="font-sfpro text-lg text-left">Description of {title}</p>
        </div>
      )}
      <div
        className="absolute top-[20px] right-[20px] z-20 transition-all duration-300 ease-in-out"
        style={{ width: "60px", height: "60px" }}
      >
        <div
          className={`rounded-full w-full h-full flex items-center justify-center transition-all duration-300 ease-in-out ${
            hovered
              ? "bg-white text-black"
              : "bg-transparent text-white border border-white"
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

// Main Division Section
const DivisionSection = () => {
  return (
    <div className="bg-[#001F3F] min-h-screen text-white p-10">
      {/* Judul Halaman */}
      <h1 className="text-5xl font-glancyrmedium text-center text-white mb-8">
        Human Resources Development
      </h1>

      {/* Bagian Foto Diri */}
      <div className="flex justify-center gap-3 mb-4">
        <div className="flex items-center flex-col">
          <ProfileCard
            image={robot1}
            title="Salma Hafilah"
            subtitle="HRD"
            height={450}
            width={350}
          />
        </div>
        <div className="flex items-center flex-col">
          <ProfileCard
            image={robot1}
            title="Rakha Apta Pradhana"
            subtitle="HRD"
            height={450}
            width={350}
          />
        </div>
      </div>
      <div className="flex justify-center gap-3 mb-4">
        <div className="flex items-center flex-col">
          <ProfileCard
            image={robot1}
            title="Salma Hafilah"
            subtitle="HRD"
            height={450}
            width={350}
          />
        </div>
        <div className="flex items-center flex-col">
          <ProfileCard
            image={robot1}
            title="Rakha Apta Pradhana"
            subtitle="HRD"
            height={450}
            width={350}
          />
        </div>
        <div className="flex items-center flex-col">
          <ProfileCard
            image={robot1}
            title="Rakha Apta Pradhana"
            subtitle="HRD"
            height={450}
            width={350}
          />
        </div>
      </div>
      <div className="flex justify-center gap-3 mb-4">
        <div className="flex items-center flex-col">
          <ProfileCard
            image={robot1}
            title="Salma Hafilah"
            subtitle="HRD"
            height={450}
            width={350}
          />
        </div>
        <div className="flex items-center flex-col">
          <ProfileCard
            image={robot1}
            title="Rakha Apta Pradhana"
            subtitle="HRD"
            height={450}
            width={350}
          />
        </div>
      </div>

      {/* Bagian Penjelasan Divisi dengan Kolom Putih */}
      <div className="bg-white pl-15 pr-15 pt-10 pb-10 mb-8 rounded-[20px] shadow-lg">
        <p className="text-lg font-sfpro font-bold text-black text-center">
          The Human Resource Development (HRD) division of ROBOTIIK FILKOM UB is
          tasked with the professional development of its members, focusing on
          both soft and hard skills. Furthermore, the HRD is responsible for
          monitoring and evaluating the performance of members across all
          divisions of the organization.
        </p>
      </div>

      {/* Bagian Kegiatan */}
      <div className="gap-2">
        <div className="flex">
          <HoverCard
            image={robot1}
            title="Kegiatan 1"
            subtitle="HRD of Kegiatan"
            height={430}
            width={770}
          />
          <HoverCard
            image={robot1}
            title="Kegiatan 2"
            subtitle="HRD of Kegiatan"
            height={430}
            width={520}
          />
        </div>
        <div className="flex">
          <HoverCard
            image={robot1}
            title="Kegiatan 3"
            subtitle="HRD of Kegiatan"
            height={430}
            width={520}
          />
          <HoverCard
            image={robot1}
            title="Kegiatan 4"
            subtitle="HRD of Kegiatan"
            height={430}
            width={770}
          />
        </div>
      </div>
    </div>
  );
};

export default DivisionSection;
