import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notfound'>
            <h1 className='title'>404</h1>
            <p className='statement'>WE ARE SORRY, THE PAGE YOU REQUESTED WAS NOT FOUND</p>
            <button className='button'><Link to='/'>Go to Home</Link></button>
        </div>
    );
};

export default NotFound;