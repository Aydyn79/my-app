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
import { actions } from 'react-redux-form';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  fetchComments: () => { dispatch(fetchComments())},
  fetchPromos: () => { dispatch(fetchPromos())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
});

const Main = (props) => {
  
  useEffect(() => {
    props.fetchDishes();
    props.fetchComments();
    props.fetchPromos();
    }, []);


  const DishWithId = () => {
        let id = useParams().dishId
        return(
              <DishDetail dish={props.dishes.dishes.filter((dish) => dish.id === Number(id))[0]}
              isLoading={props.dishes.isLoading}
              errMess={props.dishes.errMess}
              comments={props.comments.filter((comment) => comment.dishId === Number(id))}
              addComment={props.addComment}
              />
          );
        };

  return (
    <>
        <Header />
        <Routes>
          <Route path='/home' element={<Home 
          dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={props.dishes.isLoading}
          dishesErrMess={props.dishes.errMess}
          promotion={props.promotions.filter((promo) => promo.featured)[0]}
          leader={props.leaders.filter((leader) => leader.featured)[0]}
          />} />
          <Route exact path='/menu' element={<Menu dishes={props.dishes} />} />
          <Route path='/menu/:dishId' element={<DishWithId />} />
          <Route exact path='/contactus' element={() => <Contact resetFeedbackForm={props.resetFeedbackForm} />} />
          <Route path='/aboutus' element={<AboutUs leaders={props.leaders}/>} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer /> 
    </>
  );
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));