import React, { useEffect, useState } from "react";
import {
  CheckoutFormStyled,
  CheckoutTitleStyled,
  ContainerStyled,
  FormikContainer,
  FormikForm,
  LeftContainer,
  RightContainer,
  SubmitStyled,
} from "./CheckoutFormStyles";
import { Input } from "../../UI/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { checkoutInitialValues } from "../../../formik/initialValues";
import { checkoutValidationSchema } from "../../../formik/validationSchema";
import { useNavigate } from "react-router-dom";
import * as cartActions from "../../../redux/cart/cart.actions";
import {
  createCustomer,
  createOrder,
  createOrderProduct,
  getAllCustomers,
  getAllOrders,
  updateCustomer,
  // updateInventory,
} from "../../../api/data";
import { Oval } from "react-loader-spinner";

export const CheckoutForm = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingCost } = useSelector((state) => state.cart);
  const tokenState = useSelector((state) => state.auth.token);
  const [isLoading, setLoading] = useState(true);
  const [isConfirmLoading, setConfirmLoading] = useState(false);

  const [isCustomer, setCustomer] = useState("");
  useEffect(() => {
    try {
      const customerData = async () => {
        const customer = await getAllCustomers();
        const customerUserId = customer.data.filter(
          (user) => user.userId === tokenState.user.id
        );
        if (customerUserId.length > 0) {
          setCustomer(customerUserId[0]);
          setLoading(false);
        } else {
          setCustomer("");
          setLoading(false);
        }
      };

      customerData();
    } catch (error) {
      console.log(error);
    }
  }, [tokenState]);

  const savedUserValues = {
    name: isCustomer?.name,
    state_province: isCustomer.adress?.state_province,
    city: isCustomer.adress?.city,
    lastname: isCustomer?.lastname,
    country: isCustomer.adress?.country,
    email: isCustomer?.email,
    adress: isCustomer.adress?.adress,
    phone: isCustomer?.phone,
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <CheckoutFormStyled>
      <CheckoutTitleStyled>Completa los campos</CheckoutTitleStyled>
      <FormikContainer
        initialValues={
          !isLoading && savedUserValues
            ? savedUserValues
            : checkoutInitialValues
        }
        validationSchema={checkoutValidationSchema}
        enableReinitialize
        onSubmit={async (values) => {
          setConfirmLoading(true);
          const customer = await getAllCustomers();
          const customerUserId = customer.data.filter(
            (user) => user.userId === tokenState.user.id
          );

          if (customerUserId.length === 0) {
            await createCustomer({
              name: values.name,
              lastname: values.lastname,
              phone: values.phone,
              email: values.email,
              adress: {
                country: values.country,
                state_province: values.state_province,
                city: values.city,
                adress: values.adress,
              },
              userId: tokenState.user.id,
            });
          } else {
            await updateCustomer(customerUserId[0].id, {
              name: values.name,
              lastname: values.lastname,
              phone: values.phone,
              email: values.email,
              adress: {
                country: values.country,
                state_province: values.state_province,
                city: values.city,
                adress: values.adress,
              },
            });
          }

          const customerData = await getAllCustomers();
          const customerId = await customerData.data.filter(
            (customer) => customer.userId === tokenState.user.id
          );
          const orderCreate = await createOrder(
            {
              total: totalPrice + shippingCost,
              status: "pending",
              customerId: customerId[0].id,
            },
            tokenState.token.jwt
          );

          if (orderCreate.data === "SESION_NO_VALIDA") {
            alert("Sesion no valida");
          } else {
            const orderData = await getAllOrders();
            const orderId = await orderData.data.filter(
              (order) => order.customerId === customerId[0].id
            );

            cartItems.forEach(async (item) => {
              item.inventory.forEach(async (invent) => {
                await createOrderProduct({
                  amount: item.quantity,
                  shipping_cost: shippingCost,
                  orderId: orderId[0].id,
                  productId: item.id,
                  inventoryId: invent.id,
                });
                // const res = await updateInventory(invent.id, {
                //   stock: invent.stock - invent.quantity,
                // });
                // console.log(res);
              });
            });

            // console.log(cartItems);
            setConfirmLoading(false);
            navigate("/completed");
            dispatch(cartActions.removeAllProducts());
          }
        }}
      >
        <FormikForm>
          <ContainerStyled>
            <LeftContainer>
              <Input
                htmlFor="nombre"
                name="name"
                type="text"
                id="nombre"
                placeholder={"Ingresa tu nombre"}
              >
                Nombre
              </Input>
              <Input
                htmlFor="apellido"
                name="lastname"
                type="text"
                id="apellido"
                placeholder={"Ingresa tu apellido"}
              >
                Apellido
              </Input>
              <Input
                htmlFor="email"
                name="email"
                type="text"
                id="email"
                placeholder={"Ingresa tu email"}
              >
                Email
              </Input>
              <Input
                htmlFor="telefono"
                name="phone"
                type="text"
                id="telefono"
                placeholder={"Ingresa tu telefono"}
              >
                Telefono
              </Input>
            </LeftContainer>
            <RightContainer>
              <Input
                htmlFor="pais"
                name="country"
                type="text"
                id="pais"
                placeholder={"Ingresa tu pais"}
              >
                Pais
              </Input>
              <Input
                htmlFor="state_province"
                name="state_province"
                type="text"
                id="state_province"
                placeholder={"Ingresa tu estado/provincia"}
              >
                Estado/Provincia
              </Input>
              <Input
                htmlFor="ciudad"
                name="city"
                type="text"
                id="ciudad"
                placeholder={"Ingresa tu ciudad"}
              >
                Ciudad
              </Input>
              <Input
                htmlFor="direccion"
                name="adress"
                type="text"
                id="direccion"
                placeholder={"Ingresa tu direccion"}
              >
                Direccion
              </Input>
            </RightContainer>
          </ContainerStyled>
          <div>
            <SubmitStyled disabled={!cartItems.length} type="submit">
              {isConfirmLoading ? (
                <Oval
                  height={25}
                  width={80}
                  color="#4fa94d"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#4fa94d"
                  strokeWidth={5}
                  strokeWidthSecondary={5}
                />
              ) : (
                "Confirmar Compra"
              )}
            </SubmitStyled>
          </div>
        </FormikForm>
      </FormikContainer>
    </CheckoutFormStyled>
  );
};
