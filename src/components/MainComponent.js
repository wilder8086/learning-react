import React, { Component } from 'react'
import Menu from './MenuComponent';
//import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import { addComment } from '../redux/ActionCreators';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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
  addComment : (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
})

class Main extends Component {
  constructor(props) {
    super(props);
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            addComment={this.props.addComment}/>
      );
    };    

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
          <Route exact path='/contactus' component={Contact} />
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

// Conectando mapDispatchToProps entonces addComment esta disponible dentro del componente MainComponent
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
