import React from "react";

function RoadMap() {
  return (
    <section className="relative z-10 " data-aos="fade-left">
      <img
        src="images/purple.png"
        alt=""
        className=" absolute -top-[50%] right-0 -z-10 h-[600px] hidden sm:block"
      />

      <div className="container-wrapper mb-4">
        <h2 className="font-kid text-4xl sm:text-6xl text-[#bc1d5c] text-center font-bold relative z-30 my-4">
          Our Roadmap
        </h2>

        <div className=" flex justify-between items-center flex-col sm:flex-row ">
          <div>
            <div className="flex justify-center flex-col sm:flex-row gap-5">
              <div className="border-[#bc1d5c]  bg-[#fd8b0000] py-5 px-5  rounded-2xl w-full sm:w-[350px] h-[130px] border-2">
                <div>
                  <h1 className="font-groot-one font-bold  text-black text-center  text-xl mb-1">
                    Phase 1
                  </h1>
                </div>
                <p className=" text-lg font-popins font-normal lh-1_7 font-kido">
                  • Build community & Social .
                </p>
                <p className=" text-lg font-popins font-normal lh-1_7 font-kido">
                  • Wl Fairlaunch .
                </p>
              </div>

              <div className="bg-[#fd8b0000] border-[#bc1d5c]  py-5 px-5  rounded-2xl w-full sm:w-[350px] h-[130px]  border-2">
                <div>
                  <h1 className="font-groot-one font-bold  text-black text-center  text-xl mb-1">
                    Phase 2
                  </h1>
                </div>
                <p className=" text-lg font-popins font-normal lh-1_7 font-kido">
                  • Strategic growth plan.
                </p>
                <p className=" text-lg font-popins font-normal lh-1_7 font-kido">
                  • Execute Marketing.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row gap-5  mt-4">
              <div className="border-[#bc1d5c]  bg-[#fd8b0000] py-5 px-5  rounded-2xl w-full sm:w-[350px] h-[130px] border-2">
                <div>
                  <h1 className="font-groot-one font-bold  text-black text-center  text-xl mb-1">
                    Phase 3
                  </h1>
                </div>
                <p className=" text-lg font-popins font-normal lh-1_7 font-kido">
                  • Airdrop 2% of total supply to PinkSol Loyal holders 
                </p>
              </div>
              <div className="border-[#bc1d5c]  bg-[#fd8b0000] py-5 px-5  rounded-2xl w-full sm:w-[350px] h-[130px] border-2">
                <div>
                  <h1 className="font-groot-one font-bold  text-black text-center  text-xl mb-1">
                    Phase 4
                  </h1>
                </div>
                <p className=" text-lg font-popins font-normal lh-1_7 font-kido">
                  • Tier 1 CEX listings
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="images/ggff.jpg"
              alt=""
              className=" h-[300px] mr-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
