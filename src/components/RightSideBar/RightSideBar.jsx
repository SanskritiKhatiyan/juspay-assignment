import s from "./RightSideBar.module.scss";
import Human1 from "../../assets/human1.webp"
import Human2 from "../../assets/human2.webp"
import Human3 from "../../assets/human3.webp"
import Human4 from "../../assets/human1.webp";
import Bug from "../../icons/Bug";
import User from "../../icons/User";
import cn from "classnames"
import { useTheme } from "../../themeContext";

export const RightSideBar = () => {
  const {theme} = useTheme();

  const ContactData = [
    {
      name: "Natali Caraig",
      image: Human1,
    },
    {
      name: "Drew Cano",
      image: Human2,
    },
    {
      name: "Andi Lane",
      image: Human3,
    },
    {
      name: "Kate Morrison",
      image: Human4,
    },
  ];
  const NotificationsData = [
    {
      title: "Ant Design Title 1",
      subtitle: "Just now",
      image: <Bug/>,
    },
    {
      title: "Ant Design Title 2",
      subtitle: "Just now",
      image: <User/>,
    },
    {
      title: "Ant Design Title 3",
      subtitle: "Just now",
      image: <Bug/>,
    },
    {
      title: "Ant Design Title 4",
      subtitle: "Just now",
      image: <User/>,
    },
  ];

  const ActivitiesData = [
    {
      title: "Ant Design Title 1",
      subtitle: "Just now",
      image: Human1,
    },
    {
      title: "Ant Design Title 2",
      subtitle: "Just now",
      image: Human2,
    },
    {
      title: "Ant Design Title 3",
      subtitle: "Just now",
      image: Human3,
    },
    {
      title: "Ant Design Title 4",
      subtitle: "Just now",
      image: Human4,
    },
  ];

  return (
    <div className={cn(s.root, {[s.dark]: theme==="dark"})}>
      <div className={s.notifications}>
        <div className={s.head}>Notifications</div>
        <div className={s.notification_list}>
          {NotificationsData?.map((notification) => {
            return (
              <div className={s.notification_wrapper}>
                <div className={s.image}>{notification?.image} </div>
                <div className={s.desc}>
                  <div className={s.title}>{notification?.title}</div>
                  <div className={cn(s.subtitle, {[s.dark]: theme==="dark"})}>{notification?.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={s.timeline}>
        <div className={s.head}>Activities</div>
        <div className={s.text}>
          <div className={s.line}></div>
          <div className={s.notification_list}>
            {ActivitiesData?.map((notification) => {
              return (
                <div className={s.notification_wrapper}>
                  <img src={notification?.image} className={s.image} />
                  <div className={s.desc}>
                    <div className={s.title}>{notification?.title}</div>
                    <div className={cn(s.subtitle, {[s.dark]: theme==="dark"})}>{notification?.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={s.contacts}>
        <div className={s.head}>Contacts</div>
        <div className={s.contact_list}>
          {ContactData?.map((contact) => {
            return (
              <div className={s.contact_wrapper}>
                <img src={contact?.image} className={s.image} />
                <div>{contact?.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
