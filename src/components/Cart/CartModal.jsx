import React, { useEffect, useState } from "react";
import {
  CartCloseButton,
  CartContainerStyled,
  CartProductsContainerStyled,
  CartProductsTitle,
  ConfirmButtonStyled,
  EnvioContainerStyled,
  SubtotalContainerStyled,
  TopCartContainerStyled,
  TotalContainerStyled,
  TotalStyled,
  TrashContainerStyled,
} from "./CartStyles";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/cart/cart.actions";
import { CartProducts } from "../CartProductos/CartProducts";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { getUserBySessionToken } from "../../api/data";

export const CartModal = ({ toggleOverflow }) => {
  const toggleHidden = useSelector((state) => state.cart.hidden);
  const { cartItems, shippingCost } = useSelector((state) => state.cart);
  const isMobileRes = useMediaQuery({ maxWidth: 500 });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleDisabled = () => {
    if (cartItems.length) {
      return false;
    }
    return true;
  };

  const TotalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  const [isLogged, setLogged] = useState("");
  useEffect(() => {
    const isAuth = async () => {
      const userAuth = await getUserBySessionToken();
      if (userAuth) {
        setLogged(userAuth.data);
      } else {
        setLogged("");
      }
    };
    isAuth();
  }, []);

  return (
    <>
      {!toggleHidden && (
        <CartContainerStyled>
          <TopCartContainerStyled>
            <CartCloseButton
              onClick={() => {
                dispatch(cartActions.toggleCart());
                if (!isMobileRes) {
                  toggleOverflow();
                }
              }}
            >
              X
            </CartCloseButton>
            {cartItems.length ? (
              <TrashContainerStyled
                onClick={() => dispatch(cartActions.removeAllProducts())}
              >
                <BsTrash fontSize={20} />
              </TrashContainerStyled>
            ) : (
              ""
            )}
          </TopCartContainerStyled>
          <CartProductsTitle>Tus Productos</CartProductsTitle>
          <CartProductsContainerStyled>
            {cartItems.length ? <CartProducts /> : "El carrito esta vacio"}
          </CartProductsContainerStyled>
          <TotalContainerStyled>
            <SubtotalContainerStyled>
              <p>Subtotal:</p>
              <p>${TotalPrice}</p>
            </SubtotalContainerStyled>
            <EnvioContainerStyled>
              <p>Envio:</p>
              <p>${shippingCost}</p>
            </EnvioContainerStyled>
            <TotalStyled>
              <p>Total:</p>
              <p>${TotalPrice + shippingCost}</p>
            </TotalStyled>
            <ConfirmButtonStyled
              disabled={toggleDisabled()}
              type="submit"
              onClick={() => {
                if (isLogged) {
                  navigate("checkout");
                  if (!isMobileRes) {
                    toggleOverflow();
                  }
                } else {
                  alert("Tenes que iniciar sesion primero");
                  navigate("/login");
                  dispatch(cartActions.toggleCart());
                }
              }}
            >
              Confirmar
            </ConfirmButtonStyled>
          </TotalContainerStyled>
        </CartContainerStyled>
      )}
    </>
  );
};
