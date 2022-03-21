import React, { useState } from "react";
import "../App.css";

function Cart(props) {
  const { productArray, totalPrice, addToCart, summonPrice, totalAmountOfProducts, summonProducts } = props;
  const test = 10;

  return (
    <div className="cart">
      <h3>Varukorg detaljerad</h3>
      {productArray.map((listItem, i) => {
        
        if (listItem.amount > 0) {
          const multiPrice = totalPrice(listItem.price, listItem.amount);

          
         
          return (
            <div className="cartItems"  key={`cartKey_${i}`}>
              {listItem.title}
              <br />
              À-pris {listItem.price}kr
              <br />
              Antal <button onClick={() => addToCart(i, -1, -listItem.price, -1)}>-</button>
              <b className="amount">{listItem.amount} </b>
              <button onClick={() => addToCart(i, 1, listItem.price, 1)}>+</button>
            </div>
          );
        }
      })}
      <span className="summonPrice"><b>Antal varor: {totalAmountOfProducts}</b></span><br />
      <span className="summonPrice"><b>Att betala: {summonPrice}kr</b></span>
    </div>
  );
}
export default Cart;
