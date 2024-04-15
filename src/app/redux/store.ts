import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import roleSlice from "./slice/roleSlice";
import userSlice from "./slice/userSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    role: roleSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type PayloadAction<T, Type extends string, Payload = T> = {
  payload?: Payload;
  type: Type;
};
