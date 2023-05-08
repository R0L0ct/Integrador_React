import { products } from "../../data/Products";

const INITIAL_STATE = {
  products: products,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
