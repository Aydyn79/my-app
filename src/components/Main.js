import { Navbar, NavbarBrand } from 'reactstrap';
import React, {useState, useEffect} from'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import { DISHES } from '../shared/dishes';
import ModalWindow from './Modal/Modal';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


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
    <div>
        {/*<Navbar dark color='primary'>
            <div className='container'>
            <NavbarBrand href='/'>Ristorante con Fusions</NavbarBrand>
            </div>
          </Navbar>*/}
        <Header />
        <Menu dishes={dishes} onClick={(dishId) => {onDishSelect(dishId);setShow(true);console.log(dishId)}} />
        <ModalWindow onClose={() => setShow(false)} show={show} >
          <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]}/>
        </ModalWindow>
        <Footer /> 
    </div>
  );
}


