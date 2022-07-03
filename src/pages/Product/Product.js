import './Product.css';


const Product = ({product}) => {
    const {img,name, description, price,quantity,supplier} = product;
    // const navigate = useNavigate();
    
    // const navigateToServiceDetail = id =>{
    //     navigate(`/inventory/${id}`)
          
    // }
    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p><small><span className='fw-bold'>Description:</span> {description}</small></p>
            <p> <span className='fw-bold'>Price:</span> ${price}</p>
            <p><span className='fw-bold'>Quantity: </span>{quantity}</p>
            <p><span className='fw-bold'>Supplier: </span>{supplier}</p>
            {/* <button onClick={()=>navigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name} </button> */}
            <button  className='btn btn-primary'>Update Product </button>
        </div>
    );
};
export default Product;