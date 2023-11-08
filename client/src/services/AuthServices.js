import { axiosInstance } from "../utils/axios";

export const authServices = {
  login: async (userAccount) => {
    await axiosInstance
      .post("/auth/login", userAccount)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },
};
