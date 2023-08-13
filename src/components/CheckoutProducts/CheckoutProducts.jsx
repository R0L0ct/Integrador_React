import React, { useState } from "react";
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
import { getProduct } from "../../api/data";
export const CheckoutProducts = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);

  return (
    <ProductsContainerStyled>
      <ProductsCheckoutTitle>Tu pedido</ProductsCheckoutTitle>
      <ProductCardContainerStyled>
        {cartItems.length
          ? cartItems.map((items) =>
              items.sizes.map((size) => (
                <ProductCardStyled key={`${size.id}-${size.talle}`}>
                  <ProductCardImg src={items.image} />
                  <ProductInfoContainer>
                    <ProductCardTitle>{items.name}</ProductCardTitle>
                    <ProductCardDesc>{items.description}</ProductCardDesc>
                    <ProductCardSize>{size.talle}</ProductCardSize>
                    <ProductCardPrice>${items.price}</ProductCardPrice>
                  </ProductInfoContainer>
                  <ProductCounterContainer>
                    <ProductCounterLess
                      onClick={() => {
                        dispatch(
                          cartActions.removeQuantityFromProduct(
                            items.id,
                            size.talle,
                            1
                          )
                        );

                        setDisabled(false);
                      }}
                    >
                      -
                    </ProductCounterLess>
                    <ProductCounterQuantity>
                      {size.quantity}
                    </ProductCounterQuantity>
                    <ProductCounterPlus
                      onClick={async () => {
                        const producto = await getProduct(items.id);
                        const inventory = producto.data.inventoryItems.filter(
                          (item) => item.size === size.talle
                        );
                        const stock = inventory.map((s) => s.stock);
                        if (size.quantity < stock[0]) {
                          dispatch(
                            cartActions.addQuantityToProduct(
                              items.id,
                              size.talle,
                              1
                            )
                          );
                        }

                        if (size.quantity === stock[0] - 1) {
                          setDisabled(true);
                        }
                      }}
                      disabled={disabled}
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
