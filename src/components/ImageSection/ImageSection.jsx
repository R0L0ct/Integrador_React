import React from "react";
import {
  Image,
  ImageSectionContainerStyled,
  ImagesContainer,
} from "./ImageSectionStyles";

export const ImageSection = () => {
  return (
    <ImageSectionContainerStyled>
      <ImagesContainer>
        <Image src="images/imageSection/2.jpg" />
        <Image src="images/imageSection/1.jpg" />
        <Image src="images/imageSection/3.jpg" />
        <Image src="images/imageSection/4.jpg" />
        <Image src="images/imageSection/5.jpg" />
        <Image src="images/imageSection/6.jpg" />
      </ImagesContainer>
    </ImageSectionContainerStyled>
  );
};
