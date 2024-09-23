import { useTheme } from "../../themeContext";
import { MenuBar } from "./Menu/MenuBar"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"
import s from "./SideMenu.module.scss";
import cn from "classnames"

export const SideMenu=()=>{
    const {theme} = useTheme();
    return (<div className={cn(s.root, {[s.dark]: theme==="dark"})}>
        <ProfileInfo/>
        <MenuBar/>
    </div>)
}