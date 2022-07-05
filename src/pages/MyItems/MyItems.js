import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const email = user.email;

      const url = `http://localhost:5000/myItem?email=${email}`;
      const { data } = await axios.get(url);
      setItems(data);
    };
    getItems();
  }, [user]);

  return (
    <div>
      <h2>this is my items : {items.length}</h2>
    </div>
  );
};

export default MyItems;
