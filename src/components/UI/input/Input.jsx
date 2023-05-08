import { ErrorMessage, Field } from "formik";
import React from "react";
import {
  ErrorMessageStyled,
  InputContainerStyled,
  InputLabelStyled,
  InputStyled,
} from "./InputStyles";

export const Input = ({ children, name, htmlFor, type, id, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainerStyled>
          <InputLabelStyled htmlFor={htmlFor}>{children}</InputLabelStyled>
          <InputStyled
            type={type}
            id={id}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />
          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageStyled> {message} </ErrorMessageStyled>}
          </ErrorMessage>
        </InputContainerStyled>
      )}
    </Field>
  );
};
