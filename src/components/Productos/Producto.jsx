import React from "react";
import {
  InputAdminContainer,
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
import * as recommendedActions from "../../redux/recomendados/recomendados.actions";
import { useState } from "react";
import { updateProduct } from "../../api/data";
import { Oval } from "react-loader-spinner";

export const Producto = ({
  name,
  image,
  description,
  price,
  id,
  inventoryItems,
  recommended,
}) => {
  const sizeState = useSelector((state) => state.cart.size);
  const selectedSizeState = useSelector((state) => state.cart.selectedSize);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState({
    id: null,
    size: null,
  });

  const tokenState = useSelector((state) => state.auth.token);
  const handleSizeButtonClick = (size) => {
    dispatch(cartActions.addProductSize(""));
    dispatch(cartActions.addProductSize(size));
    setSelectedProduct({ id, size });
  };
  const isCheckLoading = useSelector((state) => state.recommended.checkLoader);

  const handleCheckboxChange = async () => {
    if (!recommended) {
      if (window.confirm("Agregar a recomendados?")) {
        await updateProduct(id, { recommended: true }, tokenState.token.jwt);
        dispatch(recommendedActions.setRecommended(true));
        dispatch(
          recommendedActions.setCheckLoader({ isLoading: true, id: id })
        );
      }
      return;
    } else {
      if (window.confirm("Quitar de recomendados?")) {
        await updateProduct(id, { recommended: false }, tokenState.token.jwt);
        dispatch(recommendedActions.setRecommended(false));
        dispatch(
          recommendedActions.setCheckLoader({ isLoading: true, id: id })
        );
      }
      return;
    }
  };

  return tokenState.token?.role === "admin" ? (
    <ProductCardStyled>
      <InputAdminContainer>
        {isCheckLoading.isLoading && isCheckLoading.id === id ? (
          <Oval
            height={80}
            width={25}
            color="red"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="black"
            strokeWidth={5}
            strokeWidthSecondary={5}
          />
        ) : (
          <input
            type="checkbox"
            checked={recommended}
            onChange={handleCheckboxChange}
          />
        )}
      </InputAdminContainer>
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

            console.log(cartItems);
            dispatch(cartActions.addProductSize(""));
            setSelectedProduct({ id: null, size: null });
          } else {
            alert("Selecciona un talle");
            setSelectedProduct({ id: null, size: null });
          }
        }}
      />
    </ProductCardStyled>
  ) : (
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

            console.log(cartItems);
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
