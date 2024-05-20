import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Hero() {
  return (
    <section className=" pt-0  pb-[1rem]" data-aos="fade-up">
      <div className="container-wrapper flex justify-center flex-col ">
        <h1 className=" font-kid text-[110px] sm:text-[220px] font-bold text-center mt-[5rem] sm:mt-[3rem] uppercase text-[#bc1d5c]">
    
          PinkSol
        </h1>

        <div className=" flex justify-center mx-auto mt-0 sm:mt-[1rem]">
          <img
            src="images/hero.png"
            alt=""
            className="w-auto h-auto    lg:h-[500px] 2xl:h-[550px] mx-auto floating"
          />
        </div>

        <div className=" flex justify-center gap-5 items-center mt-[2rem]">
          <a
            href="https://x.com/pinksolx"
            className=" text-5xl p-3  bg-[#bc1d5c] hover:scale-125 hover:bg-transparent hover:border hover:border-[#bc1d5c] hover:text-black text-white  rounded-full  border-2 border-[#fff]  "
          >
            <BsTwitterX />
          </a>

          <a
            href="https://t.me/pinksolport"
            target="_blank"
            className=" text-5xl  bg-[#bc1d5c] hover:scale-125 hover:bg-transparent hover:border hover:border-[#bc1d5c] hover:text-black text-white  rounded-full p-3 border-2 border-[#fff]  "
          >
            <FaTelegram />
          </a>

          <a
            href="https://www.dexview.com/solana/CGfu4VXYRRAZL6SLNkVJMQ3f2W8ffPCYYM6yENjW2eWz"
            target="_blank"
            className=" text-5xl  bg-[#bc1d5c] hover:scale-125 hover:bg-transparent hover:border hover:border-[#bc1d5c] hover:text-black text-white  rounded-full p-1 border-2 border-[#fff]  "
          >
            <img
              src="https://www.dexview.com/favicon.png"
              alt=""
              className=" h-[65px] w-auto rounded-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
