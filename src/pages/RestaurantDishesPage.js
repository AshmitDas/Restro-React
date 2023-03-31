import './RestaurantDishesPage.css'
import DishCard from "../components/DishCard";
import {useParams,Link} from 'react-router-dom';
import { useState,useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function RestaurantDishesPage(){

    let {id}=useParams();
    let [api,setApi]=useState(`http://localhost:9999/dishes/${id}`);
    let [dishes,setDishes]=useState([]);
    
    const getAllDishes=async()=>{
        let response=await fetch(api);
        let data=await response.json();
        console.log(data.dishes)
        setDishes(data.dishes);
    }


    useEffect(()=>{
        getAllDishes();
    },[id,api])

    return(
        <>
            <div className="d-flex justify-content-between align-items-center p-3 filter">
                <div className="d-flex gap-2">
                    <input type="radio" value="Chinese" name="cuisine" onChange={(event)=>{
                        setApi(`http://localhost:9999/dishes/${id}/cuisine/${event.target.value}`)
                    }}/>
                    <label>Chinese</label>
                </div>
                <div className="d-flex gap-2">
                    <input type="radio" value="Mughlai" name="cuisine" onChange={(event)=>{
                        setApi(`http://localhost:9999/dishes/${id}/cuisine/${event.target.value}`)
                    }}/>
                    <label>Mughlai</label>
                </div>
                <div className="d-flex gap-2">
                    <input type="radio" value="Thai" name="cuisine" onChange={(event)=>{
                        setApi(`http://localhost:9999/dishes/${id}/cuisine/${event.target.value}`)
                    }}/>
                    <label>Thai</label>
                </div>
                <div className="d-flex gap-2">
                    <input type="radio" value="Tibetian" name="cuisine" onChange={(event)=>{
                        setApi(`http://localhost:9999/dishes/${id}/cuisine/${event.target.value}`)
                    }}/>
                    <label>Tibetian</label>
                </div>
                <div className="d-flex gap-2">
                    <input type="radio" value="South Indian" name="cuisine" onChange={(event)=>{
                        setApi(`http://localhost:9999/dishes/${id}/cuisine/${event.target.value}`)
                    }}/>
                    <label>S.Indian</label>
                </div>
                <div className="d-flex gap-2">
                    <input type="radio" value="Bengali" name="cuisine" onChange={(event)=>{
                        setApi(`http://localhost:9999/dishes/${id}/cuisine/${event.target.value}`)
                    }}/>
                    <label>Bengali</label>
                </div>
                <div className="d-flex gap-2">
                    <input type="radio" value="Italian" name="cuisine" onChange={(event)=>{
                        setApi(`http://localhost:9999/dishes/${id}/cuisine/${event.target.value}`)
                    }}/>
                    <label>Italian</label>
                </div>
            </div>
            <div className="filter-name p-3 d-flex justify-content-between">
                <h3>{id}</h3>
                <a className="btn btn-success button"><Link className='text-decoration-none text-white' to={`/book-now/${id}`}>Book Now</Link></a>
            </div>
            <div className="p-5 d-flex justify-content-around flex-wrap gap-5 background1">
                {dishes.length===0?<h1 className="m-5 p-5">"Sorry results not found"</h1>:dishes.map((dish)=>{
                    return(
                        <DishCard dish={dish}/>
                    )
                })}
            </div>
        </>
    )
}