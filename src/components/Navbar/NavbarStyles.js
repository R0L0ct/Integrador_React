import styled from "styled-components";

export const NavbarContainerStyled = styled.div`
  height: 100px;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

export const ImgContainerStyled = styled.div`
  border: 1px solid white;
  @media (max-width: 1170px) {
    border: none;
  }
  @media (max-width: 366px) {
    display: none;
  }
`;

export const LinksContainerStyled = styled.div`
  font-size: 20px;
  display: flex;
  gap: 30px;
  @media (max-width: 800px) {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid gray;
    display: ${({ isHiddenMenu }) => (isHiddenMenu ? "none" : "flex")};
  }
`;

export const CartAndMenuContainer = styled.div`
  font-size: 20px;
  display: flex;
  gap: 20px;
  @media (max-width: 366px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const LinkContainerStyled = styled.div`
  a {
    color: white;
  }
  position: relative;
  a::after {
    content: "";
    background-color: white;
    position: absolute;
    left: 0;
    top: calc(100% + 2px);
    width: 0%;
    height: 2px;
    transition: 0.3s;
  }
  a:hover::after {
    width: 100%;
  }
`;

export const CartIconContainerStyled = styled.div`
  cursor: pointer;
  position: relative;
`;

export const NavbarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  @media (max-width: 366px) {
    justify-content: center;
  }
`;

export const BlurContainer = styled.div`
  backdrop-filter: blur(20px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9;
`;

export const CartIconCounter = styled.div`
  position: absolute;
  bottom: 22px;
  right: -5px;
  font-size: 13px;
  font-weight: 600;
  background-color: red;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const MenuContainer = styled.div`
  cursor: pointer;
  z-index: 8;
`;

export const MenuStyled = styled.div`
  position: absolute;
  left: 0;
  bottom: -125px;
  background-color: white;
  width: 100vw;
  height: 100vh;
`;
