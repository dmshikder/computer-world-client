import { Link } from "react-router-dom";

const ManageInventories = () => {
    return (
        <div>
            <h2>this is manage inventiries</h2>
            <button ><Link  to='/addproduct'>Add new items</Link></button>
        </div>
    );
};

export default ManageInventories;