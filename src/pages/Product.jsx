import React, { useState } from "react";
import { product } from "../utils/sjt_product";
import { FaSearch } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const [search, setSearch] = useState("");

  const filtered = product.filter((item) => {
    return item.product_name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className=" bg-gray-50">
      <section id="details">
        <div className="font-roboto text-center text-green-600 text-3xl mb-5 py-5 uppercase">
          Welcome to Poolshop SuryaJayaTeknik
        </div>
        <p className="text-justify px-10 p-3">
          Thank you for visiting Surya Jaya Teknik. We have been satisying
          customers with a secure and realiable service across Indonesia
          especially since 2016. Our experienced team have a continued
          commitment to provide you with superior product knowledge in the pool
          industry, the best possible service and great value deals on pool
          products.
        </p>
        <div className="font-roboto text-green-600 text-3xl px-10 py-10">
          Featured Products
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between px-10 py-10 ">
          <div className="rounded-full shadow-md flex justify-between items-center ">
            <input
              className=" py-4 px-6 focus:outline-none"
              type="text"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search ..."
            />
            <button>
              <FaSearch className=" w-8 h-8 p-2 mr-4 bg-blue-400 fill-current text-white rounded-full" />
            </button>
          </div>
          <button className="bg-green-500 text-white shadow-md rounded flex justify-center items-center p-1 mt-4">
            <a target="" href="https://wa.me/62895623318647?text=Order:">
              ORDER NOW !{" "}
            </a>
            <FaWhatsapp className="w-8 h-8 p-2 mr-4fill-green-500 text-white rounded-full" />
          </button>
        </div>
        <div className="grid md:grid-cols-4">
          {filtered.map((item) => {
            return (
              <div key={item.id}>
                <ProductCard
                  product={item.product_name}
                  country={item.country}
                  type={item.type}
                  imgSrc={item.img}
                  packages={item.package}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Product;
