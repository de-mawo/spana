import React from "react";
import AddMyDays from "./AddMyDays";
import LeaveBalances from "./LeaveBalances";
import Request from "./Request";

const Leaves = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-14">
        <Request pageProps={undefined} />
        <AddMyDays/>
      </div>
      
        <LeaveBalances pageProps={undefined} />
    </>
  );
};

export default Leaves;
