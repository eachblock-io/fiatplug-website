"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IoMdClose } from "react-icons/io";
import { toast } from "sonner";
import successImg from "@/public/success-img.jpg";
import Image from "next/image";
import { FaTruckPlane } from "react-icons/fa6";

export default function WaitlistModal({ open, setOpen }: any) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const cancelButtonRef = useRef(null);

  const handleWaitlist = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.fiatplug.co/v2/join-wait-list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, name }), // Assuming email and name are defined variables
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      setEmail("");
      setName("");
      setSuccess(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
                  {success && (
                    <div className="success-image py-0">
                      <IoMdClose
                        className="absolute cursor-pointer top-3 right-3 text-3xl text-red-800 "
                        onClick={() => setOpen(false)}
                      />
                      <Image src={successImg} alt="success" />
                    </div>
                  )}
                  {!success && (
                    <div className="form">
                      <IoMdClose
                        className="absolute cursor-pointer top-3 right-3 text-3xl text-white "
                        onClick={() => setOpen(false)}
                      />
                      <div className="head startedBg lg:p-10 p-8">
                        <h1 className="font-semibold lg:text-3xl text-2xl pt-4">
                          Join our waitlist and get early access
                        </h1>
                        <p className="mt-8 lg:text-xl text-md">
                          Join our waitlist today and earn{" "}
                          <b>100 Fiatplug coins</b>
                        </p>
                      </div>
                      <div className="form lg:p-10 p-8 bg-white">
                        <form className="space-y-6" onSubmit={handleWaitlist}>
                          <Input
                            type="name"
                            placeholder="Name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full py-7 px-6 border border-gray-300 bg-transparent outline-none"
                          />
                          <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@email.com"
                            className="w-full py-7 px-6 border border-gray-300 bg-transparent outline-none"
                          />
                          <Button className="w-full py-7 px-6 bg-amber-400 transition-all hover:bg-amber-200 text-zinc-800 font-semibold">
                            {loading ? "Joining..." : "Join the waitlist"}
                          </Button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
