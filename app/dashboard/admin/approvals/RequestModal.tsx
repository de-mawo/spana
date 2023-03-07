"use client";

import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { HiOutlineHandThumbDown, HiOutlineHandThumbUp } from "react-icons/hi2";
import { Requests } from "../../../../types";
import RequestCard from "./RequestCard";

type Props = {
  requested: Requests;
};

const RequestModal = ({ requested }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <RequestCard requested={requested} onClick={onClick} />

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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 underline"
                  >
                    Take a decision
                  </Dialog.Title>

                  <div className="mt-2 dark:text-gray-300">
                    <p>Leave Type: {requested.type} </p>
                    <p>Requested By: {requested.requestedBy}</p>
                    <p>
                      From: {requested.startDate} to {requested.endDate}
                    </p>
                    <p>Actual Days Requested: {requested.daysRequested}</p>
                  </div>

                  <div className="mt-4">
                    <p className="text-center mb-3">Comments</p>
                    <input
                      type="text"
                      className="w-full h-16 rounded bg-deep-sapphire-50 border border-deep-sapphire-500 focus:border-deep-sapphire-500  focus:outline-none focus-visible:ring-deep-sapphire-500 dark:bg-gray-500 "
                    />
                  </div>

                  <div className="flex items-center justify-around p-5">
                    <button className="flex items-center rounded-lg p-2 bg-deep-sapphire-600 hover:bg-deep-sapphire-700 text-white">
                      <HiOutlineHandThumbUp className="mr-2 h-5 w-5" />
                      <span>Approve</span>
                    </button>
                    <button className="flex items-center rounded-lg p-2 bg-deep-sapphire-600 hover:bg-deep-sapphire-700 text-white">
                      <HiOutlineHandThumbDown className="mr-2 h-5 w-5" />
                      <span>Reject</span>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default  RequestModal;
