import { signOut } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi2";
import { AdminRoutes } from "./routes";
import { MemoizedTooltip } from "../DashTooltip";

type Props = {
  show: boolean;
  showSideBar: () => void;
};

const SideBar = ({ show, showSideBar }: Props) => {
  const pathname = usePathname();
  
  return (
    <aside className={`dash_sidebar ${show && "md:w-[14rem]"}`}>
      <HiOutlineChevronDoubleRight
        className={`bg-white text-deep-sapphire-900 hidden md:block
       text-3xl rounded-full
       absolute -right-3 top-9 border  border-deep-sapphire-900 cursor-pointer dark:text-gray-600 dark:border-gray-600 ${
         !show && "rotate-180"
       }`}
        onClick={showSideBar}
      />

      <nav className="flex flex-col justify-between h-full overflow-hidden ">
        <div className=" mt-8">
          <div className="flex justify-center">
            <Image
              src="/img/spana-white.png"
              width={100}
              height={100}
              alt="logo"
              className="text-center"
            />
          </div>

          <div className="">
            {AdminRoutes.map((route, index) => (
              <Link
                href={route.url}
                className={
                  pathname?.endsWith(route.url)
                    ? " flex items-center py-4 pl-3  transition-all bg-deep-sapphire-300 underline text-white dark:text-gray-300 dark:bg-gray-600"
                    : "flex items-center py-4 pl-3 text-deep-sapphire-900 transition-all hover:bg-deep-sapphire-300 hover:text-white dark:text-gray-300 dark:hover:bg-gray-600"
                }
                key={index}
              >
                <MemoizedTooltip text={route.title}>
                {route.icon}
                <span className={`pl-4 ${!show && "hidden"}`}>
                  {route.title}{" "}
                </span>
                </MemoizedTooltip>
                
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center py-2 pl-3 text-deep-sapphire-900 transition-all hover:bg-deep-sapphire-300 hover:text-white dark:text-gray-300 dark:hover:bg-gray-600"
        >
          {" "}
          <span className="">
            <HiOutlineArrowRightOnRectangle className="h-6 w-6  mr-4 shrink-0" />{" "}
          </span>
          <span className={`pl-4 ${!show && "hidden"}`}>Logout</span>{" "}
        </button>
      </nav>
    </aside>
  );
};

export default SideBar;
