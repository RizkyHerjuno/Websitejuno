import React from "react";
import "./App.css";

import Page1 from "./page1";
import About from "./about";
import Division from "./division";
import Achievements from "./achiev";
import Brand from "./brand";
import Information from "./information";
import Contact from "./contact";
import Footer from "./footer";

const App = () => {
  return (
    <div>
      <Page1 />
      <div className="w-full h-[400px]">
      <About />
      </div>
      <Division />
      <Achievements />
      <div
        className="bg-[#f5eedc] container mx-auto w-[1264px] h-[300px] flex justify-center items-center overflow-x-hidden overflow-y-hidden"
        style={{
          background: "50px solid transparent",
          borderLeft: `linear-gradient(to right, #f5eedc 0%, #f5eedc 40%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 1) 60%, #f5eedc 60%, #f5eedc 100%)`,
          borderRight: `linear-gradient(to right, #f5eedc 0%, #f5eedc 40%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 1) 60%, #f5eedc 60%, #f5eedc 100%)`,
          borderImage:
            `linear-gradient(to right, #f5eedc 0%, #f5eedc 40%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 1) 60%, #f5eedc 60%, #f5eedc 100%)`,
        }}
      >
        <Brand />
      </div>
      <Information />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
