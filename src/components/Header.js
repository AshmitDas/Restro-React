import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {


    // const divEl=document.getElementById("small-nav");
    // function toggle(){
    //     divEl.classList.toggle("d-none");
    // }


    return (
        <>
            <div className="d-flex justify-content-between align-items-center background">
                <div className='d-flex'>
                    <h1><Link to="/" className='text-decoration-none text-black'>Restro</Link></h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M57.49 47.74l368.43 368.43a37.28 37.28 0 010 52.72h0a37.29 37.29 0 01-52.72 0l-90-91.55a32 32 0 01-9.2-22.43v-5.53a32 32 0 00-9.52-22.78l-11.62-10.73a32 32 0 00-29.8-7.44h0a48.53 48.53 0 01-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" /><path d="M400 32l-77.25 77.25A64 64 0 00304 154.51v14.86a16 16 0 01-4.69 11.32L288 192M320 224l11.31-11.31a16 16 0 0111.32-4.69h14.86a64 64 0 0045.26-18.75L480 112M440 72l-80 80M200 368l-99.72 100.28a40 40 0 01-56.56 0h0a40 40 0 010-56.56L128 328" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
                </div>
                <nav class="navbar navbar-expand">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link" routerLinkActive="active" aria-current="page"><Link to="/" className='link'>Home</Link></a>
                                <a class="nav-link" routerLinkActive="active"><Link to='/restaurants' className='link'>Restaurants</Link></a>
                                <a class="nav-link" routerLinkActive="active"><Link to="/contact" className='link'>Contact Us</Link></a>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <div className="navbar-open d-none" id="small-nav">
                    <a class="nav-link" routerLinkActive="active" aria-current="page"><Link to="/" className='link'>Home</Link></a>
                    <a class="nav-link" routerLinkActive="active"><Link to='/restaurants' className='link'>Restaurants</Link></a>
                    <a class="nav-link" routerLinkActive="active"><Link to="/contact" className='link'>Contact Us</Link></a>
                </div>
                <button onClick={toggle} className='button-ham' id="ham-menu">
                    <i class="bi bi-list menu-outline"></i>
                </button> */}
            </div>
        </>
    )
}