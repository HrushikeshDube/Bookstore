import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

import { Link } from "react-router-dom";

function Course() {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getbooks = async (req, res) => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        console.log(res.data);
        setbook(res.data);
      } catch (error) {}
    };
    getbooks();
  });
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 text-center justify-center items-center">
          <h1 className="text-2xl font-semibold md:text-4xl mb-5">
            We're delighted to have{" "}
            <span className="text-pink-500">you Here!:)</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200 mt-3">
              back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
