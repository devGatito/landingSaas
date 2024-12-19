import React from "react";

const KeySolutions = () => {
  return (
    <div className="w-full max-w-7xl mx-auto text-center py-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Comprehensive Solution</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-full">
          <img
            src="/assets/images/key/m_image01.png"
            alt="Main illustration"
            className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3 max-w-full max-h-[400px] object-contain"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <img
              src="/assets/images/key/m_image02.png"
              alt="Hiring process"
              className="w-full max-w-xs object-cover border border-gray-300 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-gray-700 mt-4">Simplify your hiring process</h2>
            <p className="text-gray-600 text-base leading-relaxed">Find out how PramitiHR can transform your business interviews.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeySolutions;
