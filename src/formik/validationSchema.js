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
  region: Yup.string().required("Campo requerido"),
  phone: Yup.string().required("Campo requerido"),
});
