import React from "react";
import {
  ProductCardContainerStyled,
  ProductCardDesc,
  ProductCardImg,
  ProductCardPrice,
  ProductCardSize,
  ProductCardStyled,
  ProductCardTitle,
  ProductCounterContainer,
  ProductCounterLess,
  ProductCounterPlus,
  ProductCounterQuantity,
  ProductInfoContainer,
  ProductsCheckoutTitle,
  ProductsContainerStyled,
} from "./CheckoutProductsStyles";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/cart/cart.actions";
export const CheckoutProducts = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <ProductsContainerStyled>
      <ProductsCheckoutTitle>Tu pedido</ProductsCheckoutTitle>
      <ProductCardContainerStyled>
        {cartItems.length
          ? cartItems.map((items) =>
              items.sizes.map((size) => (
                <ProductCardStyled key={`${size.id}-${size.talle}`}>
                  <ProductCardImg src={items.img} />
                  <ProductInfoContainer>
                    <ProductCardTitle>{items.title}</ProductCardTitle>
                    <ProductCardDesc>{items.desc}</ProductCardDesc>
                    <ProductCardSize>{size.talle}</ProductCardSize>
                    <ProductCardPrice>${items.price}</ProductCardPrice>
                  </ProductInfoContainer>
                  <ProductCounterContainer>
                    <ProductCounterLess
                      onClick={() =>
                        dispatch(
                          cartActions.removeQuantityFromProduct(
                            items.id,
                            size.talle,
                            1
                          )
                        )
                      }
                    >
                      -
                    </ProductCounterLess>
                    <ProductCounterQuantity>
                      {size.quantity}
                    </ProductCounterQuantity>
                    <ProductCounterPlus
                      onClick={() =>
                        dispatch(
                          cartActions.addQuantityToProduct(
                            items.id,
                            size.talle,
                            1
                          )
                        )
                      }
                    >
                      +
                    </ProductCounterPlus>
                  </ProductCounterContainer>
                </ProductCardStyled>
              ))
            )
          : "No tienes pedidos"}
      </ProductCardContainerStyled>
    </ProductsContainerStyled>
  );
};
