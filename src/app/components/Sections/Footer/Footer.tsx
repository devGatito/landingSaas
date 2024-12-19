import React from "react";
import "./Footer.css";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>Información del Footer</h3>
        <p>Este es un ejemplo de texto en el footer.</p>
      </div>
      <div className="footer-image-container">
        <Image
          src="/assets/images/m_image.png"
          alt="Descripción de la imagen"
          layout="fill"
          objectFit="cover"
          className="footer-image"
        />
      </div>
    </footer>
  );
};

export default FooterComponent;
