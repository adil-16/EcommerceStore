import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React from "react";
import DrawerHeader from "./DrawerHeader";
import Image from "next/image";

const AddPaymentMethodDrawer = ({ setDrawerOpen, open }) => {
  const handleClose = () => {
    setDrawerOpen((state) => !state);
  };

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-[999999]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 overflow-hidden rounded-md">
        <div className="overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 flex w-full max-w-full items-center justify-center">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-[90%] transform transition duration-500 ease-in-out data-[closed]:opacity-0 sm:duration-700 md:w-[586px]"
            >
              <div className="flex flex-col items-center justify-between gap-[30px] rounded-[8px] bg-white px-[40px] py-[40px] text-center shadow-xl">
                <DrawerHeader handleClose={handleClose} />

                <div className="relative w-full flex flex-col gap-5">
                  <div className="relative">
                    <input
                      className="block w-full placeholder:font-bold rounded-lg border border-gray-300 py-3 px-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Card Number"
                    />
                    <Image
                      src="/images/visa-logo.png"
                      className="md:w-[40px] w-[30px] h-auto absolute right-3 top-1"
                      width={40}
                      height={40}
                      alt="Visa"
                    />
                  </div>

                  <input
                    className="block w-full placeholder:font-bold rounded-lg border border-gray-300 py-3 px-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Card Holder Name"
                  />
                  <div className="flex gap-5 items-center">
                    <input
                      className="block w-full placeholder:font-bold rounded-lg border border-gray-300 py-3 px-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Expiry Date"
                    />
                    <input
                      className="block w-full placeholder:font-bold rounded-lg border border-gray-300 py-3 px-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="CVV"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-primary self-start">
                    <div className="relative inline-block">
                      <input
                        id="checkbox"
                        type="checkbox"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="checkbox"
                        className="w-5 h-5 cursor-pointer rounded-full border-2 border-gray-400 bg-transparent peer-checked:bg-primary peer-checked:border-transparent peer-checked:text-white flex items-center justify-center"
                      >
                        <span className="peer-checked:block text-xs">✔</span>
                      </label>
                    </div>
                    <label htmlFor="checkbox" className="font-semibold">
                      Set as Primary Payment Method
                    </label>
                  </div>
                </div>

                <div className="flex w-full items-center gap-[19px]">
                  <button
                    className={`w-full rounded-[5px] disabled:bg-grayLight1 bg-primary px-[22px] py-[10px] font-semibold text-white`}
                  >
                    Add
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AddPaymentMethodDrawer;
