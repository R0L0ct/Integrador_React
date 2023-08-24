import styled from "styled-components";

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 2px solid #ed1b24;
  border-radius: 10px;
  padding: 10px;
  height: 300px;
  width: 200px;
  gap: 10px;
  position: relative;
  @media (max-width: 710px) {
    width: 170px;
  }
`;

export const ProductCardImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const ProductCardInfo = styled.div`
  font-size: 12px;
`;

export const ProductTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

export const ProductDesc = styled.p`
  font-size: 13px;
`;

export const ProductPrice = styled.p`
  padding-top: 5px;
  padding-bottom: 10px;
  font-size: 13px;
  display: flex;
  gap: 5px;
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 5px;
`;

export const SizeButton = styled.div`
  border: 1px solid black;
  padding: 1px 6px;
  color: #000000;
  background: #efefef;
  font-size: 13.333333px;
  border-radius: 2px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

export const InputAdminContainer = styled.div`
  position: absolute;
  top: -20px;
  right: 10px;
`;
