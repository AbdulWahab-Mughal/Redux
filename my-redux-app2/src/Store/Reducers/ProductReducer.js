import ACTION_TYPES from "../Constants/ActionTypes";

const INITIAL_STATE_PRODUCTS = {
  isLoading: false,
  data: [],
};
const INITIAL_STATE_CART = {
  cartItems: [],
  quantity: 0,
};

const ProductReducerHandler = (state = INITIAL_STATE_PRODUCTS, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
        isLoading: false,
      };
    case ACTION_TYPES.GET_PRODUCTS_ERROR:
      return {
        isLoading: false,
      };
    case ACTION_TYPES.GET_PRODUCTS:
      return {
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

const AddToCartReducerHandler = (state = INITIAL_STATE_CART, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        quantity: state.quantity + 1
      };
    default:
      return {
        ...state,
      };
  }
};
export { ProductReducerHandler, AddToCartReducerHandler };
