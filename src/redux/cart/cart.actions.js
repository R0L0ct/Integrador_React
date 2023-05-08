export const TOGGLE_CART = "TOGGLE_CART";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_ALL_PRODUCTS = "REMOVE_ALL_RODUCTS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_SIZE = "ADD_SIZE";
export const ADD_QUANTITY_TO_PRODUCT = "ADD_QUANTITY_TO_PRODUCT";
export const REMOVE_QUANTITY_FROM_PRODUCT = "REMOVE_QUANTITY_FROM_PRODUCT";
export const ADD_SELECTED_SIZE = "ADD_SELECTED_SIZE";

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addProduct = (producto) => ({
  type: ADD_PRODUCT,
  payload: producto,
});

export const removeAllProducts = () => ({
  type: REMOVE_ALL_PRODUCTS,
});

export const removeProduct = (product) => ({
  type: REMOVE_PRODUCT,
  payload: product,
});

export const addProductSize = (size) => ({
  type: ADD_SIZE,
  payload: size,
});
export const addQuantityToProduct = (productId, size, quantity) => {
  return {
    type: ADD_QUANTITY_TO_PRODUCT,
    payload: { productId, size, quantity },
  };
};

export const removeQuantityFromProduct = (productId, size, quantity) => {
  return {
    type: REMOVE_QUANTITY_FROM_PRODUCT,
    payload: { productId, size, quantity },
  };
};

export const addSelectedSize = (id) => {
  return {
    type: ADD_SELECTED_SIZE,
    payload: id,
  };
};
