/* eslint-disable @next/next/no-img-element */
import React from "react";

const MakeAnAppoinment = () => {
  return (
    <>
      <section className="makeAnAppoinmentSection">
        <style jsx>{`
          .makeAnAppoinment {
            background: linear-gradient(180deg, #546aae, #b19e7dad),
              url("/image/cta-bg.jpg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 120px 0px;
          }
          .makeAnAppoinment__img {
            height: 150px;
            width: 160px;
            margin-bottom: 30px;
          }
          .social-icons {
            display: flex;
            gap: 20px; /* espacio entre iconos */
            justify-content: center;
            align-items: center;
          }
          .btn__icon {
            display: inline-block;
            transition: 0.3s ease;
          }
          .btn__icon img {
            width: 50px; /* tamaño de los íconos */
            height: 50px;
          }
          .btn__icon:hover {
            transform: scale(1.1);
          }
        `}</style>
        <div id="MakeAnAppoinment" className="makeAnAppoinment">
          <div className="makeAnAppoinment__img">
            <img
              src="/image/iurisa.png"
              alt="logo"
              height={"100%"}
              width="100%"
            />
          </div>

          {/* Contenedor de íconos en horizontal */}
          <div className="social-icons">
            {/* Icono WhatsApp */}
            <a
              href="https://wa.me/573507339816"
              target="_blank"
              rel="noopener noreferrer"
              className="btn__icon"
            >
              <img src="/image/whatsapp.png" alt="WhatsApp" />
            </a>

            {/* Icono Facebook */}
            <a
              href="https://www.facebook.com/TU_PAGINA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn__icon"
            >
              <img src="/image/facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MakeAnAppoinment;
