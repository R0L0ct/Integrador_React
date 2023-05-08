import React from "react";
import { useSelector } from "react-redux";
import { CardContainer } from "./RecommendedCardsStyles";
import { RecommendedCard } from "./RecommendedCard";

export const RecommendedCards = () => {
  const recomendado = useSelector((state) => state.recommended.recommended);

  return (
    <CardContainer>
      {recomendado.map((recommended) => (
        <RecommendedCard key={recommended.id} {...recommended} />
      ))}
    </CardContainer>
  );
};
