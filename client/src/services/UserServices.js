import { axiosInstance } from "../utils/axios";

export const userServices = {
    update: async (email, userInfo) => {
        try {
            const response = await axiosInstance.put(
                `/user?email=${email}`,
                userInfo
            );

            return response.data;
        } catch (error) {
            console.log(error);
            return error.response.data;
        }
    },
    getAll: async () => {
        try {
            const response = await axiosInstance.get("/user");
            return response.data;
        } catch (error) {
            console.log(error);
            return error.response.data;
        }
    },
};
