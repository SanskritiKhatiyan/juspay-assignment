import { Header } from "../../components/Header/Header";
import { ListOfOrders } from "../../components/ListOfOrders/ListOfOrders";
import { RightSideBar } from "../../components/RightSideBar/RightSideBar";
import { SideMenu } from "../../components/SideMenu/SideMenu";
import s from "./OrderList.module.scss";
import { useState } from "react";

export const OrderList=()=>{

    const [current, setCurrent] = useState('1');
    const [theme, setTheme] = useState("light");

    const changeTheme = (value) => {
      setTheme(value ? 'dark' : 'light');
    };
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };

    return (<div className={s.root}>
      <SideMenu/>
      <RightSideBar/>
      <Header/>
      <ListOfOrders/>

    </div>)
}