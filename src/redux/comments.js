// Reductores, o funciones reductoras, que recibiran una accion y el state actual de mi app
import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';


export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      let comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      // como mi state es un array entonces para no mutar el state uso concat 
      return state.concat(comment);
    default:
      return state;
  }
}

// ¿ como hacxemos uso de este reducer ?, para eso tenemos que ir al componente principal