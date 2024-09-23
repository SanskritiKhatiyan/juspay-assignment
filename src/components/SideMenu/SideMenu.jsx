import { MenuBar } from "./Menu/MenuBar"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"
import s from "./SideMenu.module.scss"

export const SideMenu=()=>{
    return (<div className={s.root}>
        <ProfileInfo/>
        <MenuBar/>
    </div>)
}