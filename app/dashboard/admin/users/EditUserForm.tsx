'use client'

import  { ChangeEvent, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { GoChevronDown } from "react-icons/go";
import { User } from "../../../../types";

type Props = {
  
  user: User;
};

const EditUserForm = ({ user }: Props) => {
  const options = ["User", "Moderator", "Admin"];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <form action="#">
      <div className="mt-8 space-y-4">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={user.name}
            placeholder="Name"
          />
        </div>

        <div>
          <label htmlFor="surname" className="form-label">
            Surname
          </label>
          <input
            type="text"
            name="surname"
            className="form-input"
            value={user.surname}
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
            value={user.job_title}
            placeholder="Job Title"
          />
        </div>

        <div className="relative inline-block w-full">
          <select
            id="leave-type"
            value={selectedOption}
            onChange={handleChange}
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
          <button type="button" className="tertiary-btn">
            <HiOutlineTrash aria-hidden="true" className="w-5 h-5 mr-1 -ml-1" />
            Delete
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditUserForm;