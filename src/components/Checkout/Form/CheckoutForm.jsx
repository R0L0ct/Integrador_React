import React from "react";
import {
  CheckoutFormStyled,
  CheckoutTitleStyled,
  ContainerStyled,
  FormikContainer,
  FormikForm,
  LeftContainer,
  RightContainer,
  SubmitStyled,
} from "./CheckoutFormStyles";
import { Input } from "../../UI/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { checkoutInitialValues } from "../../../formik/initialValues";
import { checkoutValidationSchema } from "../../../formik/validationSchema";
import { useNavigate } from "react-router-dom";
import * as cartActions from "../../../redux/cart/cart.actions";

export const CheckoutForm = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <CheckoutFormStyled>
      <CheckoutTitleStyled>Completa los campos</CheckoutTitleStyled>
      <FormikContainer
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={() => {
          navigate("/completed");
          dispatch(cartActions.removeAllProducts());
        }}
      >
        <FormikForm>
          <ContainerStyled>
            <LeftContainer>
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
                htmlFor="apellido"
                name="lastname"
                type="text"
                id="apellido"
                placeholder="Ingresa tu apellido..."
              >
                Apellido
              </Input>
              <Input
                htmlFor="email"
                name="email"
                type="text"
                id="email"
                placeholder="Ingresa tu email..."
              >
                Email
              </Input>
              <Input
                htmlFor="telefono"
                name="phone"
                type="text"
                id="telefono"
                placeholder="Ingresa tu telefono..."
              >
                Telefono
              </Input>
            </LeftContainer>
            <RightContainer>
              <Input
                htmlFor="pais"
                name="country"
                type="text"
                id="pais"
                placeholder="Ingresa tu pais..."
              >
                Pais
              </Input>
              <Input
                htmlFor="region"
                name="region"
                type="text"
                id="region"
                placeholder="Ingresa tu region..."
              >
                Region
              </Input>
              <Input
                htmlFor="ciudad"
                name="city"
                type="text"
                id="ciudad"
                placeholder="Ingresa tu ciudad..."
              >
                Ciudad
              </Input>
              <Input
                htmlFor="direccion"
                name="adress"
                type="text"
                id="direccion"
                placeholder="Ingresa tu direccion..."
              >
                Direccion
              </Input>
            </RightContainer>
          </ContainerStyled>
          <div>
            <SubmitStyled disabled={!cartItems.length} type="submit">
              Confirmar Compra
            </SubmitStyled>
          </div>
        </FormikForm>
      </FormikContainer>
    </CheckoutFormStyled>
  );
};
