import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
        <div className="w-50 mx-auto">
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
         <div>
            <input type="number" name="quantity" id="" placeholder="insert quantity" />
            <button className="d-flex flex-column" type="submit">restock the items</button>
         </div>
         <button className="manageInventoryBtn mb-2 "><Link  to='/manageInventories'>Manage Inventories</Link></button>
        </div>
    );
};

export default Inventory;