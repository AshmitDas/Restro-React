import {Link} from 'react-router-dom';
import './Footer.css'

export default function Footer(){
    return(
        <div className='background-footer'>
            <div className='d-flex justify-content-between align-items-center p-3 footer-container'>
                <div className='d-flex'>
                    <h3><Link to="/" className='text-decoration-none text-white py-1'>Restro</Link></h3>
                </div>
                <div>
                    <h5>&copy;Copyright 2023 Restaurant Booking</h5>
                </div>
                <div className='d-flex justify-content-around gap-3'>
                    <i class="bi bi-instagram fs-4"></i>
                    <i class="bi bi-twitter fs-4"></i>
                    <i class="bi bi-facebook fs-4"></i>
                </div>
            </div>
        </div>
    )
}