import axios from "axios";
import apiConfig from "./apiConfig";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data.data) {
      return { response: response.data.data, status: response.status };
    }
    return response;
  },
  (error) => {
    return error;
  }
);

export default axiosClient;
