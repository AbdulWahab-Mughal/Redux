import { combineReducers } from "redux";
import {
  ProductReducerHandler,
  AddToCartReducerHandler,
} from "../Reducers/ProductReducer";

const CombinedReducer = combineReducers({
  ProductReducerHandler: ProductReducerHandler,
  AddToCartReducerHandler: AddToCartReducerHandler,
});
export default CombinedReducer;
