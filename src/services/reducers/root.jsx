import { combineReducers } from 'redux';
import { ingredients } from './ingredients';
import { burger } from './burger';
import { ingredientDetails } from './ingredientDetails';
import { orderDetails } from './orderDetails';

export const rootReducer = combineReducers({
  ingredients,
  burger,
  ingredientDetails,
  orderDetails
});