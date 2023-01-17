'use client'

import React, { useState } from "react";
import { users } from "../../../data/users";
import EditUser from "./EditUser";
import UserTable from "./UserTable";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return <div>
    <div>
    
    <UserTable users={users} onClick={onClick} />
    </div>
    <EditUser open={isOpen} closeModal={closeModal}/>
  </div>;
};

export default Users;

