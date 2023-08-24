// import { products } from "../../data/Products";

import { SET_CHECK_LOADER, SET_RECOMMENDED } from "./recomendados.actions";

// const INITIAL_STATE = {
//   recommended: Array(5)
//     .fill(0)
//     .reduce((acc, _items) => {
//       const ids = acc.map((value) => value.id);
//       let newRecommended;
//       do {
//         newRecommended = {
//           ...products[Math.floor(Math.random() * products.length)],
//         };
//       } while (ids.includes(newRecommended.id));
//       return [...acc, newRecommended];
//     }, []),
// };

const INITIAL_STATE = {
  checkRecommended: "",
  checkLoader: { isLoading: false, id: "" },
};

export const recommendedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RECOMMENDED:
      return {
        ...state,
        checkRecommended: action.payload,
      };
    case SET_CHECK_LOADER:
      return {
        ...state,
        checkLoader: action.payload,
      };
    default:
      return state;
  }
};
