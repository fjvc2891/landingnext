import React from "react";
import { MdOutlineFormatQuote } from "react-icons/md";
import SectionTitle from "./SectionTitle";
import TestimonialSlider from "./Testimonial/TestimonialSlider";

const OurClient = () => {
  const sectionTitle = {
    icon: <MdOutlineFormatQuote />,
    title: "Nuestra Sociedad",
    subTitle: "Seguridad jurídica especializada",
    desc: "Asesoría y representación de entidades y empresas ante autoridades derivado de investigaciones y procesos administrativos sancionatorios; Corponariño, Procuraduría regional de Nariño, Ministerio del Trabajo,",
  };

  const pagination = {
    el: ".my-custom-pagination-div",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class=${className}>  </div>`;
    },
  };

  return (
    <>
      <section className="ourClientSection">
        <style jsx>{`
          .ourClientSection {
            padding: 80px 0px;
          }

          .paginationWrapper {
            margin-top: 15px;
          }
        `}</style>
        <div className="container" id="OurClient">
          <div className="row">
            <div className="col-lg-6">
              <SectionTitle data={sectionTitle} smallTitle={"smallTitle"} />
              <div className="col-lg-10 offset-lg-2">
                <div className="paginationWrapper">
                  <div className="my-custom-pagination-div"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <TestimonialSlider pagination={pagination} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClient;
