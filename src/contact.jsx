import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faYoutube,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className="w-full bg-[#001F3F] py-15 px-8">
      <div className="max-w-[1440px] mx-auto h-[420px] bg-black text-white rounded-xl p-8 flex gap-0">
        {/* Kiri: Info Kontak dan Sosial Media */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="font-glancyr text-7xl font-bold mb-4">Get in touch</h2>
            <p className="font-glancyr font-semibold text-sm mb-6">Lets Gooo!!!</p>
            <div className="mr-[10px] flex font-glancyr font-bold">
              <div className="flex flex-col gap-4 text-1xl mr-[20px]">
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faYoutube} className="w-10 h-10" size="2xl" />
                  <span>@robo_tiik</span>
                </div>
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10" size="2xl"/>
                  <span>ROBOTIK FILKOM UB</span>
                </div>
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faEnvelope} className="w-10 h-10" size="2xl"/>
                  <span>robotik.filkom@ub.ac.id</span>
                </div>
              </div>
              <div className="mb-2 flex flex-col gap-4 text-1xl">
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faInstagram} className="w-10 h-10" size="2xl" />
                  <span>@robo_tiik</span>
                </div>
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faTiktok} className="w-10 h-10" size="2xl"/>
                  <span>@robo_tiik</span>
                </div>
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faXTwitter} className="w-10 h-10" size="2xl"/>
                  <span>Robo_TIIK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kanan: Form Kontak */}
        <form className="font-sfpro font-bold flex-1 flex flex-col justify-between space-y-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="ROBOTIIK 2025"
              className="w-full mt-1 p-2 bg-[#1C1C1C] text-white rounded border border-gray-600"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="robotiik.filkom@ub.ac.id"
                className="w-full mt-1 p-2 bg-[#1C1C1C] text-white rounded border border-gray-600"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="0812 3456 7890"
                className="w-full mt-1 p-2 bg-[#1C1C1C] text-white rounded border border-gray-600"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Hi..."
              className="w-full mt-1 p-2 bg-[#1C1C1C] text-white rounded border border-gray-600"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}