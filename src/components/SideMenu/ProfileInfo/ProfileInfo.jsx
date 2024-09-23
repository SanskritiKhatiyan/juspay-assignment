import { Fragment, useState } from "react";
import s from "./ProfileInfo.module.scss";
import Dot from "../../../icons/Dot";
import Human1 from "../../../assets/human1.webp"

const FavoritesOptions = ["Overview", "Projects"];
const RecentlyOptions = ["Random", "More"];

const NameInfo = () => {
  return (
    <div className={s.name_wrapper}>
      <div className={s.image}>
        <img src={Human1} />
      </div>
      <div className={s.name}>ByWind</div>
    </div>
  );
};

const Option = ({optionList}) => {
  return (
    <Fragment>
      {optionList?.map((option) => {
        return (
          <div className={s.option_wrapper}>
            <Dot height={16} width={16} color="#1C1C1C33"/>
            {option}
          </div>
        );
      })}
    </Fragment>
  );
};

export const ProfileInfo = () => {
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
          <Option optionList={FavoritesOptions} />
        ) : (
          <Option optionList={RecentlyOptions} />
        )}
      </div>
      </div>
    </div>
  );
};
