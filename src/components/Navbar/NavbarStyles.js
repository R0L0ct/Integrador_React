import styled from "styled-components";

export const NavbarContainerStyled = styled.div`
  height: 100px;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
`;

export const ImgContainerStyled = styled.div`
  border: 2px solid white;
  border-radius: 50%;
  @media (max-width: 1170px) {
    border: none;
    border-radius: 0px;
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
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    background-color: black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid gray;
    display: ${({ isHiddenMenu }) => (isHiddenMenu ? "none" : "flex")};
    z-index: 9;
  }
`;

export const CartAndMenuContainer = styled.div`
  font-size: 20px;
  display: flex;
  gap: 20px;
  z-index: 9;
  @media (max-width: 366px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
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

export const RegisterStyled = styled.p`
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  /* display: ${({ isHiddenMenu }) => (!isHiddenMenu ? "none" : "flex")}; */
  display: flex;
  @media (max-width: 230px) {
    font-size: 12px;
  }
  color: white;
  :hover {
    color: orange;
  }
`;

export const LoggedStyled = styled.p`
  /* display: ${({ isHiddenMenu }) => (!isHiddenMenu ? "none" : "flex")}; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  @media (max-width: 230px) {
    flex-direction: column;
    align-items: center;
    font-size: 12px;
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 230px) {
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }
`;
