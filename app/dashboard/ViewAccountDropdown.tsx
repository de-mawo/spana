"use client";

import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineUserGroup,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { useState } from "react";

const ViewAccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  const imageUrl = session.data?.user?.image || "/img/avatar.png";

  return (
    <div className="relative inline-block hover:block cursor-pointer">
      <span onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={imageUrl!}
          alt="chefy"
          width={30}
          height={30}
          className="w-full object-cover bg-white p-2 rounded-full  dark:bg-slate-600"
        />
      </span>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 -mr-1 w-56 rounded-md shadow-lg z-10 ">
          <div className=" flex flex-col rounded-md bg-white dark:bg-slate-600 shadow-xs">
            <span className="flex items-center py-4 pl-3 rounded-md text-deep-sapphire-900 transition-all hover:bg-deep-sapphire-300 hover:text-white dark:text-gray-300 dark:hover:bg-slate-700">
              <HiOutlineUserGroup className="h-6 w-6 mr-4 shrink-0" />
              <span className="pl-4">{session.data?.user?.name} </span>
            </span>
            <Link
              href="/dashboard/profile"
              className="flex items-center py-4 pl-3 rounded-md text-deep-sapphire-900 transition-all hover:bg-deep-sapphire-300 hover:text-white dark:text-gray-300 dark:hover:bg-slate-700"
              prefetch={false}
            >
              <HiOutlineUserPlus className="h-6 w-6 mr-4 shrink-0" />
              <span className="pl-4">Profile </span>
            </Link>
            <button className="flex items-center py-4 pl-3 rounded-md text-deep-sapphire-900 transition-all hover:bg-deep-sapphire-300 hover:text-white dark:text-gray-300 dark:hover:bg-slate-700"
            onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
            >
              <HiOutlineArrowRightOnRectangle className="h-6 w-6 mr-4 shrink-0" />
              <span className="pl-4">Sign Out </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewAccountDropdown;
