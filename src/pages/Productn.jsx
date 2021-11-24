import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PaperCardp from "../components/PaperCardp";
import ClientIcon from "../img/clientadd.jpg";

const urlBase = "http://localhost:5000/productn";

const Productn = () => {
  const [products, setProducts] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetch(urlBase)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mx-auto">
      <section className=" w-2/3 mx-auto bg-gray-50">
        <img src={ClientIcon} alt="" className="mx-auto h-98" />
        <div className="m-10 ">
          <Link
            className="bg-primary hover:bg-secondary-100 text-white font-bold py-2 px-4 rounded"
            to="/createp"
          >
            Add Client
          </Link>
        </div>

        {products &&
          products.map((productn) => (
            <PaperCardp
              key={productn.id}
              title={productn.title}
              date={productn.date}
              text={productn.text}
              id={productn.id}
            />
          ))}
      </section>
    </div>
  );
};

export default Productn;
