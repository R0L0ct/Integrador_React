import React, { useEffect } from "react";
import {
  CheckoutContainerStyled,
  CheckoutShipping,
  CheckoutSubtotal,
  CheckoutTotal,
  CheckoutTotalContainer,
  ContainerStyled,
} from "./CheckoutStyles";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/cart/cart.actions";
import { CheckoutForm } from "../../components/Checkout/Form/CheckoutForm";
import { CheckoutProducts } from "../../components/CheckoutProducts/CheckoutProducts";

export const Checkout = () => {
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!hiddenCart) {
      dispatch(cartActions.toggleCart());
    }
    // eslint-disable-next-line
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <CheckoutContainerStyled>
      <CheckoutForm />
      <ContainerStyled>
        <CheckoutProducts />
        <CheckoutTotalContainer>
          <CheckoutSubtotal>
            <p>Subtotal:</p>
            <p>$ {totalPrice}</p>
          </CheckoutSubtotal>
          <CheckoutShipping>
            <p>Envio:</p>
            <p>$ {shippingCost}</p>
          </CheckoutShipping>
          <CheckoutTotal>
            <p>Total:</p>
            <p>$ {totalPrice + shippingCost}</p>
          </CheckoutTotal>
        </CheckoutTotalContainer>
      </ContainerStyled>
    </CheckoutContainerStyled>
  );
};
