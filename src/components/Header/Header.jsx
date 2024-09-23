import s from "./Header.module.scss";
import { Breadcrumb } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Brightness from "../../icons/Brightness";
import Clock from "../../icons/Clock";
import Alarm from "../../icons/Alarm";
import { ColorDisplay } from "../../utils/common";
import { useTheme } from "../../themeContext";
import cn from "classnames"

export const Header = () => {
  const color = ColorDisplay();
  const {theme} = useTheme();
  const IconList = [
    {
      key: 1,
      icon: <Brightness height={28} width={28} color={color}/>,
    },
    {
      key: 2,
      icon: <Alarm height={28} width={28} color={color}/>,
    },
    {
      key: 3,
      icon: <Clock height={28} width={28} color={color}/>,
    },
    {
      key: 4,
      icon: <Clock height={28} width={28} color={color}/>,
    },
    {
      key: 5,
      icon: <Brightness height={28} width={28} color={color}/>,
    },
    {
      key: 6,
      icon: <Alarm height={28} width={28} color={color}/>,
    },
  ];

  return (
    <div className={cn(s.root, {[s.dark]: theme==="dark"})}>
      <div className={s.left_hug}>
        <div className={s.icon_list}>
          {IconList?.slice(0, 2)?.map((icon) => {
            return <div className={s.image}>{icon?.icon}</div>;
          })}
        </div>
        <Breadcrumb
          items={[
            {
              title: "Dashboard",
              href: "/",
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
            return <div className={s.image}>{icon?.icon}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
