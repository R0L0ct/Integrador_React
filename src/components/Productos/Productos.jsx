import React from "react";
import { ProductCardContainer } from "./ProductosStyles";
import { useSelector } from "react-redux";
import { Producto } from "./Producto";

export const Productos = () => {
  let products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  if (selectedCategory) {
    products = products.filter(
      (producto) => producto.category === selectedCategory
    );
  }

  return (
    <ProductCardContainer>
      {products.map((productos) => (
        <Producto key={productos.id} {...productos} />
      ))}
    </ProductCardContainer>
  );
};
