"use client";

import { withUrqlClient } from "next-urql";
import { useGetUnModeratedLeavesQuery, useGetUserBalancesQuery } from "../../../../graphql/generated";
import { createUrqlClient } from "../../../../lib/createUrqlClient";
import LoadingComponent from "../../../LoadingComponent";
import RequestModal from "./RequestModal";

const RequestList = () => {
  const [{ data: unmoderatedData, fetching, error }] = useGetUnModeratedLeavesQuery();
  
  if (fetching) return <LoadingComponent />;

  if (unmoderatedData?.getUnModeratedLeaves.length === 0)
    return (
      <div className="text-center my-5">
        <p className="text-lg font-bold py-4">No Requests Found...</p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10 gap-5">
      {unmoderatedData?.getUnModeratedLeaves.map(requested => (
        <RequestModal key={requested.id} requested={requested} pageProps={undefined} />
      ))}
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(RequestList);
