// Reductores, o funciones reductoras, que recibiran una accion y el state actual de mi app
import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

const InitialState = {
  isLoading: true,
  errMess: null,
  comments: []
}

export const Comments = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state, isLoading: false, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state, isLoading: false, errMess: action.payload, comments :[]};
          
    case ActionTypes.ADD_COMMENT:
      let comment = action.payload;
      // como mi state es un array entonces para no mutar el state uso concat 
      return { ...state, comments: state.comments.concat(comment)};

    default:
      return state;
  }
}

// ¿ como hacxemos uso de este reducer ?, para eso tenemos que ir al componente principal