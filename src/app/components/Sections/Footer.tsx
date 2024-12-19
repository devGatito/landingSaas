import React from "react";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center w-full h-auto bg-gray-100 border-t border-gray-300 p-8">
      <div className="flex-1 text-center md:text-left md:pr-8 mb-8 md:mb-0">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Contáctanos</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Mensaje"
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full p-2 bg-white text-black border border-black rounded-md transition duration-300"
            >
            Enviar
          </button>
        </form>
      </div>

      {/* Sección de Imagen */}
     

      {/* Sección de Ubicación */}
      <div className="flex-1 text-center md:text-left md:pl-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Ubicación</h3>
        <p className="text-sm text-gray-600">
          Dirección: Calle Ejemplo 123, Ciudad, País
        </p>
        <p className="text-sm text-gray-600">Teléfono: +123 456 7890</p>
        <p className="text-sm text-gray-600">Correo: info@ejemplo.com</p>
        <div className="mt-4 " >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508618!2d-122.41941508468146!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cbb09b469%3A0x68b97b7a2a4417bc!2sCalle%20Ejemplo%20123%2C%20Ciudad%2C%20Pa%C3%ADs!5e0!3m2!1ses!2s!4v1615925261974!5m2!1ses!2s"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
