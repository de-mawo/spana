"use client";

import { withUrqlClient } from "next-urql";
import { useGetAllBalancesQuery } from "../../../../graphql/generated";
import { createUrqlClient } from "../../../../lib/createUrqlClient";
import { convertToCSV } from "../../../../lib/convertToCsv";
import { combinedString } from "../../../../lib/utils";
import DownloadCSV from "./DownloadCSV";

const DownloadBalances = () => {
  const [{ data, fetching, error }] = useGetAllBalancesQuery();

  if (fetching) {
    return <div>Loading...</div>;
  }

  const balances = data?.getAllBalances || [];

  const csvContent = convertToCSV(balances);
  const filename = "balances";
  const uniqueFileExt = combinedString;

  return (
    <div className="flex flex-col items-center ">
      <h1 className=" font-bold dark:text-white">Download All Balances </h1>

      <DownloadCSV
        csvContent={csvContent}
        filename={filename}
        uniqueFileExt={uniqueFileExt}
      />
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(DownloadBalances);
