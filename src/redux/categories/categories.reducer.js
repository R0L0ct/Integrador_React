import { categories } from "../../data/Categories";
import { SELECTED_CATEGORY } from "./categories.actions";

const INITIAL_STATE = {
  categories: categories,
  selectedCategory: "t-shirt",
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory:
          action.payload !== state.selectedCategory
            ? action.payload
            : action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
