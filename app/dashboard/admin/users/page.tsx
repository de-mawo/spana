
import { users } from "../../../../data/users";

import UserTable from "./UserTable";

const Users = () => {
  return (
   
      <div>
        <UserTable users={users} />
      </div>
   
  );
};

export default Users;
