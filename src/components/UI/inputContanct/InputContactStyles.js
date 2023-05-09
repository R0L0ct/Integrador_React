import styled from "styled-components";

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 320px) {
  }
`;

export const InputLabelStyled = styled.label`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  font-weight: 600;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  margin-bottom: 5px;
  @media (max-width: 374px) {
    font-size: 14px;
  }
`;

export const InputStyled = styled.input`
  border: 2px solid black;
  border-radius: 5px;
  padding: 7px;
  font-weight: 600;
  @media (max-width: 374px) {
    font-size: 12px;
    border: 1px solid black;
  }
`;

export const TextAreaStyled = styled.textarea`
  resize: none;
  min-height: 200px;
  border-radius: 10px;
  border: 2px solid black;
  padding: 7px;
  font-weight: 600;
  @media (max-width: 374px) {
    font-size: 12px;
    border: 1px solid black;
  }
`;
export const ErrorMessageStyled = styled.p`
  color: red;
  background-color: black;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  @media (max-width: 494px) {
    font-size: 10px;
  }
`;
