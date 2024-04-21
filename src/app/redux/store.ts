import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import roleSlice from "./slice/roleSlice";
import userSlice from "./slice/userSlice";
import courseSlice from "./slice/courseSlice";
import orderSlice from "./slice/orderSlice"
export const store = configureStore({
  reducer: {
    auth: authSlice,
    role: roleSlice,
    user: userSlice,
    course: courseSlice,
    order: orderSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type PayloadAction<T, Type extends string, Payload = T> = {
  payload?: Payload;
  type: Type;
};
