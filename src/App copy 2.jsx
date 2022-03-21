import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cart from "./components/Cart";
import CartDetails from "./components/CartDetails";
import Products from "./components/Products";
import Links from "./components/Links";

function App() {
  const [productArray, setProductArray] = useState([
    {
      title: "Bajs",
      description: "Cescent 6vx",
      price: 8500,
      amount: 0,
      id: 0,
    },
    {
      title: "Cykel",
      description: "Cescent 6vx",
      price: 8500,
      amount: 0,
      id: 1,
    },
    {
      title: "Moped",
      description: "Puch Dakota",
      price: 2000,
      amount: 0,
      id: 2,
    },
    {
      title: "Scooter",
      description: "Yamaha KX3",
      price: 6500,
      amount: 0,
      id: 3,
    },
    {
      title: "Cykel",
      description: "Cescent 6vx",
      price: 8500,
      amount: 0,
      id: 4,
    },
    {
      title: "Moped",
      description: "Puch Dakota",
      price: 2000,
      amount: 0,
      id: 5,
    },
    {
      title: "Scooter",
      description: "Yamaha KX3",
      price: 6500,
      amount: 0,
      id: 6,
    },
    {
      title: "Cykel",
      description: "Cescent 6vx",
      price: 8500,
      amount: 0,
      id: 7,
    },
    {
      title: "Moped",
      description: "Puch Dakota",
      price: 2000,
      amount: 0,
      id: 8,
    },
    {
      title: "Scooter",
      description: "Yamaha KX3",
      price: 6500,
      amount: 0,
      id: 9,
    },
    {
      title: "Cykel",
      description: "Cescent 6vx",
      price: 8500,
      amount: 0,
      id: 10,
    },
    {
      title: "Moped",
      description: "Puch Dakota",
      price: 2000,
      amount: 0,
      id: 11,
    },
    {
      title: "Scooter",
      description: "Yamaha KX3",
      price: 6500,
      amount: 0,
      id: 12,
    },
    {
      title: "Cykel",
      description: "Cescent 6vx",
      price: 8500,
      amount: 0,
      id: 13,
    },
    {
      title: "Moped",
      description: "Puch Dakota",
      price: 2000,
      amount: 0,
      id: 14,
    },
    {
      title: "Scooter",
      description: "Yamaha KX3",
      price: 6500,
      amount: 0,
      id: 15,
    },
    {
      title: "Cykel",
      description: "Cescent 6vx",
      price: 8500,
      amount: 0,
      id: 16,
    },
    {
      title: "Moped",
      description: "Puch Dakota",
      price: 2000,
      amount: 0,
      id: 17,
    },
    {
      title: "Scooter",
      description: "Yamaha KX3",
      price: 6500,
      amount: 0,
      id: 18,
    },
    {
      title: "Cykel",
      description: "Cescent 6vx",
      price: 8500,
      amount: 0,
      id: 19,
    },
    {
      title: "Moped",
      description: "Puch Dakota",
      price: 2000,
      amount: 0,
      id: 20,
    },
    {
      title: "Scooter",
      description: "Yamaha KX3",
      price: 6500,
      amount: 0,
      id: 21,
    },
    {
      title: "Cykel",
      description: "Cescent 6vx",
      price: 8500,
      amount: 0,
      id: 22,
    },
    {
      title: "Moped",
      description: "Puch Dakota",
      price: 2000,
      amount: 0,
      id: 23,
    },
    {
      title: "Scooter",
      description: "Yamaha KX3",
      price: 6500,
      amount: 0,
      id: 24,
    },
  ]);
  const [productDetail, setProductDetail] = useState(0);
  function showProducts(id) {
    setProductDetail(id);
  }

  function totalPrice(price, amount) {
    return price * amount;
  }
  const [visa, setVisa] = useState("none");
  const [totalAmountOfProducts, setTotalAmountOfProducts] = useState(0);
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
      <header className="App-header">
        <Links />
        <CartDetails
          value=""
          productArray={productArray}
          totalPrice={totalPrice}
          addToCart={addToCart}
          summonPrice={summonPrice}
          totalAmountOfProducts={totalAmountOfProducts}
        />

        <Cart
          value=""
          productArray={productArray}
          totalPrice={totalPrice}
          addToCart={addToCart}
          summonPrice={summonPrice}
          totalAmountOfProducts={totalAmountOfProducts}
        />
      </header>

      <Products
        productArray={productArray}
        addToCart={addToCart}
        showProducts={showProducts}
        productDetail={productDetail}
      />
    </div>
  );
}

export default App;
