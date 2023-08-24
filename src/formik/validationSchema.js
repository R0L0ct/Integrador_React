import * as Yup from "yup";
export const regEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required("Campo requerido"),
  lastname: Yup.string().required("Campo requerido"),
  email: Yup.string()
    .matches(regEmail, "Mail no valido")
    .required("Campo requerido"),
  city: Yup.string().required("Campo requerido"),
  adress: Yup.string().required("Campo requerido"),
  country: Yup.string().required("Campo requerido"),
  state_province: Yup.string().required("Campo requerido"),
  phone: Yup.string().required("Campo requerido"),
});

export const contactValidationSchema = Yup.object({
  name: Yup.string().required("Campo requerido"),
  email: Yup.string()
    .matches(regEmail, "Mail no valido")
    .required("Campo requerido"),
  message: Yup.string().required("Campo requerido"),
  subject: Yup.string().required("Campo requerido"),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string()
    .required("Campo requerido")
    .max(10, "Diez caracteres maximo"),
  email: Yup.string()
    .matches(regEmail, "Mail no valido")
    .required("Campo requerido"),
  password: Yup.string().required("Campo requerido"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, "Mail no valido")
    .required("Campo requerido"),
  password: Yup.string().required("Campo requerido"),
});
