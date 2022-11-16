import React from "react";

import "./workflow.css";
import AddData from "../../components/workflow/add/addData";
import { useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Done from "../../components/workflow/done/doneData";
import { deleteWorkFlow } from "../../libs/redux/workflow/action";
const Work = () => {
  const dataWorkflow = useSelector((state) => state?.workFlowReducer);
  const dispatch = useDispatch();
  const [idDone, setIdDone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      width: 80,
      align: 'center',
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: 100,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 300,
    },
    {
      title: "Workflow",
      key: "workflow",
      dataIndex: "workflow",
      width: 80,
      align: 'center',
    },
    {
      title: "Name Task",
      dataIndex: "nameTask",
      key: "nameTask",
      ellipsis: true,
    },
    {
      title: "Creator",
      dataIndex: "creator",
      key: "creator",
      width: 130,
      align: 'center',
    },
    {
      title: "Date Create",
      dataIndex: "createdAt",
      width: 150,
      render: (_, { createdAt }) => (
        <div>{moment(createdAt).format("DD/MM/YYYY HH:mm:ss")}</div>
      ),
    },
    {
      title: "Date Start",
      dataIndex: "startDate",
      width: 150,
      render: (_, { startDate }) => (
        <div>{moment(startDate).format("DD/MM/YYYY HH:mm:ss")}</div>
      ),
    },
    {
      title: "Date End",
      dataIndex: "endDate",
      width: 150,
      render: (_, { endDate }) => (
        <div>{moment(endDate).format("DD/MM/YYYY HH:mm:ss")}</div>
      ),
    },
    {
      title: "Action",
      key: "operation",
      width: 60,
      align: 'center',
      render: (_, { id }) => (
        <div
          className="btn-delete"
          onClick={() => {
            setIsModalOpen(true);
            setIdDone(id);
          }}
        >
          Done
        </div>
      ),
    },
  ];

  return (
    <div className="containers">
      <div className="containers__header">
        <h1 className="containers__header--title">Workflow Management</h1>
        <div>
          <AddData />
        </div>
      </div>
      <div className="containers__content">
        <div className="containers__content--task">
          <h1 className="todo">Todo</h1>
          {dataWorkflow?.data?.length !== 0 && (
            <Table
              columns={columns}
              dataSource={dataWorkflow?.data?.map((item, index) => {
                return {
                  stt: index,
                  ...item,
                };
              })}
              size="middle"
              pagination={false}
            />
          )}
        </div>
        {isModalOpen && (
          <Done
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleOk={() => {
              dispatch(deleteWorkFlow({ id: idDone }));
              setIsModalOpen(!isModalOpen);
            }}
          />
        )}
      </div>
    </div>
  );
};
export default Work;
