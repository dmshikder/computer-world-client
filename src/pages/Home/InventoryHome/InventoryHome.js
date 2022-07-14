import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../../Product/Product";
import "./InventoryHome.css";

const InventoryHome = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-eyrie-32357.herokuapp.com/home")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <h1 className="products-title m-5">Inventory items </h1>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <button className="manageInventoryBtn">
        <Link to="/manageItems">Manage Items</Link>
      </button>
    </div>
  );
};

export default InventoryHome;
