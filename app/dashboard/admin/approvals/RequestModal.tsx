"use client";

import { Dialog, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import { withUrqlClient } from "next-urql";
import React, { Fragment, useState } from "react";
import {
  HiOutlineHandThumbDown,
  HiOutlineHandThumbUp,
  HiOutlineXMark,
} from "react-icons/hi2";
import toast, { Toaster } from "react-hot-toast";
import { useEditLeaveMutation, useGetUserBalancesQuery } from "../../../../graphql/generated";
import { createUrqlClient } from "../../../../lib/createUrqlClient";
import { Requests } from "../../../../types";
import RequestCard from "./RequestCard";

type Props = {
  requested: Requests;
};

const RequestModal = ({ requested }: Props) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [moderatorNote, setModeratorNote] = useState("");

  const onClick = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const moderator = session?.user?.name as string

const email = requested.requesterEmail

// const [{ data: balanceData }] = useGetUserBalancesQuery({ variables: { email } });
//   const balance = balanceData?.getUserBalances;

//   console.log(balance);


  const [_, addDecision] = useEditLeaveMutation();


  const EditLeave = () => {
    addDecision({
      editLeaveId: requested.id,
      approved,
      rejected,
      moderatedBy: moderator,
      moderatorNote,
    }).then(async(res) => {
      if (res.data?.EditLeave) {
        toast.success("Decision Submitted Successfully");    
       
      }
      if (res.error) {
        toast.error("An error occured: ");
      }
    });
  };


 

  return (
    <>
      <RequestCard requested={requested} onClick={onClick} />
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
                    className="text-lg font-medium leading-6 underline"
                  >
                    Take a decision
                  </Dialog.Title>

                  <div className="mt-2 dark:text-gray-300">
                    <p>Leave Type: {requested.type} </p>
                    <p>Requested By: {requested.requestedBy}</p>
                    <p>
                      From: {new Date(requested.startDate).toLocaleDateString()}{" "}
                      - {new Date(requested.endDate).toLocaleDateString()}
                    </p>
                    <p>Actual Days Requested: {requested.daysRequested}</p>
                  </div>
                  <div className="flex my-2">
                    <input
                      className="w-6 h-6 text-deep-sapphire-600 bg-deep-sapphire-100 rounded border-deep-sapphire-500 focus:ring-deep-sapphire-500  focus:ring-2 "
                      type="checkbox"
                      checked={approved}
                      onChange={(e) => {
                        setApproved(e.target.checked);
                        setRejected(false); // uncheck Input B
                      }}
                    />
                    <div className="flex ml-3">
                      {" "}
                      <HiOutlineHandThumbUp className="mr-2 h-5 w-5 text-green-700" />{" "}
                      <span>Approve</span>{" "}
                    </div>
                  </div>

                  <div className="flex my-2">
                    <input
                      className="w-6 h-6 text-deep-sapphire-600 bg-deep-sapphire-100 rounded outline-none border-deep-sapphire-500 focus:ring-deep-sapphire-500  focus:ring-2 "
                      type="checkbox"
                      checked={rejected}
                      onChange={(e) => {
                        setRejected(e.target.checked);
                        setApproved(false); // uncheck Input A
                      }}
                    />
                    <div className="flex ml-3">
                      {" "}
                      <HiOutlineHandThumbDown className="mr-2 h-5 w-5 text-red-700" />{" "}
                      <span>Reject</span>{" "}
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-center mb-3">Comments</p>
                    <input
                      type="text"
                      className="w-full h-16 rounded bg-deep-sapphire-50 border border-deep-sapphire-500 focus:border-deep-sapphire-500  focus:outline-none focus-visible:ring-deep-sapphire-500 dark:bg-gray-500 "
                      onChange={(e) => setModeratorNote(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center justify-around p-5">
                    <button
                      className="flex items-center rounded-lg p-2 bg-deep-sapphire-600 hover:bg-deep-sapphire-700 text-white"
                      onClick={EditLeave}
                    >
                      Submit Decision
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

export default withUrqlClient(createUrqlClient) (RequestModal);
