import { HiOutlineSquares2X2, HiOutlineUserGroup , HiOutlineHandThumbUp,  HiOutlineCog6Tooth, HiOutlineScale} from "react-icons/hi2";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { GoGraph } from "react-icons/go";

export const AdminRoutes = [
    { title: "Dashboard", url: "/dashboard", icon: <HiOutlineSquares2X2 className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Users", url: "/dashboard/users", icon: <HiOutlineUserGroup className="h-6 w-6 mr-4 shrink-0" /> },
    { title: "My Leaves", url: "/dashboard/leaves", icon: <RxCounterClockwiseClock className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Approvals", url: "/dashboard/approvals", icon: <HiOutlineHandThumbUp className="h-6 w-6 mr-4 shrink-0" /> },
    { title: "Balances", url: "/dashboard/balances", icon: <HiOutlineScale className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Reports", url: "/dashboard/reports", icon: <GoGraph className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Settings", url: "/dashboard/settings", icon: <HiOutlineCog6Tooth className="h-6 w-6 mr-4 shrink-0"/> },

]


export const UserRoutes = [
    
]