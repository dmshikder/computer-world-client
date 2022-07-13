import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './Inventory.css';

const Inventory = () => {
  const { inventoryId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://mysterious-eyrie-32357.herokuapp.com/inventory/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleRestock = (event, inventoryId) =>{
    event.preventDefault();
    const newQuantity = event.target.quantity.value;
    let quantity = parseInt(newQuantity) + parseInt(product.quantity);
    console.log(quantity)
  

//     fetch(`https://mysterious-eyrie-32357.herokuapp.com/inventory/${inventoryId}`,{
//         method:'PUT',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(quantity)
//     })
//     .then(res=>res.json())
//     .then(data=>console.log(data))


  }

  const handleDeliver = (inventoryId)=>{
    const quantity = product.quantity;
    const newQuantity = quantity - 1;
    console.log(newQuantity)

  }

  return (
    <div className="w-50 mx-auto product">
      <img className="w-100 rounded" src={product.img} alt="" />

      <h2 className="textId">Product Id: {inventoryId} </h2>
      <h2>Name: {product.name}</h2>
      <p>Description: {product.description}</p>
      <p>Supplier: {product.supplier}</p>
      <p>Price: ${product.price}</p>
      <p>quantity: {product.quantity}</p>

      <div className="text-center ">
        <button onClick={()=>handleDeliver(inventoryId)} className="btn btn-primary mb-5">Delivered</button>
      </div>

      <form onSubmit={handleRestock}>
        <input className="inputRestock"
          type="number"
          name="quantity"
          id=""
          placeholder="insert quantity"
        /> <br /> <br />
        <input type="submit" value="Restock items" />
        
      </form>

      <button className="manageInventoryBtn mb-2 ">
        <Link to="/manageItems">Manage Items</Link>
      </button>
    </div>
  );
};

export default Inventory;
