import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

import img_0 from "../assets/img_0.jpg";
import img_1 from "../assets/img_1.jpg";
import img_2 from "../assets/img_2.jpg";
import img_3 from "../assets/img_3.jpg";
import img_4 from "../assets/img_4.jpg";
import img_5 from "../assets/img_5.jpg";
import img_6 from "../assets/img_6.jpg";
import img_7 from "../assets/img_7.jpg";
import img_8 from "../assets/img_8.jpg";
import img_9 from "../assets/img_9.jpg";
import img_10 from "../assets/img_10.jpg";
import img_11 from "../assets/img_11.jpg";
import img_12 from "../assets/img_12.jpg";
import img_13 from "../assets/img_13.jpg";
import img_14 from "../assets/img_14.jpg";

const imgs = [
  img_0,
  img_1,
  img_2,
  img_3,
  img_4,
  img_5,
  img_6,
  img_7,
  img_8,
  img_9,
  img_10,
  img_11,
  img_12,
  img_13,
  img_14,
];

function Products(props) {
  const { productArray, addToCart, showProducts, productDetail } = props;

  return (
    <div className="list">
      {productArray.map((listItem, i) => {
        return (
          <div key={`key_${i}`} className="products">
            <h3>{listItem.title}</h3>
            <img src={imgs[i]} />
            <br />
            {listItem.description}
            <br />
            {listItem.price}kr
            <br />
            <button onClick={() => addToCart(i, 1, listItem.price, 1)}>
              Lägg till i varukorg
            </button>
            <br />
            <button onClick={() => showProducts(listItem.id)}>
              <nav>
                <Link className="buttonText" to={`/product/${i}`}>
                  Läs mer...
                </Link>
              </nav>
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default Products;
