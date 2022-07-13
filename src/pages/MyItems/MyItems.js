import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  
  

  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `https://mysterious-eyrie-32357.herokuapp.com/myItem?email=${email}`;
    try{
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      setItems(data);
      console.log(data)

    }
    catch(error){
      console.log(error.messsage);
      if(error.response.status === 401 || error.response.status === 403 ){
        signOut(auth);
        navigate('/login')

      }

    }
    };
    getItems();
  }, [user]);


  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://mysterious-eyrie-32357.herokuapp.com/myItem/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };

  return (
    <div>
      <h2 className="w-50 mx-auto">My items </h2>
     

      <div className="manage">
    {items.map(item => (
        <div className="manageItem"  key={item._id}>

          <img className="image" src={item.img} alt="" />
          
            <h6>Name: {item.name}</h6>
            <p>Quantity: {item.quantity}</p>
            <button  className="deleteButton" onClick={() => handleDelete(item._id)}>delete</button>
          
          
        </div>
      ))}
    </div>
    
      
     
    </div>
  );
};

export default MyItems;
