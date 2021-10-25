import * as ActionTypes from './ActionTypes';

const InitialState = {
  firstname: '',
  lastname: '',
  telnum: '',
  email: '',
  agree: false,
  contactType: '',
  message: ''
}

export const Feedback = (state = InitialState, action) => {
  console.log("reducer1 ================= " + JSON.stringify(action.payload));
  console.log("reducer2 ================= " + JSON.stringify(state));
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      let feedback = action.payload;
      return { ...state, feedback : {
          ...action.payload }
        };
    default:
      return state;
  }
}