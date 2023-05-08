import React from "react";
import {
  Container,
  MediaContainerStyled,
  RedesContainerStyled,
} from "./MediaStyles";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

export const Media = () => {
  return (
    <MediaContainerStyled>
      <RedesContainerStyled>
        <Container>
          <BsInstagram />
          <p>@HardCoreClothes</p>
        </Container>
        <Container>
          <FaFacebookSquare />
          <p>Hardcore Clothes</p>
        </Container>
        <Container>
          <BsWhatsapp />
          <p>+54-34312312323</p>
        </Container>
      </RedesContainerStyled>
    </MediaContainerStyled>
  );
};
