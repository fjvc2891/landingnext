import React from 'react';
import { useRouter } from "next/router";
import NavbarWithDropDown from './Navbar/Navbar';

const HeroSection = () => {
  
  const router = useRouter();

    return (
      <>
        <div className="herosectionWrapper">
          <style jsx>{`
            .herosectionWrapper {
              background-image: url("/image/hero-bg-img.jpg");
              height: 90vh;
              background-attachment: fixed;
              background-repeat: no-repeat;
              background-position: center top;
              background-size: cover;
            }
            .herosectionWrapperContent {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
              height: 70vh;
              padding: 0 20px;
              text-align: left;
            }
            .herosectionWrapperContent h2 {
              font-size: 3.5rem;
              font-weight: 400;
              color: #fff;
              text-transform: capitalize;
              font-family: "Roboto", sans-serif;
              margin: 0;
            }
            .herosectionWrapperContent p {
              font-size: 1.2rem;
              font-weight: 500;
              color: #fff;
              text-transform: capitalize;
              font-family: "Roboto", sans-serif;
              margin-top: 15px;
              margin-bottom: 15px;
            }            
            /* Responsive adjustments */
            @media screen and (max-width: 768px) {
              .herosectionWrapperContent h2 {
                font-size: 2.5rem;
                text-align: center;
              }
              .herosectionWrapperContent p {
                font-size: 1rem;
                text-align: center;
              }
              .herosectionWrapperContent {
                align-items: center;
             }
            }
            @media screen and (max-width: 480px) {
              .herosectionWrapper {
                height: auto;
                padding-top: 40px;
                padding-bottom: 40px;
              }
              .herosectionWrapperContent h2 {
                font-size: 2rem;
              }
              .herosectionWrapperContent p {
                font-size: 0.9rem;
              }
            }
          `}</style>
          <div id="HeroSection" className="container">
            <div className="row">
              <div className="col-lg-12">
                <NavbarWithDropDown />
                <div className="herosectionWrapperContent">
                  <h2>
                    "Seguridad jurídica especializada" <br /> Asesoría Jurídica Especializada para tu Empresa.
                  </h2>
                  <p>OFICINAS EN COLOMBIA Y ECUADOR</p>
                  <button
                    onClick={() => router.push("/consultancy-form")}
                    className="btn__primary"
                  >
                    Envía una Consulta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default HeroSection;
