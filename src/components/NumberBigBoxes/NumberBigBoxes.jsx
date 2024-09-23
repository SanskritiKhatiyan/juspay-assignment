import s from "./NumberBigBoxes.module.scss";
import ArrowUp from "../../icons/ArrowUp";
import ArrowDown from "../../icons/ArrowDown";
import cn from "classnames"

export const NumberBigBoxes = () => {
  const BoxesData = [
    {
      title: "Customers",
      total: "3,712",
      percentDiff: "+11.05%",
      profit: "positive",
    },
    {
      title: "Customers",
      total: "3,712",
      percentDiff: "-11.05%",
      profit: "negative",
    },
    {
      title: "Customers",
      total: "3,712",
      percentDiff: "-6.05%",
      profit: "negative",
    },
    {
      title: "Customers",
      total: "3,712",
      percentDiff: "+1.05%",
      profit: "positive",
    },
  ];

  return (
    <div className={s.root}>
      {BoxesData?.map((box, index) => {
        return (
          <div
            className={cn(s.box_wrapper, {
              [s.box1]: index === 0,
              [s.box2]: index === 1,
              [s.box3]: index === 2,
              [s.box4]: index === 3,
            })}
          >
            <div className={s.title}>{box?.title}</div>
            <div className={s.numbers_wrapper}>
              <div className={s.total}>{box?.total}</div>
              <div className={s.profit_loss}>
                <div>{box?.percentDiff}</div>
                {box?.profit === "positive" ? <ArrowUp /> : <ArrowDown />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
