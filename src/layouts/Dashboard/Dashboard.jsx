import { BarChart } from "../../components/BarChart/BarChart";
import { LineChart } from "../../components/LineChart/LineChart";
import { MapLocation } from "../../components/MapLocation/MapLocation";
import { NumberBigBoxes } from "../../components/NumberBigBoxes/NumberBigBoxes";
import { PieChart } from "../../components/PieChart/PieChart";
import { SellingProductsTable } from "../../components/SellingProductsTable/SellingProductsTable";
import s from "./Dashboard.module.scss";
import heading from "../../App.css";

export const Dashboard = () => {

  return (
    <div className={s.root}>
      <div className={s.heading}>eCommerce</div>
      <div className={s.row}>
        <div><NumberBigBoxes /></div>
        <div><BarChart /></div>
      </div>
      <div className={s.row}>
        <LineChart />
        <MapLocation />
      </div>
      <div className={s.row}>
        <SellingProductsTable/>
        <PieChart />
      </div>
    </div>
  );
};
