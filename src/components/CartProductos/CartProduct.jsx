import React from "react";
import {
  CounterContainerStyled,
  CounterLessStyled,
  CounterPlusStyled,
  CounterQuantity,
  ProductCard,
  ProductCardDesc,
  ProductCardImg,
  ProductCardInfoContainer,
  ProductCardPrice,
  ProductCardSize,
  ProductCardTitle,
} from "./CartProductStyles";
import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/cart/cart.actions";

export const CartProduct = ({
  img,
  title,
  desc,
  price,
  quantity,
  id,
  sizes,
  talle,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      {sizes.map((items) => (
        <ProductCard key={`${id}-${items.talle}`}>
          <ProductCardImg src={img} alt={title} />
          <ProductCardInfoContainer>
            <ProductCardTitle>{title}</ProductCardTitle>
            <ProductCardDesc>{desc}</ProductCardDesc>
            <ProductCardPrice>${price}</ProductCardPrice>
            <ProductCardSize>{items.talle}</ProductCardSize>;
          </ProductCardInfoContainer>
          <CounterContainerStyled>
            <CounterLessStyled
              onClick={() =>
                dispatch(cartActions.removeQauntityFromProduct({ id }))
              }
            >
              -
            </CounterLessStyled>
            <CounterQuantity>{items.quantity}</CounterQuantity>
            <CounterPlusStyled
              onClick={() => dispatch(cartActions.addQuantityToProduct({ id }))}
            >
              +
            </CounterPlusStyled>
          </CounterContainerStyled>
        </ProductCard>
      ))}
    </>
  );
};
