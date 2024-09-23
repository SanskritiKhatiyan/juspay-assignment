import { Fragment, useState, useEffect } from "react";
import s from "./ProfileInfo.module.scss";
import Dot from "../../../icons/Dot";
import Human1 from "../../../assets/human1.webp"
import { ColorDisplay } from "../../../utils/common";
import ThemeToggle from "../../../themeToggle";
import { useTheme } from "../../../themeContext";

const ThemedComponent = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme; // Dynamically change body class based on the theme
  }, [theme]);

  return (
      <ThemeToggle />
  );
};
const FavoritesOptions = ["Overview", "Projects"];
const RecentlyOptions = ["Random", "More"];

const NameInfo = () => {
  return (
    <div className={s.name_wrapper}>
      <div className={s.image}>
        <img src={Human1} />
      </div>
      <div className={s.name}>ByWind</div>
      <div><ThemedComponent/></div>
    </div>
  );
};

const Option = ({optionList, color}) => {
  return (
    <Fragment>
      {optionList?.map((option) => {
        return (
          <div className={s.option_wrapper}>
            <Dot height={16} width={16} color={color}/>
            {option}
          </div>
        );
      })}
    </Fragment>
  );
};

export const ProfileInfo = () => {
  const color= ColorDisplay();
  const [option, setOption] = useState("Favorites");
  return (
    <div className={s.root}>
      <NameInfo />
      <div>
      <div className={s.two_options}>
        <div className={s.head} onClick={()=> setOption("Favorites")}>Favorites</div>
        <div className={s.head} onClick={()=> setOption("Recently")}>Recently</div>
      </div>
      <div className={s.options_list}>
        {option === "Favorites" ? (
          <Option optionList={FavoritesOptions} color={color}/>
        ) : (
          <Option optionList={RecentlyOptions} color={color}/>
        )}
      </div>
      </div>
    </div>
  );
};
