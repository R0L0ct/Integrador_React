import React from "react";
import {
  ContainerStyled,
  FormTitleStyled,
  FormikContainer,
  FormikForm,
  RegisterContainerStyled,
  RegisterFormContainer,
  SubmitStyled,
} from "./RegisterStyled";
import { useNavigate } from "react-router-dom";
import { registerInitialValues } from "../../formik/initialValues";
import { registerValidationSchema } from "../../formik/validationSchema";
import { Input } from "../../components/UI/input/Input";

export const Register = () => {
  const navigate = useNavigate();
  return (
    <RegisterContainerStyled>
      <RegisterFormContainer>
        <FormTitleStyled>Completa los campos</FormTitleStyled>
        <FormikContainer
          initialValues={registerInitialValues}
          validationSchema={registerValidationSchema}
          onSubmit={(values) => {
            localStorage.setItem("datos", JSON.stringify(values));
            navigate("/");
            window.location.reload();
          }}
        >
          <FormikForm>
            <ContainerStyled>
              <Input
                htmlFor="nombre"
                name="name"
                type="text"
                id="nombre"
                placeholder="Ingresa tu nombre..."
              >
                Nombre
              </Input>
              <Input
                htmlFor="email"
                name="email"
                type="text"
                id="email"
                placeholder="Ingresa tu email"
              >
                Email
              </Input>
              <Input
                htmlFor="password"
                name="password"
                type="password"
                id="password"
                placeholder="Ingresa una contraseña"
              >
                Password
              </Input>
            </ContainerStyled>
            <div>
              <SubmitStyled type="submit">Enviar</SubmitStyled>
            </div>
          </FormikForm>
        </FormikContainer>
      </RegisterFormContainer>
    </RegisterContainerStyled>
  );
};
