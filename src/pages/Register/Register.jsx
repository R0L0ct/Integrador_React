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
import { register } from "../../api/data";

export const Register = () => {
  const navigate = useNavigate();

  return (
    <RegisterContainerStyled>
      <RegisterFormContainer>
        <FormTitleStyled>Completa los campos</FormTitleStyled>
        <FormikContainer
          initialValues={registerInitialValues}
          validationSchema={registerValidationSchema}
          onSubmit={async (values) => {
            const user = await register({
              name: values.name,
              email: values.email,
              password: values.password,
            });
            if (user.data === "ALREADY_USER") {
              alert("El email ya existe, proba con otro");
            } else {
              navigate("/");
            }
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
