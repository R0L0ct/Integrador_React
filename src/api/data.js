import axios from "axios";

const API = "http://localhost:3001/api/v1";

const axiosInstance = axios.create({
  withCredentials: true,
});

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
    const response = await axios.get(`${API}/product`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAllCategories = async () => {
  try {
    const response = await axios.get(`${API}/category`);
    return response;
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
};
