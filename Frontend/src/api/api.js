//frontend --> req --> 8000backend
//frontend --->localhost:8000/students/:id
//frontend ---> baseURL/students/:id
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});


// Add JWT Token Automatically
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default API;

//localhost:8000/students/:id
//api.get("/students/id:")

            //   React
            //   |
            //   api.js
            //   |
            //   backend

            