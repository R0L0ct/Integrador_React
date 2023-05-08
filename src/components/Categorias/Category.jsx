import React from "react";
import {
  CategoryStyled,
  CategoryTitle,
  FilterContainer,
} from "./CategoryStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectedCategory as categoriesActions } from "../../redux/categories/categories.actions";
import { useMediaQuery } from "react-responsive";

export const Category = ({ title, category }) => {
  const query = useMediaQuery({ maxWidth: 215 });
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const dispatch = useDispatch();
  return (
    <CategoryStyled
      onClick={() => dispatch(categoriesActions(category))}
      whileHover={() => (!query ? { scale: 1.1 } : { scale: 0.9 })}
    >
      <FilterContainer selected={category === selectedCategory}>
        <CategoryTitle>{title}</CategoryTitle>
      </FilterContainer>
    </CategoryStyled>
  );
};
