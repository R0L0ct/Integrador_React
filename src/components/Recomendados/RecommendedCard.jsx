import {
  Card,
  CardInfo,
  Desc,
  Image,
  Price,
  SizeButton,
  Title,
} from "./RecommendedCardsStyles";
import { Button } from "../UI/button/Button";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/cart/cart.actions";
import { useState } from "react";

export const RecommendedCard = ({
  id,
  name,
  image,
  price,
  description,
  inventoryItems,
}) => {
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
    <Card>
      <CardInfo>
        <Image src={image} alt={name} />
        <Title>{name}</Title>
        <Desc>Material: {description}</Desc>
        <Price>
          Precio: <span style={{ fontWeight: "600" }}>${price}</span>{" "}
        </Price>

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
      </CardInfo>
      <Button
        onClick={() => {
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
            dispatch(cartActions.addProductSize(""));
            setSelectedProduct({ id: null, size: null });
          } else {
            alert("Selecciona un talle");
            setSelectedProduct({ id: null, size: null });
          }
        }}
      />
    </Card>
  );
};
