import axios, { AxiosInstance } from "axios";

export const getInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return instance;
};

export { default as getEmployees } from "./api/employee/getEmployees";
export { default as deleteEmployee } from "./api/employee/deleteEmployee";
export { default as saveEmployee } from "./api/employee/saveEmployee";
