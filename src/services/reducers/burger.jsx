import {
  ADD_ITEM,
  DEL_ITEM,
  MOVE_ITEM  
} from '../actions/burger';

const initialState = {
   bun: //null,
   {
      "_id":"60666c42cc7b410027a1a9b1",
      "name":"Краторная булка N-200i",
      "type":"bun",
      "proteins":80,
      "fat":24,
      "carbohydrates":53,
      "calories":420,
      "price":1255,
      "image":"https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v":0
   },
   items: []};

export const burger = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (action.item.type === 'bun') { 
        return ({...state, bun: action.item})
      } else { 
        const itemIndex = state.items.findIndex((item) => item._id === action.item._id);
        if (itemIndex < 0) { 
          action.item.count = 1;
          return ({...state, items: [...state.items, action.item]})}
        else {
          let copyItems = state.items.slice();
          copyItems[itemIndex].count++;
          return({...state, items: copyItems});
        }
      };
    case DEL_ITEM:
      if (action.item.type === 'bun') {
        return ({...state, bun: null})
      } else {
        const index = state.items.indexOf(action.item);
        if (action.item.count === 1) { 
          return ({...state, items: [...state.items.slice(0, index),
                                     ...state.items.slice(index + 1)]
          })
        } else {
          let copyItems = state.items.slice();
          copyItems[index].count--;
          return({...state, items: copyItems});
        }
      }
    case MOVE_ITEM:
      let prevItems = state.items;
      const item = prevItems.splice(action.payload.dragIndex, 1)[0]; 
      prevItems.splice(action.payload.hoverIndex, 0, item);
      return ({...state, items: prevItems});
    default: return state;
  }  
}