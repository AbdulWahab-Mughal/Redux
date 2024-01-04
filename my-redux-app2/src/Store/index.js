import { applyMiddleware,  createStore } from "redux";
import { thunk } from "redux-thunk";
// import { ProductReducerHandler } from "./Reducers/ProductReducer";
import CombinedReducer from "./CombinedReducer/CombinedReducer";

const store = createStore(CombinedReducer,applyMiddleware(thunk));

export default store