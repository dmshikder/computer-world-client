import { useEffect, useState } from 'react';

const useInventoryDetail = inventoryId =>{
    const [inventory, setInventory] = useState({});

    useEffect(() =>{
   
    
     fetch("fakedata.json")
     .then(res => res.json())
     .then(data => setInventory(data))
    },[inventoryId]);
    return [inventory]
}

export default useInventoryDetail;