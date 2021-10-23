import React, { Component } from 'react'
import Menu from './MenuComponent';
//import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import { addComment, fecthDishes, fecthComments, fecthPromos } from '../redux/ActionCreators';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fecthDishes();
    this.props.fecthComments();
    this.props.fecthPromos();
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({ match }) => {
      return (
        <Dishdetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment} />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
          <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        {/* <div className="container">
          <Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
          <Dishdetail selectedDish={this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]} />
        </div> */}
        <Footer />
      </div>
    );
  }
}


const mapStateToProps = state => {
  //voy a mapear todo el estado que esta diponible desde mi Redux Store a traves de las props de mi componente principal Main
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
};


// Si queremos despachar algo entonces debemos mapear ese algo al distpatch (mapDispatchToProps)
// Debemos importar el ActionCreator ADD_COMMENT ya que necesitamos ese ActionCreator para obtener un objeto Action
// para despacharlo al store diciendo "llama al store dispatch".
// Definimos una funcion mapDispatchToProps que recibe como parametro una funcion dispatch, esa funcion es de nuestro store que cuando se haga el connect "connect(mapStateToProps, mapDispatchToProps)" este mapDispatchToProps recibira el dispatch como parametro este hara que la propiedad "addComment" sea una funcion que tome parametros "dishId, rating, author, comment" y esta despacha con "dispatch" la Action. y como hacemos esto ?, usamos el ActionCreator que me devolverá la Action. 
// Ahora debemos proporcionar este mapDispatchToProps a connect

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fecthDishes: () => dispatch(fecthDishes()),
  fecthComments: () => dispatch(fecthComments()),
  fecthPromos: () => dispatch(fecthPromos()),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
})


// Conectando mapDispatchToProps entonces addComment esta disponible dentro del componente MainComponent
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
