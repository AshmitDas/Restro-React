import image from './images.jpg'
import './ContactPage.css'

export default function ContactPage(){
    return(
        <div className="d-flex flex-column justify-content-center align-items-center p-5 background-contact">
            <h1 className='contact-heading'>For queries, reach us out at:</h1>
            <img src={image} className="image"/>
            <h3 className="contact-heading">Landline: 060-1234566</h3>
            <h3 className="contact-heading">Email: restro@gmail.com</h3>
        </div>
    )
}