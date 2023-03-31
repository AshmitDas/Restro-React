import './RestaurantCard.css';
import {Link} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export default function RestaurantCard({restaurant}) {
    const showAlert=()=>{
        toast.error("No Tables Available.")
    }
    
    const showNormalAlert=()=>{
        toast.error("No Tables Available");
    }
    return (
        <>
        <div className="card card1">
            <img src={restaurant.imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                {!restaurant.tableAvailability?<h5 className="card-title" onClick={showNormalAlert}>{restaurant.name}</h5>:<Link to={`/restaurant/${restaurant.name}/dishes`} className="text-black text-decoration-none"><h5 className="card-title">{restaurant.name}</h5></Link>}
                <div className='d-flex justify-content-between align-items-center my-2'>
                    <p className="card-text">Rating: {restaurant.rating}/5</p>
                    {!restaurant.tableAvailability?<a className="btn btn-success button" onClick={showAlert}>Book Now</a>:<a className="btn btn-success button"><Link className='text-decoration-none text-white' to={`/book-now/${restaurant.name}`}>Book Now</Link></a>}
                </div>
            </div>
        </div>
        <Toaster/>
        </>
    )
}