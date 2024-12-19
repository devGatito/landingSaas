import React from "react";

const ProcessComponent = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h3 className="text-2xl font-semibold text-gray-800">Efficiency and Accuracy</h3>
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
        Transform your Contracting Process With PramitiHR
      </h1>
      <div className="w-full max-w-4xl mb-8">
        <iframe
          className="w-full h-64 md:h-96"
          src="https://www.youtube.com/embed/example"
          title="PramitiHR Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 mt-8">
        <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300 ease-in-out h-64">
          <div className="text-3xl mb-4">🌟</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Rapid Assessment</h2>
          <p className="text-sm text-gray-600 mb-4">Instant evaluation process for agile decision making.</p>
        </div>

        <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300 ease-in-out h-64">
          <div className="text-3xl mb-4">🌟</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Advanced customization</h2>
          <p className="text-sm text-gray-600 mb-4">Adapt evaluation criteria easily to your business needs.</p>
        </div>

        <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300 ease-in-out h-64">
          <div className="text-3xl mb-4">🌟</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Security guaranteed</h2>
          <p className="text-sm text-gray-600 mb-4">Protect the privacy of your data with state-of-the-art security measures.</p>
        </div>

        <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300 ease-in-out h-64">
          <div className="text-3xl mb-4">🌟</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Integral Support</h2>
          <p className="text-sm text-gray-600 mb-4">Dedicated support team to solve any query or problem.</p>
        </div>

        <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300 ease-in-out h-64">
          <div className="text-3xl mb-4">🌟</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Dark mode</h2>
          <p className="text-sm text-gray-600 mb-4">Use this text to describe your product feature or service.</p>
        </div>

        <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300 ease-in-out h-64">
          <div className="text-3xl mb-4">🌟</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Custom branding</h2>
          <p className="text-sm text-gray-600 mb-4">Use this text to describe your product feature or service.</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessComponent;
