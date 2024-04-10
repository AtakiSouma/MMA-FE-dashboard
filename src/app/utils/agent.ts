import { AxiosResponse } from "axios";
import apiJWT from "./apiJwt";
import baseApi from "./BaseApi";
import { UserRegisterParams } from "../models/auth.models";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: <T>(url: string, params?: T) =>
    apiJWT.get(url, { params }).then(responseBody),
  post: <T>(url: string, body: T) => apiJWT.post(url, body).then(responseBody),
  put: <T>(url: string, body: T) => apiJWT.put(url, body).then(responseBody),
  del: <T>(url: string, params?: T) =>
    apiJWT.delete(url, { params }).then(responseBody),
  baseApiGet: <T>(url: string, params?: T) =>
    baseApi.get(url, { params }).then(responseBody),
  baseApiPost: <T>(url: string, body: T) =>
    baseApi.post(url, body).then(responseBody),
  baseApiPut: <T>(url: string, body: T) =>
    baseApi.put(url, body).then(responseBody),
  baseApiPatch: <T>(url: string, body: T) =>
    baseApi.patch(url, body).then(responseBody),
  baseApiDelete: <T>(url: string, params?: T) =>
    baseApi.delete(url, { params }).then(responseBody),
  baseApiUpdateStatus: <T>(url: string, params?: T) =>
    baseApi.patch(url, { params }).then(responseBody),
};
const User = {
  register: (input: UserRegisterParams) =>
    requests.baseApiPost("/api/v1/user/register", {
      email: input.email,
      name: input.name,
      password: input.password,
      confirmPassword: input.confirmPassword,
    }),
};
const agent = {
  User,
};
export default agent;
