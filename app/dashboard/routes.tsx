import { HiOutlineSquares2X2, HiOutlineUserGroup , HiOutlineHandThumbUp,  HiOutlineCog6Tooth, HiOutlineScale, HiOutlineCalendarDays} from "react-icons/hi2";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { GoGraph } from "react-icons/go";

export const AdminRoutes = [
    { title: "Dashboard", url: "/dashboard", icon: <HiOutlineSquares2X2 className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Users", url: "/dashboard/admin/users", icon: <HiOutlineUserGroup className="h-6 w-6 mr-4 shrink-0" /> },
    { title: "History", url: "/dashboard/history", icon: <RxCounterClockwiseClock className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "My Leaves", url: "/dashboard/leaves", icon: <HiOutlineCalendarDays className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Approvals", url: "/dashboard/admin/approvals", icon: <HiOutlineHandThumbUp className="h-6 w-6 mr-4 shrink-0" /> },
    { title: "Balances", url: "/dashboard/admin/balances", icon: <HiOutlineScale className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Reports", url: "/dashboard/admin/reports", icon: <GoGraph className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Settings", url: "/dashboard/admin/settings", icon: <HiOutlineCog6Tooth className="h-6 w-6 mr-4 shrink-0"/> },

]


export const UserRoutes = [
     { title: "Dashboard", url: "/dashboard", icon: <HiOutlineSquares2X2 className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "History", url: "/dashboard/history", icon: <RxCounterClockwiseClock className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "My Leaves", url: "/dashboard/leaves", icon: <HiOutlineCalendarDays className="h-6 w-6 mr-4 shrink-0"/> },


]