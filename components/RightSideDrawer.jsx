import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function RightSideDrawer({ open, setOpen, children }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-10 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-20 flex justify-end">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative flex flex-col w-full max-w-sm pb-12 overflow-y-auto bg-white ">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex-shrink-0" onClick={() => setOpen(false)}>
                  <Link href="/" className="flex items-center gap-2 mr-4">
                    <Image
                      src="/assets/logo/logo.jpg"
                      width={500}
                      height={500}
                      alt="logo"
                      className="w-10 h-full"
                      priority
                    />
                    <p className="font-semibold text-blue-950">BOOKLING</p>
                  </Link>
                </div>
                <button onClick={() => setOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="p-4">{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
