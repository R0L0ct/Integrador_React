import React from "react";
import { useSelector } from "react-redux";
import { CategoriesContainerStyled } from "./CategoryStyles";
import { Category } from "./Category";

export const Categories = () => {
  const categorias = useSelector((state) => state.categories.categories);

  return (
    <CategoriesContainerStyled>
      {categorias.map((category) => (
        <Category key={category.id} {...category} />
      ))}
    </CategoriesContainerStyled>
  );
};
