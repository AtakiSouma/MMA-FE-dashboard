import { ConfigProvider, Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import Sider from "antd/es/layout/Sider";
import { cn } from "../../utils/cn";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label: <Link to={`/${key}`}>{label}</Link>,
  } as MenuItem;
}

const SideBar = () => {
  // handle resize
  const selectLocation = useLocation();

  const [collapsed, setCollapsed] = useState(window.innerWidth < 1280);
  const selected = selectLocation.pathname.split("/")[1];

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const getConditionalItems = (): MenuItem[] => {
    return [
      getItem("Dashboard", "dashboard", <LuLayoutDashboard />),
      getItem("User", "user", <LuUsers2 />),
    ];
  };
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              siderBg: "#77B0AA",
            },
          },
        }}
      >
        <Sider
          theme="dark"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className="overflow-hidden"
          trigger={
            <div className="border-t-[1px] w-full ">
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
          }
          width={200}
        >
          <div className="demo-logo-vertical border-r-[1px] border-gray-200 flex flex-col items-center">
            <div
              className={cn(" flex gap-2 pr-2 my-2 items-center flex-row max-w-[199px] mx-auto py-2 ", {
                hidden: collapsed,
              })}
            >
              {" "}
              <img
                src="https://res.cloudinary.com/didw3mt8i/image/upload/v1712734819/38221_jvfmez.jpg"
                alt="logo"
                className="object-cover rounded-full"
                width={50}
                height={50}
              />
              <span className="text-[#135D66] text-2xl font-extrabold		">Child </span>
              <span className="text-[#ffffff] text-2xl font-extrabold		"> Art</span>
            </div>
            <img
              src="https://res.cloudinary.com/didw3mt8i/image/upload/v1712734819/38221_jvfmez.jpg"
              alt="logo"
              className={cn("max-w-[50px] mx-auto my-4 rounded-full", {
                hidden: !collapsed,
              })}
            />
          </div>{" "}
          <Menu
            theme="dark"
            defaultOpenKeys={[selected]}
            defaultSelectedKeys={[selected]}
            mode="inline"
            items={getConditionalItems()}
            inlineCollapsed={collapsed}
          ></Menu>
        </Sider>
      </ConfigProvider>
    </>
  );
};

export default SideBar;
