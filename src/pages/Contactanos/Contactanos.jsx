import React from "react";
import {
  Button,
  ContactanosContainerStyled,
  ContactoBoxStyled,
  ContactoTitle,
  InputStyled,
  InputTextStyled,
} from "./ContactanosStyles";

export const Contactanos = () => {
  return (
    <ContactanosContainerStyled>
      <ContactoBoxStyled>
        <ContactoTitle>Dejanos tu consulta:</ContactoTitle>
        <InputStyled placeholder="tu nombre..." type="text" />
        <InputStyled placeholder="tu email..." type="email" />
        <InputTextStyled placeholder="tu consulta..." />
        <Button>Enviar</Button>
      </ContactoBoxStyled>
    </ContactanosContainerStyled>
  );
};
