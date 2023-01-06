import { HiOutlineSquares2X2, HiOutlineUserGroup , HiOutlineHandThumbUp, HiOutlineInboxArrowDown, HiOutlineCog6Tooth} from "react-icons/hi2";

export const AdminRoutes = [
    { title: "Dashboard", url: "/dashboard", icon: <HiOutlineSquares2X2 className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Employees", url: "/dashboard/employees", icon: <HiOutlineUserGroup className="h-6 w-6 mr-4 shrink-0" /> },
    { title: "Requests", url: "/dashboard/users", icon: <HiOutlineInboxArrowDown className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Approvals", url: "/dashboard/users", icon: <HiOutlineHandThumbUp className="h-6 w-6 mr-4 shrink-0" /> },
    { title: "Settings", url: "/dashboard/users", icon: <HiOutlineCog6Tooth className="h-6 w-6 mr-4 shrink-0"/> },

]


export const UserRoutes = [
    
]