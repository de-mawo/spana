import React from "react";
import LeaveBalances from "./LeaveBalances";
import MyLeaves from "./MyLeaves";
import Request from "./Request";

const Leaves = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-14">
        <Request />
        <LeaveBalances />
      </div>
      <MyLeaves />
    </>
  );
};

export default Leaves;
