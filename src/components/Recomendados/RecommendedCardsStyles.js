import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 2px solid #ed1b24;
  border-radius: 10px;
  padding: 10px;
  height: 300px;
  max-width: 200px;
  gap: 10px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
`;

export const CardInfo = styled.div`
  font-size: 12px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

export const Desc = styled.p`
  font-size: 13px;
`;

export const Price = styled.p`
  padding-top: 5px;
  padding-bottom: 10px;
  font-size: 13px;
  display: flex;
  gap: 5px;
`;

export const CardContainer = styled.div`
  max-width: 770px;
  display: flex;
  gap: 20px;
  padding-bottom: 5px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 5px;
  }

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: auto;
  }
`;

export const SizeButton = styled.button`
  cursor: pointer;
  :hover {
    color: red;
  }
`;
