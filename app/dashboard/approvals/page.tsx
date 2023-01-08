import React from "react";
import { Requests } from "../../../data/leaveData";
import RequestModal from "./RequestModal";

const Approvals = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10 gap-5">
        {Requests.map((requested) => (
          <RequestModal key={requested.id} requested={requested} />
        ))}
      </div>
    </div>
  );
};

export default Approvals;
