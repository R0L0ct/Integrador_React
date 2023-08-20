import React from "react";
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
import { login, refreshToken } from "../../api/data";
import { useDispatch } from "react-redux";
import * as authActions from "../../redux/authentication/auth.actions";

export const Login = () => {
  const dispatch = useDispatch();

  const tokenRefresh = async () => {
    try {
      const res = await refreshToken();
      dispatch(authActions.addToken(res.data));
      console.log(res);
      setTimeout(() => {
        tokenRefresh();
      }, res.data.expiresIn * 1000 - 6000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginContainerStyled>
      <LoginFormContainer>
        <FormTitleStyled>Completa los campos</FormTitleStyled>
        <FormikContainer
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={async (values) => {
            try {
              const token = await login({
                email: values.email,
                password: values.password,
              });
              dispatch(authActions.addToken(token.data));
              const setTimeToken = () => {
                setTimeout(() => {
                  tokenRefresh();
                }, token.data.token.expiresIn * 1000 - 6000);
              };
              setTimeToken();

              console.log(token);
              // navigate("/");
            } catch (error) {
              console.log(error);
            }
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
