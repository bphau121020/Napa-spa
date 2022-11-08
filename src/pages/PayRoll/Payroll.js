import React, { lazy, Suspense } from "react";
import styles from "./index.module.css";
const Detail = lazy(() => import("./Detail"));
const TablePayRoll = lazy(() => import("./Table"));

const Payroll = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TablePayRoll />
        <Detail />
      </Suspense>
    </div>
  );
};

export default Payroll;
