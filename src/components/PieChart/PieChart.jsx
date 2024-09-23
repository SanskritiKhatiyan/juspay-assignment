import s from "./PieChart.module.scss";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Dot from "../../icons/Dot";
import { useTheme } from "../../themeContext";
import cn from "classnames"

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
  const {theme} = useTheme();

  const data = {
    labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
    datasets: [
      {
        data: [300.56, 135.18, 154.02, 48.96],
        backgroundColor: ["#000000", "#A8E6CF", "#B39DDB", "#81D4FA"],
        hoverBackgroundColor: ["#333333", "#98DFC4", "#A892D0", "#70C4ED"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={cn(s.root, {[s.dark]: theme==="dark"})}>
      <div className={s.heading}>Total Sales</div>

      <Doughnut data={data} options={options} style={{ width: "100px" }} />
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li className={s.list_item}>
          <span>
            <Dot color="#000000" />
            Direct
          </span>
          <span>$300.56</span>
        </li>
        <li className={s.list_item}>
          <span>
            <Dot color="#A8E6CF" /> Affiliate
          </span>
          <span>$135.18</span>
        </li>
        <li className={s.list_item}>
          <span>
            <Dot color="#B39DDB" />
            Sponsored
          </span>
          <span>$154.02</span>
        </li>
        <li className={s.list_item}>
          <span>
            <Dot color="#81D4FA" />
            E-mail{" "}
          </span>
          <span>$48.96</span>
        </li>
      </ul>
    </div>
  );
};
