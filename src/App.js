import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import RestaurantDishesPage from './pages/RestaurantDishesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFound';
import Footer from './components/Footer';
import BookNowPage from './pages/BookNowPage';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/restaurants" element={<RestaurantPage/>}/>
      <Route path="/restaurant/:id/dishes" element={<RestaurantDishesPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/book-now/:id" element={<BookNowPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
