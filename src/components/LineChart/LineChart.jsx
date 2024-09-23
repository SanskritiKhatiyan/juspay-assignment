import s from "./LineChart.module.scss";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Previous Week",
        data: [10, 15, 12, 18, 10, 25],
        borderColor: "rgba(173, 216, 230, 0.7)",
        backgroundColor: "rgba(173, 216, 230, 0.3)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Current Week",
        data: [12, 10, 18, 20, 22, 28],
        borderColor: "black",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 30,
        ticks: {
          stepSize: 10,
          callback: function (value) {
            return value + "M";
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className={s.root}>
      <div className={s.heading}>
        <div className={s.title}>Revenue</div>
        <div className={s.head_desc_current}>
          <div className={s.dot}></div>
          <div>Current Week: 
            <span className={s.numbers}>$58,211</span></div>
        </div>
        <div className={s.head_desc_prev}>
          <div className={s.dot}></div>
          <div>Previous Week: 
            <span className={s.numbers}>$568,781</span></div>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};
