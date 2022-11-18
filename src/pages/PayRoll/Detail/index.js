import { Button, Drawer, message, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawerActions } from "../../../store/drawer/slice";
import format from "dayjs";
import styles from "./index.module.css";
import { useMemo } from "react";
import { generateReportSalary } from "./report";

const Detail = () => {
  // const { tasks } = useSelector((state) => state.employee);
  const { data: tasks } = useSelector((state) => state.workFlowReducer);

  const { payRollDetail } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();

  const data = payRollDetail.data;

  const salarys = useMemo(() => {
    if (data?.id) {
      const taskSalarys = tasks.filter((item) => item.userId === data.id);
      return taskSalarys;
    }
    return [];
  }, [data, tasks]);

  const key = "updatable";
  const openMessage = () => {
    message.loading({
      content: "Loading...",
      key,
    });
    setTimeout(() => {
      generateReportSalary({ ...data, salarys });
      message.success({
        content: "Request succeeded!",
        key,
        duration: 2,
      });
    }, 1000);
  };

  const columns = [
    {
      title: "Task ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Task Name",
      dataIndex: "nameTask",
      key: "nameTask",
    },
    {
      title: "Date",
      dataIndex: "time",
      key: "time",
      render: (date) => format(date).format("DD/MM/YYYY"),
    },
    {
      title: "Task  Salary",
      dataIndex: "taskSalary",
      key: "taskSalary",
      render: (salary) =>
        salary.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        }),
    },
  ];

  const onClose = () => {
    dispatch(
      drawerActions.payRollDetailChange({
        payRollDetail: {
          isOpen: false,
          data: undefined,
        },
      })
    );
  };

  return (
    <Drawer
      width={840}
      placement="right"
      closable={false}
      onClose={onClose}
      open={payRollDetail.isOpen}
    >
      <div className={styles["container"]}>
        <div className={styles["title"]}>
          <h4>Employee detail</h4>
        </div>
        {data && (
          <>
            <div className={styles["infomation"]}>
              <div className={styles["row"]}>
                <div className={styles["col-5"]}>
                  <div className={styles["field"]}>
                    <p>Name:</p>
                  </div>
                  <div className={styles["value"]}>
                    <p>{data.name}</p>
                  </div>
                </div>
                <div className={styles["col-5"]}>
                  <div className={styles["field"]}>
                    <p>Gender:</p>
                  </div>
                  <div className={styles["value"]}>
                    <p>{data.gender}</p>
                  </div>
                </div>
              </div>
              <div className={styles["row"]}>
                <div className={styles["col-5"]}>
                  <div className={styles["field"]}>
                    <p>Email:</p>
                  </div>
                  <div className={styles["value"]}>
                    <p>{data.email}</p>
                  </div>
                </div>
                <div className={styles["col-5"]}>
                  <div className={styles["field"]}>
                    <p>Phone:</p>
                  </div>
                  <div className={styles["value"]}>
                    <p>{data.phone}</p>
                  </div>
                </div>
              </div>
              <div className={styles["row"]}>
                <div className={styles["col-5"]}>
                  <div className={styles["field"]}>
                    <p>Address:</p>
                  </div>
                  <div className={styles["value"]}>
                    <p>{data.address}</p>
                  </div>
                </div>
                <div className={styles["col-5"]}>
                  <div className={styles["field"]}>
                    <p>Date of birth:</p>
                  </div>
                  <div className={styles["value"]}>
                    <p>{format(data.dateOfBirth).format("MM/DD/YYYY")}</p>
                  </div>
                </div>
              </div>
              <div className={styles["row"]}>
                <div className={styles["col-5"]}>
                  <div className={styles["field"]}>
                    <p>Credit card:</p>
                  </div>
                  <div className={styles["value"]}>
                    <p>{data.creditCard}</p>
                  </div>
                </div>
                <div className={styles["col-5"]}>
                  <div className={styles["field"]}>
                    <p>Salary:</p>
                  </div>
                  <div className={styles["value"]}>
                    <p>{` ${data.salary.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}`}</p>
                  </div>
                </div>
              </div>
              <div className={styles["row"]}>
                <div className={styles["col-5"]}>
                  <div className={styles["field"]}>
                    <p>Contract type:</p>
                  </div>
                  <div className={styles["value"]}>
                    <p>{data.contractType}</p>
                  </div>
                </div>
                <div className={styles["col-5"]}>
                  <div className={styles["field"]}>
                    <p>Position:</p>
                  </div>
                  <div className={styles["value"]}>
                    <p>{data.jobPosition}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["salary-table"]}>
              <div className={styles["salary-table"]}>
                <Button type="danger" shape="round" onClick={openMessage}>
                  Payment request
                </Button>
              </div>
              <Table columns={columns} dataSource={salarys} rowKey="taskId" />
            </div>
          </>
        )}
      </div>
    </Drawer>
  );
};

export default Detail;
