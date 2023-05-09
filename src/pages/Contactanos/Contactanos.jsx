import React from "react";
import {
  Button,
  ContactanosContainerStyled,
  ContactoBoxStyled,
  ContactoTitle,
  FormikContactContainer,
  FormikContactForm,
} from "./ContactanosStyles";
import { InputContact } from "../../components/UI/inputContanct/InputContact";
import { contactInitialValues } from "../../formik/initialValues";
import { contactValidationSchema } from "../../formik/validationSchema";
import { TextArea } from "../../components/UI/inputContanct/TextArea";

export const Contactanos = () => {
  return (
    <ContactanosContainerStyled>
      <ContactoBoxStyled>
        <ContactoTitle>Dejanos tu consulta:</ContactoTitle>
        <FormikContactContainer
          initialValues={contactInitialValues}
          validationSchema={contactValidationSchema}
          onSubmit={() => {
            alert("Consulta enviada exitosamente!");
          }}
        >
          <FormikContactForm>
            <InputContact
              htmlFor="nombre"
              name="name"
              id="nombre"
              placeholder="tu nombre..."
              type="text"
            >
              Nombre
            </InputContact>
            <InputContact
              htmlFor="email"
              name="email"
              id="email"
              placeholder="tu email..."
              type="email"
            >
              Email
            </InputContact>
            <TextArea
              htmlFor="consulta"
              name="message"
              id="consulta"
              type="text"
              placeholder="tu consulta..."
            >
              Tu Mensaje
            </TextArea>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit">Enviar</Button>
            </div>
          </FormikContactForm>
        </FormikContactContainer>
      </ContactoBoxStyled>
    </ContactanosContainerStyled>
  );
};
