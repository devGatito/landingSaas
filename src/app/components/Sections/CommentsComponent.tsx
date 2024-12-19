import React from "react";

const CommentsComponent = () => {
  return (
    <div className="bg-[#FCC228] py-12">
      <div className="text-center mb-8">
        <div className="text-3xl font-bold text-black">
          What our clients say
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-5 h-5 bg-yellow-500 rounded-full"
              ></div>
            ))}
          </div>
          <p className="text-lg text-gray-800 mb-4">
            PramitiHR has completely transformed our recruitment process. Artificial intelligence has made everything more efficient and effective. Amazing!
          </p>
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full border border-gray-300"
              src="https://via.placeholder.com/44x44"
              alt="Avatar"
            />
            <div className="text-sm">
              <div className="font-semibold text-black">María López</div>
              <div className="text-gray-500">Directora de RRHH en TechSolutions</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-5 h-5 bg-yellow-500 rounded-full"
              ></div>
            ))}
          </div>
          <p className="text-lg text-gray-800 mb-4">
            Incredibly useful! PramitiHR has saved us valuable time in selecting candidates. Without a doubt, an essential tool for any company.
          </p>
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full border border-gray-300"
              src="https://via.placeholder.com/44x44"
              alt="Avatar"
            />
            <div className="text-sm">
              <div className="font-semibold text-black">Roberto Martínez</div>
              <div className="text-gray-500">Gerente de Talento en InnovateNow</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-5 h-5 bg-yellow-500 rounded-full"
              ></div>
            ))}
          </div>
          <p className="text-lg text-gray-800 mb-4">
            We are delighted with PramitiHR. The ability to conduct automated interviews has greatly improved our hiring efficiency and quality.
          </p>
          <br/>
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full border border-gray-300"
              src="https://via.placeholder.com/44x44"
              alt="Avatar"
            />
            <div className="text-sm">
              <div className="font-semibold text-black">Sandra García</div>
              <div className="text-gray-500">CEO de GlobalTech</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsComponent;
