import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-screen relative bg-transparent overflow-hidden pt-16">
      <div className="absolute flex flex-col justify-start items-start gap-8 px-6 md:px-12 top-1/5 left-1/10 lg:left-1/12 lg:top-1/3 z-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-tight text-black">
            Drive <br />
            hiring with <span className="text-[#7668fb]">PramitiHR</span>
          </h1>
          <p className="text-base text-black">
            The smart interview platform for modern companies.
          </p>
        </div>
        <button className="px-6 py-3 text-sm font-semibold rounded-lg bg-green-200 border border-green-200 text-black hover:bg-green-300 transition">
          Try free now!
        </button>
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden flex items-center justify-center z-0">
        <div className="relative w-full h-full">
          <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-pink-200 rounded-full top-0 left-1/5 transform -translate-x-1/2 -translate-y-1/2 transition"></div>

          <div className="absolute top-[45%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 md:w-64 md:h-64 bg-yellow-400 rounded-full transition">
            <img
              className="w-full h-full object-contain"
              src="/assets/icons/7309711.png"
              alt="Medium Icon"
            />
          </div>

          <img
            className="absolute top-[82%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 bg-green-400 rounded-full transition"
            src="/assets/icons/7309680.png"
            alt="Large Icon"
          />

<div className="absolute w-32 h-32 md:w-40 md:h-40 bg-[#a0dcff] rounded-full -mb-16 bottom-0 right-[20%] transform -translate-x-2/2 transition"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
