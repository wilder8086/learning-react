
// aqui es donde se establece el estado de nuestra app
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

// esta es la configuracion para mi estado inicial
export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS
};

// creamos nuestra funcion reductora que recibe el state actual y un action
// al state actual la primera vez le definimos el valor por defecto
export const Reducer = (state = initialState, action) => {
  return state;
};

