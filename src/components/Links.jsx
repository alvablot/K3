import React, { useState } from "react";
import "../App.css";
import { Routes, Route, Link } from "react-router-dom";

function Links(props) {
  return (
    <div className="linkMenue">
      <h1 className="headline">PETTERS AFFÄR</h1>

      <nav>
        <Link to="/">Hem</Link> | 
        <Link to="/products">Produkter</Link> |
        <Link to="/cart">Varukorg</Link> | 
        <Link to="/checkout">Kassa</Link> | 

      </nav>
    </div>
  );
}
export default Links;
