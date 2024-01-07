import { NEW_ORDER, CLEAR_ORDER } from "../actions/orderDetails";

const initialState = {
  _lastOrderNumber: 0,
  orderNumber: 0,
  burgerBun: null,
  burgerIngredients: []  
}

export const orderDetails = (state = initialState, action) => {
  switch (action.type) {
    case NEW_ORDER:
      return ({...state, orderNumber: state._lastOrderNumber + 1, _lastOrderNumber: state._lastOrderNumber + 1, burgerBun: action.bun, burgerIngredients: action.ingredients});
    case CLEAR_ORDER:
      return ({...state, orderNumber: 0, burgerBun: null, burgerIngredients: []});
    default: return state;
  }  
}