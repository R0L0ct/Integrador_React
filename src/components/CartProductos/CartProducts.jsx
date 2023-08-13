import React, { useState } from "react";
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
import { getProduct } from "../../api/data";

export const CartProducts = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItems);
  const [disabled, setDisabled] = useState(false);

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
                  setDisabled(false);
                  // console.log(item);
                }}
              >
                -
              </CounterLessStyled>
              <CounterQuantity>{size.quantity}</CounterQuantity>
              <CounterPlusStyled
                onClick={async () => {
                  const producto = await getProduct(item.id);
                  const inventory = producto.data.inventoryItems.filter(
                    (item) => item.size === size.talle
                  );
                  const stock = inventory.map((s) => s.stock);
                  if (size.quantity < stock[0]) {
                    dispatch(
                      cartActions.addQuantityToProduct(item.id, size.talle, 1)
                    );
                  }
                  if (size.quantity === stock[0] - 1) {
                    setDisabled(true);
                  }
                  // console.log(disabled);
                }}
                disabled={disabled}
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
