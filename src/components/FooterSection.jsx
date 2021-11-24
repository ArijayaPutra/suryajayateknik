import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div>
      <section id="contact">
        <div className="flex flex-wrap">
          <div className="w-full h-32 bg-tertiary flex flex-wrap justify-around py-6box-border">
            <div className=" w-2/12 h-full py-5 sm:flex justify-between items-center">
              <a href="https://www.instagram.com/poolshopsuryajayateknik/">
                <FaInstagram className="cursor-pointer fill-current text-gray-100 text-2xl mb-1" />
              </a>
              <a href="https://www.facebook.com/Poolshopsuryajayateknik-101193482275755/">
                <FaFacebookSquare className="cursor-pointer fill-current text-gray-100 text-2xl mb-1" />
              </a>
              <a href="https://wa.me/628123618911?text=Order:">
                <FaWhatsapp className="cursor-pointer fill-current text-gray-100 text-2xl" />
              </a>
            </div>
            <div className="w-2/12 text-gray-100 text-xs "></div>
            <div className="w-4/12 text-gray-100 text-xs sm:text-sm flex flex-col justify-center">
              <FaHome className="mr-1 text-2xl" />
              <p>Address :</p>
              <p className="flex">
                Jalan Raya Andong, Petulu Gianyar Bali 80571 Indonesia
              </p>
            </div>
          </div>
          {/* <div className="w-full h-10 text-center py-2">
            <a href="https://ncit.id.com/"> &copy; NCIT</a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default FooterSection;
