import React, { useState } from "react";
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
function Cart(props) {
  const {
    productArray,
    totalPrice,
    addToCart,
    summonPrice,
    totalAmountOfProducts,
    summonProducts,
  } = props;
  const test = 10;

  return (
    <div className="cart">
      {productArray.map((listItem, i) => {
        if (listItem.amount > 0) {
          return (
            <div className="cartItems" key={`cartKey_${i}`}>
              <b>{listItem.title}</b>
              <br />
              {listItem.description}
              <br />
              <img style={{ width: "100px" }} src={imgs[i]} />
              <br />
              À-pris {listItem.price}kr
              <br />
              Antal{" "}
              <button onClick={() => addToCart(i, -1, -listItem.price, -1)}>
                -
              </button>
              <b className="amount">{listItem.amount} </b>
              <button onClick={() => addToCart(i, 1, listItem.price, 1)}>
                +
              </button>
            </div>
          );
        }
      })}
      <span className="summonPrice">
        <b>Antal varor: {totalAmountOfProducts}</b>
      </span>
      <br />
      <span className="summonPrice">
        <b>Summa: {summonPrice}kr</b>
        <br />
        Frakt tillkommer
      </span>
    </div>
  );
}
export default Cart;
