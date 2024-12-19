import React from "react";
import Image from "next/image";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Drive <br />
            hiring with <span className="text-[#7668fb]">PramitiHR</span>
          </h1>
          <p className="hero-subtitle">
            The smart interview platform for modern companies.
          </p>
        </div>
        <button className="hero-button">Try free now!</button>
      </div>

      <div className="hero-images-container">
        <div className="hero-images-wrapper">
          <div className="hero-image small" />

          <div className="heroe-image">
            <img
              className="hero-image medium"
              src="/assets/icons/7309711.png" 
              width={'50px'}
              height={'auto'}
            />
          </div>
          <img
              className="hero-image large"
              src="/assets/icons/7309680.png" 
              width={'50px'}
              height={'auto'}
            />
        </div>
        <div className="hero-image pie" />

      </div>
    </div>
  );
};

export default Hero;
