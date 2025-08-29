import AboutUs from "../components/AboutUs";
//import ExpertAt from "../components/ExpertAt";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import LawPlan from "../components/LawPlan";
import MakeAnAppoinment from "../components/MakeAnAppoinment";
import OurClient from "../components/OurClient";

export default function Home() {
  return (
    <>
      {/* Fondo único para Hero + LawPlan */}
      <div className="heroAndLawBg">
        <HeroSection />
        <LawPlan />
      </div>

      <AboutUs />
      {/*<ExpertAt />*/}
      <OurClient />
      <MakeAnAppoinment />
      <Footer />
    </>
  );
}
