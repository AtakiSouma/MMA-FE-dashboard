import { Layout } from "antd";
import React, { useCallback, useState } from "react";
import { Footer, MyContent, Navbar, SideBar } from "../components/index";
import { useAppDispatch } from "../redux/hook";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();
  // const initAppRoute = useCallback(async () => {
  //   try {
  //     const fetchData = async () => {
  //       const response = await agent.Role.checkRole();
  //       dispatch(roleCheckSuccess(response));
  //     };
  //     fetchData();
  //   } catch (error) {}
  // }, []);
  return (
    <Layout className="min-h-screen">
      <SideBar></SideBar>
      <Layout className=" bg-white">
        <Navbar />
        <MyContent children={children} />
        <Footer />
      </Layout>
    </Layout>
  );
};
export default MainLayout;
