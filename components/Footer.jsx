import React from 'react';

const Footer = () => {
    return (
      <>
        <footer className="footerSection">
          <style jsx>{`
            .footerSection {
              background-color: #262b3e;
              padding: 80px 0px 20px 0px;
            }
            .title {
              font-size: 18px;
              font-weight: 400;
              text-transform: uppercase;
              font-family: "Roboto", sans-serif;
              color: #ffffff;
              margin: 5px 0px 30px 0px;
            }
            .item {
              font-size: 15px;
              font-weight: 400;
              text-transform: capitalize;
              font-family: "Roboto", sans-serif;
              color: #cdced0;
              margin-top: 10px;
            }
            .listWrapper {
              list-style: none;
              padding-left: 0px;
            }
          `}</style>
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4">
                <h6 className="title">Sobre Nosotros</h6>
                <p className="item">
                Asesoría y representación de entidades y empresas
                ante autoridades derivado de investigaciones y
                procesos administrativos sancionatorios;
                Corponariño, Procuraduría regional de Nariño,
                Ministerio del Trabajo,
                </p>
              </div>
              <div className="col-lg-3">
                <h6 className="title">Oficinas</h6>
                <ul className="listWrapper">
                  <li className="item">Booston town, Austria</li>
                  <li className="item">Phone: 84667441</li>
                  <li className="item">Office Time: 10AM- 5PM</li>
                  <li className="item">Email: demo@example.com</li>
                </ul>
              </div>              
              <div className="col-lg-3">
                <h6 className="title">Areas</h6>
                <ul className="listWrapper">
                  <li className="item">Derecho Laboral </li>
                  <li className="item">Derecho Individual Y Colectivo</li>
                  <li className="item">Derecho Ambiental</li>
                  <li className="item">Derecho Constitucional</li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h6 className="title"></h6>
                <ul className="listWrapper">
                  <li className="item">Derecho Disciplinario </li>
                  <li className="item">Civil</li>
                  <li className="item">Comercial</li>
                  <li className="item">Migratorio</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
};

export default Footer;