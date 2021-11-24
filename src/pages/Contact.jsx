import React from "react";
import { RiMailCheckLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col justify-center items-center mt-10 h-full">
        <RiMailCheckLine className=" w-96 h-56 mb-10" />
        <h3>Email : arijayakimchi@gmail.com</h3>
        <h3>Phone : 0895623318647</h3>
      </section>
    </div>
  );
};

export default Contact;
