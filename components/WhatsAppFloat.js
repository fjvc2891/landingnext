/* eslint-disable @next/next/no-img-element */
import React from "react";

const WhatsAppFloat = () => {
  return (
    <>
      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }
        .whatsapp-float img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }
        .whatsapp-float img:hover {
          transform: scale(1.1);
        }
      `}</style>

      <a
        href="https://wa.me/573507339816?text=Bienvenido%20a%20VCIurislex%20👋"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <img src="/image/whatsapp.png" alt="WhatsApp" />
      </a>
    </>
  );
};

export default WhatsAppFloat;
