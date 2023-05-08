import styled from "styled-components";

export const CompletedContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Completed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #207c02;
  width: 500px;
  height: 500px;
  border-radius: 50px;
  color: #fff;
  font-size: 30px;
  @media (max-width: 500px) {
    width: 100%;
    height: 100vh;
    border-radius: 0px;
  }
`;

export const AnimatedContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const CompletedTitle = styled.h3`
  @media (max-width: 500px) {
    font-size: 25px;
  }
  @media (max-width: 211px) {
    font-size: 17px;
  }
`;

export const CompletedP = styled.p`
  color: #fff;
  :hover {
    border-bottom: 2px solid white;
  }
  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (max-width: 211px) {
    font-size: 15px;
  }
`;
