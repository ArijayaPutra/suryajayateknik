import React from "react";

const ClientCard = ({ client, location, imgSrc }) => {
  return (
    <div>
      <div className="card w-80 md:w-56 lg:w-80 cursor-pointer mt-5">
        <img src={imgSrc} alt={imgSrc} />
        <div className="m-4">
          <span className="font-bold">{client}</span>
          <span className="block text-gray-500 text-sm">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
