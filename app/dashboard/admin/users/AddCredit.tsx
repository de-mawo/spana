"use client";

import { Dialog, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import { Fragment, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GoChevronDown } from "react-icons/go";
import { HiOutlineXMark } from "react-icons/hi2";
import {
  useAddBalancesMutation,
  useGetUserQuery,
} from "../../../../graphql/generated";
import { User } from "../../../../types";

type Props = {
  user: User;
};

const AddCredit = ({ user }: Props) => {
  const options = [
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ];
  const [year, setYear] = useState(options[0]);
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [annual, setAnnual] = useState(0);
  const [health, setHealth] = useState(0);
  const [study, setStudy] = useState(0);
  const [maternity, setMaternity] = useState(0);
  const [paternity, setPaternity] = useState(0);
  const [family, setFamily] = useState(0);

  const onClick = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const name = user?.name as string;
  const email = user?.email as string;

  const [_, AddCredit] = useAddBalancesMutation();

  const SubmitCredits = () => {
    AddCredit({
      name,
      email,
      period: year,
      annualCredit: annual,
      healthCredit: health,
      studyCredit: study,
      maternityCredit: maternity,
      paternityCredit: paternity,
      familyCredit: family,
    }).then(async (res) => {
      if (res.data?.AddBalances) {
        toast.success("Credits Added Successfully");
      }
      if (res.error) {
        toast.error("An error occured: ");
      }
    });
  };

  return (
    <>
      <button
        className="flex items-center rounded-lg p-2 bg-deep-sapphire-600 hover:bg-deep-sapphire-700 text-white"
        onClick={onClick}
      >
        + Add{" "}
      </button>

      <Toaster />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-600">
                  <div className="flex justify-end">
                    <HiOutlineXMark
                      className="cursor-pointer h-6 w-6 "
                      onClick={closeModal}
                    />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 "
                  >
                    Add Credits for {user.name}
                  </Dialog.Title>

                  <form
                    action=""
                    className="flex flex-col mt-6 space-y-4 "
                    onSubmit={SubmitCredits}
                  >
                    <div>
                      <label className="form-label" htmlFor="leave-type">
                        Leave Type
                      </label>
                      <div className="relative inline-block w-full">
                        <select
                          id="leave-type"
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
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
                    </div>
                    <div>
                      <label htmlFor="notes" className="form-label">
                        Annual Credit
                      </label>
                      <input
                        id="comment"
                        type="number"
                        className="form-input"
                        value={annual}
                        onChange={(e) => setAnnual(e.target.valueAsNumber)}
                      />
                    </div>

                    <div>
                      <label htmlFor="notes" className="form-label">
                        Health Credit
                      </label>
                      <input
                        id="comment"
                        type="number"
                        className="form-input"
                        value={health}
                        onChange={(e) => setHealth(e.target.valueAsNumber)}
                      />
                    </div>
                    <div>
                      <label htmlFor="notes" className="form-label">
                        Study Credit
                      </label>
                      <input
                        id="comment"
                        type="number"
                        className="form-input"
                        value={study}
                        onChange={(e) => setStudy(e.target.valueAsNumber)}
                      />
                    </div>
                    <div>
                      <label htmlFor="notes" className="form-label">
                        Maternity Credit
                      </label>
                      <input
                        id="comment"
                        type="number"
                        className="form-input"
                        value={maternity}
                        onChange={(e) => setMaternity(e.target.valueAsNumber)}
                      />
                    </div>

                    <div>
                      <label htmlFor="notes" className="form-label">
                        Paternity Credit
                      </label>
                      <input
                        id="comment"
                        type="number"
                        className="form-input"
                        value={paternity}
                        onChange={(e) => setPaternity(e.target.valueAsNumber)}
                      />
                    </div>
                    <div>
                      <label htmlFor="notes" className="form-label">
                        Family Credit
                      </label>
                      <input
                        id="comment"
                        type="number"
                        className="form-input"
                        value={family}
                        onChange={(e) => setFamily(e.target.valueAsNumber)}
                      />
                    </div>
                    <div className="flex items-center justify-around p-5">
                      <button
                        className="flex items-center rounded-lg p-2 bg-deep-sapphire-600 hover:bg-deep-sapphire-700 text-white"
                        type="submit"
                      >
                        Submit Credits
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddCredit;
