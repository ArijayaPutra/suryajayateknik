import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import InfoSection from "../components/InfoSection";
import ClientSection from "../components/ClientSection";
import DetailsSection from "../components/DetailsSection";
import MapSection from "../components/MapSection";
import FooterSection from "../components/FooterSection";

const Home = () => {
  return (
    <div className="no-scrollbar">
      <HeroSection />
      {/* <ServicesSection /> */}
      <InfoSection />
      {/* <ClientSection /> */}
      <DetailsSection />
      {/* <MapSection /> */}
      <FooterSection />
    </div>
  );
};

export default Home;
