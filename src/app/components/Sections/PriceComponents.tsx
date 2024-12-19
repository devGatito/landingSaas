import React, { useState } from "react";

const PriceComponents = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <h1 className="text-2xl font-bold">Flexible Price Plans</h1>
      <p className="text-center text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="text-center text-gray-600">
        Nullam non neque eget felis facilisis aliquam nec ac nulla.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {[
          {
            title: "Free Package",
            price: "",
            description: "Ideal for personal use and small businesses",
            features: ["Unlimited Candidates", "Automated Interviews", "Evaluation Reports"],
            icon: "/assets/icons/Icon.png",
          },
          {
            title: "$16 Monthly Pro Plan",
            price: "$16",
            description: "Perfect for Medium Equipment",
            features: ["Premium Feature 1", "Premium Feature 2", "Evaluation Reports"],
            icon: "/assets/icons/flash.png",
          },
          {
            title: "Customized Plan",
            price: "",
            description: "Complete Business Solutions",
            features: ["Enterprise Feature 1", "Enterprise Feature 2", "Evaluation Reports"],
            icon: "/assets/icons/start.png",
          },
        ].map((plan, index) => (
          <div
            key={index}
            onClick={() => handleCardSelect(index)}
            className={`border rounded-lg shadow-md p-6 text-center cursor-pointer transition-colors duration-300 ${
              selectedCard === index ? "bg-[#49636C] text-black" : "bg-white"
            }`}
            style={{
              borderColor: selectedCard === index ? "#000" : "transparent",
            }}
          >
            <img
              src={plan.icon}
              alt={`${plan.title} Icon`}
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className={`text-lg font-semibold ${selectedCard === index ? "text-white" : "text-black"}`}>{plan.title}</h3>
            <p className={`text-gray-600 ${selectedCard === index ? "text-white" : "text-gray-600"}`}>{plan.description}</p>
            <hr className="my-4" />
            <ul className="text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className={`flex items-center gap-2 mb-2 ${selectedCard === index ? "text-white" : "text-black"}`}>
                  <img
                    src="/assets/icons/Check.png"
                    alt="Check"
                    className="w-4 h-4"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-4 px-4 py-2 rounded transition-all duration-300 ${
                selectedCard === index
                  ? "bg-[#D2FAB7] text-black"
                  : "bg-white text-black border border-black"
              }`}
              style={{
                borderRadius: selectedCard === index ? "8px" : "10px",
              }}
            >
              {selectedCard === index ? "Selected" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceComponents;
