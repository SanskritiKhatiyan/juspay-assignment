import s from "./ListOfOrders.module.scss";
import { Table, Input } from "antd";
import { useState } from "react";
import Dot from "../../icons/Dot";
import Add from "../../icons/Add";
import { SearchOutlined } from "@ant-design/icons";

export const ListOfOrders = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: "Order id",
      dataIndex: "orderId",
    },
    {
      title: "User",
      dataIndex: "user",
    },
    {
      title: "Project",
      dataIndex: "project",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  const dataSource = Array.from({
    length: 46,
  }).map((_, i) => ({
    key: i,
    orderId: `#3456${i}`,
    user: `Edward King ${i}`,
    project: 32 + i * i,
    date: `${i}0 minutes ago`,
    address: `London, Park Lane no. ${i}`,
    status:
      i % 2 === 0 ? (
        <div className={s.status_green}>
          <Dot color="green" />
          Accepted
        </div>
      ) : (
        <div className={s.status_red}>
          <Dot color="red" />
          Rejected
        </div>
      ),
  }));

  return (
    <div className={s.root}>
      <div className={s.heading}>Order List</div>
      <div className={s.status_option}>
        <div className={s.icon_list}>
          <Add height={28} width={28}/>
          <Add height={28} width={28}/>
          <Add height={28} width={28}/>
        </div>
        <div className={s.search}>
        <Input
            placeholder="Search"
            prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            disabled
          />
        </div>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};
