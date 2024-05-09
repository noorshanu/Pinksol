import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full pb-8 relative z-10 ">
      <img src="images/boy2.jpg" alt=""  className=" mx-auto h-[350px]" />
      <div className="container-wrapper mt-8 ">
        <p className="   mx-auto mb-2 lg:mb-3 text-xl sm:text-2xl font-kid text-center ">
        Legal Disclaimer: $NUBS is a meme coin for fun, with no real value or profit expectation. By buying $NUBS, you agree you've read and understood this.
        </p>
        <div className="">
          <h2 className=" text-6xl font-kid text-center font-bold text-[#bc1d5c]">
            PinkSol
          </h2>
          <div className=" flex items-center justify-center gap-2">
            <p className="mt-3 text-xs text-black lg:text-sm font-nubFont">
            Copyright © 2024   PinkSol
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
