import React from "react";

const ProductCard = ({ product, country, type, imgSrc, packages }) => {
  return (
    <div className="card m-auto w-64 md:w-40 lg:w-40 xl:w-64 cursor-pointer mt-5 hover:shadow-xl transform hover:scale-100 transition ease-out duration-500 ">
      <img src={imgSrc} alt={product} className="" />
      <div className=" m-1 flex flex-col ">
        <span className="text-base text-gray-600 md:text-xs">
          {product} - {packages}
        </span>
        <span className="text-sm text-gray-500 md:text-xs">{type}</span>
        <span className="text-xs text-gray-400">{country}</span>
      </div>
    </div>
  );
};

export default ProductCard;
