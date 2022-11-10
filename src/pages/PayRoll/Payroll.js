import React, { lazy, Suspense } from "react";
import "./index.css";
const Detail = lazy(() => import("./Detail"));
const TablePayRoll = lazy(() => import("./Table"));

const Payroll = () => {
  return (
    <div className="payroll">
      <Suspense fallback={<div>Loading...</div>}>
        <TablePayRoll />
        <Detail />
      </Suspense>
    </div>
  );
};

export default Payroll;
