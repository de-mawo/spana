import React from "react";
import { Requests } from "../../../../data/leaveData";
import RequestList from "./RequestList";
import RequestModal from "./RequestModal";

const Approvals = () => {
  return (
    <div>
      <RequestList pageProps={undefined}/>
    </div>
  );
};

export default Approvals;
