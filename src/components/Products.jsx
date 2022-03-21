import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import "../App.css";

function Products(props) {
  const { productArray, addToCart, showProducts, productDetail } = props;

  return (
    <div>
      <h2>Produktlista</h2>
      <div className="list">
        {productArray.map((listItem, i) => {
          return (
            <div key={`key_${i}`} className="products">
              <h3>{listItem.title}</h3>
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
                  <Link className="buttonText" to="/Products">Läs mer...</Link>
                </nav>
              </button>
            </div>
          );
        })}
      </div>
      <ProductDetails
        productArray={productArray}
        addToCart={addToCart}
        id={productDetail}
      />
    </div>
  );
}
export default Products;
