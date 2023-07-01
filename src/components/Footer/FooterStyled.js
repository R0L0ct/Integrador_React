import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
  height: 150px;
  color: white;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  letter-spacing: 5px;
  @media (max-width: 838px) {
    font-size: 12px;
  }
`;

export const RedesContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const RedStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
