import React from "react";
import { HomeContainerStyled } from "./HomeContainerStyled";
import { Hero } from "../../components/Hero/Hero";
export const Home = () => {
  return (
    <HomeContainerStyled>
      <Hero />
    </HomeContainerStyled>
  );
};
