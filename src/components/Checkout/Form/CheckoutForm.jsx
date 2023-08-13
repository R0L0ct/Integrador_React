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
  getUserBySessionToken,
} from "../../../api/data";

export const CheckoutForm = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const { shippingCost } = useSelector((state) => state.cart);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getUserId = async () => {
      const user = await getUserBySessionToken();
      setUserId(user.data.id);
    };

    getUserId();
  });

  const [isCustomer, setCustomer] = useState("");
  useEffect(() => {
    try {
      const customerData = async () => {
        const customer = await getAllCustomers();
        const customerUserId = customer.data.filter(
          (user) => user.userId === userId
        );
        if (customerUserId) {
          setCustomer(customerUserId[0]);
          console.log(customerUserId[0]);
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
    // eslint-disable-next-line
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <CheckoutFormStyled>
      <CheckoutTitleStyled>Completa los campos</CheckoutTitleStyled>
      <FormikContainer
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async (values) => {
          const customer = await getAllCustomers();
          const customerUserId = customer.data.filter(
            (user) => user.userId === userId
          );
          if (!customerUserId) {
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
              userId: userId,
            });
          }

          const customerData = await getAllCustomers();
          const customerId = await customerData.data.filter(
            (customer) => customer.userId === userId
          );
          await createOrder({
            total: totalPrice + shippingCost,
            status: "pending",
            customerId: customerId[0].id,
          });
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
            });
          });

          console.log(cartItems);
          navigate("/completed");
          dispatch(cartActions.removeAllProducts());
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
                placeholder={isCustomer ? isCustomer.name : "Ingresa tu nombre"}
              >
                Nombre
              </Input>
              <Input
                htmlFor="apellido"
                name="lastname"
                type="text"
                id="apellido"
                placeholder={
                  isCustomer ? isCustomer.lastname : "Ingresa tu apellido"
                }
              >
                Apellido
              </Input>
              <Input
                htmlFor="email"
                name="email"
                type="text"
                id="email"
                placeholder={isCustomer ? isCustomer.email : "Ingresa tu email"}
              >
                Email
              </Input>
              <Input
                htmlFor="telefono"
                name="phone"
                type="text"
                id="telefono"
                placeholder={
                  isCustomer ? isCustomer.phone : "Ingresa tu telefono"
                }
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
                placeholder={
                  isCustomer ? isCustomer.adress.country : "Ingresa tu pais"
                }
              >
                Pais
              </Input>
              <Input
                htmlFor="state_province"
                name="state_province"
                type="text"
                id="state_province"
                placeholder={
                  isCustomer
                    ? isCustomer.adress.state_province
                    : "Ingresa tu estado/provincia"
                }
              >
                Estado/Provincia
              </Input>
              <Input
                htmlFor="ciudad"
                name="city"
                type="text"
                id="ciudad"
                placeholder={
                  isCustomer ? isCustomer.adress.city : "Ingresa tu ciudad"
                }
              >
                Ciudad
              </Input>
              <Input
                htmlFor="direccion"
                name="adress"
                type="text"
                id="direccion"
                placeholder={
                  isCustomer ? isCustomer.adress.adress : "Ingresa tu direccion"
                }
              >
                Direccion
              </Input>
            </RightContainer>
          </ContainerStyled>
          <div>
            <SubmitStyled disabled={!cartItems.length} type="submit">
              Confirmar Compra
            </SubmitStyled>
          </div>
        </FormikForm>
      </FormikContainer>
    </CheckoutFormStyled>
  );
};
