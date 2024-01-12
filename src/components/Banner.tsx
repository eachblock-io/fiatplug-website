"use client";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import WaitlistModal from "./WaitlistModal";

const Banner = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <WaitlistModal open={open} setOpen={setOpen} />
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-100">
          <strong className="font-semibold">Launching!!! Web App</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Join our waiting list to be the first to know once we launch
        </p>
        <a
          href="#"
          onClick={() => setOpen(true)}
          className="flex-none rounded-md bg-gray-100 px-3.5 py-1 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
          Join waiting list <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
