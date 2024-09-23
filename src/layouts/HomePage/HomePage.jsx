import { Header } from "../../components/Header/Header";
import { RightSideBar } from "../../components/RightSideBar/RightSideBar";
import { SideMenu } from "../../components/SideMenu/SideMenu";
import { Dashboard } from "../Dashboard/Dashboard";
import s from "./HomePage.module.scss";

export const HomePage=()=>{
    return (<div className={s.root}>
      <SideMenu/>
      <RightSideBar/>
      <Header/>
      <Dashboard/>

    </div>)
}