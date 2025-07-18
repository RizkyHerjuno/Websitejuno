import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../src/assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { title: "Home", href: "/", isActive: true },
    { title: "About", href: "/about" },
    { title: "Division", href: "/division" },
    { title: "Achievements", href: "/achievements" },
    { title: "Partners", href: "/partners" },
  ];

  return (
<nav className="font-glancyrregular bg-[#001F3F] shadow-md fixed top-0 left-0 w-full z-50 h-[64px]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img src={logo} alt="logo" className="h-10" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-white font-semibold text-sm tracking-wide hover:text-white group`}
              >
                {link.title}
                {/* Garis animasi tetap ada ketika menu terbuka */}
                <span
                  className={`absolute inset-x-0 bottom-0 h-px bg-white transition-all duration-300 origin-center ${
                    isOpen || link.isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-[#00264d]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)} // Close the menu after clicking
              className={`block px-3 py-2 rounded-md text-base font-medium text-white ${
                link.isActive
                  ? "underline underline-offset-4"
                  : "hover:underline"
              }`}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
