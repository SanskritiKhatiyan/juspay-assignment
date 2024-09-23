import { useTheme } from "../themeContext"

export const ColorDisplay=()=>{
    const {theme} = useTheme();
    const color =  theme==="light"? "black": "white";
    return color
}