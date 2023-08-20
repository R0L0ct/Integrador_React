import axios from "axios";

const API = "http://localhost:3001/api/v1";

const axiosInstance = axios.create({
  withCredentials: true,
  // headers: {
  //   Authorization: `Bearer ${2} `,
  // },
});

// const setAuthToken = (token) => {
//   axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

const register = async (data) => {
  try {
    const response = await axiosInstance.post(`${API}/auth/register`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const login = async (data) => {
  try {
    const response = await axiosInstance.post(`${API}/auth/login`, data);
    // const token = response.data;
    // setAuthToken(token);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  try {
    const response = await axiosInstance.post(`${API}/auth/logout`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getUserBySessionToken = async () => {
  try {
    const response = await axiosInstance.get(`${API}/user/isauth`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get(`${API}/product`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (id) => {
  try {
    const response = await axiosInstance.get(`${API}/product/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAllCategories = async () => {
  try {
    const response = await axiosInstance.get(`${API}/category`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createCustomer = async (data) => {
  try {
    const response = await axiosInstance.post(`${API}/customer`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getCustomer = async (id) => {
  try {
    const response = await axiosInstance.get(`${API}/customer/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAllCustomers = async () => {
  try {
    const response = await axiosInstance.get(`${API}/customer`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createOrder = async (data) => {
  try {
    const response = await axiosInstance.post(`${API}/order`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAllOrders = async () => {
  try {
    const response = await axiosInstance.get(`${API}/order`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createOrderProduct = async (data) => {
  try {
    const response = await axiosInstance.post(
      `${API}/order/order-product`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateInventory = async (id, data) => {
  try {
    const response = await axiosInstance.patch(
      `${API}/product/inventory/${id}`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const refreshToken = async () => {
  try {
    const res = await axiosInstance.post(`${API}/auth/refresh`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export {
  register,
  login,
  getUserBySessionToken,
  logout,
  getAllProducts,
  getAllCategories,
  getProduct,
  createCustomer,
  createOrder,
  createOrderProduct,
  getCustomer,
  getAllCustomers,
  getAllOrders,
  refreshToken,
  updateInventory,
};
