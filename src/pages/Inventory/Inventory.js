import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";

const Inventory = () => {
    const {inventoryId} = useParams();
   const [product, setProduct] = useState({});

   useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryId}`;
    fetch(url)
    .then(res => res.json())
    .then(data=> setProduct(data));

   },[])
    
   
    
    return (
        <div>
            <img src={product.img} alt="" />
            
           <h2>Product Id: {inventoryId} </h2>
           <h2>Name: {product.name}</h2>
           <p>Description: {product.description}</p>
           <p>Supplier: {product.supplier}</p>
           <p>Price: ${product.price}</p>
           <p>quantity: {product.quantity}</p>
         
          <div className='text-center '>
          
           <button className='btn btn-primary mb-5'>Delivered</button>
         
          </div>
          <AddProduct></AddProduct>
        </div>
    );
};

export default Inventory;