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
    <footer className="bg-[#00264d] text-white text-center py-12 px-6">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
        Connect with innovation. Explore our journey and be part of the future of robotics.
      </h2>

      <p className="text-sm sm:text-base text-white text-opacity-80 max-w-3xl mx-auto mb-8 leading-relaxed">
        Whether you're passionate about cutting-edge innovation, real-world engineering challenges,
        or collaborative tech experiences ROBOTIK offers the perfect space to explore and grow.
      </p>

      <div className="flex justify-center gap-6 text-xl sm:text-2xl mb-6">
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

      <hr className="border-white border-opacity-20 mb-4" />

      <p className="text-xs text-white text-opacity-70">© 2025 ROBOTIK 2025</p>
    </footer>
  );
};

export default Footer;
