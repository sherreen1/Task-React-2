import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./../Home/Navbar";
import axios from "./../../node_modules/axios/lib/axios";

function ProdectPage() {
  const [text, setText] = useState([]);
  //   useEffect(() => {
  //     fetch("https://dummyjson.com/products")
  //       .then((res) => res.json())
  //       .then((item) => {
  //         setText(item.products);
  //       });
  //   }, []);

//   axios
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((item) => {
      setText(item.data.products);
    });
  }, []);
  
  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          {text.map((result) => {
            return (
              <div key={result.id} className="col-md-4 text-center w-100">
                <img
                  src={result.images[0]}
                  className="w-100"
                  alt={result.title}
                />
                <h4>{result.title}</h4>
                <h6>{result.price}$</h6>
                <h6>{result.id}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProdectPage;
