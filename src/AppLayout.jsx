import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import React, { useState, useRef,useEffect } from "react";
import Intro from "./sections/Intro";
import MemeMark from "./sections/MemeMark";

import Footer from "./sections/Footer";
import Music from "./nubshiba.mp3";
import Mission from "./sections/Mission";
import HowToBuy from "./sections/HowToBuy";
import RoadMap from "./sections/RoadMap";
import AOS from "aos";
import "aos/dist/aos.css";

const Popup = ({ onClose }) => {

  useEffect(() => {
    AOS.init({
     
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-lg">
      <div className="rounded-lg p-8">
        <button
          className="bg-[#bc1d5c] rounded-full px-6 py-2 text--2xl sm:text-5xl font-kid border-white  font-bold border-2 hover:scale-125 text-white"
          onClick={onClose}
        >
           PinkSol - $PkSol
        </button>
      </div>
    </div>
  );
};

function AppLayout() {
  const [showPopup, setShowPopup] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleClosePopup = () => {
    setShowPopup(false);
    // Start playing music here
    const audio = audioRef.current;
    audio.play();
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {showPopup && <Popup onClose={handleClosePopup} />}
      <main className="  ">
        <Navbar />

        <Hero />
        <div className=" flex justify-center my-4 " data-aos="fade-up">
          <button
            className="bg-[#bc1d5c] text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline  hover:scale-125"
            onClick={handlePlayPause}
          >
            {isPlaying ? "Pause " : "Play Music"}
          </button>
        
        </div>
        <a href="https://solscan.io/token/Hv1pMPytvgMPUVQUdXsBWhvgdYJqcRdKSeRBK3BrhYcu" target="_blank" data-aos="fade-up" className="bg-[#bc1d5c] my-2 text-white font-bold py-2 px-2 sm:px-16 rounded sm:text-lg text-xs   flex justify-center w-[360px] sm:w-[720px] mx-auto">CA : Hv1pMPytvgMPUVQUdXsBWhvgdYJqcRdKSeRBK3BrhYcu</a>
        <audio ref={audioRef} src={Music}></audio>

      
      </main>

      <MemeMark />

      <div>
        <dl className="h-[20px]" />
        <Intro />
        <dl className="h-[50px]" />
             <div>
       <RoadMap/>
        </div>
 

        <Mission/>
        <dl className="h-[50px]" />
        <HowToBuy/>
        {/* <div>
          <Photo/>
        </div> */}
        {/* <div className=" bg-[#ffffff]">
        <MemeCards />
        </div> */}
   
        {/* <div>
          <Partner />
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
