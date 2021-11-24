import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Createp = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Test")
    if (title !== "" && date !== "" && text !== "") {
      fetch("http://localhost:5000/productn", {
        method: "post",
        headers: {  
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, date, text }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          history.push("/productn");
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 m-auto"
    >
      <h2 className="text-center uppercase m-5">Add List Client</h2>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        <span>Name :</span>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        <span>Phone Number :</span>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        <span>Location :</span>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </label>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  );
};

export default Createp;
