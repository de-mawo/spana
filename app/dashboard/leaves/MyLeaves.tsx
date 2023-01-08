import React from "react";
import {  TimeOff } from "../../../data/leaveData";

const MyLeaves = () => {
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
                Dates
              </th>
              <th scope="col" className="px-6 py-3">
                Days Taken
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
            {TimeOff.map((off) => (
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
                <td className="px-6 py-4 whitespace-nowrap">
                  {off.startDate} - {off.endDate}
                </td>
                <td className="px-6 py-4">{off.days_taken}</td>
                <td className="px-6 py-4 ">
                  {off.status === "Approved" && (
                    <span className="bg-turquoise-100 text-turquoise-600  p-2 border border-turquoise-600  rounded-lg">
                      {off.status}{" "}
                    </span>
                  )}
                  {off.status === "Pending" && (
                    <span className="bg-yellow-orange-100 text-yellow-orange-600 p-2 border border-yellow-orange-600 rounded-lg">
                      {off.status}{" "}
                    </span>
                  )}
                  {off.status === "Rejected" && (
                    <span className="bg-radical-red-100 text-radical-red-600 p-2 border border-radical-red-600 rounded-lg">
                      {off.status}{" "}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{off.comments}</td>
                <td className="px-6 py-4">{off.approved_by}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLeaves;
