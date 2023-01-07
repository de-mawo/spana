"use client";

import { ChangeEvent, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Datepicker from "react-tailwindcss-datepicker";

const Request = () => {
  const options = ["Annual", "Health", "Study", "Maternity", "Other"];
  const options2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedOption2, setSelectedOption2] = useState(options2[0]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    
  };

  const handleChange2 = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(e.target.value);
    setSelectedOption2(selectedValue);
    
  };

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="  rounded-lg shadow-2xl p-6 dark:border dark:border-gray-700">
      <h2 className="text-center  mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Request a leave</h2>
    
    <form action="" className="flex flex-col space-y-4 ">
      <label className="form-label" htmlFor="leave-type">
        Leave Type
      </label>
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
      <label className="form-label" htmlFor="days-off">
        Days Off
      </label>
      <div className="relative inline-block w-full">
        <select
          id="days-off"
          value={selectedOption2}
          onChange={handleChange2}
          className="block w-full rounded-md appearance-none bg-white border border-gray-400 px-4 py-2 pr-8 leading-tight  focus:outline-none focus:ring-1 
          focus:ring-deep-sapphire-600 focus:border-transparent dark:bg-slate-600"
        >
          {options2.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ">
          <GoChevronDown className="dark:text-gray-300 font" />
        </div>
      </div>
      <label className="form-label" htmlFor="range">
        Date Range
      </label>
      <Datepicker
        containerClassName="border  border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 
        focus:ring-deep-sapphire-600 focus:border-transparent dark:bg-slate-600"
        primaryColor={"blue"}
        value={value}
        onChange={handleValueChange}
        placeholder={"Select Date Range"}
        showShortcuts={true}
        showFooter={true}
      />

       <div>
        <label htmlFor="notes" className="form-label">
         Notes
        </label>
        <input id="comment" type="text" className="form-input" />
      </div>

      <button type="submit" className="primary-btn">
        Book Time Off
      </button>
    </form>
    </div>
  );
};

export default Request;
