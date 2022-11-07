import { Table } from "antd";
import React from "react";
import { columns, expandedRowRender } from "./table";
import { employees } from "./data/employees";

const Payroll = () => {
  return (
    <div>
      <Table
        rowSelection
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"],
        }}
        rowKey="id"
        dataSource={employees}
        bordered
        size="middle"
        scroll={{
          y: "calc(100vh - 250px)",
        }}
      />
    </div>
  );
};

export default Payroll;
