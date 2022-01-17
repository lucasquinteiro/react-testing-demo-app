import axios from "axios";

var axiosInstance = axios.create({
  baseURL: "http://restapi.adequateshop.com/api/",
});

export default axiosInstance;
