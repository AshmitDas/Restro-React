import './HomePage.css'
import image from './hero.png'
import image1 from './meal-1.jpg'

export default function HomePage() {
    return (
        <div className='bg-container'>
            <div className='main-text-container'>
                <h1 className='main-heading'>Discover and book your perfect dining experience with ease on <span className='text-success'>Restro.</span></h1>
                <p className='description'>Our website offers a diverse range of dining options, from casual eateries to fine dining establishments, all carefully curated to satisfy any craving and cater to any dietary requirements. Whether you're in the mood for Italian, sushi, or vegetarian, we've got you covered.</p>
                <p className='description'>Our booking process is quick and easy, allowing you to secure a table in advance and avoid any waiting times. You can also view menus, photos, and reviews of each restaurant to help you make an informed decision.</p>
            </div>
            <img src={image} className="image1"/>
            <img src={image1} className="image2"/>
        </div>
    )
}