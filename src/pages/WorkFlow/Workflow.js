import React from "react";

import "antd/dist/antd.min.css";
import "./workflow.css";
import { Badge, Space, Tag, Table } from "antd";

const Work = () => {
  const expandedRowRender = () => {
    const columns = [
      {
        title: "Date Start",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "Name Task",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Status",
        key: "state",
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        ),
      },
      {
        title: "Deadline",
        dataIndex: "deadline",
        key: "deadline",
      },
      {
        title: "Action",
        dataIndex: "operation",
        key: "operation",
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
          </Space>
        ),
      },
    ];
    const datadone = [
      {
        key: "info-1",
        date: "2014-12-24 23:12:00",
        name: "Create Documentation Architech",
        deadline: "2014-12-30",
      },
      {
        key: "info-2",
        date: "2014-12-24 23:12:00",
        name: "Code Fullstack",
        deadline: "2014-11-30",
      },
    ];
    return <Table columns={columns} dataSource={datadone} pagination={false} />;
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Workflow",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "CTO") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Creator",
      dataIndex: "creator",
      key: "creator",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      key: "operation",
      render: () => <a>Done</a>,
    },
  ];
  const datadone = [
    {
      key: "task 1",
      id: "1",
      name: "Rowan Watson",
      email: "magna.sed@yahoo.org",
      tags: ["Intern"],
      creator: "Thanh (Menter)",
      createdAt: "2014-12-24 23:12:00",
    },
    {
      key: "task 2",
      id: "2",
      name: "Aiko Copeland",
      email: "metus.aliquam.erat@icloud.com",
      tags: ["CTO"],
      creator: "Thanh (Menter)",
      createdAt: "2014-12-12 23:12:00",
    },
    {
      key: "task 3",
      id: "3",
      name: "Amy Gardner",
      email: "odio.phasellus.at@icloud.ca",
      tags: ["IT"],
      creator: "Nhat (Menter)",
      createdAt: "2014-11-11 23:12:00",
    },
  ];
  const datatodo = [
    {
      key: "task 1",
      id: "1",
      name: "Felicia Salazar",
      email: "dictum.sapien.aenean@protonmail.ca",
      tags: ["INTERN"],
      creator: "Thanh (Menter)",
      createdAt: "2014-12-24 23:12:00",
    },
    {
      key: "task 2",
      id: "2",
      name: "Hiroko Burnett",
      email: "est@protonmail.org",
      tags: ["IT"],
      creator: "Thanh (Menter)",
      createdAt: "2014-12-12 23:12:00",
    },
  ];
  const dataprogress = [
    {
      key: "task 1",
      id: "1",
      name: "Myra Brennan",
      email: "massa.lobortis.ultrices@protonmail.org",
      tags: ["CTO"],
      creator: "Thanh (Menter)",
      createdAt: "2014-12-24 23:12:00",
    },
  ];
  return (
    <div className="containers">
      <h1 className="containers__title">Workflow Management</h1>
      <div className="containers__content">
        <div className="containers__content--task">
          <h1 className="todo">Todo</h1>
          <Table
            columns={columns}
            expandable={{
              expandedRowRender,
              defaultExpandedRowKeys: ["0"],
            }}
            dataSource={datatodo}
            size="middle"
          />
        </div>
        <div className="containers__content--task">
          <h1 className="progress">In Progress</h1>
          <Table
            columns={columns}
            expandable={{
              expandedRowRender,
              defaultExpandedRowKeys: ["0"],
            }}
            dataSource={dataprogress}
            size="middle"
          />
        </div>
        <div className="containers__content--task">
          <h1 className="done">Done</h1>
          <Table
            columns={columns}
            expandable={{
              expandedRowRender,
              defaultExpandedRowKeys: ["0"],
            }}
            dataSource={datadone}
            size="middle"
          />
        </div>
      </div>
    </div>
  );
};
export default Work;
