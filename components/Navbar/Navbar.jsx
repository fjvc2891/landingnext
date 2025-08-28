/* eslint-disable @next/next/no-img-element */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarWithDropDown() {
  return (
    <>
      <Navbar className="navbarHeader py-2" expand="lg" variant="dark">
        <Container className="navbarContainer">
          {/* LOGO */}
          <Navbar.Brand href="#home" className="brandCenter">
            <img
              src="/image/iurisa.png"
              alt="logo"
              className="brandLogo"
            />
          </Navbar.Brand>

          {/* HAMBURGUESA (visible en móvil) */}
          <Navbar.Toggle
            aria-controls="primary-navbar"
            className="navbarToggleCustom"
          >
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>

          {/* MENÚ */}
          <Navbar.Collapse id="primary-navbar" className="collapseCustom">
            <Nav className="ms-auto text-center text-lg-start">
              <Nav.Link className="navbarHeader__item" href="#HeroSection">
                Inicio
              </Nav.Link>
              <Nav.Link className="navbarHeader__item" href="#law-plan">
                Nuestros Servicios
              </Nav.Link>
              <Nav.Link className="navbarHeader__item" href="#about-us">
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link className="navbarHeader__item" href="#OurClient">
                Projects
              </Nav.Link>
              <Nav.Link className="navbarHeader__item" href="#MakeAnAppoinment">
                Contacts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx>{`
        /* --- BASE --- */
        .navbarHeader {
          background: transparent; /* se mezcla con tu hero; ajusta si quieres sólido */
        }
        .navbarContainer {
          position: relative;
          min-height: 88px; /* asegura espacio para logo grande en móvil */
        }
        .brandLogo {
          height: 140px; /* ✅ grande y claro en móvil */
          width: auto;
        }

        /* centramos el logo en móvil */
        .brandCenter {
          position: absolute;
          left: 50%;
          top: 6px;
          transform: translateX(-50%);
          margin: 0;
          padding: 0;
        }

        /* botón hamburguesa visible y con estilo */
        .navbarToggleCustom {
          position: absolute;
          right: 14px;
          top: 18px;
          padding: 8px 10px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(0, 0, 0, 0.25);
        }
        /* icono hamburguesa blanco y más visible */
        .navbarToggleCustom .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255,255,255,0.95)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
          width: 1.75rem;
          height: 1.75rem;
        }

        /* desplegable: fondo legible en móvil */
        .collapseCustom {
          /* en móvil, hacemos panel completo bajo el navbar */
        }
        @media (max-width: 991.98px) {
          .collapseCustom {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(4px);
            padding: 12px 8px 16px;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
          }
          .navbarHeader__item {
            color: #fff !important;
            padding: 10px 12px;
            font-size: 1.05rem;
          }
        }

        /* --- ESCRITORIO (>= 992px) --- */
        @media (min-width: 992px) {
          .brandCenter {
            position: static;   /* vuelve a su lugar natural */
            transform: none;
          }
          .brandLogo {
            height: 90px;       /* tamaño cómodo en desktop */
          }
          .navbarToggleCustom {
            display: none;      /* no mostramos hamburguesa en desktop */
          }
          .navbarHeader {
            background: rgba(0, 0, 0, 0.35); /* opcional: mejora contraste sobre el hero */
          }
          .navbarHeader__item {
            color: #fff !important;
            margin-left: 10px;
          }
        }
      `}</style>
    </>
  );
}

export default NavbarWithDropDown;
