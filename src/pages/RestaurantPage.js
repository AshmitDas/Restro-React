import { useState,useEffect } from "react"
import RestaurantCard from "../components/RestaurantCard";
import './RestaurantPage.css'


export default function RestaurantPage(){

    let [api,setApi]=useState("http://localhost:9999/restaurants");
    let [value,setValue]=useState("");
    let [restaurants,setRestaurants]=useState([]);

    const getAllRestaurants=async()=>{
        let response=await fetch(api);
        let data=await response.json();
        console.log(data)
        setRestaurants(data.restaurants);
    }

    const changeApi=function(){
        setApi(`http://localhost:9999/restaurants/${value}`);
    }

    useEffect(()=>{
        getAllRestaurants();
    },[api])

    return(
        <>
        <div className="d-flex justify-content-between align-items-center p-3 filter">
            <div className="search-container">
                <input type="search" placeholder="Search for a Restaurant" className="search-bar" onChange={(event)=>{
                    setValue(event.target.value)
                }}/>
                <button className="border-none rounded mx-1" onClick={changeApi}><i class="bi bi-search fs-5"></i></button>
            </div>
            <select className="dropdown" onChange={(event)=>{
                setApi(`http://localhost:9999/restaurants/${event.target.value}`)
            }}>
                <option value="">Select your City</option>
                <option value="city/Bengaluru">Bengaluru</option>
                <option value="city/Chennai">Chennai</option>
                <option value="city/Hyderabad">Hyderabad</option>
                <option value="city/Kolkata">Kolkata</option>
                <option value="city/Mumbai">Mumbai</option>
                <option value="city/Pune">Pune</option>
            </select>
        </div>
        <div className="p-5 d-flex justify-content-around flex-wrap gap-5 background1">
            {restaurants===undefined?<h1>"Sorry results not found"</h1>:restaurants.map((restaurant)=>{
                return(
                    <RestaurantCard restaurant={restaurant}/>
                )
            })}
        </div>
        </>
    )
}


