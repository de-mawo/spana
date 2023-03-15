"use client";
import { useSession } from "next-auth/react";
import { withUrqlClient } from "next-urql";
import {
  useGetUserBalancesQuery,
} from "../../../graphql/generated";
import { createUrqlClient } from "../../../lib/createUrqlClient";

const Leavebalances = () => {
  const { data: sessionData } = useSession();
  const email = sessionData?.user?.email as string;

  
  const [{ data: balanceData }] = useGetUserBalancesQuery({ variables: { email } });
  const balance = balanceData?.getUserBalances;

  return (
    <div className=" my-12 rounded-lg shadow-2xl p-6 dark:border dark:border-gray-700">
      <h2 className="text-center  mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        My Leave balances
      </h2>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Leave Type
              </th>

              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Used
              </th>
              <th scope="col" className="px-6 py-3">
                Remaining
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Annual
              </th>

              <td className="px-6 py-4">{balance?.annualCredit}</td>
              <td className="px-6 py-4">{balance?.annualUsed}</td>
              <td className="px-6 py-4">{balance?.annualRemaining}</td>
            </tr>
            <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Health
              </th>

              <td className="px-6 py-4">{balance?.healthCredit}</td>
              <td className="px-6 py-4">{balance?.healthUsed}</td>
              <td className="px-6 py-4">{balance?.healthRemaining}</td>
            </tr>
            <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Study
              </th>

              <td className="px-6 py-4">{balance?.studyCredit}</td>
              <td className="px-6 py-4">{balance?.studyUsed}</td>
              <td className="px-6 py-4">{balance?.studyRemaining}</td>
            </tr>
            <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Maternity
              </th>

              <td className="px-6 py-4">{balance?.maternityCredit}</td>
              <td className="px-6 py-4">{balance?.maternityUsed}</td>
              <td className="px-6 py-4">{balance?.maternityRemaining}</td>
            </tr>
            <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Unpaid
              </th>

              <td className="px-6 py-4">{balance?.unpaidUsed}</td>
              <td className="px-6 py-4">null</td>
              <td className="px-6 py-4">null</td>
            </tr>
            <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Family
              </th>

              <td className="px-6 py-4">{balance?.familyCredit}</td>
              <td className="px-6 py-4">{balance?.familyUsed}</td>
              <td className="px-6 py-4">{balance?.familyRemaining}</td>
            </tr>
            <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Paternity
              </th>

              <td className="px-6 py-4">{balance?.paternityCredit}</td>
              <td className="px-6 py-4">{balance?.paternityUsed}</td>
              <td className="px-6 py-4">{balance?.paternityRemaining}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(Leavebalances);
