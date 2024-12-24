import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React, { useState } from "react";
import DrawerHeader from "./DrawerHeader";

const DeleteAccountPopup = ({ setDrawerOpen, open }) => {
  const handleClose = () => {
    setDrawerOpen((state) => !state);
  };

  const [password, setPassword] = useState("");

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
                <div>
                  <div className="leading-[30px]">
                    <p className="text-danger">
                      Your Account will be deleted permanently
                    </p>
                    <p>Are you sure you want to delete your account?</p>
                  </div>
                </div>
                <input
                  type="password"
                  placeholder="Current Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-[5px] border w-full border-[#B9B9C3] py-[8px] pl-[15px] pr-[10px] disabled:bg-grayOne"
                />
                <div className="flex w-full items-center gap-[19px]">
                  <button
                    // onClick={handleDeleteAccount}
                    disabled={!password}
                    className={`w-full rounded-[5px] disabled:bg-grayLight1 bg-danger px-[22px] py-[10px] font-semibold text-white`}
                  >
                    Yes, Delete my Account
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

export default DeleteAccountPopup;
