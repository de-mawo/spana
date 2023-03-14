'use client'

import { withUrqlClient } from "next-urql";
import { useGetAllBalancesQuery } from "../../../../graphql/generated";
import { createUrqlClient } from "../../../../lib/createUrqlClient";


  
  const BalancesTable = () => {

    const [{ data, fetching, error }] = useGetAllBalancesQuery();

    if (fetching) {
      return <div>Loading...</div>;
    }
    
    
    


    return (
      <div className="  rounded-lg shadow-2xl p-6 my-12 max-h-[80vh] overflow-y-auto dark:border dark:border-deep-sapphire-700">
        
        <h2 className="text-center    md:text-2xl font-semibold text-gray-900 dark:text-white">
          All User Balances
        </h2>
        

        

        <div className="relative overflow-x-auto  ">
          <table className="w-full border    text-left  text-deep-sapphire-900 dark:text-gray-400">
            <thead className=" text-xs overflow-x-auto whitespace-nowrap text-deep-sapphire-900 uppercase bg-deep-sapphire-50 dark:bg-gray-600 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
  
                <th scope="col" className="px-6 py-3  ">
                  Annual Credit
                </th>
                <th scope="col" className="px-6 py-3">
                  Annual Used
                </th>
                <th scope="col" className="px-6 py-3">
                  Annual Remaining
                </th>
                <th scope="col" className="px-6 py-3  ">
                  Family Credit
                </th>
                <th scope="col" className="px-6 py-3">
                  Family Used
                </th>
                <th scope="col" className="px-6 py-3">
                  Family Remaining
                </th>
                <th scope="col" className="px-6 py-3  ">
                  Health Credit
                </th>
                <th scope="col" className="px-6 py-3">
                  Health Used
                </th>
                <th scope="col" className="px-6 py-3">
                  Health Remaining
                </th>
                <th scope="col" className="px-6 py-3  ">
                  Maternity Credit
                </th>
                <th scope="col" className="px-6 py-3">
                  Maternity Used
                </th>
                <th scope="col" className="px-6 py-3">
                  Maternity Remaining
                </th>
                <th scope="col" className="px-6 py-3  ">
                  Paternity Credit
                </th>
                <th scope="col" className="px-6 py-3">
                Paternity Used
                </th>
                <th scope="col" className="px-6 py-3">
                Paternity Remaining
                </th>
                <th scope="col" className="px-6 py-3  ">
                  Study Credit
                </th>
                <th scope="col" className="px-6 py-3">
                  Study Used
                </th>
                <th scope="col" className="px-6 py-3">
                  Study Remaining
                </th>
  
                <th scope="col" className="px-6 py-3">
                  Unpaid Used
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.getAllBalances.map((balance, i) => (
                <tr
                  className="bg-white border-b whitespace-nowrap   dark:bg-slate-900 dark:border-deep-sapphire-700"
                  key={i}
                >
                  <td className="px-6 py-3">{balance.name} </td>
                  <td className="px-6 py-3">{balance.annualCredit} </td>
                  <td className="px-6 py-3">{balance.annualUsed} </td>
                  <td className="px-6 py-3">{balance.annualRemaining} </td>
                  <td className="px-6 py-3">{balance.familyCredit}</td>
                  <td className="px-6 py-3">{balance.familyUsed} </td>
                  <td className="px-6 py-3">{balance.familyRemaining} </td>
                  <td className="px-6 py-3">{balance.healthCredit}</td>
                  <td className="px-6 py-3">{balance.healthUsed} </td>
                  <td className="px-6 py-3">{balance.healthRemaining} </td>
                  <td className="px-6 py-3">{balance.maternityCredit}</td>
                  <td className="px-6 py-3">{balance.maternityUsed} </td>
                  <td className="px-6 py-3">{balance.maternityRemaining} </td>
                  <td className="px-6 py-3">{balance.paternityCredit}</td>
                  <td className="px-6 py-3">{balance.paternityUsed} </td>
                  <td className="px-6 py-3">{balance.paternityRemaining} </td>
                  <td className="px-6 py-3">{balance.studyCredit}</td>
                  <td className="px-6 py-3">{balance.studyUsed} </td>
                  <td className="px-6 py-3">{balance.studyRemaining} </td>
                  <td className="px-6 py-3">{balance.unpaidUsed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default withUrqlClient(createUrqlClient)(BalancesTable);