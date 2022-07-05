import { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
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
    </div>
  );
};

export default Products;
