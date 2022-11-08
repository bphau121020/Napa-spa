import { Drawer, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawerActions } from "../../../store/drawer/slice";
import format from "dayjs";
import styles from "./index.module.css";
import { useMemo } from "react";
import { tasks } from "../Data/task";

const Detail = () => {
  const { payRollDetail } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();

  const data = payRollDetail.data;

  const salarys = useMemo(() => {
    if (data?.id) {
      const taskSalarys = tasks.filter((item) => item.userId === data.id);
      return taskSalarys;
    }
    return [];
  }, [data]);

  const columns = [
    {
      title: "Task ID",
      dataIndex: "taskId",
      key: "taskId",
    },
    {
      title: "Task Name",
      dataIndex: "taskName",
      key: "taskName",
    },
    {
      title: "Date",
      dataIndex: "taskDate",
      key: "taskDate",
      render: (date) => format(date).format("MM/DD/YYYY"),
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
      width={720}
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
                  <p>Name: {data.name}</p>
                </div>
                <div className={styles["col-5"]}>
                  <p>Gender: {data.gender}</p>
                </div>
              </div>
              <div className={styles["row"]}>
                <div className={styles["col-5"]}>
                  <p>Email: {data.email}</p>
                </div>
                <div className={styles["col-5"]}>
                  <p>Phone: {data.phone}</p>
                </div>
              </div>
              <div className={styles["row"]}>
                <div className={styles["col-5"]}>
                  <p>Address: {data.address}</p>
                </div>
                <div className={styles["col-5"]}>
                  <p>
                    Date of birth:{" "}
                    {format(data.dateOfBirth).format("MM/DD/YYYY")}
                  </p>
                </div>
              </div>
              <div className={styles["row"]}>
                <div className={styles["col-5"]}>
                  <p>Credit card: {data.creditCard}</p>
                </div>
                <div className={styles["col-5"]}>
                  <p>
                    Salary:
                    {` ${data.salary.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}`}
                  </p>
                </div>
              </div>
              <div className={styles["row"]}>
                <div className={styles["col-5"]}>
                  <p>Contract type: {data.contractType}</p>
                </div>
                <div className={styles["col-5"]}>
                  <p>Position: {data.jobPosition}</p>
                </div>
              </div>
            </div>
            <div className={styles["salary-table"]}>
              <Table columns={columns} dataSource={salarys} />
            </div>
          </>
        )}
      </div>
    </Drawer>
  );
};

export default Detail;
