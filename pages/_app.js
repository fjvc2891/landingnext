import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// swiper slider 
import 'swiper/css';
import "swiper/css/pagination";

import WhatsAppFloat from "../components/WhatsAppFloat"; // 👈 importa tu botón

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppFloat /> {/* 👈 aquí se carga el botón en todas las páginas */}
    </>
  );
}

export default MyApp;
