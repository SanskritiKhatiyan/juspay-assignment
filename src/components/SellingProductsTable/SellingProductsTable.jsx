import s from "./SellingProductsTable.module.scss";
import cn from "classnames"
export const SellingProductsTable = () => {
  const tableHeading = ["Name", "Price", "Quantity", "Amount"];
  const TableData = [
    {
      name: "ASOS Ridley high waist",
      price: "$79.49",
      quantity: "82",
      amount: "$6,176.67",
    },
    {
      name: "Half sleeve shirt",
      price: "$59.49",
      quantity: "82",
      amount: "$6,176.67",
    },
    {
      name: "Full sleeve shirt",
      price: "$19.49",
      quantity: "45",
      amount: "$9,176.67",
    },
    {
      name: "Full sleeve shirt",
      price: "$19.49",
      quantity: "45",
      amount: "$9,176.67",
    },
    {
      name: "Full sleeve shirt",
      price: "$19.49",
      quantity: "45",
      amount: "$9,176.67",
    },
    {
      name: "ASOS Ridley low waist",
      price: "$79.49",
      quantity: "82",
      amount: "$6,176.67",
    },
    {
      name: "ASOS Ridley jeans",
      price: "$12.49",
      quantity: "82",
      amount: "$3,174.67",
    },
  ];
  return (
    <div className={s.root}>
      <div className={s.heading}>Top Selling Products</div>
      <div className={s.table_wrapper}>
        <div className={s.header_wrapper}>
          {tableHeading?.map((head, index) => {
           return( <div className={cn(s.head, {[s.name]: head==="Name"})}>{head}</div>)
          })}
        </div>
        <div className={s.list_wrapper}>
          {TableData?.map((data) => {
           return ( <div className={s.list}>
              <div className={s.name}>{data?.name}</div>
              <div>{data?.price}</div>
              <div>{data?.quantity}</div>
              <div>{data?.amount}</div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};
