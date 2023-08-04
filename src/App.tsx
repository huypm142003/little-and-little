import React from "react";
import Router from "./router";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import viVN from "antd/lib/locale/vi_VN";
import "dayjs/locale/vi";
dayjs.locale("vi-vn");

function App() {
  return (
    <ConfigProvider
      locale={viVN}
      theme={{
        token: {
          colorPrimary: "#ff7e15",
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
