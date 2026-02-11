/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineTeam } from "react-icons/ai";

const TEAM = [
  {
    name: "Dr. David Jesús Vivas Córdoba",
    desc:
      "Abogado Especialista en Derecho Constitucional (Universidad Nacional de Colombia). Oficial de Cumplimiento certificado. Experiencia en representación judicial y asesoría jurídica para entidades como Colpensiones, Coordiser Ltda. y Ministerio de Defensa.",
    img: "/image/david.png",
  },
  {
    name: "Dr. Dorman Sigifredo Muñoz Delgado",
    desc:
      "Abogado Especialista en Ciencias Penales y Criminológicas (Universidad Externado de Colombia). Trayectoria en Derecho Penal, litigio y consultoría en asuntos penales y disciplinarios, con posicionamiento profesional ante jueces y fiscales del circuito judicial de Pasto.",
    img: "/image/dorman.png",
  },
  {
    name: "Dr. Everth Camilo Vivas Córdoba",
    desc:
      "Abogado Especialista en Derecho Laboral y Relaciones Industriales (Universidad Externado de Colombia). Experiencia en asuntos laborales para entidades como Ministerio del Trabajo y Colpensiones, y consultoría jurídica a empresas del sector público y privado.",
    img: "/image/everth.png",
  },
  {
    name: "Dra. Samanta Valeria Dorado Gómez",
    desc:
      "Abogada Especialista en Contratación Estatal (Universidad Externado de Colombia). Experiencia como consultora en contratación estatal para entidades públicas y privadas, y asesoría de FENSUAGRO, entre otras organizaciones.",
    img: "/image/samanta.png",
  },
  {
    name: "Dr. William Armando Córdoba Revelo",
    desc:
      "Abogado litigante habilitado para el ejercicio profesional en Colombia y Ecuador. Experiencia como Jefe de Asuntos Disciplinarios del Hospital Civil de Ipiales, Gerente de Bioasep y Healthpro S.A.S., y asesor/consultor jurídico de empresas privadas en Colombia y Ecuador.",
    img: "/image/william.png",
  },
  
];

export default function Team() {
  return (
    <section id="team" className="team paddingY">
      <div className="wrap">
        <h2 className="title" ><AiOutlineTeam className="icon" /> Nuestro equipo</h2>        
        <p className="subtitle">
          Firma de abogados asociados con especialización jurídica y enfoque estratégico en
          asesoría y representación judicial y administrativa en Colombia y Ecuador.
        </p>

        <div className="grid">
          {TEAM.map((p) => (
            <article key={p.name} className="card">
              <div className="avatarWrap">
                <img src={p.img} alt={p.name} className="avatar" />
              </div>

              <h3 className="name">{p.name}</h3>

              <div className="desc">
                {p.desc}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team {
          background: #fff;
          scroll-margin-top: 110px;
        }

        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 18px;
          text-align: center;
        }

        .title {
          font-size: 28px;
          font-weight: 500;
          color: #010830;
          margin: 0 0 8px;
        }

        .subtitle {
          font-size: 15px;
          color: #555;
          margin: 0 auto 34px;
          max-width: 900px;
          line-height: 1.5;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          align-items: stretch;
        }

        .card {
          background: #f9f9f9;
          border-radius: 14px;
          padding: 16px 14px;
          text-align: left;
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: transform 0.18s ease;
          display: flex;
          flex-direction: column;
        }

        .card:hover {
          transform: translateY(-3px);
        }

        .avatarWrap {
        width: 100%;
        height: 180px;            /* 👈 controla el tamaño de la foto */
        display: flex;
        justify-content: center;
        overflow: hidden;
        border-radius: 12px;
        margin-bottom: 12px;
        }

        .avatar {
        width: 140px;             /* ancho real visible */
        height: 180px;            /* alto real visible */
        object-fit: cover;
        object-position: center top; /* 👈 rostro siempre visible */
        border-radius: 12px;
        }


        .name {
          font-size: 15px;
          font-weight: 500;
          margin: 0 0 10px;
          color: #010830;
          text-align: center;
          line-height: 1.25;
        }

        /* CLAVE: texto completo, pero contenido */
        .desc {
          font-size: 13.5px;
          color: #555;
          line-height: 1.45;
          max-height: 120px;        /* ajusta: 110-160 según gusto */
          overflow: auto;           /* scroll interno */
          padding-right: 6px;       /* espacio para scrollbar */
        }

        /* scroll más discreto */
        .desc::-webkit-scrollbar {
          width: 6px;
        }
        .desc::-webkit-scrollbar-thumb {
          background: rgba(171, 133, 68, 0.35);
          border-radius: 10px;
        }

        @media (max-width: 980px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .desc {
            max-height: 140px;
          }
        }
      `}</style>
    </section>
  );
}
