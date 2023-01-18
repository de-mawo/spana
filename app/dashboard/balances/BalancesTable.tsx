type Props = {
    allbalances: AllLeaveBalances[];
  };
  
  const BalancesTable = ({ allbalances }: Props) => {
    return (
      <div className="  rounded-lg shadow-2xl p-6 my-12 max-h-[80vh] overflow-y-auto dark:border dark:border-deep-sapphire-700">
        <h2 className="text-center  mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          All Users
        </h2>
        <div className="relative overflow-x-auto  ">
          <table className="w-full border    text-left  text-deep-sapphire-900 dark:text-gray-400">
            <thead className=" text-xs overflow-x-auto whitespace-nowrap text-deep-sapphire-900 uppercase bg-deep-sapphire-50 dark:bg-gray-600 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
  
                <th scope="col" className="px-6 py-3  ">
                  AC
                </th>
                <th scope="col" className="px-6 py-3">
                  AT
                </th>
                <th scope="col" className="px-6 py-3">
                  AR
                </th>
                <th scope="col" className="px-6 py-3  ">
                  FC
                </th>
                <th scope="col" className="px-6 py-3">
                  FT
                </th>
                <th scope="col" className="px-6 py-3">
                  FR
                </th>
                <th scope="col" className="px-6 py-3  ">
                  HC
                </th>
                <th scope="col" className="px-6 py-3">
                  HT
                </th>
                <th scope="col" className="px-6 py-3">
                  HR
                </th>
                <th scope="col" className="px-6 py-3  ">
                  MC
                </th>
                <th scope="col" className="px-6 py-3">
                  MT
                </th>
                <th scope="col" className="px-6 py-3">
                  MR
                </th>
                <th scope="col" className="px-6 py-3  ">
                  PC
                </th>
                <th scope="col" className="px-6 py-3">
                  PT
                </th>
                <th scope="col" className="px-6 py-3">
                  PR
                </th>
                <th scope="col" className="px-6 py-3  ">
                  SC
                </th>
                <th scope="col" className="px-6 py-3">
                  ST
                </th>
                <th scope="col" className="px-6 py-3">
                  SR
                </th>
  
                <th scope="col" className="px-6 py-3">
                  UT
                </th>
              </tr>
            </thead>
            <tbody>
              {allbalances.map((balance, i) => (
                <tr
                  className="bg-white border-b    dark:bg-slate-900 dark:border-deep-sapphire-700"
                  key={i}
                >
                  <td className="px-6 py-3">{balance.name} </td>
                  <td className="px-6 py-3">{balance.annual_credit} </td>
                  <td className="px-6 py-3">{balance.annual_taken} </td>
                  <td className="px-6 py-3">{balance.annual_remaining} </td>
                  <td className="px-6 py-3">{balance.family_credit}</td>
                  <td className="px-6 py-3">{balance.annual_taken} </td>
                  <td className="px-6 py-3">{balance.annual_remaining} </td>
                  <td className="px-6 py-3">{balance.health_credit}</td>
                  <td className="px-6 py-3">{balance.health_taken} </td>
                  <td className="px-6 py-3">{balance.health_remaining} </td>
                  <td className="px-6 py-3">{balance.maternity_credit}</td>
                  <td className="px-6 py-3">{balance.maternity_taken} </td>
                  <td className="px-6 py-3">{balance.maternity_remaining} </td>
                  <td className="px-6 py-3">{balance.paternity_credit}</td>
                  <td className="px-6 py-3">{balance.paternity_taken} </td>
                  <td className="px-6 py-3">{balance.paternity_remaining} </td>
                  <td className="px-6 py-3">{balance.study_credit}</td>
                  <td className="px-6 py-3">{balance.study_taken} </td>
                  <td className="px-6 py-3">{balance.study_remaining} </td>
                  <td className="px-6 py-3">{balance.unpaid_taken}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default BalancesTable;