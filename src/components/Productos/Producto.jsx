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

export const Producto = ({ title, img, desc, price, id, talle }) => {
  const sizeState = useSelector((state) => state.cart.size);
  const selectedSizeState = useSelector((state) => state.cart.selectedSize);
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
        <ProductCardImage src={img} alt={title} />
        <ProductTitle>{title}</ProductTitle>
        <ProductDesc>Material: {desc}</ProductDesc>
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
          {talle.map((size) => {
            return (
              <SizeButton
                key={size}
                id={`${id}-${size}`}
                style={
                  selectedProduct?.size === size
                    ? { border: "1px solid red" }
                    : {}
                }
                onClick={() => {
                  dispatch(cartActions.addSelectedSize(`${id}-${size}`));
                  handleSizeButtonClick(size);
                }}
              >
                {size}
              </SizeButton>
            );
          })}
        </div>
      </ProductCardInfo>
      <Button
        onClick={() => {
          if (selectedSizeState === `${id}-${sizeState}`) {
            dispatch(
              cartActions.addProduct({ id, title, img, price, desc, talle })
            );
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
