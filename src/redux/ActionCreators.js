// Desde aca importamos todo lo que se exportó en el archivo ActionTypes.js
// Para importar usamos ECS6, importar "todo" (*) como ActionTypes lo que se exporta desde ./ActionTypes
import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

// Definimos de una forma standar nuestro ActionCreator que devolvera un Objeto Action que tiene un type y un payload 
export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  };

  newComment.date = new Date().toISOString();
  console.log("comentario ........ "+ JSON.stringify(newComment));
  return fetch(baseUrl + 'comments', {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log('post comments', error.message); alert('Your comment could not be posted\nError: ' + error.message); });
};


export const fecthDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));
  // esto fue pueto para simular la llamada al servidor
  //setTimeout(() => {
  //  dispatch(addDishes(DISHES));
  //}, 2000);

  return fetch(baseUrl + 'dishes')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json()) // ahora usamos then para manejar la promesa y cuando la promesa se resuelva convertimos la respuesta en json llamando response.json
    .then(dishes => dispatch(addDishes(dishes))) // y cuando se obtenga los dishes haremos un dispatch al action addDishes
    .catch(error => dispatch(dishesFailed(error.message)));

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
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json()) // ahora usamos then para manejar la promesa y cuando la promesa se resuelva convertimos la respuesta en json llamando response.json
    .then(comments => dispatch(addComments(comments))) // y cuando se obtenga los comments haremos un dispatch al action addComments
    .catch(error => dispatch(commentsFailed(error.message)));

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
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json()) // ahora usamos then para manejar la promesa y cuando la promesa se resuelva convertimos la respuesta en json llamando response.json
    .then(promos => dispatch(addPromos(promos))) // y cuando se obtenga los promos haremos un dispatch al action addPromos
    .catch(error => dispatch(promosFailed(error.message)));

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