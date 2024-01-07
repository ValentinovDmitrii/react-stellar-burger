import { SET_DETAILS, CLEAR_DETAILS } from '../actions/ingredientDetails';

const initialState = null;

export const ingredientDetails = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return action.ingredient;
    case CLEAR_DETAILS:
      return null;
    default: return state;
  }  
}