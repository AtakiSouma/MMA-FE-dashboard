import { Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import Sider from "antd/es/layout/Sider";
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
        width={256}
      >
        <div></div>
        <Menu
          theme="dark"
          defaultOpenKeys={[selected]}
          defaultSelectedKeys={[selected]}
          mode="inline"
          items={getConditionalItems()}
          inlineCollapsed={collapsed}
        ></Menu>
      </Sider>
    </>
  );
};

export default SideBar;
