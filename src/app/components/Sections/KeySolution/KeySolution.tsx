import React from "react";
import "./KeySolutions.css";

const KeySolutions = () => {
  return (
    <div className="key">
      <h1 className="title">Comprehensive Solution</h1>
      <div className="dual__column">
        <div className="column__image">
          <img src="/assets/images/key/m_image01.png" alt="Main illustration" />
        </div>
        <div className="column__content">
          <div className="content__item">
            <img src="/assets/images/key/m_image02.png" alt="Hiring process" />
            <h2>Simplify your hiring process</h2>
            <p>Find out how PramitiHR can transform your business interviews.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeySolutions;
