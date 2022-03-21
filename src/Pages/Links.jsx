import React, { useState } from "react";
import "../App.css";
import { Routes, Route, Link } from "react-router-dom";

function Links(props) {
  return (
    <div className="linkMenue">
      <h1 className="headline">PETTERS AFFÄR</h1>
      <Routes>

        <Route path="about" element={<theCart />} />
      </Routes>
      <nav>
      <Link to="/theCart">Varukorg</Link>
      </nav>
    </div>
  );
}
export default Links;
