import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faYoutube,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className="w-full bg-[#001F3F] py-15 px-8">
      <h1 className="font-glancyrmedium text-[white] flex text-7xl  mb-4 justify-center">
        Contact
      </h1>

      <div className="max-w-[1440px] mx-auto h-[450px] bg-black text-white rounded-3xl py-8 pl-4 pr-4 flex gap-0">
        {/* Kiri: Info Kontak dan Sosial Media */}
        <div className="flex">
          <div className="flex-1 flex flex-col ">
            <div>
              <h2 className="font-glancyrmedium text-6xl mb-4">Get in touch</h2>
              <p className="font-glancyr font-semibold text-sm mb-0">
                Lets Gooo!!!
              </p>
              <hr className="border border-white opacity-50 mb-4 max-w-[80px]" />
              <div className="mr-[5px] flex font-glancyrlight text-sm">
                <div className="flex flex-col gap-4 text-1xl mr-[5px]">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="w-10 h-10"
                      size="2xl"
                    />
                    <span>robo_tiik</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="w-10 h-10"
                      size="2xl"
                    />
                    <span>ROBOTIIK FILKOM UB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-10 h-10"
                      size="2xl"
                    />
                    <span>robotiik.filkom@ub.ac.id</span>
                  </div>
                </div>
                <div className="mb-2 flex flex-col gap-4 text-1xl mr-0">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="w-10 h-10"
                      size="2xl"
                    />
                    <span>robo_tiik</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faTiktok}
                      className="w-10 h-10"
                      size="2xl"
                    />
                    <span>robo_tiik</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="w-10 h-10"
                      size="2xl"
                    />
                    <span>Robo_TIIK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kanan: Form Kontak */}
          {/* Kanan: Form Kontak */}
          <form className="font-glancyrlight flex-1 flex flex-col justify-between space-y-4 pl-8">
            <div>
              <label className="font-glancyrlight text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="ROBOTIIK 2025"
                className="w-[750px] mt-1 p-2 bg-[#1C1C1C] text-white border-b border-gray-1000"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="font-glancyrlight text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="robotiik.filkom@ub.ac.id"
                  className="w-full mt-1 p-2 bg-[#1C1C1C] text-white border-b border-gray-1000"
                />
              </div>
              <div className="flex-1">
                <label className="font-glancyrlight text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="0812 3456 7890"
                  className="w-full mt-1 p-2 bg-[#1C1C1C] text-white border-b border-gray-1000"
                />
              </div>
            </div>

            <div>
              <label className="font-glancyrlight text-sm font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Hi..."
                className="w-full mt-1 p-2 bg-[#1C1C1C] text-white border-b border-gray-1000"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex gap-2 bg-white text-black px-4 py-1 rounded-full justify-center text-xs font-medium hover:bg-gray-200"
              >
                <h2 className="py-1">Submit</h2>
                <div className=" border border-white rounded-full bg-black">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="py-1 px-1 w-4 h-4 text-white"
                  />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
