import React, { useState } from "react";
import "../App.css";

function ProductDetails(props) {
  const { productArray, addToCart, id } = props;
  return (
    <div>
      <h2>Vald produkt</h2>
      <div className="details">
        Produktdetaljer
        <h3>{productArray[id].title}</h3>
        <div>{productArray[id].description}</div>
        <div>{productArray[id].price}</div>
        <div>{productArray[id].amount}</div>
        <button onClick={() => addToCart(id, 1, productArray[id].price, 1)}>
          Lägg till
        </button>
      </div>
    </div>
  );
}
export default ProductDetails;
