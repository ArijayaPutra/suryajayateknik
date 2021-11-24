import React from "react";
import swimmminghero from "../img/img-3.jpg";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div>
      <section id={"home"} className="w-full relative">
        <div className="w-full h-full flex flex-col items-center absolute top-0 sm:top-20">
          <div className=" text-lg text-gray-700 font-roboto font-bold sm:text-5xl py-7 md:text-4xl lg:text-5xl xl:text-5xl">
            GENERAL SUPPLIER AND MAINTENANCE
          </div>
          <div className="text-basetext-gray-700 font-roboto sm:text-4xl md:text-3xl lg:text-4xl">
            SWIMMING POOL IN BALI
          </div>
          <button className=" flex bg-primary text-xs py-1 px-2 hover:shadow-xl transition ease-out duration-500 text-white font-semibold hover:text-white md:py-2 md:px-4 border border-primary hover:border-transparent rounded mt-5 md:mt-28 uppercase">
            <FaShoppingCart className=" mr-2 text-base" />
            <Link to="/product">Our Products</Link>
          </button>
        </div>
        <img src={swimmminghero} alt="poolshop bali kolam renang" />
      </section>
    </div>
  );
};

export default HeroSection;
