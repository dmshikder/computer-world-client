import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("../../../public/fakedata.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
      <div className="container">
        <h1 className="products-title m-5">Our Products </h1>
        <div className="products-container">
          
          {products.map((product) => (
           
            <Product  product={product}></Product>
          ))}
        </div>
      </div>
    );
  };

export default Products;