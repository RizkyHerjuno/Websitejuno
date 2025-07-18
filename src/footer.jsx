import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#001F3F] text-white text-center px-0 pt-0 pb-[52px]">
<hr className="border border-white opacity-50 mb-4" />
      <h2 className="mx-auto font-glancyrlight max-w-4xl text-xl sm:text-2xl lg:text-3xl mb-4">
        Connect with innovation. Explore our journey and be part of the future
        of robotics.
      </h2>

      <p className="font-glancyrlight text-sm sm:text-base text-white text-opacity-80 max-w-3xl mx-auto mb-8 leading-relaxed">
        Whether you're passionate about cutting-edge innovation, real-world
        engineering challenges, or collaborative tech experiences ROBOTIK offers
        the perfect space to explore and grow.
      </p>

      <div className="flex justify-center gap-12 text-xl sm:text-2xl mb-6">
        <a href="#" className="hover:text-blue-400 transition">
          <FaEnvelope />
        </a>
        <a href="#" className="hover:text-pink-500 transition">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-gray-100 transition">
          <FaTiktok />
        </a>
        <a href="#" className="hover:text-white transition">
          <FaXTwitter />
        </a>
        <a href="#" className="hover:text-red-500 transition">
          <FaYoutube />
        </a>
        <a href="#" className="hover:text-blue-300 transition">
          <FaLinkedin />
        </a>
      </div>

      <hr className="border-white border-b border-opacity-1000 mb-4" />

      <p className="font-medium text-xs text-white text-opacity-70">
        © 2025 ROBOTIIK 2025
      </p>
    </footer>
  );
};

export default Footer;
