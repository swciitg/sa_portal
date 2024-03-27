import React, { useRef } from "react";
import HomePage from "../components/HomePage";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.js";
import Home from "@/components/Home";

const Root = () => {
  return (
    <>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <div className="snap-start h-screen">
          <HomePage />
        </div>
        <div className="snap-start">
          <Navbar />
          <Home />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Root;
