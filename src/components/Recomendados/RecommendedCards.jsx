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
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
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
