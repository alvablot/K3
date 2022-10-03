import { useState } from "react";
import "./App.css";
import { getProducts } from "./data";
import {
  useRecoilState,
} from "recoil";
import { amountState } from "./recoil/amountOfProducts/atom";

import { Routes, Route, Link } from "react-router-dom";

import HomeRoute from "./routes/HomeRoute";
import ProductRoute from "./routes/ProductRoute";
import ProductsRoute from "./routes/ProductsRoute";
import CartRoute from "./routes/CartRoute";
import CheckoutRoute from "./routes/CheckoutRoute";

function App() {
  const [productArray, setProductArray] = useState(getProducts());
  const [productDetail, setProductDetail] = useState(0);
  function showProducts(id) {
    setProductDetail(id);
  }


  const [totalAmountOfProducts, setTotalAmountOfProducts] =
    useRecoilState(amountState);
  const [summonPrice, setSummonPrice] = useState(0);
  function addToCart(index, i, price, amount) {
    setSummonPrice(summonPrice + price);
    setTotalAmountOfProducts(totalAmountOfProducts + amount);
    const newList = [...productArray];
    newList[index].amount += i;
    setProductArray(newList);
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={
            <HomeRoute
              productArray={productArray}
              addToCart={addToCart}
              showProducts={showProducts}
              productDetail={productDetail}
              value=""
              summonPrice={summonPrice}
              totalAmountOfProducts={totalAmountOfProducts}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsRoute
              productArray={productArray}
              addToCart={addToCart}
              showProducts={showProducts}
              productDetail={productDetail}
              value=""
              summonPrice={summonPrice}
              totalAmountOfProducts={totalAmountOfProducts}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductRoute
              productArray={productArray}
              addToCart={addToCart}
              showProducts={showProducts}
              productDetail={productDetail}
              value=""
              summonPrice={summonPrice}
              totalAmountOfProducts={totalAmountOfProducts}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartRoute
              productArray={productArray}
              addToCart={addToCart}
              showProducts={showProducts}
              productDetail={productDetail}
              value=""
              summonPrice={summonPrice}
              totalAmountOfProducts={totalAmountOfProducts}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutRoute
              productArray={productArray}
              addToCart={addToCart}
              showProducts={showProducts}
              productDetail={productDetail}
              value=""
              summonPrice={summonPrice}
              totalAmountOfProducts={totalAmountOfProducts}
            />
          }
        />
        <Route
          path="*"
          element={
            <HomeRoute
              productArray={productArray}
              addToCart={addToCart}
              showProducts={showProducts}
              productDetail={productDetail}
              value=""
              summonPrice={summonPrice}
              totalAmountOfProducts={totalAmountOfProducts}
            />
      </Routes>
    </div>
  );
}

export default App;
