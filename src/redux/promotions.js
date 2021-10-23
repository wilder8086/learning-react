import { PROMOTIONS } from '../shared/promotions';
import * as ActionTypes from './ActionTypes';
const InitialState = {
  isLoading: true,
  errMess: null,
  promotions: []
}

export const Promotions = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.PROMOS_LOADING:
      return {...state, isLoading: true, errMess: null, promotions: []};
    case ActionTypes.PROMOS_FAILED:
      return {...state, isLoading: false, errMess: action.payload, promotions:[]};
    case ActionTypes.ADD_PROMOS:
      return {...state, isLoading: false, errMess: null, promotions: action.payload};    
    default:
      return state;
  }
}