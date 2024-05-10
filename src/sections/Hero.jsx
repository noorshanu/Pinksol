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
            className=" mx-auto w-full h-full py-6 mb-6"
          />
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
            href="https://www.dextools.io/app/en/solana/pair-explorer/52og9K7jjsoP76FXRHc62KXWu3aKdhriXHGdGv92Fnp8?t=1713602367339"
            target="_blank"
            className=" text-5xl  bg-[#bc1d5c] hover:scale-125 hover:bg-transparent hover:border hover:border-[#bc1d5c] hover:text-black text-white  rounded-full p-1 border-2 border-[#fff]  "
          >
            <img
              src="https://docs.pinksale.finance/~gitbook/image?url=https%3A%2F%2F191452618-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MdJrJV-Z8jLCR-JNtlx%252Favatar-1625140872178.png%3Fgeneration%3D1625140872743800%26alt%3Dmedia&width=32&dpr=3&quality=100&sign=1f27b51f62e68fc4c777b95cd90c76d7e2c9e24341c8570373c32dcc6f2b264a"
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
