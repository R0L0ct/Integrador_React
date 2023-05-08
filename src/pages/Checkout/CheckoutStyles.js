import styled from "styled-components";

export const CheckoutContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 20px;
  @media (max-width: 889px) {
    flex-wrap: wrap-reverse;
  }
  @media (max-width: 494px) {
    justify-content: center;
    width: 100%;
    gap: 50px;
  }
`;

export const ContainerStyled = styled.div`
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  @media (max-width: 889px) {
    justify-content: start;
    height: auto;
    width: 100%;
    padding: 0 5px 0 5px;
  }
`;

export const CheckoutTotalContainer = styled.div`
  padding-top: 10px;
  border-top: 2px solid black;
  width: 100%;
`;
export const CheckoutSubtotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  @media (max-width: 494px) {
    font-size: 13px;
  }
`;
export const CheckoutShipping = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  @media (max-width: 494px) {
    font-size: 13px;
  }
`;
export const CheckoutTotal = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  font-weight: 600;
  font-size: 20px;
  border-top: 2px solid black;
  display: flex;
  justify-content: space-between;
  @media (max-width: 494px) {
    font-size: 15px;
  }
`;
