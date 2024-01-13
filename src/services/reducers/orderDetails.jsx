import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED, CLEAR_ORDER } from "../actions/orderDetails";
import { getOrderRequest } from "../../utils/burger-api";

const initialState = {
  loadRequest: false,
  failedRequest: false,
  orderNumber: 0,
  orderName: ''
}

export const orderDetails = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return {
        ...state,
        loadRequest: true
      }
    case GET_ORDER_SUCCESS:
      return {
        loadRequest: false,
        failedRequest: false,
        orderName: action.order.name,
        orderNumber: action.order.order.number
      }
    case GET_ORDER_FAILED:
      return {
        ...state,
        loadRequest: false,
        failedRequest: true,
        orderName: '',
        orderNumber: 0
      } 
    case CLEAR_ORDER:
      return {
        ...state,
        loadRequest: false,
        failedRequest: false,
        orderName: '',
        orderNumber: 0
      } 
      default:
        return state
    }
  } 

export function getOrder(burger) {
  return function(dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST
    });
    const bun = [burger.bun._id];
    const items = burger.items.map((item) => item._id);
    const idIngredients = {
      ingredients: bun.concat(items)
    }
    let bodyRequest = JSON.stringify(idIngredients);
    getOrderRequest(bodyRequest).then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: res
        });
      } else {
        dispatch({
          type: GET_ORDER_FAILED
        });
      }
    });
  };
}