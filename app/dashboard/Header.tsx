import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineBell,
  HiOutlineSquaresPlus,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

const Header = () => {
  return (
    <section className="dash_header">
      <div className="left_side_area ps-3">
        <span className="img_area">
          <Image
            className="rounded-circle"
            src={"/img/avatar.png"}
            width={50}
            height={50}
            alt="avatar"
          />
        </span>
        <div className="user_info ps-2">
          <h6>Michaella Simpson</h6>
          <span>Software Developer</span>
        </div>
      </div>

      <div className="right_side_area pe-3">
        <div className="dropdown">
          <HiOutlineSquaresPlus className="right_side_icon" />
          <div className="dropdown_content">
            <ul>
              <li>Michaella</li>
              <li>
                <Link href="/dashboard/me">My Profile</Link>
              </li>
            </ul>
            <div className="header_logout">
              <span className="ps-2 fs-2">
                <HiOutlineArrowRightOnRectangle />{" "}
              </span>
              <span className="ps-3">Logout</span>{" "}
            </div>
          </div>
        </div>
        <div className="notification_bell">
          <HiOutlineBell className="right_side_icon " />
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Header;
