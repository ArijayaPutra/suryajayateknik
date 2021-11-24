import React from "react";

export const ServicesCard = ({ judul, detail, icon }) => {
  return (
    <>
      <div className="bg-white flex flex-col rounded-lg shadow-lg w-full p-3 sm:w-64 relative items-center cursor-pointer hover:shadow-xl transform hover:scale-105 transition ease-out duration-500 border mt-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 m-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={icon}
          />
        </svg>
        <div className="bg-primary w-full rounded">
          <h4 className="text-center font-bold py-3 ">{judul}</h4>
        </div>
        <p className="text-center mt-7">{detail}</p>
      </div>
    </>
  );
};
