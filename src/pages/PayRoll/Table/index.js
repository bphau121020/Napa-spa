import React, { useState, useMemo, useEffect } from "react";
import { Button, Tag } from "antd";
import { Table } from "ant-table-extensions";
import styles from "./table.module.css";
import { EyeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { drawerActions } from "../../../store/drawer/slice";

const TablePayRoll = () => {
  const dispatch = useDispatch();
  const { employees, tasks } = useSelector((state) => state.employee);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 6,
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
  }, [employees, tasks]);

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

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const x = (windowHeight - 240) / 60;
    const pageSize = x < 1 ? 1 : Math.round(x);
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        pageSize,
      },
    });
  }, [tableParams]);

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
    <div className={styles.payrollTable}>
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
          // y: "calc(100%)",
        }}
        exportable={true}
        searchable={true}
      />
    </div>
  );
};

export default TablePayRoll;
