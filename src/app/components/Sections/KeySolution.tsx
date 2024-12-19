import React from "react";

const KeySolutions = () => {
  return (
    <div className="w-full max-w-7xl mx-auto text-center py-10 px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Comprehensive Solution
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagen principal */}
        <div className="relative w-full h-64 md:h-[500px]">
          <img
            src="/assets/images/key/m_image01.png"
            alt="Main illustration"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Contenido adicional */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/assets/images/key/m_image02.png"
              alt="Hiring process"
              className="w-full max-w-xs md:max-w-sm object-cover border border-gray-300 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-gray-700 mt-4">
              Simplify your hiring process
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-2">
              Find out how PramitiHR can transform your business interviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeySolutions;
