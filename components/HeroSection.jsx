import React from "react";
import NavbarWithDropDown from "./Navbar/Navbar";

const HeroSection = () => {
  return (
    <>
      <div className="herosectionWrapper">
        <NavbarWithDropDown />

        <div id="HeroSection" className="heroContent container">
          <div className="heroInner">
            <h1 className="heroTitle">
              Asesoría Jurídica Especializada
            </h1>

            <p className="heroSubtitle">
              Oficinas en Colombia y Ecuador
            </p>

            <p className="heroDescription">
              Somos una firma de abogados asociados que combina especialización jurídica y enfoque estratégico en la asesoría y representación judicial y administrativa de empresas y entidades públicas en Colombia y Ecuador. Nuestra experiencia se ha consolidado en la atención de asuntos complejos para entidades como Colpensiones, Ministerio del Trabajo, Ministerio de Defensa y Coordiser Ltda., entre otros, lo que respalda una práctica orientada a la seguridad jurídica y a la toma de decisiones con criterio técnico.
            </p>
          </div>
        </div>

        <style jsx>{`
          .herosectionWrapper {
            padding-bottom: 140px;
            position: relative;
            background-image: url("/image/hero-bg-img.jpg");
            min-height: 85vh;
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }

          /* overlay suave para mejor lectura */
          .herosectionWrapper::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.2) 75%,
    rgba(0, 0, 0, 0.0) 100%
  );
}



          .heroContent {
            position: relative;
            z-index: 2;
            margin-top: 140px; /* 👈 controla qué tan arriba queda */
          }

          .heroInner {
            max-width: 800px;
          }

          .heroTitle {
            font-size: 3.2rem;
            font-weight: 500;
              color: #fff;
            margin: 0 0 10px;
            line-height: 1.1;
          }

          .heroSubtitle {
            font-size: 1.1rem;
            font-weight: 500;
              color: #c9b38c;
            margin-bottom: 25px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .heroDescription {
            font-size: 1rem;
            line-height: 1.6;
              color: rgba(255,255,255,0.92);
            max-width: 700px;
          }

          @media (max-width: 768px) {
            .heroContent {
              margin-top: 120px;
            }

            .heroTitle {
              font-size: 2.2rem;
            }

            .heroDescription {
              font-size: 0.95rem;
            }
          }

          @media (max-width: 480px) {
            .herosectionWrapper {
              min-height: auto;
              padding-bottom: 60px;
            }

            .heroContent {
              margin-top: 100px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default HeroSection;
