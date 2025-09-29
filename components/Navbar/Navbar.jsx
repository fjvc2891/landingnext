/* eslint-disable @next/next/no-img-element */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarWithDropDown() {
  return (
    <>
      <Navbar className="navbarHeader py-2" expand="lg">
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
          background: transparent;
        }
        .navbarContainer {
          position: relative;
          min-height: 88px;
        }
        .brandLogo {
          height: 140px;
          width: auto;
        }
        .brandCenter {
          position: absolute;
          left: 50%;
          top: 6px;
          transform: translateX(-50%);
          margin: 0;
          padding: 0;
        }
        .navbarToggleCustom {
          position: absolute;
          right: 14px;
          top: 18px;
          padding: 8px 10px;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.6);
          background: rgba(255, 255, 255, 0.25);
        }
        .navbarToggleCustom .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0,0,0,0.95)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
          width: 1.75rem;
          height: 1.75rem;
        }

        /* --- LINKS (GLOBAL) --- */
        :global(.navbar .nav-link.navbarHeader__item) {
          color: #000 !important; /* negro */
          transition: color 0.2s ease;
        }
        :global(.navbar .nav-link.navbarHeader__item:hover) {
          color: #007b5e !important; /* verde al pasar */
        }

        /* --- MOBILE --- */
        @media (max-width: 991.98px) {
          .collapseCustom {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            padding: 12px 8px 16px;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
          }
          .navbarHeader__item {
            padding: 10px 12px;
            font-size: 1.05rem;
            color: black;
          }
        }

        /* --- DESKTOP --- */
        @media (min-width: 992px) {
          .brandCenter {
            position: static;
            transform: none;
          }
          .brandLogo {
            height: 90px;
          }
          .navbarToggleCustom {
            display: none;
          }
          .navbarHeader {
            background: rgba(255, 255, 255, 0.8);
          }
          .navbarHeader__item {
            margin-left: 10px;
          }
        }
      `}</style>
    </>
  );
}

export default NavbarWithDropDown;
