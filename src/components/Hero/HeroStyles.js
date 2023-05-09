import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  @media (max-width: 1170px) {
    justify-content: center;
  }
`;

export const HeroTitleContainerStyled = styled.div`
  font-size: 25px;
  @media (max-width: 800px) {
    font-size: 17px;
  }
  @media (max-width: 318px) {
    font-size: 12px;
  }
`;

export const HeroImgStyled = styled.img`
  max-width: 400px;
  @media (max-width: 800px) {
    width: 300px;
  }
  @media (max-width: 1170px) {
    display: none;
  }
`;

export const HeroLeftContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 560px) {
    align-items: center;
  }
`;

export const RecommendedContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const RecommendedStyled = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: gray;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 5px;
`;
