import React from 'react'
import { leavebalances } from '../../../data/leaveData'

const LeaveBalances = () => {
  return (
    <div className="  rounded-lg shadow-2xl p-6 dark:border dark:border-gray-700">
      <h2 className="text-center  mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Leave Balances</h2>

      <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Leave Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Carried Forward
                </th>
                <th scope="col" className="px-6 py-3">
                    Yearly Allocation
                </th>
                <th scope="col" className="px-6 py-3">
                   Total
                </th>
                <th scope="col" className="px-6 py-3">
                    Used
                </th>
                <th scope="col" className="px-6 py-3">
                   Balance
                </th>
            </tr>
        </thead>
        <tbody>
          { leavebalances.map((bal, index) => ( 
        <tr className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 {bal.type}
                </th>
                <td className="px-6 py-4">
                  {bal.carried_forward}
                </td>
                <td className="px-6 py-4">
                   {bal.yearly_allocation}
                </td>
                <td className="px-6 py-4">
                   {bal.total}
                </td>
                <td className="px-6 py-4">
                   {bal.used}
                </td>
                <td className="px-6 py-4">
                    {bal.balance}
                </td>
            </tr>
            ))}

        </tbody>
        </table>

      </div>
    
      
      
      </div>
  )
}

export default LeaveBalances