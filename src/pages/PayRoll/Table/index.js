import React from "react";
import { Button, Table, Tag } from "antd";
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
      pageSize: 10,
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
    },
    {
      title: "Credit card",
      dataIndex: "creditCard",
      key: "creditCard",
    },
    {
      title: "Position",
      dataIndex: "jobPosition",
      key: "jobPosition",
    },
    {
      title: "Contract type",
      dataIndex: "contractType",
      key: "contractType",
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
      render: (text) =>
        text.toLocaleString("it-IT", { style: "currency", currency: "VND" }),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
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
      pagination={tableParams.pagination}
      onChange={handleTableChange}
      rowSelection
      bordered
      rowKey="id"
      size="middle"
      scroll={{
        y: "calc(100vh - 250px)",
      }}
    />
  );
};

export default TablePayRoll;
