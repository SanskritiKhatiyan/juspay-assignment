import s from "./Header.module.scss";
import { useState } from "react";
import { Breadcrumb } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Brightness from "../../icons/Brightness"
import Clock from "../../icons/Clock"
import Alarm from "../../icons/Alarm"

export const Header = () => {
  const IconList = [
    {
      key: 1,
      icon: <Brightness height={28} width={28}/>,
    },
    {
      key: 2,
      icon: <Alarm height={28} width={28}/>,
    },
    {
      key: 3,
      icon: <Clock height={28} width={28}/>,
    },
    {
      key: 4,
      icon: <Clock height={28} width={28}/>,
    },
    {
      key: 5,
      icon: <Brightness height={28} width={28}/>,
    },
    {
      key: 6,
      icon: <Alarm height={28} width={28}/>,
    },
  ];

  return (
    <div className={s.root}>
      <div className={s.left_hug}>
      <div className={s.icon_list}>
          {IconList?.slice(0, 2)?.map((icon) => {
            return (<div className={s.image}>
              {icon?.icon}
               </div>)
          })}
        </div>
        <Breadcrumb
          items={[
            {
              title: "Dashboard",
              href: "/"
            },
            {
              title: "Order List",
              href: "/order-list",
            },
          ]}
          params={{ id: 1 }}
        />
      </div>
      <div className={s.right_hug}>
        <div className={s.search}>
          <Input
            placeholder="Search"
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            suffix={<InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
            disabled
          />
        </div>
        <div className={s.icon_list}>
          {IconList?.slice(2, 6)?.map((icon) => {
            return (<div className={s.image}>
              {icon?.icon}
               </div>)
          })}
        </div>
      </div>
    </div>
  );
};
