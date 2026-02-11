import React from "react";
import AboutUsCard from "./AboutUsCard";
import SectionTitle from "./SectionTitle";
import { GiClawHammer, GiSkills,GiFlatPlatform } from "react-icons/gi";
import { VscLaw } from "react-icons/vsc";
import { MdFamilyRestroom } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";


const AboutUs = () => {
    const sectionTitle = {
      icon : <AiOutlineHome />,
      title: "SOBRE IURISLEX",
      subTitle: "Somos una firma de Abogados Asociados especializados en distintas ramas del Derecho!",
      desc : "IURIS LEX SAS, les da la bienvenida a su portafolio de servicios, un espacio ideado para facilitar la comunicación con nuestros clientes y con personas interesadas en los servicios, de consultoría jurídica especializada." 
    };
    const data = [
      {
        title: "DERECHO PENAL Y DISCIPLINARIO",
        desc: "Asuntos penales y disciplinarios en general.",
        icon: <GiClawHammer size={45} />,
      },
      {
        title: "DERECHO LABORAL INDIVIDUAL Y COLECTIVO",
        desc: "Todo lo relacionado con accidentes de Trabajo. Asesoría en las rutas de manejo y aplicación del S.S.S.T de trabajadores en situación de discapacidad o bajo fuero de estabilidad laboral reforzada.",
        icon: <MdFamilyRestroom size={45} />,
      },
      {
        title: "PENSIONES",
        desc: "Tramites pensionales, calculos actuariales, revisión de historia laboral. ",
        icon: <VscLaw size={45} />,
      },

      {
        title: "ECUADOR DERECHO SOCIETARIO Y TRAMITES REGULATORIOS",
        desc: "Constitución de compañias, desarrollo de proyectos empresariales, tramites regularios ante la ARCSA, asuntos de familia y adolecencia.",
        icon: <GiSkills size={45} />,
      },
      {
        title: "SARLAFT",
        desc: "Sistema de administración del riesgo de lavado de activos y financiación del terrorismo.",
        icon: <GiFlatPlatform size={45} />,
      },
    ];
  return (
    <>
      <section className="aboutusSection">
        <style jsx>{`
  .aboutusSection {
    padding: 80px 0px;
    background-color: #262b3e;
  }

  .cardsGrid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr)); /* 5 tarjetas */
    gap: 18px;
    padding-top: 22px;
  }

  @media (max-width: 1200px) {
    .cardsGrid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 900px) {
    .cardsGrid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 600px) {
    .cardsGrid {
      grid-template-columns: 1fr;
    }
  }
`}</style>

        <div id="about-us" className="container">
          <SectionTitle data={sectionTitle} titleWhite="titleWhite" />
          <div className="cardsGrid">
  {data.map((item, index) => (
    <div key={index} className="cardCol">
      <AboutUsCard data={item} />
    </div>
  ))}
</div>

        </div>
      </section>
    </>
  );
};

export default AboutUs;
