import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Cart(props) {
  const {
    productArray,
    addToCart,
    summonPrice,
    totalAmountOfProducts,
    summonProducts,
  } = props;
  const test = 10;

  return (
    <div className="cart">
      <div className="products">
        <nav><Link to="/cart"><h3 className="black">Varukorg</h3></Link></nav>
        {productArray.map((listItem, i) => {
          if (listItem.amount > 0) {
          }
        })}
        <span className="summonPrice">
          <b>Totalt antal varor: {totalAmountOfProducts}</b>
        </span>
        <br />
        <span className="summonPrice">
          <b>Summa: {summonPrice}kr</b>
        </span>
      </div>{" "}
    </div>
  );
}
export default Cart;
