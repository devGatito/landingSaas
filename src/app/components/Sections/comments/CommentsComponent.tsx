import React from "react";
import './comments.css';
const CommentsComponent = () => {
  return <>
  <div className="social-proof-reviews">
  <div className="title">What our clients say</div>
  <div className="card-container">
    <div className="card">
      <div className="card-content">
        <div className="rating">
          <div className="rating-stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
        <div className="review">
          PramitiHR has completely transformed our recruitment process. Artificial intelligence has made everything more efficient and effective. Amazing!
        </div>
      </div>
      <div className="avatar">
        <img className="avatar-img" src="https://via.placeholder.com/44x44" alt="Avatar"></img>
        <div className="avatar-info">
          <div className="user-name">María López</div>
          <div className="user-title">Directora de RRHH en TechSolutions</div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <div className="rating">
          <div className="rating-stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
        <div className="review">
          Incredibly useful! PramitiHR has saved us valuable time in selecting candidates. Without a doubt, an essential tool for any company.
        </div>
      </div>
      <div className="avatar">
        <img className="avatar-img" src="https://via.placeholder.com/44x44" alt="Avatar"></img>
        <div className="avatar-info">
          <div className="user-name">Roberto Martínez</div>
          <div className="user-title">Gerente de Talento en InnovateNow</div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <div className="rating">
          <div className="rating-stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
        <div className="review">
          We are delighted with PramitiHR. The ability to conduct automated interviews has greatly improved our hiring efficiency and quality.
        </div>
      </div>
      <div className="avatar">
        <img className="avatar-img" src="https://via.placeholder.com/44x44" alt="Avatar"></img>
        <div className="avatar-info">
          <div className="user-name">Sandra García</div>
          <div className="user-title">CEO de GlobalTech</div>
        </div>
      </div>
    </div>
  </div>
</div>
</>;


};

export default CommentsComponent;