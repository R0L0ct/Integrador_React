import { products } from "../../data/Products";

const INITIAL_STATE = {
  recommended: Array(5)
    .fill(0)
    .reduce((acc, _items) => {
      const ids = acc.map((value) => value.id);
      let newRecommended;
      do {
        newRecommended = {
          ...products[Math.floor(Math.random() * products.length)],
        };
      } while (ids.includes(newRecommended.id));
      return [...acc, newRecommended];
    }, []),
};

export const recommendedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
