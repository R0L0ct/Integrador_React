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

export { register, login };
