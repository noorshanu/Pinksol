import React from "react";

function Mission() {
  return (
    <section className=" container-wrapper" data-aos="fade-up">
      <div className=" flex justify-between items-center flex-col-reverse sm:flex-row">
        <div className="w-full">
          <img src="images/cat.jpg" alt="" className=" h-[350px] rounded-xl" />
        </div>

        <div className="  border-2  border-[#bc1d5c]  py-8 px-4 rounded-2xl shadow-xl max-w-2xl ">
          <h1 className=" font-kid font-bold text-3xl sm:text-5xl my-3 text-[#bc1d5c]">PinkSol Mission</h1>

          <p className=" text-lg sm:text-xl font-kido "> 
            To the moon we aim, no bumps, just zoom! It's   PinkSol moon day, a
              PinkSol celebration in full sway. Yes, yes, to the moon   PinkSol
            flies, today's the day, no lies. So, you in for this moon ride?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
