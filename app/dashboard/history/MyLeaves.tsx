'use client'

import { useSession } from "next-auth/react";
import { withUrqlClient } from "next-urql";
import { useGetUserLeavesQuery } from "../../../graphql/generated";
import { createUrqlClient } from "../../../lib/createUrqlClient";

const MyLeaves = () => {
  const session = useSession();

  const email = session.data?.user?.email
  const [{ data, fetching, error }] = useGetUserLeavesQuery({
    variables: {email: email as string}
  })

  if (fetching) {
    return <div>Loading...</div>;
  }

  
  


  return (
    <div className="  rounded-lg shadow-2xl p-6 mb-12 dark:border dark:border-gray-700">
      <h2 className="text-center  mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        All My Time Off
      </h2>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Leave Type
              </th>
              <th scope="col" className="px-6 py-3">
                Requested At
              </th>
              <th scope="col" className="px-6 py-3">
                Dates
              </th>
              <th scope="col" className="px-6 py-3">
                Days 
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Comments
              </th>
              <th scope="col" className="px-6 py-3">
                Approved By
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.getUserLeaves.map((off) => (
              <tr
                className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700"
                key={off.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {off.type}
                </th>
                <td>{new Date (off.requestedAt).toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date (off.startDate).toLocaleDateString()} - {new Date (off.endDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">{off.daysRequested}</td>
                <td className="px-6 py-4 ">
                  {off.approved  && (
                    <span className="bg-turquoise-100 text-turquoise-600  p-2 border border-turquoise-600  rounded-lg">
                     Approved
                    </span>
                  )}
                  {off.approved === false && off.rejected === false && (
                    <span className="bg-yellow-orange-100 text-yellow-orange-600 p-2 border border-yellow-orange-600 rounded-lg">
                  Pending
                    </span>
                  )}
                  {off.rejected && (
                    <span className="bg-radical-red-100 text-radical-red-600 p-2 border border-radical-red-600 rounded-lg">
                      Rejected
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{off.moderatorNote}</td>
                <td className="px-6 py-4">{off.moderatedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient) (MyLeaves);
