import React, { useState } from "react";
import "../App.css";

function Cart(props) {
  const { productArray, totalPrice, addToCart, summonPrice, totalAmountOfProducts, summonProducts } = props;
  const test = 10;

  return (
    <div className="cart">
      <h3>Varukorg</h3>
      {productArray.map((listItem, i) => {
        
        if (listItem.amount > 0) {
          const multiPrice = totalPrice(listItem.price, listItem.amount);


        }
      })}
      <span className="summonPrice"><b>Totalt antal varor: {totalAmountOfProducts}</b></span><br />
      <span className="summonPrice"><b>Att betala: {summonPrice}kr</b></span>
    </div>
  );
}
export default Cart;
