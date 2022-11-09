import React from "react";
import { Button, Tag } from "antd";
import { Table } from "ant-table-extensions";
import styles from "./table.module.css";
import { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { drawerActions } from "../../../store/drawer/slice";
import { employees } from "./../Data/employees";
import { tasks } from "./../Data/task";
import { useMemo } from "react";

const TablePayRoll = () => {
  const dispatch = useDispatch();

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 20,
      total: employees.length,
    },
  });

  const data = useMemo(() => {
    return employees.map((item) => {
      const salary = tasks
        .filter((t) => t.userId === item.id)
        .reduce((n, { taskSalary }) => n + taskSalary, 0);
      return {
        ...item,
        salary,
      };
    });
  }, []);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  const handleRowClick = (data) => {
    dispatch(
      drawerActions.payRollDetailChange({
        payRollDetail: {
          isOpen: true,
          data,
        },
      })
    );
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      fixed: "left",
      width: 50,
      align: "center",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (text) => <div className={styles["text-strong"]}>{text}</div>,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      align: "center",
      filters: [
        {
          text: " Male",
          value: "M",
        },
        {
          text: "Female",
          value: "F",
        },
      ],
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ellipsis: true,
    },
    {
      title: "Position",
      dataIndex: "jobPosition",
      key: "jobPosition",
      width: 100,
      align: "center",
    },
    {
      title: "Contract type",
      dataIndex: "contractType",
      key: "contractType",
      width: 150,
      align: "center",
      render: (text) => {
        return text === "Fulltime" ? (
          <Tag color="geekblue">{text.toUpperCase()}</Tag>
        ) : (
          <Tag color="volcano">{text.toUpperCase()}</Tag>
        );
      },
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
      width: 150,
      fixed: "right",
      sorter: (a, b) => a.salary - b.salary,
      render: (text) =>
        text.toLocaleString("it-IT", { style: "currency", currency: "VND" }),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      fixed: "right",
      width: 100,
      align: "center",
      render: (record) => (
        <Button
          type="dashed"
          onClick={() => {
            handleRowClick(record);
          }}
        >
          <EyeOutlined />
        </Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        ...tableParams.pagination,
        showTotal: (total, range) =>
          `${range[0]} - ${range[1]} of ${total} items`,
      }}
      onChange={handleTableChange}
      rowSelection
      bordered
      rowKey="id"
      size="middle"
      scroll={{
        x: 1000,
        y: "calc(100vh - 290px)",
      }}
      exportable={true}
      searchable={true}
    />
  );
};

export default TablePayRoll;
