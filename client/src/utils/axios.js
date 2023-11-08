import axios from "axios";
export const axiosInstance = axios.create({
  baseURL:
    "https://advanced-web-programming-midterm-production.up.railway.app/",
  timeout: 10000,
  headers: {
    Authorization: "YOUR_TOKEN",
    post: {
      "Content-Type": "application/json",
    },
  },
});

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    // Edit request config
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    // Edit response config
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
