
Skip to content
Pull requests
Issues
Marketplace
Explore
@alvablot
alvablot /
k3-ramverk
Public

Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights

    Settings

k3-ramverk/src/App.jsx /
@alvablot
alvablot Update App.jsx
Latest commit 8c6974a 14 minutes ago
History
1 contributor
126 lines (119 sloc) 3.56 KB
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
          }
          />
      </Routes>
    </div>
  );
}

export default App;
Footer
© 2022 GitHub, Inc.
Footer navigation

    Terms
    Privacy
    Security
    Status
    Docs
    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

k3-ramverk/App.jsx at main · alvablot/k3-ramverk
