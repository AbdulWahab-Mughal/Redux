//For calling APIs In redux we use MiddleWare which Is Redux Thunk

import axios from "axios";
import ACTION_TYPES from "../Constants/ActionTypes";

//Redux thunk allows us to write action creators that return a function instead of an action. The function receives the store’s dispatch method
const GetProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.GET_PRODUCTS,
    });
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      // console.log("response:", response);

      //Redux Ma Data Action Se Reducer ma Bhjna ka lia Payload Use krta ha
      dispatch({
        type: ACTION_TYPES.GET_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.GET_PRODUCTS_ERROR,
      });
    }
  };
};
const AddToCart = (products)=>{
  return(dispatch)=>{
    dispatch({
      type:ACTION_TYPES.ADD_TO_CART,
      payload:products,
    })
  }
}

export { GetProducts,AddToCart };
