import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="p-4 bg-[#A0DCFF] flex flex-col justify-start items-start gap-16 overflow-hidden">
      <div className="w-full h-20 flex flex-col justify-center items-center gap-3">
        <h1 className="text-black text-2xl font-bold leading-10">PramitiHR: Your Partner for Interviews</h1>
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-center">
        <div className="flex flex-col justify-between items-center gap-5">
          <div className="w-11 h-11 p-2 bg-gray-100 rounded-lg border border-gray-700 flex justify-center items-center overflow-hidden">
            <img src="/assets/icons/ray.png" alt="Icon" />
            <div className="w-full h-full p-1 flex justify-center items-center"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-black font-semibold leading-7 text-center">Powerful AI</h3>
            <p className="text-black font-normal leading-6 text-center">Advanced AI ability to preselect candidates efficiently.</p>
          </div>
          <a href="#" className="text-black font-bold leading-7 hover:text-cyan-400 text-center">Learn more about AI</a>
        </div>

        <div className="flex flex-col justify-between items-center gap-5">
          <div className="w-11 h-11 p-2 bg-gray-100 rounded-lg border border-gray-700 flex justify-center items-center overflow-hidden">
            <img src="/assets/icons/Group.png" alt="Icon" />
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 absolute top-0 left-0"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-black font-semibold leading-7 text-center">Efficient Interviews</h3>
            <p className="text-black font-normal leading-6 text-center">Save time by automating the interview process smart technology.</p>
          </div>
          <a href="#" className="text-black font-bold leading-7 hover:text-cyan-400 text-center">Find out more details</a>
        </div>

        <div className="flex flex-col justify-between items-center gap-5">
          <div className="w-11 h-11 p-2 bg-gray-100 rounded-lg border border-gray-700 flex justify-center items-center overflow-hidden">
            <img src="/assets/icons/candado.png" alt="Icon" />
            <div className="w-full h-full p-1 flex justify-center items-center"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-black font-semibold leading-7 text-center">Precise Results</h3>
            <p className="text-black font-normal leading-6 text-center">Obtain detailed and accurate reports on the evaluated candidates.</p>
          </div>
          <a href="#" className="text-black font-bold leading-7 hover:text-cyan-400 text-center">Explore the results</a>
        </div>

        <div className="flex flex-col justify-between items-center gap-5">
          <div className="w-11 h-11 p-2 bg-gray-100 rounded-lg border border-gray-700 flex justify-center items-center overflow-hidden">
            <img src="/assets/icons/flow.png" alt="Icon" />
            <div className="w-full h-full flex justify-center items-center"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-black font-semibold leading-7 text-center">Intuitive interface</h3>
            <p className="text-black font-normal leading-6 text-center">Friendly design for a hassle-free user experience.</p>
          </div>
          <a href="#" className="text-black font-bold leading-7 hover:text-cyan-400 text-center">Get to know our interface</a>
        </div>
      </div>
    </div>
  );
};

export default Features;
