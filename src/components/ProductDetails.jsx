import React, { useState } from "react";
import Cart from "../components/Cart";
import Links from "../components/Links";
import { Link } from "react-router-dom";
import "../App.css";

import img_0 from "../assets/img_0.jpg"
import img_1 from "../assets/img_1.jpg"
import img_2 from "../assets/img_2.jpg"
import img_3 from "../assets/img_3.jpg"
import img_4 from "../assets/img_4.jpg"
import img_5 from "../assets/img_5.jpg"
import img_6 from "../assets/img_6.jpg"
import img_7 from "../assets/img_7.jpg"
import img_8 from "../assets/img_8.jpg"
import img_9 from "../assets/img_9.jpg"
import img_10 from "../assets/img_10.jpg"
import img_11 from "../assets/img_11.jpg"
import img_12 from "../assets/img_12.jpg"
import img_13 from "../assets/img_13.jpg"
import img_14 from "../assets/img_14.jpg"

const imgs = [img_0, img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10, img_11, img_12, img_13, img_14]

function ProductDetails(props) {
  const {
    productArray,
    addToCart,
    summonPrice,
    totalAmountOfProducts,
    id,
  } = props;
  return (
    <div>
      <header className="App-header">
        <Links />
        <Cart
          value=""
          productArray={productArray}
          addToCart={addToCart}
          summonPrice={summonPrice}
          totalAmountOfProducts={totalAmountOfProducts}
        />
      </header>

      <h2>Vald produkt</h2>
      <div className="details">
        Produktdetaljer
        <h1>{productArray[id].title}</h1>
        <nav><Link to="/products"><button>Tillbaks</button></Link></nav><br />
        <img src={imgs[id]} />
        <div>Beskrivning: {productArray[id].description}</div>
        <div>Pris: {productArray[id].price}</div>
        <button onClick={() => addToCart(id, 1, productArray[id].price, 1)}>
          Lägg till i kundkorg
        </button>
      </div>
    </div>
  );
}
export default ProductDetails;
