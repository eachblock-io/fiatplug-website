"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IoMdClose } from "react-icons/io";

export default function WaitlistModal({ open, setOpen }: any) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="z-50 flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white text-center">
                  <IoMdClose
                    className="absolute cursor-pointer top-3 right-3 text-3xl text-white "
                    onClick={() => setOpen(false)}
                  />
                  <div className="head startedBg lg:p-10 p-8">
                    <h1 className="font-semibold lg:text-3xl text-2xl pt-4">
                      Join our waitlist and get early access
                    </h1>
                    <p className="mt-8 lg:text-xl text-md text-white">
                      Join our journey today and get notified when we launch
                    </p>
                  </div>
                  <div className="form lg:p-10 p-8 bg-white">
                    <form className="space-y-6">
                      <Input
                        type="name"
                        placeholder="Name"
                        className="w-full py-7 px-6 border border-gray-300 bg-transparent outline-none"
                      />
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        className="w-full py-7 px-6 border border-gray-300 bg-transparent outline-none"
                      />
                      <Button
                        onClick={() => setOpen(false)}
                        className="w-full py-7 px-6 bg-amber-400 transition-all hover:bg-amber-200 text-zinc-800 font-semibold">
                        Join the waitlist
                      </Button>
                    </form>
                  </div>
                </div>
                {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}>
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}>
                    Cancel
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
