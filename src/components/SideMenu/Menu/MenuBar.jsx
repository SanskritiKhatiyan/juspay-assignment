import s from "./MenuBar.module.scss";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { theme } from "antd";
import { useTheme } from "../../../themeContext";

const dashboardItems = [
  {
    key: "d1",
    label: "Default",
    icon: <MailOutlined />,
  },
  {
    key: "d2",
    label: "Redeplooy",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "5",
        label: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
      },
    ],
  },
  {
    key: "d3",
    label: "Projects",
    icon: <SettingOutlined />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
    ],
  },
  {
    key: "d4",
    label: "Online Courses",
    icon: <SettingOutlined />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
    ],
  },
];

const pagesItems = [
  {
    key: "p1",
    label: "User Profile",
    icon: <MailOutlined />,
    children: [
      {
        key: "1",
        label: "Overview",
      },
      {
        key: "2",
        label: "Projects",
      },
      {
        key: "3",
        label: "Campaigns",
      },
      {
        key: "4",
        label: "Documents",
      },
      {
        key: "5",
        label: "Followers",
      },
    ],
  },
  {
    key: "p2",
    label: "Account",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "6",
        label: "Option 6",
      },
      {
        key: "7",
        label: "Option 7",
      },
    ],
  },
  {
    key: "p3",
    label: "Corporate",
    icon: <SettingOutlined />,
    children: [
      {
        key: "8",
        label: "Option 8",
      },
      {
        key: "9",
        label: "Option 9",
      },
    ],
  },
  {
    key: "p4",
    label: "Blog",
    icon: <SettingOutlined />,
    children: [
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "11",
        label: "Option 11",
      },
    ],
  },
  {
    key: "p5",
    label: "Social",
    icon: <SettingOutlined />,
    children: [
      {
        key: "12",
        label: "Option 12",
      },
      {
        key: "13",
        label: "Option 13",
      },
    ],
  },
];

export const MenuBar = () => {
  const { theme } = useTheme();

  const [current, setCurrent] = useState("1");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className={s.root}>
      <div className={s.heading}>Dashboards</div>
      <Menu
        theme={theme}
        onClick={onClick}
        style={{
          width: 212,
          paddingBottom: "12px",
        }}
        selectedKeys={[current]}
        mode="inline"
        items={dashboardItems}
      />

      <div className={s.heading}>Pages</div>
      <Menu
        theme={theme}
        onClick={onClick}
        style={{
          width: 212,
          paddingBottom: "12px",
        }}
        defaultOpenKeys={["p1"]}
        selectedKeys={[current]}
        mode="inline"
        items={pagesItems}
      />
    </div>
  );
};
