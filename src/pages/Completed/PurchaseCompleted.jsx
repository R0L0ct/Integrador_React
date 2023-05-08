import React from "react";
import { useSpring, animated } from "@react-spring/web";
import {
  AnimatedContainerStyled,
  Completed,
  CompletedContainerStyled,
  CompletedP,
  CompletedTitle,
} from "./PurchaseCompletedStyles";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export const PurchaseCompleted = () => {
  const query = useMediaQuery({ maxWidth: 500 });
  const springOpacity = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  const springs = useSpring({
    from: { x: 0 },
    to: { x: 200 },
  });
  return (
    <CompletedContainerStyled>
      <Completed>
        <AnimatedContainerStyled>
          {!query ? (
            <animated.div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 80,
                height: 80,
                background: "#4cff00",
                borderRadius: 50,
                ...springs,
              }}
            >
              ✔
            </animated.div>
          ) : (
            <animated.div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                height: 70,
                background: "#4cff00",
                borderRadius: 50,
                ...springOpacity,
              }}
            >
              ✔
            </animated.div>
          )}
        </AnimatedContainerStyled>
        <CompletedTitle>Compra Exitosa!</CompletedTitle>
        <div
          style={{
            height: "50px",
          }}
        >
          <Link to="/">
            <CompletedP>Volver</CompletedP>
          </Link>
        </div>
      </Completed>
    </CompletedContainerStyled>
  );
};
