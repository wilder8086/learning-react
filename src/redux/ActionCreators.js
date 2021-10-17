// Desde aca importamos todo lo que se exportó en el archivo ActionTypes.js
// Para importar usamos ECS6, importar "todo" (*) como ActionTypes lo que se exporta desde ./ActionTypes
import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

// Definimos de una forma standar nuestro ActionCreator que devolvera un Objeto Action que tiene un type y un payload 
export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
});

// ¿ A donde enviamos este tipo de action ?
// Debemos enviarlo al store.
// Ahora dentro del store cuando le llegue esta action ¿Que parte del estado deberia ser afectada?
// La action tiene diversas partes(dishId, rating, author y comment) de un "Comment" que seran enviadas al store y entonces solo deberia cambiar la parte de comments del estado de la app y eso se hará en 


export const fecthDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
}

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});



