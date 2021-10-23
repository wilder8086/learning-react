// Desde aca importamos todo lo que se exportó en el archivo ActionTypes.js
// Para importar usamos ECS6, importar "todo" (*) como ActionTypes lo que se exporta desde ./ActionTypes
import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

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
  // esto fue pueto para simular la llamada al servidor
  //setTimeout(() => {
  //  dispatch(addDishes(DISHES));
  //}, 2000);

  return fetch(baseUrl + 'dishes')
    .then(response => response.json()) // ahora usamos then para manejar la promesa y cuando la promesa se resuelva convertimos la respuesta en json llamando response.json
    .then(dishes => dispatch(addDishes(dishes))) // y cuando se obtenga los dishes haremos un dispatch al action addDishes

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



export const fecthComments = () => (dispatch) => {

  return fetch(baseUrl + 'comments')
    .then(response => response.json()) // ahora usamos then para manejar la promesa y cuando la promesa se resuelva convertimos la respuesta en json llamando response.json
    .then(comments => dispatch(addComments(comments))) // y cuando se obtenga los comments haremos un dispatch al action addComments

}

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});




export const fecthPromos = () => (dispatch) => {
  dispatch(promosLoading(true));
  return fetch(baseUrl + 'promotions')
    .then(response => response.json()) // ahora usamos then para manejar la promesa y cuando la promesa se resuelva convertimos la respuesta en json llamando response.json
    .then(promos => dispatch(addPromos(promos))) // y cuando se obtenga los promos haremos un dispatch al action addPromos

}

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
});