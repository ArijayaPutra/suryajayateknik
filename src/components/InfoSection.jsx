import React from "react";
import kolamrenangbali from "../img/service-pool.png";

const InfoSection = () => {
  return (
    <>
      <section className="bg-white flex flex-wrap items-center mt-20 justify-center p-5">
        <img className="h-80 rounded" src={kolamrenangbali} alt="pool" />
        <div className="w-full py-12 sm:w-96 sm:ml-20">
          <div className="text-3xl font-bold text-green-600">
            Shop On The Gold Coast
          </div>
          <div className="text-lg py-6">
            Get swimming again with our Gold Coast pool cleaning services – it’s
            the easiest way to keep the family safe. With our independent water
            testing and analysis, we can quickly identify any issues and help
            you treat problems straight away.
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
