import { useNavigate } from 'react-router-dom';
import './Product.css';


const Product = ({product}) => {
    const {_id,img,name, description, price,quantity,supplier} = product;
    const navigate = useNavigate();
    
    const navigateToInventoryDetail = id =>{
        navigate(`/inventory/${id}`)
          
    }
    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p><small><span className='fw-bold'>Description:</span> {description}</small></p>
            <p> <span className='fw-bold'>Price:</span> ${price}</p>
            <p><span className='fw-bold'>Quantity: </span> </p>
            <p><span className='fw-bold'>Supplier: </span>{supplier}</p>
            <button onClick={()=>navigateToInventoryDetail(_id)} className='btn btn-primary'>Update Item </button>
            
        </div>
    );
};
export default Product;