import { Formik, Form } from "formik";
import styled from "styled-components";

export const CheckoutFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckoutTitleStyled = styled.h3`
  font-size: 24px;
  @media (max-width: 494px) {
    font-size: 15px;
  }
`;

export const FormikContainer = styled(Formik)``;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 889px) {
    gap: 20px;
  }
`;

export const SubmitStyled = styled.button`
  width: 100%;
  padding: 5px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: #ffffff;
  :hover {
    background-color: ${({ disabled }) => (disabled ? "gray" : "#ed1b24")};
  }
  background-color: ${({ disabled }) => (disabled ? "gray" : "#c41b2d")};
  @media (max-width: 494px) {
    font-size: 17px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 889px) {
    gap: 10px;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 889px) {
    gap: 10px;
  }
`;

export const ContainerStyled = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 889px) {
    gap: 10px;
  }
  @media (max-width: 494px) {
    flex-direction: column;
    justify-content: center;
  }
`;
