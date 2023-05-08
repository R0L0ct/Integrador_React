import {
  ADD_PRODUCT,
  ADD_QUANTITY_TO_PRODUCT,
  ADD_SELECTED_SIZE,
  ADD_SIZE,
  REMOVE_ALL_PRODUCTS,
  REMOVE_QUANTITY_FROM_PRODUCT,
  TOGGLE_CART,
} from "./cart.actions";
import {
  addProductToCart,
  addQuantity,
  removeQuantity,
  resetShippingCost,
} from "./cart.utils";
import { shippingCost } from "./shippingCost";
const INITIAL_STATE = {
  cartItems: [],
  size: "",
  selectedSize: "",
  shippingCost: 0,
  hidden: true,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cartItems: addProductToCart(
          state.cartItems,
          action.payload,
          state.size
        ),
        shippingCost: shippingCost,
      };
    case ADD_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    case ADD_QUANTITY_TO_PRODUCT:
      return {
        ...state,
        cartItems: addQuantity(
          state.cartItems,
          action.payload.productId,
          action.payload.size,
          action.payload.quantity
        ),
      };
    case ADD_SELECTED_SIZE:
      return {
        ...state,
        selectedSize: action.payload,
      };

    case REMOVE_ALL_PRODUCTS:
      return {
        ...state,
        cartItems: [],
        shippingCost: 0,
      };
    case REMOVE_QUANTITY_FROM_PRODUCT:
      return {
        ...state,
        cartItems: removeQuantity(
          state.cartItems,
          action.payload.productId,
          action.payload.size,
          action.payload.quantity
        ),
        shippingCost: resetShippingCost(state.cartItems, shippingCost),
      };
    default:
      return state;
  }
};
