import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED
} from '../actions/ingredients';

import { getIngredientsRequest } from '../../utils/burger-api';

const initialState = {
  loadRequest: false,
  failedRequest: false,
  ingredients: null
//[
//    {
    // "_id":"",
    // "name":"",
    // "type":"",
    // "proteins":0,
    // "fat":0,
    // "carbohydrates":0,
    // "calories":0,
    // "price":0,
    // "image":"*.png",
    // "image_mobile":"*.png",
    // "image_large":"*.png",
    // "__v":0
//    }
//]
};

export const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST:
      return {
        ...state,
        loadRequest: true
      }
    case GET_ITEMS_SUCCESS:
      return {
        loadRequest: false,
        failedRequest: false,
        ingredients: action.items
      }
    case GET_ITEMS_FAILED:
      return {
        ...state,
        loadRequest: false,
        failedRequest: true
      }  
          // Реакция на прочие типы экшенов
      default:
        return state
    }
  } 

  export function getIngredients() {
    return function(dispatch) {
      dispatch({
        type: GET_ITEMS_REQUEST
      });
      getIngredientsRequest().then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_ITEMS_SUCCESS,
            items: res.data
          });
        } else {
          dispatch({
            type: GET_ITEMS_FAILED
          });
        }
      });
    };
  }