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
  getItem(<Link to="/home">Trang chủ</Link>, "home"),
  getItem(<Link to="/event">Sự kiện</Link>, "event"),
  getItem(<Link to="/contact">Liên hệ</Link>, "contact"),
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
      <Header className="bg-[#ed7200] flex items-center justify-around py-12 header">
        <Link to="/"> 
          <img src={LittleLogoHorizontal} alt="Logo" />
        </Link>
        <Menu
          mode="horizontal"
          theme="light"
          className="bg-transparent montserrat text-white text-lg font-bold"
          items={menuItems}
          selectedKeys={[selectedKey]}
        ></Menu>

        <a href="tel:+84123456789">
          <Space>
            <img src={Phone} alt="Phone" />
            <span className="text-base font-bold montserrat text-white">
              0123456789
            </span>
          </Space>
        </a>
      </Header>

      <Content>
        <div className="">{content}</div>
      </Content>
    </Layout>
  );
};

export default Layouts;
