import styled from "styled-components";

export const ProductCardContainerStyled = styled.div`
  max-width: fit-content;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  gap: 10px;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 5px;
  }
  padding: 0 5px 0 5px;
`;

export const ProductCard = styled.div`
  display: flex;
  width: 350px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background-color: #fafafa;
  border-radius: 10px;
  border: 2px solid #b81e2c;
  padding: 7px;
  @media (max-width: 372px) {
    flex-direction: column;
    width: 150px;
  }
`;

export const ProductCardTitle = styled.p`
  color: black;
  font-weight: 600;
`;

export const ProductCardImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const ProductCardDesc = styled.p`
  color: black;
  font-style: italic;
`;

export const ProductCardPrice = styled.p`
  color: black;
  font-weight: 600;
`;

export const ProductCardSize = styled.p`
  color: black;
  font-weight: 600;
`;

export const ProductCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 372px) {
    align-items: center;
  }
`;

export const CounterContainerStyled = styled.div`
  display: flex;
  width: 70px;
  align-items: center;
  justify-content: space-between;
`;

export const CounterLessStyled = styled.button`
  font-weight: 900;
  cursor: pointer;
  width: 25px;
`;
export const CounterPlusStyled = styled.button`
  font-weight: 900;
  cursor: pointer;
  width: 25px;
`;

export const CounterQuantity = styled.p`
  color: black;
  font-weight: 600;
`;
