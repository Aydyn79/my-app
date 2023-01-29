import { Navbar, NavbarBrand } from 'reactstrap';
import React, {useState, useEffect} from'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import ModalWindow from './Modal/Modal';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route, Navigate, useParams} from 'react-router-dom';
import Contact from './ContactComponent';
import AboutUs from './AboutUsComponent';
import { connect } from 'react-redux';
import { withRouter } from '../utils/wr';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


const Main = (props) => {
  // const [dishes, setDishes] = useState([]);
  // const [comments, setComments] = useState([]);
  // const [promotions, setPromotions] = useState([]);
  // const [leaders, setLeaders] = useState([]);
  // const [selectedDish, setSelectedDish] = useState(null);
  
  // useEffect(() => {
  //       setDishes(DISHES);
  //       setComments(COMMENTS);
  //       setPromotions(PROMOTIONS);
  //       setLeaders(LEADERS);
  //   }, []);



  const DishWithId = () => {
        let id = useParams().dishId
        return(
              <DishDetail dish={props.dishes.filter((dish) => dish.id === Number(id))[0]} 
                comments={props.comments.filter((comment) => comment.dishId === Number(id))} />
          );
        };

  return (
    <>
        <Header />
        <Routes>
          <Route path='/home' element={<Home 
          dish={props.dishes.filter((dish) => dish.featured)[0]}
          promotion={props.promotions.filter((promo) => promo.featured)[0]}
          leader={props.leaders.filter((leader) => leader.featured)[0]}
          />} />
          <Route exact path='/menu' element={<Menu dishes={props.dishes} />} />
          <Route path='/menu/:dishId' element={<DishWithId />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/aboutus' element={<AboutUs leaders={props.leaders}/>} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer /> 
    </>
  );
}


export default withRouter(connect(mapStateToProps)(Main));