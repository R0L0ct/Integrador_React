export const SELECTED_CATEGORY = "SELECTED_CATEGORY";

export const selectedCategory = (category) => ({
  type: SELECTED_CATEGORY,
  payload: category,
});
