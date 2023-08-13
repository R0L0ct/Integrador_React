import {
  ADD_INVENTORY,
  ADD_PRODUCT,
  ADD_QUANTITY_TO_PRODUCT,
  ADD_SELECTED_SIZE,
  ADD_SIZE,
  ADD_TOTAL,
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
  total: 0,
  inventory: [],
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
          state.size,
          state.inventory
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
    case ADD_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case ADD_INVENTORY:
      return {
        ...state,
        inventory: action.payload,
      };
    default:
      return state;
  }
};
