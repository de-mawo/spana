'use client'

import { useGetAllLeavesQuery } from "../../../../graphql/generated";
import { combinedString } from "../../../../lib/utils";
import { convertToCSV } from "../../../../lib/convertToCsv";
import DownloadCSV from "./DownloadCSV";
import { createUrqlClient } from "../../../../lib/createUrqlClient";
import { withUrqlClient } from "next-urql";
import LoadingComponent from "../../../LoadingComponent";


const DownloadLeaves = () => {
    const [{ data, fetching, error }] = useGetAllLeavesQuery();

    if (fetching) {
      return <LoadingComponent/>
    }
  
    const balances = data?.getAllLeaves || [];
  
    const csvContent = convertToCSV(balances);
    const filename = "leaves";
    const uniqueFileExt = combinedString;
  
    return (
      <div className="flex flex-col items-center ">
        <h1 className=" font-bold dark:text-white">Download All Leaves </h1>
  
        <DownloadCSV
          csvContent={csvContent}
          filename={filename}
          uniqueFileExt={uniqueFileExt}
        />
      </div>
    );
}

export default withUrqlClient(createUrqlClient) (DownloadLeaves)