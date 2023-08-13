import React from "react";
import {
  ProductCardImage,
  ProductCardInfo,
  ProductCardStyled,
  ProductDesc,
  ProductPrice,
  ProductTitle,
  SizeButton,
} from "./ProductosStyles";
import { Button } from "../UI/button/Button";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/cart/cart.actions";
import { useState } from "react";
import { getProduct } from "../../api/data";

export const Producto = ({
  name,
  image,
  description,
  price,
  id,
  inventoryItems,
}) => {
  const sizeState = useSelector((state) => state.cart.size);
  const selectedSizeState = useSelector((state) => state.cart.selectedSize);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState({
    id: null,
    size: null,
  });

  const handleSizeButtonClick = (size) => {
    dispatch(cartActions.addProductSize(""));
    dispatch(cartActions.addProductSize(size));
    setSelectedProduct({ id, size });
  };
  return (
    <ProductCardStyled>
      <ProductCardInfo>
        <ProductCardImage src={image} alt={name} />
        <ProductTitle>{name}</ProductTitle>
        <ProductDesc>Material: {description}</ProductDesc>
        <ProductPrice>
          Precio:
          <span
            style={{
              fontWeight: "600",
            }}
          >
            ${price}
          </span>
        </ProductPrice>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          {inventoryItems.map((item) => {
            return (
              <SizeButton
                key={item.id}
                id={`${id}-${item.size}`}
                style={
                  selectedProduct?.size === item.size
                    ? { border: "1px solid red" }
                    : {}
                }
                onClick={() => {
                  dispatch(cartActions.addSelectedSize(`${id}-${item.size}`));
                  handleSizeButtonClick(item.size);
                }}
              >
                {item.size}
              </SizeButton>
            );
          })}
        </div>
      </ProductCardInfo>
      <Button
        onClick={async () => {
          if (selectedSizeState === `${id}-${sizeState}`) {
            const inventory = inventoryItems.find(
              (item) => item.size === sizeState
            );
            dispatch(cartActions.addInventory(inventory));

            dispatch(
              cartActions.addProduct({
                id,
                name,
                image,
                price,
                description,
              })
            );

            console.log(inventory.stock);
            dispatch(cartActions.addProductSize(""));
            setSelectedProduct({ id: null, size: null });
          } else {
            alert("Selecciona un talle");
            setSelectedProduct({ id: null, size: null });
          }
        }}
      />
    </ProductCardStyled>
  );
};
