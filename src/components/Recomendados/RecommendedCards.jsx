import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CardContainer } from "./RecommendedCardsStyles";
import { RecommendedCard } from "./RecommendedCard";
import { getAllProducts } from "../../api/data";
import { Audio } from "react-loader-spinner";

export const RecommendedCards = () => {
  let [products, setProducts] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setProducts(productsData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <CardContainer>
      {loading ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      ) : (
        products
          .slice(1, 7)
          .map((products) => (
            <RecommendedCard key={products.id} {...products} />
          ))
      )}
    </CardContainer>
  );
};
