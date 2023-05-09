import styled from "styled-components";

export const CartContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: calc(100vh - 30px);
  background-color: #201b19;
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  z-index: 999;
  overflow: auto;
  @media (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    padding: 0px;
  }
`;

export const CartCloseButton = styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 17px;
  border-radius: 5px;
  background-color: #c41b2d;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background-color: #ed1b24;
  }
  @media (max-width: 800px) {
    margin-left: 20px;
    margin-top: 20px;
  }
`;

export const CartProductsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
`;

export const CartProductsTitle = styled.h2`
  color: #fff;
  text-align: center;
`;

export const TotalContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
`;

export const SubtotalContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const EnvioContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const TotalStyled = styled.div`
  border-top: 1px solid #fff;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const TopCartContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TrashContainerStyled = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #c41b2d;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background-color: #ed1b24;
  }
  @media (max-width: 800px) {
    margin-right: 20px;
    margin-top: 20px;
  }
`;

export const ConfirmButtonStyled = styled.button`
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  padding: 3px;
  font-weight: 600;
  font-size: 18px;
  background-color: #c41b2d;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background-color: #ed1b24;
    background-color: ${({ disabled }) => (disabled ? "gray" : "#ed1b24")};
  }
  background-color: ${({ disabled }) => (disabled ? "gray" : "#c41b2d")};
  @media (max-width: 800px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;
