import styled from "styled-components";

export const ProductsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  @media (max-width: 889px) {
    height: auto;
    padding-bottom: 20px;
    align-items: center;
  }
`;

export const ProductsCheckoutTitle = styled.h3`
  font-size: 24px;
  @media (max-width: 494px) {
    font-size: 17px;
  }
`;

export const ProductCardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  gap: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 5px;
  }
  padding-right: 10px;
  @media (max-width: 889px) {
    height: auto;
  }
  @media (max-width: 320px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding-right: 0px;
  }
  @media (max-width: 300px) {
    justify-content: center;
  }
`;

export const ProductCardStyled = styled.div`
  display: flex;
  border: 2px solid red;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 320px) {
    width: 100%;
  }
  @media (max-width: 300px) {
    width: 147px;
    flex-direction: column;
  }
`;
export const ProductCardImg = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 494px) {
    width: 50px;
    height: 50px;
  }
`;
export const ProductCardTitle = styled.p`
  font-weight: 600;
  @media (max-width: 494px) {
    font-size: 15px;
  }
`;
export const ProductCardDesc = styled.p`
  font-style: italic;
  @media (max-width: 494px) {
    font-size: 13px;
  }
`;

export const ProductCardPrice = styled.p`
  font-weight: 600;
  @media (max-width: 494px) {
    font-size: 15px;
  }
`;

export const ProductCardSize = styled.p`
  font-weight: 600;
  @media (max-width: 494px) {
    font-size: 15px;
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

export const ProductCounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ProductCounterLess = styled.button`
  width: 25px;
  height: 25px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ProductCounterPlus = styled.button`
  width: 25px;
  height: 25px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ProductCounterQuantity = styled.p`
  font-weight: 600;
`;
