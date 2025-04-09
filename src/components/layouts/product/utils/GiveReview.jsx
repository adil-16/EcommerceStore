"use client";
import RoundedButton from "@/components/buttons/RoundedButton";
import ReviewBox from "@/components/fields/ReviewBox";
import NewImageSwipper from "@/components/sections/seller/products/NewImageSwipper";
import { closeModalIcon, fullStarIcon, uploadIcon } from "@/utils/Svgs";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";

const GiveReview = ({ isOpen, closeModal }) => {
  const [preview, setPreview] = React.useState(null);
  const [profile, setProfile] = React.useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setProfile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[7000000000000]"
        onClose={closeModal}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto no-scrollbar">
          <div className="flex min-h-full items-center justify-center px-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative w-[505px] max-h-[600px] transform overflow-auto no-scrollbar rounded-2xl bg-white px-1 pb-3.5 text-left align-middle shadow-xl transition-all">
                {/* header */}
                <div className="sticky top-0 z-50 bg-white flex flex-row justify-between w-full items-center py-3.5 border-b border-b-black border-opacity-10 px-4">
                  <p className="font-medium text-xl">Write a review</p>

                  <div
                    onClick={closeModal}
                    className="flex justify-center items-center p-3 rounded-md shadow-closeButtonShadow cursor-pointer "
                  >
                    {closeModalIcon}
                  </div>
                </div>
                {/* details and rating */}
                <div className="w-full justify-center flex items-center mt-8">
                  <div className="flex flex-col px-14 items-center gap-y-2.5">
                    <p className="text-center">
                      How would you rate Noha Mohamed Abdelrahman?
                    </p>

                    <div className="flex flex-row gap-x-1.5">
                      {fullStarIcon}
                      {fullStarIcon}
                      {fullStarIcon}
                      {fullStarIcon}
                      {fullStarIcon}
                    </div>
                  </div>
                </div>

                {/* write review */}
                <div className="mt-5 w-full px-7">
                  <ReviewBox
                    label="Review"
                    placeholder="Enter review here..."
                  />
                </div>
                {/* select image */}
                <div id="drop-zone" className="w-full px-7">
                  <div className="flex items-center justify-center w-full mt-8">
                    {preview ? (
                      <Image
                        src={preview}
                        width={20}
                        height={20}
                        alt="profile"
                        className=" h-full w-full"
                      />
                    ) : (
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full py-12 rounded-lg cursor-pointer bg-footerBg bg-opacity-5"
                      >
                        <div className="gap-y-1.5 flex flex-col items-center justify-center pt-5 pb-6">
                          {uploadIcon}
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Upload Product Images
                            </span>{" "}
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={handleImageChange} // Add the change handler
                          multiple
                        />
                      </label>
                    )}
                  </div>
                </div>
                <div className="px-7 flex flex-row justify-between w-full items-center gap-x-5 mt-5">
                  <RoundedButton
                    onClick={closeModal}
                    label="Cancel"
                    className=" bg-transparent border-black text-black font-normal w-full px-6 py-3.5"
                  />
                  <RoundedButton
                    onClick={closeModal}
                    label="Submit"
                    className=" bg-primary border-primary text-white font-medium w-full px-6 py-3.5"
                  />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default GiveReview;
