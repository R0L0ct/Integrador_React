import styled from "styled-components";

export const ContactanosContainerStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 564px) {
    flex-direction: row;
  }
`;

export const ContactoBoxStyled = styled.div`
  width: 500px;
  height: 500px;
  background-image: url("images/hero.jpg");
  background-size: cover;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 20px;
  border: 2px solid black;
  @media (max-width: 564px) {
    width: 100%;
    height: auto;
    border-radius: 0px;
    border-left: none;
    border-right: none;
  }
  @media (max-width: 374px) {
    padding: 20px;
  }
`;

export const ContactoTitle = styled.h3`
  color: #fff;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 0;
  font-size: 20px;
  @media (max-width: 374px) {
    font-size: 15px;
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  border: 2px solid black;
  border-radius: 5px;
  padding: 7px;
  font-weight: 600;
  @media (max-width: 374px) {
    font-size: 12px;
    border: 1px solid black;
  }
`;
export const InputTextStyled = styled.textarea`
  resize: none;
  width: 100%;
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

export const Button = styled.button`
  width: 150px;
  font-weight: 600;
  height: 30px;
  border-radius: 10px;
  font-size: 17px;
  border: 2px solid black;
  cursor: pointer;
  :hover {
    border: 2px solid red;
    color: red;
  }
  @media (max-width: 374px) {
    width: 100px;
    font-size: 12px;
  }
`;
