import { Table } from "antd";
import { tasks } from "./data/task";

export const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    fixed: "left",
    width: 50,
    sorter: (a, b) => a - b,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    fixed: "left",
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
    title: "Contract type",
    dataIndex: "contractType",
    key: "contractType",
  },
  {
    title: "Position",
    dataIndex: "jobPosition",
    key: "jobPosition",
  },
  Table.EXPAND_COLUMN,
];

export const expandedRowRender = (record) => {
  const task = tasks.filter((item) => item.userId === record.id);

  const columns = [
    {
      title: "ID",
      dataIndex: "taskId",
      key: "taskId",
    },
    {
      title: "Task",
      dataIndex: "taskName",
      key: "taskName",
    },
    {
      title: "Date",
      dataIndex: "taskDate",
      key: "taskDate",
    },
    {
      title: "Salary",
      dataIndex: "taskSalary",
      key: "taskSalary",
    },
  ];

  return (
    <Table
      columns={columns}
      rowKey="taskId"
      dataSource={task}
      pagination={false}
    />
  );
};
