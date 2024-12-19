import React, { useState } from "react";

const QuestionsComponent = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleToggle = (index) => {
    setExpandedQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-16">
      <div className="bg-[#fafaff] flex flex-col justify-center items-center gap-16 p-8 md:p-16 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#010101] leading-[42px]">
            Frequently Asked Questions PramitiHR
          </h2>
          <p className="text-lg font-medium text-black mt-2">
            Answers to your doubts
          </p>
        </div>

        <div className="w-full space-y-4">
          <div
            className="bg-white rounded-xl border border-[#13131b] p-6 flex flex-col justify-between items-start shadow-sm hover:shadow-lg transition duration-300 ease-in-out cursor-pointer relative"
            onClick={() => handleToggle(0)}
          >
            <div className="flex-grow pr-8">
              <h3 className="text-lg font-bold text-[#010101] leading-7">
                How does the candidate selection process work with PramitiHR?
              </h3>
              {expandedQuestion === 0 && (
                <div className="text-lg font-bold mt-3">
                  The candidate selection process involves automated assessments, interviews, and evaluations tailored to the needs of your organization.
                </div>
              )}
            </div>
            <div className="hidden md:flex absolute top-3 right-3 items-center justify-center bg-gray-200 rounded-full w-7 h-7">
              <img src="/assets/icons/iconr.png" alt="Expand" />
            </div>
          </div>

          <div
            className="bg-white rounded-xl border border-[#010101] p-6 flex flex-col justify-between items-start shadow-sm hover:shadow-lg transition duration-300 ease-in-out cursor-pointer relative"
            onClick={() => handleToggle(1)}
          >
            <div className="flex-grow pr-8">
              <h3 className="text-lg font-bold text-[#010101] leading-7">
                Can I customize the automated interview questions?
              </h3>
              {expandedQuestion === 1 && (
                <p className=" text-lg font-bold mt-3">
                  Yes, with PramitiHR you can customize the interview questions to suit the needs of your company and the vacant position.
                </p>
              )}
            </div>
            <div className="hidden md:flex absolute top-3 right-3 items-center justify-center bg-gray-200 rounded-full w-7 h-7">
              <img src="/assets/icons/iconr.png" alt="Expand" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsComponent;
