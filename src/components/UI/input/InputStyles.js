import styled from "styled-components";

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 320px) {
    width: 100vw;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const InputLabelStyled = styled.label`
  font-weight: 600;
  @media (max-width: 494px) {
    font-size: 14px;
  }
`;

export const InputStyled = styled.input`
  border-radius: 10px;
  border: none;
  background-color: #c3c3c5;
  padding: 10px;
  font-size: 17px;
  @media (max-width: 494px) {
    font-size: 12px;
    width: 300px;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;
export const ErrorMessageStyled = styled.p`
  color: red;
  font-size: 12px;
  font-weight: 600;
  @media (max-width: 494px) {
    font-size: 10px;
  }
`;
