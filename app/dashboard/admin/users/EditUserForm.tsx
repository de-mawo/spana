"use client";

import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { User } from "../../../../types";
import {
  Role,
  useAddProfileMutation,
  useEditProfileMutation,
  useEditUserMutation,
} from "../../../../graphql/generated";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../../../lib/createUrqlClient";

type Props = {
  user: User;
};

const EditUserForm = ({ user }: Props) => {
  const { data } = useSession();

  const email = data?.user?.email as string;

  const options = ["USER", "MODERATOR", "ADMIN"];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const [, EditUser] = useEditUserMutation();

  const [, AddProfile] = useAddProfileMutation();

  const [, EditProfile] = useEditProfileMutation();

  const HandleAddProfile = async () => {
    //  Edit a Role whether the user has inputed something or not ,
   EditUser({ role: selectedOption as Role, email }).then(async (res) => {
    if (res.data?.EditUser) {
      toast.success("Edit User Successfully");
    }
    if (res.error) {
      toast.error("An error occured: ");
    }
  });

    //Add Profile ,
    // If there is an error that says "ERR:Exist" then Edit profile instead
    AddProfile({ phone, email, jobTitle }).then((res) => {
      if (res.data?.AddProfile) {
        toast.success("Request sent Successfully");
      }
      if (res.error?.message == "ERR:Exist") {
        EditProfile({ email, phone, jobTitle }).then((res) => {
          if (res.data?.EditProfile) {
            toast.success("Request sent Successfully");
          }
          if (res.error) {
            toast.error("An error occured: ");
          }
        });
      } else {
        toast.error("An error occured: ");
      }
    });
  };


  // const HandleAddProfile = async () => {
  //   try {
  //     //  Edit a Role whether the user has inputed something or not ,
  //     const { data: editUserData } = await EditUser({
  //       role: selectedOption as Role,
  //       email,
  //     });
  
  //     if (editUserData?.EditUser) {
  //       toast.success("Edit User Successfully");
  //     }
  //     //Add Profile ,
  //   // If there is an error that says "ERR:Exist" then Edit profile instead
  
  //     const { data: addProfileData, error: addProfileError } =
  //       await AddProfile({ phone, email, jobTitle });
  
  //     if (addProfileData?.AddProfile) {
  //       toast.success("Request sent Successfully");
  //     } else if (addProfileError?.message === "ERR:Exist") {
  //       const { data: editProfileData } = await EditProfile({
  //         email,
  //         phone,
  //         jobTitle,
  //       });
  
  //       if (editProfileData?.EditProfile) {
  //         toast.success("Request sent Successfully");
  //       }
  //     } else {
  //       toast.error("An error occured: ");
  //     }
  //   } catch (error) {
  //     toast.error("An error occured: ");
  //   }
  // };
  

  return (
    <form onSubmit={HandleAddProfile}>
      <Toaster />
      <div className="mt-8 space-y-4">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={user.name!}
            placeholder="Name"
          />
        </div>

        <div>
          <label htmlFor="surname" className="form-label">
            Phone
          </label>
          <input
            type="text"
            name="surname"
            className="form-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Surname"
          />
        </div>

        <div>
          <label htmlFor="brand" className="form-label">
            Job Title
          </label>
          <input
            type="text"
            name="job_title"
            id="brand"
            className="form-input"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Job Title"
          />
        </div>

        <div className="relative inline-block w-full">
          <select
            id="leave-type"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="block w-full rounded-md appearance-none bg-white border border-gray-400 px-4 py-2 pr-8 leading-tight  focus:outline-none focus:ring-1 
          focus:ring-deep-sapphire-600 focus:border-transparent dark:bg-slate-600"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ">
            <GoChevronDown className="dark:text-gray-300" />
          </div>
        </div>
        <div className="bottom-0 left-0 flex justify-center w-full pb-4 mt-4 space-x-4 sm:absolute px-4 sm:mt-0">
          <button type="submit" className="ml-2 primary-btn">
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default withUrqlClient(createUrqlClient) (EditUserForm);
