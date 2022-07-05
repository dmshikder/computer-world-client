import { useEffect, useState } from 'react';

const useItems = inventoryId =>{
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/inventory")
          .then((res) => res.json())
          .then((data) => setInventories(data));
      }, []);
    return [inventories, setInventories]
}

export default useItems;