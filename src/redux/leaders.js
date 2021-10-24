import * as ActionTypes from './ActionTypes';

const InitialState = {
  isLoading: true,
  errMess: null,
  leaders: []
}

export const Leaders = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.LEADERS_LOADING:
      return {...state, isLoading: true, errMess: null, leaders: []};
    case ActionTypes.LEADERS_FAILED:
      return {...state, isLoading: false, errMess: action.payload, leaders:[]};
    case ActionTypes.ADD_LEADERS:
      return {...state, isLoading: false, errMess: null, leaders: action.payload};
    default:
      return state;
  }
}