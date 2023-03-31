import { useState } from "react";
import { useParams } from "react-router-dom";
import './BookNowPage.css'

export default function BookNowPage() {

    const { id } = useParams();
    let [newTicket, setNewTicket] = useState({
        name: "",
        mobile: "",
        email: "",
        nameOfRestaurant: id,
        seats: "",
    })

    const form=document.getElementById("myForm");

    async function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9999/book-ticket", {
            method: "POST",
            body: JSON.stringify(newTicket),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(() => {
                try{
                    alert("Table Booked Successfully");
                }catch(err){
                    alert(err.message);
                }
                setNewTicket({
                    name: "",
                    mobile: "",
                    email: "",
                    nameOfRestaurant: "",
                    seats: "",
                });
        })

        form.reset();

    }

    return (
        <div className="form-container">
            <h2 className="text-center">Book Restaurant</h2>
            <form id="myForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label><br />
                <input type="text" placeholder="Enter your Name" id="name" required onChange={(e) => {
                    setNewTicket({ ...newTicket, name: e.target.value })
                }} />
                <br />
                <br />
                <label htmlFor="email">Email</label><br />
                <input type="email" placeholder="Enter your Email" id="email" required onChange={(e) => {
                    setNewTicket({ ...newTicket, email: e.target.value })
                }} />
                <br />
                <br />
                <label htmlFor="mobile">Mobile</label><br />
                <input type="text" placeholder="Enter your Mobile no." id="mobile" required onChange={(e) => {
                    setNewTicket({ ...newTicket, mobile: e.target.value })
                }}/>
                <br />
                <br />
                <label>Restaurant Name</label><br />
                <input type="text" id="nameOfRestaurant" value={id} readOnly/>
                <br />
                <br />
                <label htmlFor="seats">No.of Seats</label><br />
                <input type="number" min="1" defaultValue="1" id="seats" required onChange={(e) => {
                    setNewTicket({ ...newTicket, seats: e.target.value })
                }}/>
                <br />
                <br />
                <button className="button-form" type="submit">Confirm Booking</button>
            </form>
        </div>
    )
}