import React, { useState } from "react";

import "../App.css";
import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="linkMenue">
      <h1 className="headline">PETTERS AFFÄR</h1>

      <nav>
        <Link to="/home">Hem</Link> |<Link to="/products">Produkter</Link> |
        <Link to="/cart">Varukorg</Link> |<Link to="/checkout">Kassa</Link>
      </nav>
    </div>
  );
}
export default Links;
