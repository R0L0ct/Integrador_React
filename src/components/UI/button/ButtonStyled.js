import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 5px;
  font-weight: 600;
  background-color: ${({ disabled }) => (disabled ? "gray" : "#c41b2d")};
  color: #ffffff;
  cursor: pointer;
  :hover {
    background-color: ${({ disabled }) => (disabled ? "gray" : "#ed1b24")};
  }
`;
