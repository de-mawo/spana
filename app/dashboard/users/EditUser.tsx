import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiXMark } from "react-icons/hi2";
import EditUserForm from "./EditUserForm";

type Props = {
  open: boolean;
  closeModal: () => void;
};

const EditUser = ({ open, closeModal }: Props) => {
  return (
    <div>
      <Transition appear show={open} as={Fragment}>
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


          <div className="fixed inset-y-0 right-0   overflow-y-auto">
            <div className="flex min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-64  h-screen transform overflow-hidden rounded-l-lg bg-white dark:bg-slate-800 p-6 align-middle shadow-xl transition-all">
                  <div>
                  <HiXMark onClick={closeModal} className='h-6 w-6' />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Edit User
                  </Dialog.Title>

                 <EditUserForm/>

                  
                </Dialog.Panel>





                
              </Transition.Child>
            </div>
          </div>




        </Dialog>
      </Transition>
    </div>
  );
};

export default EditUser;