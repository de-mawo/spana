import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi2";
import { AdminRoutes } from "../../lib/routes";

type Props = {
  show: boolean;
  showSideBar: () => void;
};

const SideBar = ({ show, showSideBar }: Props) => {
  return (
    <>
      <div className={`dash_sidebar ${show && "review"} `}>
        {show ? (
          <HiOutlineChevronDoubleRight
            className="toggler_1 rounded-circle "
            onClick={showSideBar}
          />
        ) : (
          <HiOutlineChevronDoubleRight
            className="toggler_2 rounded-circle "
            onClick={showSideBar}
          />
        )}

        <nav className="dash_nav">
          <div className="main_links">
            <div className="logo_area">
              <Image
                src="/img/logo.svg"
                width={100}
                height={100}
                alt="logo"
                className="nav_logo"
              />
            </div>

            <div className="nav_list mt-3">
              {AdminRoutes.map((link, index) => (
                <Link className="nav_link" href={link.url} key={index}>
                  <span className="link_icon fs-3">{link.icon}</span>
                  <span className="ps-5">{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="#" className="nav_link">
            {" "}
            <span className="link_icon fs-3">
              <HiOutlineArrowRightOnRectangle />{" "}
            </span>
            <span className="ps-5">Logout</span>{" "}
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
