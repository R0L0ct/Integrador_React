import React from "react";
import { HomeContainerStyled } from "./HomeContainerStyled";
import { Hero } from "../../components/Hero/Hero";
import { ImageSection } from "../../components/ImageSection/ImageSection";
export const Home = () => {
  return (
    <HomeContainerStyled>
      <Hero />
      <ImageSection />
    </HomeContainerStyled>
  );
};
