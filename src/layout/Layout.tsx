import { Layout, Menu, Space } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import LittleLogoHorizontal from "../assets/images/Little&Little_Logo_Horizontal.svg";
import Phone from "../assets/images/Phone.svg";
import { Link } from "react-router-dom";

type MenuItem = {
  label: React.ReactNode;
  key: string;
  children?: MenuItem[];
};

function getItem(
  label: React.ReactNode,
  key: string,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    children,
  } as MenuItem;
}

const menuItems: MenuItem[] = [
  // getItem(<Link to="/home">Trang chủ</Link>, "home"),
  // getItem(<Link to="/event">Sự kiện</Link>, "event"),
  // getItem(<Link to="/contact">Liên hệ</Link>, "ticket"),
  getItem("Trang chủ", "home"),
  getItem("Sự kiện", "event"),
  getItem("Liên hệ", "contact"),
];
type LayoutProps = {
  content: React.ReactNode;
};

const Layouts: React.FC<LayoutProps> = ({ content }) => {
  const [selectedKey, setSelectedKey] = useState("1");

  useEffect(() => {
    const path = window.location.pathname;
    setSelectedKey(path.split("/")[1]);
  }, []);

  return (
    <Layout>
      <div className="">
        <Header className="bg-[#ed7200] flex items-center justify-around py-12 header">
          <img src={LittleLogoHorizontal} alt="Logo" />
          <Menu
            mode="horizontal"
            theme="light"
            className="bg-[#ed7200] montserrat text-white text-lg font-bold flex justify-between"
            items={menuItems}
            selectedKeys={[selectedKey]}
          ></Menu>
          <Space>
            <img src={Phone} alt="Phone" />
            <span className="text-base font-bold montserrat text-white">
              0123456789
            </span>
          </Space>
        </Header>
      </div>
      <Content>
        <div className="site-layout-content">{content}</div>
      </Content>
    </Layout>
  );
};

export default Layouts;
