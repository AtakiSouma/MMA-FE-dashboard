import { Layout } from "antd";
import React from "react";
import { Footer, MyContent, Navbar, SideBar } from "../components/index";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
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
