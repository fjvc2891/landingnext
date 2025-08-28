import AboutUs from "../components/AboutUs";
//import ExpertAt from "../components/ExpertAt";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import LawPlan from "../components/LawPlan";
import MakeAnAppoinment from "../components/MakeAnAppoinment";
import OurClient from "../components/OurClient";
import WhatsAppFloat from "../components/WhatsAppFloat"; // 👈 importa el botón

export default function Home() {
  return (
    <>
      <HeroSection />
      <LawPlan />
      <AboutUs />
      {/*<ExpertAt />*/}
      <OurClient />
      <MakeAnAppoinment />
      <Footer />

      <WhatsAppFloat /> {/* 👈 aquí solo aparece en la landing */}
    </>
  )
}
