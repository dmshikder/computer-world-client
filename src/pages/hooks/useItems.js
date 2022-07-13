import { useEffect, useState } from "react";

const useItems = (inventoryId) => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-eyrie-32357.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return [inventories, setInventories];
};

export default useItems;
