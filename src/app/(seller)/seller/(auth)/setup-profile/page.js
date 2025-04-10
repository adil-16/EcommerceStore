"use client";
import React, { useState } from "react";
import { whiteLoader } from "@/svgs"; // Import your loader SVG
import { pencilSvgProfile } from "@/svgs";
import { useRouter } from "next/navigation";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [preview, setPreview] = useState("");

  const handleImageChange = (e) => {};

  const router = useRouter();

  const navigateToSuccess = () => {
    router.push("/seller/account-success");
  };

  return (
    <div className="mx-auto p-5 lg:px-16 flex flex-col gap-5">
      <img className="w-[160px] h-[60px]" src="/ausrum.png" />
      <h3 className="text-3xl font-bold">Setup your profile</h3>
      <p className="text-grayDark text-lg">
        Fill in the details to complete your profile.
      </p>
      <hr className="border-grayLight" />

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-center ">
          <div className="relative w-[140px] h-[140px]">
            <div className="rounded-full items-center justify-center flex shadow-avatarShadow1 overflow-hidden w-full h-full">
              <img
                src={preview || "/images/zara-logo.png"}
                alt="Profile"
                className="object-contain rounded-full h-full"
              />
            </div>
            <label
              htmlFor="upload-button"
              className="absolute -bottom-0 left-2/3 transform -translate-x-1/2 bg-primary w-[30px] h-[30px] items-center justify-center flex rounded-full cursor-pointer"
            >
              <input
                id="upload-button"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <span className="text-white">{pencilSvgProfile}</span>
            </label>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="font-medium">Brand Full Name</label>
          <input
            type="text"
            className="placeholder:font-medium w-full rounded-md border bg-whiteOne border-gray-200 py-3 px-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Enter brand name"
            name="brandName"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="font-medium">Address</label>
          <input
            type="text"
            className="placeholder:font-medium w-full rounded-md border bg-whiteOne border-gray-200 py-3 px-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Enter brand address"
            name="brandAddress"
          />
        </div>
      </div>

      <button
        onClick={navigateToSuccess}
        className="flex justify-center transform active:translate-y-1 transition-all shadow-buttonShadow bg-primary text-white font-semibold py-2 rounded hover:bg-primaryHover gap-2 lg:w-[100%] relative"
        // disabled={loading}
      >
        {loading && <div className="animate-spin">{whiteLoader}</div>}
        {!loading && "Continue"} {/* Show "Login" text only when not loading */}
      </button>
    </div>
  );
};

export default Page;
