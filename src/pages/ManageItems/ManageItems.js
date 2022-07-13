import { Link } from "react-router-dom";
import useItems from "../hooks/useItems";
import "./ManageItems.css";

const ManageItems = () => {
  const [inventories, setInventories] = useItems();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://mysterious-eyrie-32357.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = inventories.filter((inventory) => inventory._id !== id);
          setInventories(remaining);
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Manage inventory items</h2>
    <div className="manage">
    {inventories.map(inventory => (
        <div className="manageItem"  key={inventory._id}>

          <img className="image" src={inventory.img} alt="" />
          
            <h6>Name: {inventory.name}</h6>
            <p>Quantity: {inventory.quantity}</p>
            <button  className="deleteButton" onClick={() => handleDelete(inventory._id)}>delete</button>
          
        </div>
      ))}
    </div>
    <button className="manageInventoryBtn mb-2 "><Link  to='/addItem'>Add new item</Link></button>
    </div>
  );
};

export default ManageItems;
