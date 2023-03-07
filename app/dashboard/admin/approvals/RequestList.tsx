"use client";

import { withUrqlClient } from "next-urql";
import { useGetUnModeratedLeavesQuery } from "../../../../graphql/generated";
import { createUrqlClient } from "../../../../lib/createUrqlClient";
import LoadingComponent from "../../../LoadingComponent";
import RequestModal from "./RequestModal";

const RequestList = () => {
  const [{ data, fetching, error }] = useGetUnModeratedLeavesQuery();


  console.log(data);

  if (fetching) return <LoadingComponent />;

  if (data?.getUnModeratedLeaves.length === 0)
    return (
      <div className="text-center my-5">
        {" "}
        <p className="text-lg font-bold py-4">No Requests Found... </p>{" "}
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10 gap-5">
      {data?.getUnModeratedLeaves.map((requested) => (
        <RequestModal key={requested.id} requested={requested} />
      ))}
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(RequestList);
