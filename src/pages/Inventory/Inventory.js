import { Link, useParams } from "react-router-dom";

const Inventory = () => {
    
    const {inventoryId} = useParams();
    return (
        <div>
           <h2>Product detail: {inventoryId} </h2>
         
          <div className='text-center '>
          <Link to='/checkout'>
           <button className='btn btn-primary mb-5'>Delivered</button>
           </Link>
          </div>
        </div>
    );
};

export default Inventory;