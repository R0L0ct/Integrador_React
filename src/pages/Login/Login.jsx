import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginInitialValues } from "../../formik/initialValues";
import { loginValidationSchema } from "../../formik/validationSchema";
import { Input } from "../../components/UI/input/Input";
import {
  ContainerStyled,
  FormTitleStyled,
  FormikContainer,
  FormikForm,
  LoginContainerStyled,
  LoginFormContainer,
  SubmitStyled,
} from "./LoginStyles";
import { login } from "../../api/data";

export const Login = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState("");

  useEffect(() => {
    const datosGuardados = localStorage.getItem("datos");
    if (datosGuardados) {
      setRegisterData(JSON.parse(datosGuardados));
    }
  }, []);

  // function compareRegisterData(values) {
  //   if (
  //     values.email === registerData.email &&
  //     values.password === registerData.password
  //   ) {
  //     //   window.location.reload();
  //     localStorage.setItem(
  //       "datos",
  //       JSON.stringify({ ...registerData, logged: true })
  //     );
  //     navigate("/");
  //     window.location.reload();
  //   } else {
  //     alert("Usuario no encontrado");
  //   }
  // }

  return (
    <LoginContainerStyled>
      <LoginFormContainer>
        <FormTitleStyled>Completa los campos</FormTitleStyled>
        <FormikContainer
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={async (values) => {
            await login({
              email: values.email,
              password: values.password,
            });

            // compareRegisterData(values);
          }}
        >
          <FormikForm>
            <ContainerStyled>
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
                placeholder="Ingresa tu contraseña"
              >
                Password
              </Input>
            </ContainerStyled>
            <div>
              <SubmitStyled type="submit">Enviar</SubmitStyled>
            </div>
          </FormikForm>
        </FormikContainer>
      </LoginFormContainer>
    </LoginContainerStyled>
  );
};
