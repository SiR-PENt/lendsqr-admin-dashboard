import axios from "axios";

const request = axios.create({
    baseURL: "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/",
    timeout: 30000,
  });
  
  request.interceptors.response.use(
    (response) => {
      return response;
    },
    ({ response }) => {
      return Promise.reject(response);
    }
  );
  
  export default request;