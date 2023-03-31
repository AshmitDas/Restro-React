import './DishCard.css'


export default function DishCard({dish}) {
    return (
        <div class="card card1">
            <img src={dish.imageUrl} class="card-img-top" alt="..."/>
            <div class="card-body d-flex justify-content-between">
                <p class="card-text">{dish.name}</p>
                <p class="card-text">₹{dish.price}</p>
            </div>
            <p class="card-text" className='px-3'>Rating: {dish.rating}/5</p>
        </div>
    )
}