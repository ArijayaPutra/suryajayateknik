import React from "react";
import { ServicesCard } from "./ServicesCard";

const ServicesSection = () => {
  return (
    <div>
      <section id={"services"} className="py-20 bg-gray-100">
        <div className="font-roboto text-3xl text-center mb-5">Services</div>
        <div className="flex flex-wrap justify-around py-5 p-5 ">
          <ServicesCard
            judul="Pool Maintenance"
            detail="Servicing all areas of the Gold Coast, working closely with resort managers and body corporates on every aspect of managing your pool and spa."
            icon="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
          <ServicesCard
            judul="Testkit Water Pool"
            detail="Free independent water testing. Our independent water analysis reveals all, saving you time and money on chemicals and service."
            icon="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
          <ServicesCard
            judul="Chemicals "
            detail="Book a service or regular clean with our expert pool technicians today AND get your pool clean and back in balance"
            icon="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />

          <ServicesCard
            judul="Equipment Pool"
            detail="Repairs for commercial and residential pools. We’re experts at troubleshooting problems on site to minimise equipment down time"
            icon="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
