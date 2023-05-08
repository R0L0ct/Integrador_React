import React from "react";
import {
  HeroContainerStyled,
  HeroImgStyled,
  HeroLeftContainerStyled,
  HeroTitleContainerStyled,
} from "./HeroStyles";
import { RecommendedCards } from "../Recomendados/RecommendedCards";

export const Hero = () => {
  return (
    <HeroContainerStyled>
      <HeroLeftContainerStyled>
        <HeroTitleContainerStyled>
          <h1>Hardcore Clothes</h1>
          <h4>Destacados:</h4>
        </HeroTitleContainerStyled>
        <RecommendedCards />
      </HeroLeftContainerStyled>
      <div>
        <HeroImgStyled src="images/logoSkull.png" alt="hero-img" />
      </div>
    </HeroContainerStyled>
  );
};
