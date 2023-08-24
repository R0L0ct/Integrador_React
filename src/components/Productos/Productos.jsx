import React from "react";
import { ProductCardContainer } from "./ProductosStyles";
import { useDispatch, useSelector } from "react-redux";
import { Producto } from "./Producto";
import { useEffect } from "react";
import { useState } from "react";
import { getAllProducts } from "../../api/data";
import { ProgressBar } from "react-loader-spinner";
import * as recommendedActions from "../../redux/recomendados/recomendados.actions";

export const Productos = () => {
  // let products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  let [products, setProducts] = useState("");
  const [loading, setLoading] = useState(true);
  const recommendedState = useSelector(
    (state) => state.recommended.checkRecommended
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setProducts(productsData.data);
        setLoading(false);
        dispatch(
          recommendedActions.setCheckLoader({ isLoading: false, id: "" })
        );
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
        dispatch(
          recommendedActions.setCheckLoader({ isLoading: false, id: "" })
        );
      }
    };
    console.log(recommendedState);
    fetchProducts();
  }, [recommendedState]);

  if (selectedCategory && !loading) {
    products = products.filter(
      (producto) => producto.categoryId === selectedCategory
    );
  }

  return (
    <ProductCardContainer>
      {loading ? (
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#F4442E"
          barColor="#51E5FF"
        />
      ) : (
        products.map((productos) => (
          <Producto key={productos.id} {...productos} />
        ))
      )}
    </ProductCardContainer>
  );
};
