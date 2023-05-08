import React from "react";
import { ProductsContainerStyled, ShopContainerStyled } from "./ShopStyles";
import { Categories } from "../../components/Categorias/Categories";
import { Productos } from "../../components/Productos/Productos";

export const Shop = () => {
  return (
    <ShopContainerStyled>
      <Categories />
      <ProductsContainerStyled>
        <Productos />
      </ProductsContainerStyled>
    </ShopContainerStyled>
  );
};
