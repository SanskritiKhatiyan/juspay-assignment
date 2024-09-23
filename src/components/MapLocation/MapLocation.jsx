import s from "./MapLocation.module.scss";
import Map from "../../assets/worldMap.webp";
import { useTheme } from "../../themeContext";
import cn from "classnames"

export const MapLocation = () => {
  const {theme} = useTheme();

  const MapLocationsData = [
    {
      country: "New York",
      numberText: "52k",
      number: 52,
    },
    {
      country: "Sydney",
      numberText: "82k",
      number: 82,
    },
    {
      country: "San Fransico",
      numberText: "42k",
      number: 42,
    },
    {
      country: "Singapore",
      numberText: "32k",
      number: 32,
    },
  ];

  return (
    <div className={cn(s.root, {[s.dark]: theme==="dark"})}>
      <div className={s.heading}>Revenue by Location</div>
      <img className={s.country_image} src={Map}/>
      <div className={s.location_list}>
        {MapLocationsData?.map((location) => {
          return (
            <div className={s.location_wrapper}>
              <div className={s.country}>
                <div>{location?.country}</div>
                <div>{location?.numberText}</div>
              </div>
              <div className={s.line_outer}>
                <div className={s.line_inner} style={{ width: 2*location?.number }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
