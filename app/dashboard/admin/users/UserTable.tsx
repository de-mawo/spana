import Image from "next/image";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { User } from "../../../../types";
import EditUser from "./EditUser";

type Props = {
  users: User[];
  // onClick:() => void
};

const UserTable = ({ users }: Props) => {
  return (
    <div className="  rounded-lg shadow-2xl p-6 my-12 max-h-[80vh] overflow-y-auto dark:border dark:border-deep-sapphire-700">
      <h2 className="text-center  mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        All Users
      </h2>
      <div className="relative overflow-x-auto  ">
        <table className="w-full border    text-left  text-deep-sapphire-900 dark:text-gray-400">
          <thead className=" text-xs overflow-x-auto whitespace-nowrap text-deep-sapphire-900 uppercase bg-deep-sapphire-50 dark:bg-gray-600 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Avatar
              </th>
              <th scope="col" className="px-6 py-3  ">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Surname
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Job Title
              </th>

              <th scope="col" className="px-6 py-3">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                className="bg-white border-b    dark:bg-slate-900 dark:border-deep-sapphire-700"
                key={user.id}
              >
                <td className="px-6 py-3"> <Image src={user.avatar} width={50}  height={50}  alt="avatar" className="rounded-full object-cover" />   </td>
                <td className="px-6 py-3">{user.name} </td>
                <td className="px-6 py-3">{user.surname} </td>
                <td className="px-6 py-3">{user.email} </td>
                <td className="px-6 py-3">{user.job_title}</td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <EditUser user={user}/>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;