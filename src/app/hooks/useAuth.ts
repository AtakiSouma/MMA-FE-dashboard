import { userLoginParams } from "../models/auth.models";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../redux/slice/authSlice";
import baseApi from "../utils/BaseApi";
import { ErrorResponse, NavigateFunction } from "react-router-dom";
import { message } from "antd";

export function useAuth() {
  const state = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogin = async (
    value: userLoginParams,
    navigate: NavigateFunction
  ) => {
    dispatch(loginStart());
    try {
      const { data } = await baseApi.post("api/v1/auth/login", {
        email: value.email,
        password: value.password,
      });
      const { link, access_token, ...user } = data.data;
      dispatch(loginSuccess(user));
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("link", JSON.stringify(link));
      navigate(link);
    } catch (error) {
      if (error) {
        console.log("error", error);
        const typedError = error as ErrorResponse;
        console.log(typedError);
        const errorMessage =
          typedError?.data?.error?.message || "Unknown error";
        dispatch(loginFailure(errorMessage));
        message.error(errorMessage);
      } else {
        dispatch(loginFailure("Some thing went wrong"));
      }
    }
  };
  return { state, handleLogin };
}
