import { pencilIconProfile } from "@/svgs";
import { pencilIcon } from "@/utils/Svgs";
import Image from "next/image";
import React, { useState } from "react";

const SetupProfile = () => {
  const [preview, setPreview] = useState("/images/profile-avatar.jpeg");

  return (
    <div className="w-full rounded-[12px] bg-white px-[24px] py-[40px] shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">Profile Settings</h1>
          <p className="text-lg font-medium text-grayDark">
            iamzaibi33@gmail.com
          </p>
        </div>
        <button className="rounded-[44px] bg-primary text-white px-[15px] py-[10px] text-base font-semibold md:px-[36.5px] md:py-[14px]">
          Save Changes
        </button>
      </div>
      <hr className="my-[20px]" />
      <div className="flex flex-col-reverse gap-10 lg:gap-3 flex-wrap items-center justify-center md:flex-row-reverse md:flex-nowrap md:justify-normal">
        <div className="flex w-full flex-col gap-[20px]">
          <div className="flex w-full flex-col gap-1">
            <div className="flex w-full flex-col gap-1">
              <div className="relative">
                <input
                  type="email"
                  id="hs-floating-input-email"
                  className="peer p-4 block w-full md:w-3/5 text-lg rounded-lg placeholder:text-transparent border border-slate-200 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                  placeholder="Ahmed"
                />
                <label
                  htmlFor="hs-floating-input-email"
                  className="absolute top-0 text-black start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                >
                  Your Full Name
                </label>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-1">
            <div className="relative">
              <input
                type="email"
                id="hs-floating-input-email"
                className="peer p-4 block w-full md:w-3/5 text-lg rounded-lg placeholder:text-transparent border border-slate-200 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                placeholder="123 456 789"
              />
              <label
                htmlFor="hs-floating-input-email"
                className="absolute top-0 text-black start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
              >
                Phone Number
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[28px] px-[15px]">
          <div className="relative">
            <Image
              className="h-[120px] w-[120px] rounded-xl object-cover"
              src={preview}
              width={500}
              height={500}
              alt="Profile Picuture"
            />
            <div className="absolute -bottom-[10px] right-[10%] flex cursor-pointer items-center gap-[5px]">
              <div
                // onClick={handleDivClick}
                className={`cursor-pointer rounded-[6px] bg-white p-[6px] shadow-md`}
              >
                {pencilIconProfile}
                <input
                  id="upload-button"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupProfile;
