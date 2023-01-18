import BalancesTable from "./BalancesTable";

import {AllBalances} from '../../../data/leaveData'

const Balances = () => {
  return <div>
    <BalancesTable allbalances={AllBalances}/>
  </div>;
};

export default Balances;
