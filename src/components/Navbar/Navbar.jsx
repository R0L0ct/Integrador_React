import React, { useEffect, useState } from "react";
import {
  NavbarContainerStyled,
  ImgContainerStyled,
  LinksContainerStyled,
  LinkContainerStyled,
  NavbarDiv,
  CartIconContainerStyled,
  BlurContainer,
  CartIconCounter,
  CartAndMenuContainer,
  MenuContainer,
} from "./NavbarStyles";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/cart/cart.actions";
import { CartModal } from "../Cart/CartModal";
import { FaBars } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

export const Navbar = () => {
  const dispatch = useDispatch();
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const bodyStyle = document.body.style;
  const [isLocked, setIsLocked] = useState(bodyStyle.overflow === "hidden");
  const [isHiddenMenu, setHiddenMenu] = useState(true);

  const isMediumScreen = useMediaQuery({ maxWidth: 800 });
  const changeLogo = useMediaQuery({ maxWidth: 1170 });

  useEffect(() => {
    bodyStyle.overflow = isLocked ? "hidden" : "auto";
    if (!isMediumScreen && !isHiddenMenu) {
      setHiddenMenu(!isHiddenMenu);
    }

    if (isLocked && isHiddenMenu && hiddenCart) {
      setIsLocked(!isLocked);
    }

    if (!hiddenCart && !isHiddenMenu) {
      setHiddenMenu(!isHiddenMenu);
      setIsLocked(!isLocked);
    }
  }, [isLocked, bodyStyle, isHiddenMenu, isMediumScreen, hiddenCart]);

  const toggleOverflow = () => setIsLocked(!isLocked);
  const toggleMenu = () => setHiddenMenu(!isHiddenMenu);

  const cartCounter = cartItems.reduce((acc, item) => {
    return (acc += item.quantity);
  }, 0);
  return (
    <NavbarContainerStyled>
      {!hiddenCart && (
        <BlurContainer
          onClick={() => {
            dispatch(cartActions.toggleCart());
            toggleOverflow();
          }}
        />
      )}
      <CartModal toggleOverflow={toggleOverflow} />
      <NavbarDiv>
        <Link to="/">
          <ImgContainerStyled>
            {changeLogo ? (
              <img src="images/logoSkull.png" alt="logo-hero" width={100} />
            ) : (
              <img src="images/logoMano.png" alt="logo-hand" width={100} />
            )}
          </ImgContainerStyled>
        </Link>
        <LinksContainerStyled isHiddenMenu={isHiddenMenu}>
          <LinkContainerStyled
            onClick={() => {
              toggleMenu();
              toggleOverflow();
            }}
          >
            <Link to="/">Home</Link>
          </LinkContainerStyled>

          <LinkContainerStyled
            onClick={() => {
              toggleMenu();
              toggleOverflow();
            }}
          >
            <Link to="/shop">Shop</Link>
          </LinkContainerStyled>
          <LinkContainerStyled
            onClick={() => {
              toggleMenu();
              toggleOverflow();
            }}
          >
            <Link to="contactanos">Contactanos</Link>
          </LinkContainerStyled>
        </LinksContainerStyled>
        <CartAndMenuContainer>
          <CartIconContainerStyled>
            <CartIconCounter>{cartCounter}</CartIconCounter>
            <FaShoppingCart
              onClick={() => {
                dispatch(cartActions.toggleCart());
                toggleOverflow();
              }}
            />
          </CartIconContainerStyled>
          {isMediumScreen && (
            <MenuContainer
              onClick={() => {
                toggleMenu();
                toggleOverflow();
              }}
            >
              <FaBars />
            </MenuContainer>
          )}
        </CartAndMenuContainer>
      </NavbarDiv>
    </NavbarContainerStyled>
  );
};
