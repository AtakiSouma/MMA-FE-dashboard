/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PrivateRoute from "./privateRoute";
import { ROLE } from "../constants/role";
// ********************************
// import Page from index.ts
const DashBoard = lazy(() => import("../pages/DashBoard"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const SignUpPage = lazy(() => import("../pages/auth/SingUpPage"));
const UserManagementPage = lazy(
  () => import("../pages/user/UserManagementPage")
);
// end import pages
// ********************************

export const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <MainLayout>
        <Routes>
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false} requiredRoles={[ROLE.ADMIN]}>
                  <DashBoard />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="user"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false} requiredRoles={[ROLE.ADMIN]}>
                  <UserManagementPage />
                </PrivateRoute>
              </Suspense>
            }
          />
        </Routes>
      </MainLayout>
    ),
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <SignUpPage />,
  },
]);
