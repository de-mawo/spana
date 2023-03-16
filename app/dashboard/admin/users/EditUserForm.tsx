"use client";

import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { User } from "../../../../types";
import {
  Role,
  useAddProfileMutation,
  useEditProfileMutation,
  useEditUserMutation,
  useGetProfileQuery,
} from "../../../../graphql/generated";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../../../lib/createUrqlClient";
import {  HiUser } from "react-icons/hi2";

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
  const [showChangeRole, setShowChangeRole] = useState(false);

  const [, EditUser] = useEditUserMutation();

  const [, AddProfile] = useAddProfileMutation();

  const [, EditProfile] = useEditProfileMutation();

  const [{ data: profileData }] = useGetProfileQuery({ variables: { email } });

  const ChangeRole = async () => {
    await EditUser({ role: selectedOption as Role, email }).then(
      async (res) => {
        if (res.data?.EditUser) {
          toast.success("Role changed Successfully");
          setShowChangeRole(false);
        }
        if (res.error) {
          const message = res.error.message;
          toast.error(message, { duration: 10000 });
        }
      }
    );
  };

  const UpdateProfile = async () => {
    EditProfile({ email, phone, jobTitle }).then((res) => {
      if (res.data?.EditProfile) {
        toast.success("Update profile Successful");
      }
      if (res.error) {
        toast.error("An error occured: ");
      }
    });
  };

  const AddNewProfile = async () => {
    await AddProfile({ phone, email, jobTitle }).then(async (res) => {
      if (res.data?.AddProfile) {
        toast.success("Added Profile Successful");
      }
      if (res.error) {
        toast.error("An error occured: ");
      }
    });
  };

  useEffect(() => {
    if (profileData) {
      setPhone(profileData?.getProfile?.phone || ""); // pass only the phone number as a string
      setJobTitle(profileData.getProfile.jobTitle || "");
    }
  }, [profileData]);

  return (
    <>
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
            disabled
            placeholder="Name"
          />
        </div>

        <div>
          <label htmlFor="name" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={email!}
            disabled
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
            placeholder="Phone"
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

        <div className="flex my-2">
          <input
            className="w-6 h-6 text-deep-sapphire-600 bg-deep-sapphire-100 rounded border-deep-sapphire-500 focus:ring-deep-sapphire-500  focus:ring-2 "
            type="checkbox"
            checked={showChangeRole}
            onChange={(e) => {
              setShowChangeRole(e.target.checked);
            }}
          />
          <div className="flex ml-3">
            {" "}
            <HiUser className="mr-2 h-5 w-5 text-deep-sapphire-400" />{" "}
            <span className="text-red-600">Change Role</span>{" "}
          </div>
        </div>

        {showChangeRole ? (
          <>
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

            <div className=" left-0 flex justify-center w-full pb-4 mt-4 space-x-4 sm:absolute px-4 sm:mt-0">
              <button
                type="button"
                className="ml-2 primary-btn"
                onClick={ChangeRole}
              >
                Change Role
              </button>
            </div>
          </>
        ) : (
          ""
        )}

        {profileData?.getProfile ? (
          <div className="bottom-0 left-0 flex justify-center w-full pb-4 mt-4 space-x-4 sm:absolute px-4 sm:mt-0">
            <button
              type="button"
              className="ml-2 primary-btn"
              onClick={UpdateProfile}
            >
              Edit
            </button>
          </div>
        ) : (
          <div className="bottom-0 left-0 flex justify-center w-full pb-4 mt-4 space-x-4 sm:absolute px-4 sm:mt-0">
            <button
              type="button"
              className="ml-2 primary-btn"
              onClick={AddNewProfile}
            >
              Update
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(EditUserForm);
