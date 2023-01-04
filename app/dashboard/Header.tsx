import Image from "next/image";
import {
  
  HiOutlineBellAlert,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import ToggleDarkLight from "./ToggleDarkLight";

const Header = () => {
  return (
    <header>
      <nav className="p-4  bg-deep-sapphire-100 rounded-md dark:bg-gray-800 dark:shadow-2xl">
        <div className="flex flex-wrap justify-between items-center mx-8 ">
          {/* LEFT SIDE */}
          <div className="flex justify-end items-center">

            <form className="hidden lg:block lg:pl-2">
              <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <HiMagnifyingGlass
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-700 dark:text-gray-300"
                  />
                </div>
                <input
                  type="text"
                  className=" block w-full pl-10 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-none focus:ring-1 
                   focus:ring-deep-sapphire-600 focus:border-transparent dark:bg-slate-600"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>

          {/* RIGHT SIDE  */}

          <div className="flex items-center space-x-6">
            <button className="bg-white p-2 cursor-pointer text-deep-sapphire-900 rounded-full  dark:bg-slate-600 dark:text-gray-300">
              <ToggleDarkLight />
            </button>
            <button className="bg-white p-2 cursor-pointer text-deep-sapphire-900 rounded-full  dark:bg-slate-600 dark:text-gray-300">
              <HiOutlineBellAlert className="h-6 w-6  " />
            </button>
            <button>
              <Image
                src="/img/avatar.png"
                alt="chefy"
                width={30}
                height={30}
                className=" w-full object-cover bg-white p-2 rounded-full dark:bg-slate-600"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
