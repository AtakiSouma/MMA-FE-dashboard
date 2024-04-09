import { lazy } from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
// ********************************
// import Page from index.ts
const DashBoard = lazy(() => import("../pages/DashBoard"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
// end import pages
// ********************************

export const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <MainLayout>
        <Routes>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </MainLayout>
    ),
  },
]);
