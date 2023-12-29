import React, { useRef } from 'react';
import HomePage from '../components/HomePage';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.js";
import Home from "@/components/Home";

const home = () => {
  const otherSectionsRef = useRef(null);

  const handleScroll = () => {
    const homePageContainer = document.getElementById('homePageContainer');
    const scrollDistance = 0.3 * homePageContainer.scrollHeight; // Scroll 30% of the section

    if (homePageContainer.scrollTop >= scrollDistance) {
      otherSectionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div id="homePageContainer" style={{ height: '100vh', overflow: 'auto' }} onScroll={handleScroll}>
        <HomePage />
      </div>

      <div ref={otherSectionsRef}>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default home;
