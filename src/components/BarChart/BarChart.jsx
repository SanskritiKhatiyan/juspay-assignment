import s from "./BarChart.module.scss";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTheme } from "../../themeContext";
import cn from "classnames"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = () => {
  const {theme} = useTheme();

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Actuals",
        data: [12, 9, 3, 17, 6, 9],
        backgroundColor: "#A8C5DA",
        borderColor: "#A8C5DA",
        borderWidth: 1,
        maxBarThickness: 30,
      },
      {
        label: "Projections",
        data: [8, 12, 8, 10, 10, 5],
        backgroundColor: "#E5ECF6",
        borderColor: "#E5ECF6",
        borderWidth: 1,
        maxBarThickness: 30,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
        legend: {
          display: false,
        },
      },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "#888",
        },
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          color: "#888",
          callback: function (value) {
            return value + "M"; // Add "M" for millions
          },
        },
      },
    },
  };

  return (
    <div className={cn(s.root, {[s.dark]: theme==="dark"})}>
      <div className={s.heading}>Projections vs Actuals</div>
      <Bar data={data} options={options} />
    </div>
  );
};
