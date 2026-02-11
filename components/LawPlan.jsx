import React from "react";
import {
  MdOutlineLibraryBooks,
  MdFamilyRestroom,
  MdOutlinePersonalInjury,
  MdOutlineSportsCricket,
} from "react-icons/md";

const LawPlan = () => {
  return (
    <div id="law-plan" className="lawPlan">
      <style jsx>{`

      .lawPlan {
  margin-top: -90px;
  position: relative;
  z-index: 20;
}

  

  .lawPlanCard {
  background: #ffffff !important;
  border-radius: 14px;
  box-shadow: 0px 15px 45px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}


  .lawPlan__item {
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: transparent; /* ahora el fondo lo da lawPlanCard */
    padding: 22px 16px;           /* más compacto */
    border-right: 1px solid rgba(0, 0, 0, 0.08);
    height: 100%;
  }

  .lawPlan__item:last-child {
    border-right: none;
  }

  .lawPlan__item:hover {
    background-color: #c9b38c;
    cursor: pointer;
  }

  .lawPlan__item:hover > .lawPlan__item__logo {
    color: #ffffff;
  }

  .lawPlan__item:hover > .lawPlan__item__content h6 {
    color: #ffffff;
  }

  .lawPlan__item:hover > .lawPlan__item__content p {
    color: rgba(255,255,255,0.9);
  }

  .lawPlan__item__logo {
    margin: 0px 14px 0 10px;
    color: #ab8544;
    flex: 0 0 auto;
  }

  .lawPlan__item__content p {
    margin: 0px;
    font-size: 13px;
    font-weight: 400;
    color: #666;
    text-transform: none;
    font-family: "Roboto", sans-serif;
  }

  .lawPlan__item__content h6 {
    font-size: 14px;            /* más pequeño */
    font-weight: 500;
    color: #010830cc;
    margin: 0;
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
    line-height: 1.25;
  }

  @media (max-width: 991.98px) {
    .lawPlan {
      margin-top: -40px;
    }

    .lawPlan__item {
      border-right: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }

    .lawPlan__item:last-child {
      border-bottom: none;
    }
  }
`}</style>

      
      <div className="container">
          <div className="row g-0">
        <div className="row g-0">
          <div className="col-lg-3">
            <div className="lawPlan__item">
              <div className="lawPlan__item__logo">
                <MdOutlineLibraryBooks size={40}  />
              </div>
              <div className="lawPlan__item__content">
                <p></p>
                <h6>DERECHO lABORAL INDIVIDUAL Y COLECTIVO</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="lawPlan__item">
              <div className="lawPlan__item__logo">
                <MdOutlineLibraryBooks size={40} />
              </div>
              <div className="lawPlan__item__content">
                <p></p>
                <h6>PENSIONES, ASESIORIA EN CONTRATACION ESTATAL Y SEGUROS</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="lawPlan__item">
              <div className="lawPlan__item__logo">
                <MdOutlinePersonalInjury size={40}  />
              </div>
              <div className="lawPlan__item__content">
                <p></p>
                <h6>ECUADOR DERECHO SOCIETARIO Y TRAMITES REGULATORIOS</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="lawPlan__item">
              <div className="lawPlan__item__logo">
                <MdOutlineSportsCricket size={40}  />
              </div>
              <div className="lawPlan__item__content">
                <p></p>
                <h6>DERECHO PENAL Y DISCIPLINARIO</h6>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default LawPlan;
