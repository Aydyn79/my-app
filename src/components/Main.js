import { Navbar, NavbarBrand } from 'reactstrap';
import React, {useState, useEffect} from'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import { DISHES } from '../shared/dishes';
import ModalWindow from './Modal/Modal';
import { createContext, useContext } from "react";

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

  const dishContext = createContext()

  return (
    <div>
        <Navbar dark color='primary'>
            <div className='container'>
            <NavbarBrand href='/'>Ristorante con Fusions</NavbarBrand>
            </div>
        </Navbar>
        
        <Menu dishes={dishes} onClick={(dishId) => {onDishSelect(dishId);setShow(true);console.log(dishId)}} />
        {/*<DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} 
        onClose={() => setShow(false)} 
        show={show} />
        */}
        <ModalWindow onClose={() => setShow(false)} show={show} >
          <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]}/>
          
        </ModalWindow>
        
    </div>
  );
}


