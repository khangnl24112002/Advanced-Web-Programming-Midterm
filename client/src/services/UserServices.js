import { axiosInstance } from "../utils/axios";

export const userServices = {
    update: async (email, userInfo) => {
        try {
            const response = await axiosInstance.patch(
                `/user/email?email=${email}`,
                userInfo
            );

            return response.data;
        } catch (error) {
            console.log(error);
            return error.response.data;
        }
    },
};
