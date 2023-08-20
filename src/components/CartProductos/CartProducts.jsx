import React from "react";
import {
  CounterContainerStyled,
  CounterLessStyled,
  CounterPlusStyled,
  CounterQuantity,
  ProductCard,
  ProductCardContainerStyled,
  ProductCardDesc,
  ProductCardImg,
  ProductCardInfoContainer,
  ProductCardPrice,
  ProductCardSize,
  ProductCardTitle,
} from "./CartProductStyles";
import { useDispatch, useSelector } from "react-redux";
//import { CartProduct } from "./CartProduct";
import * as cartActions from "../../redux/cart/cart.actions";

export const CartProducts = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItems);

  return (
    <ProductCardContainerStyled>
      {cartItem.map((item) =>
        item.sizes.map((size) => (
          <ProductCard key={`${size.id}-${size.talle}`}>
            <ProductCardImg src={item.image} alt={item.name} />
            <ProductCardInfoContainer>
              <ProductCardTitle>{item.name}</ProductCardTitle>
              <ProductCardDesc>{item.description}</ProductCardDesc>
              <ProductCardSize>
                <span style={{ fontWeight: "500" }}>Talle</span> "{size.talle}"
              </ProductCardSize>
              <ProductCardPrice>${item.price}</ProductCardPrice>
            </ProductCardInfoContainer>
            <CounterContainerStyled>
              <CounterLessStyled
                onClick={() => {
                  dispatch(
                    cartActions.removeQuantityFromProduct(
                      item.id,
                      size.talle,
                      1
                    )
                  );
                }}
              >
                -
              </CounterLessStyled>
              <CounterQuantity>{size.quantity}</CounterQuantity>
              <CounterPlusStyled
                onClick={() => {
                  if (size.quantity < item.inventory[0].stock) {
                    dispatch(
                      cartActions.addQuantityToProduct(item.id, size.talle, 1)
                    );
                  }
                }}
                disabled={size.quantity === item.inventory[0].stock}
              >
                +
              </CounterPlusStyled>
            </CounterContainerStyled>
          </ProductCard>
        ))
      )}
    </ProductCardContainerStyled>
  );
};
