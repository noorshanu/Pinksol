import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Hero() {
  return (
    <section className=" pt-0  pb-[1rem]" data-aos="fade-up">
      <div className="container-wrapper flex justify-center flex-col ">
        <h1 className=" font-kid text-[110px] sm:text-[220px] font-bold text-center mt-[5rem] sm:mt-[3rem] uppercase">
          <img
            src="images/pink.png"
            alt=""
            className=" mx-auto w-full h-full py-6"
          />
        </h1>

        <div className=" flex justify-center mx-auto -mt-[4rem]">
          <img
            src="images/hero.png"
            alt=""
            className="w-auto h-64    lg:h-[500px] 2xl:h-[550px] mx-auto floating"
          />
        </div>

        <div className=" flex justify-center gap-5 items-center mt-[2rem]">
          <a
            href="https://twitter.com/  PinkSolSolana"
            className=" text-xl  bg-[#bc1d5c] hover:scale-125 hover:bg-transparent hover:border hover:border-[#bc1d5c] hover:text-black text-white  rounded-full p-2 border-2 border-[#fff]  "
          >
            <BsTwitterX />
          </a>

          <a
            href="https://t.me/  PinkSol"
            target="_blank"
            className=" text-xl  bg-[#bc1d5c] hover:scale-125 hover:bg-transparent hover:border hover:border-[#bc1d5c] hover:text-black text-white  rounded-full p-2 border-2 border-[#fff]  "
          >
            <FaTelegram />
          </a>

          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/52og9K7jjsoP76FXRHc62KXWu3aKdhriXHGdGv92Fnp8?t=1713602367339"
            target="_blank"
            className=" text-xl  bg-[#bc1d5c] hover:scale-125 hover:bg-transparent hover:border hover:border-[#bc1d5c] hover:text-black text-white  rounded-full p-1 border-2 border-[#fff]  "
          >
            <img
              src="images/dext.png"
              alt=""
              className=" h-[25px] w-auto rounded-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
