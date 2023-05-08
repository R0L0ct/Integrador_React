import React from "react";
import { ButtonStyled } from "./ButtonStyled";

export const Button = ({ onClick, disabled }) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      Add
    </ButtonStyled>
  );
};
