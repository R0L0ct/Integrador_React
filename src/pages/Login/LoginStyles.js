import { Formik, Form } from "formik";
import styled from "styled-components";

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const LoginFormContainer = styled.div`
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle at 10% 20%,
    rgb(0, 0, 0) 0%,
    rgb(64, 64, 64) 90.2%
  );
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0 30px 0;
  gap: 50px;
  border: 2px solid black;
  @media (max-width: 564px) {
    width: 100%;
    height: auto;
    border-radius: 0px;
    border-left: none;
    border-right: none;
  }
  @media (max-width: 374px) {
    overflow: auto;
    height: 100vh;
  }
`;

export const FormTitleStyled = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 25px;
  @media (max-width: 374px) {
    font-size: 17px;
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

export const ContainerStyled = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const SubmitStyled = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background-color: white;
  font-size: 17px;
  :hover {
    border: 2px solid white;
    color: white;
    background-color: transparent;
  }
  @media (max-width: 374px) {
    height: 30px;
    font-size: 15px;
  }
`;

export const PRegisterStyled = styled.p`
  color: white;
  @media (max-width: 374px) {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SpanRegisterStyled = styled.span`
  cursor: pointer;
  font-weight: 600;
  @media (max-width: 374px) {
    font-size: 12px;
  }
  :hover {
    color: orange;
  }
`;
