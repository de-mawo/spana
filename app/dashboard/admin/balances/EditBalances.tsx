import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GoChevronDown } from "react-icons/go";
import { HiOutlineXMark } from "react-icons/hi2";
import { useEditBalancesMutation } from "../../../../graphql/generated";
import { Balances } from "../../../../types";

type Props = {
  balance: Balances;
};

const EditBalances = ({ balance }: Props) => {

    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

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
  const index = options.indexOf(balance.period);

  const [year, setYear] = useState(options[index]);


  const [annualCredit, setAnnualCredit] = useState(balance.annualCredit);
  const [annualUsed, setAnnualUsed] = useState(balance.annualUsed);
  const [annualRemaining, setAnnualRemaining] = useState(
    balance.annualRemaining
  );

  const [healthCredit, setHealthCredit] = useState(balance.healthCredit);
  const [healthUsed, setHealthUsed] = useState(balance.healthUsed);
  const [healthRemaining, setHealthRemaining] = useState(
    balance.healthRemaining
  );

  const [studyCredit, setStudyCredit] = useState(balance.studyCredit);
  const [studyUsed, setStudyUsed] = useState(balance.studyUsed);
  const [studyRemaining, setStudyRemaining] = useState(balance.studyRemaining);

  const [maternityCredit, setMaternityCredit] = useState(
    balance.maternityCredit
  );
  const [maternityUsed, setMaternityUsed] = useState(balance.maternityUsed);
  const [maternityRemaining, setMaternityRemaining] = useState(
    balance.maternityRemaining
  );

  const [paternityCredit, setPaternityCredit] = useState(
    balance.paternityCredit
  );
  const [paternityUsed, setPaternityUsed] = useState(balance.paternityUsed);
  const [paternityRemaining, setPaternityRemaining] = useState(
    balance.paternityRemaining
  );

  const [familyCredit, setFamilyCredit] = useState(balance.familyCredit);
  const [familyUsed, setFamilyUsed] = useState(balance.familyUsed);
  const [familyRemaining, setFamilyRemaining] = useState(
    balance.familyRemaining
  );

  const [unpaidUsed, setUnpaidUsed] = useState(balance.unpaidUsed)
 



  const [_, EditCredit] = useEditBalancesMutation();

  const EditBalances = () => {
    EditCredit({
      editBalancesId: balance.id,
      annualCredit,
      annualUsed,
      annualRemaining,
      healthCredit,
      healthUsed,
      healthRemaining,
      studyCredit,
      studyUsed,
      studyRemaining,
      maternityCredit,
      maternityUsed,
      maternityRemaining,
      paternityCredit,
      paternityUsed,
      paternityRemaining,
      familyCredit,
      familyUsed,
      familyRemaining,

    }).then(async (res) => {
      if (res.data?.EditBalances) {
        toast.success("Edit Successful");
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
        * Edit
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
                    Edit Balances for {balance.name}
                  </Dialog.Title>

                  <form
                    action=""
                    className="flex flex-col mt-6 space-y-4 "
                    onSubmit={EditBalances}
                  >
                    <div>
                      <label className="form-label" htmlFor="leave-type">
                        Period
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

                    <div className="flex gap-2">
                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Annual Credit
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={annualCredit!}
                          onChange={(e) =>
                            setAnnualCredit(e.target.valueAsNumber)
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Annual Used
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={annualRemaining!}
                          onChange={(e) =>
                            setAnnualRemaining(e.target.valueAsNumber)
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Annual Remaining
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={annualUsed!}
                          onChange={(e) =>
                            setAnnualUsed(e.target.valueAsNumber)
                          }
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Health Credit
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={healthCredit!}
                          onChange={(e) =>
                            setHealthCredit(e.target.valueAsNumber)
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Health Used
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={healthUsed!}
                          onChange={(e) =>
                            setHealthUsed(e.target.valueAsNumber)
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Health Credit
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={healthRemaining!}
                          onChange={(e) =>
                            setHealthRemaining(e.target.valueAsNumber)
                          }
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Study Credit
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={studyCredit!}
                          onChange={(e) =>
                            setStudyCredit(e.target.valueAsNumber)
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Study Used
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={studyUsed!}
                          onChange={(e) => setStudyUsed(e.target.valueAsNumber)}
                        />
                      </div>
                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Study Remaining
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={studyRemaining!}
                          onChange={(e) =>
                            setStudyRemaining(e.target.valueAsNumber)
                          }
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Maternity Credit
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={maternityCredit!}
                          onChange={(e) =>
                            setMaternityCredit(e.target.valueAsNumber)
                          }
                        />
                      </div>

                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Maternity Used
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={maternityUsed!}
                          onChange={(e) =>
                            setMaternityUsed(e.target.valueAsNumber)
                          }
                        />
                      </div>

                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Maternity Remaining
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={maternityRemaining!}
                          onChange={(e) =>
                            setMaternityRemaining(e.target.valueAsNumber)
                          }
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Paternity Credit
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={paternityCredit!}
                          onChange={(e) =>
                            setPaternityCredit(e.target.valueAsNumber)
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Paternity Used
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={paternityUsed!}
                          onChange={(e) =>
                            setPaternityUsed(e.target.valueAsNumber)
                          }
                        />
                      </div>

                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Paternity Remaining
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={paternityRemaining!}
                          onChange={(e) =>
                            setPaternityRemaining(e.target.valueAsNumber)
                          }
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Family Credit
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={familyCredit!}
                          onChange={(e) =>
                            setFamilyCredit(e.target.valueAsNumber)
                          }
                        />
                      </div>

                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Family Used
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={familyUsed!}
                          onChange={(e) =>
                            setFamilyUsed(e.target.valueAsNumber)
                          }
                        />
                      </div>

                      <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Family Remaining
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={familyRemaining!}
                          onChange={(e) =>
                            setFamilyRemaining(e.target.valueAsNumber)
                          }
                        />
                      </div>
                    </div>
                    <div>
                        <label htmlFor="notes" className="form-label text-xs">
                          Unpaid Used
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          value={unpaidUsed!}
                          onChange={(e) =>
                            setUnpaidUsed(e.target.valueAsNumber)
                          }
                        />
                      </div>

                    <div className="flex items-center justify-around p-5">
                      <button
                        className="flex items-center rounded-lg p-2 bg-deep-sapphire-600 hover:bg-deep-sapphire-700 text-white"
                        type="submit"
                      >
                       Edit Balances
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

export default EditBalances;
