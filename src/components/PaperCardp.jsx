import React from "react";
import Trash from "../img/trash_icon.svg";
import EditIcon from "../img/edit_icon.svg";
import { Link } from "react-router-dom";

const PaperCardp = ({ text, title, date, imgSrc, id }) => {
  const handleDelete = () => {
    fetch("http://localhost:5000/productn/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
        window.location.reload();
      }) // or res.json()
      .then((res) => console.log(res));
  };

  return (
    <>
      <div className=" bg-blue-100 rounded overflow-hidden shadow-md relative container  mx-auto px-10 py-10 font-serif mb-10">
        <div className=" flex justify-between flex-col md:flex-row">
          <div className="text-xl md:text-4xl text-gray-600 mb-5">{title}</div>
          <div className="flex">
            <Link
              to={{
                pathname: "/editp",
                state: { text, title, date, imgSrc, id },
              }}
              className="mr-5"
            >
              <img
                src={EditIcon}
                alt="trash icon"
                className="cursor-pointer bg-green-500 text-green-800 fill-current h-8 w-8 rounded-lg"
              />
            </Link>

            <img
              src={Trash}
              alt="trash icon"
              className="cursor-pointer bg-red-500 text-red-800 fill-current h-8 w-8 rounded-lg"
              onClick={handleDelete}
            />
          </div>
        </div>

        <div className="text-sm pb-4">{date}</div>
        <div className="leading-8 text-justify">{text}</div>
      </div>
    </>
  );
};

export default PaperCardp;
