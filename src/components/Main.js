import { Navbar, NavbarBrand } from 'reactstrap';
import React, {useState, useEffect} from'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import { DISHES } from '../shared/dishes';
import ModalWindow from './Modal/Modal';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function Main() {
  const [dishes, setDishes] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
        setDishes(DISHES);
    }, []);

  const onDishSelect = (dishId) => {
        setSelectedDish(dishId);
        console.log(selectedDish)
      }



  return (
    <>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route exact path='/menu' element={<Menu dishes={dishes} />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
        {/* <ModalWindow onClose={() => setShow(false)} show={show} >
          <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]}/>
        </ModalWindow> */}
        <Footer /> 
    </>
  );
}


