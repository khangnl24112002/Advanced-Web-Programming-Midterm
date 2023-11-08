import { axiosInstance } from "../utils/axios";

export const authServices = {
  login: async (userAccount) => {
    try {
      const response = await axiosInstance.post("/auth/login", userAccount);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  signup: async (userAccount) => {
    try {
      const response = await axiosInstance.post("/auth/register", userAccount);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
};
