"use client";

import { pencilSvgProfile } from "@/svgs";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { whiteLoader } from "@/svgs"; // Import your loader SVG

import AuthPasswordField from "@/components/fields/PasswordField";
import Enter5DigitCode from "@/components/fields/Enter5DigitCode";

const Page = () => {
  const router = useRouter();

  const [updateState, setUpdateState] = useState("initial");
  const [preview, setPreview] = useState("/images/profile-avatar.jpeg");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState("");
  const [isloading, setisLoading] = useState(false); // State to manage loading

  const clearForm = () => {};

  const updateName = async () => {};

  const handleContinue = async () => {
    setUpdateState("enterCode");
  };

  const updatePassword = async () => {
    setUpdateState("initial");
  };

  const handleImageChange = (e) => {};

  const verifyCode = () => {
    setUpdateState("update");
  };

  return (
    <div className="flex-grow p-5">
      <div className="flex flex-col w-full lg:w-3/5 mx-auto gap-5">
        <div className="flex-[0_0_50%] flex flex-col gap-5 border rounded-[28px] p-10">
          <div className="flex flex-col items-center gap-3 mb-10">
            <div className="relative w-[146px] h-[146px]">
              <div className="bg-[#C2C2C2]/20 rounded-full items-center justify-center flex overflow-hidden w-full h-full">
                <img
                  src={preview || "/avatar-admin.png"}
                  alt="Profile"
                  className="object-cover rounded-full h-full"
                />
              </div>
              <label
                htmlFor="upload-button"
                className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 bg-primary w-[24px] h-[24px] items-center justify-center flex rounded-full cursor-pointer"
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
            <p className="text-paragraph">{email}</p>
          </div>
          <input
            className="placeholder:font-medium  flex-grow  p-3 bg-whiteDark rounded-[6px] outline-none"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex gap-5">
            <button
              onClick={clearForm}
              className="bg-whiteDark flex-grow p-3 rounded-[8px] text-grayDark"
            >
              Discard Changes
            </button>
            <button
              onClick={updateName}
              className="rounded-[8px] p-3 flex-grow bg-primary text-white"
            >
              Save Changes
            </button>
          </div>
        </div>
        <div className="flex-[0_0_50%] h-fit flex flex-col gap-5 border rounded-[28px] p-10">
          <h3 className="text-h3 font-semibold">Update Password</h3>
          {updateState === "initial" && (
            <div className="flex flex-col gap-5">
              <p>Enter Your Old Password For Verification.</p>
              <AuthPasswordField
                className=" p-3 bg-whiteOne rounded-[6px] outline-none"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <button
                onClick={handleContinue}
                className="rounded-[8px] p-3 bg-primary text-white"
              >
                {isloading && (
                  <div className="animate-spin flex items-center justify-center">
                    {whiteLoader}
                  </div>
                )}
                {!isloading && "Continue"}
                {/* Show "Login" text only when not loading */}
              </button>
            </div>
          )}
          {updateState === "enterCode" && (
            <div className="flex flex-col gap-5">
              <p>
                You’ll receive a 5-digit code to your email ia******@gmail.com
              </p>
              <Enter5DigitCode />
              <p>
                Didn’t receive any code?{" "}
                <span className="font-bold cursor-pointer">Resend code</span>
              </p>
              <button
                onClick={verifyCode}
                className="rounded-[8px] p-3 bg-primary text-white"
              >
                {isloading && (
                  <div className="animate-spin flex items-center justify-center">
                    {whiteLoader}
                  </div>
                )}
                {!isloading && "Verify"}
              </button>
            </div>
          )}
          {updateState === "update" && (
            <div className="flex flex-col gap-5">
              <p>Set your New Password</p>
              <AuthPasswordField
                className="
                 p-3 bg-whiteOne rounded-[6px] outline-none"
                placeholder="Set New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <AuthPasswordField
                className="
                 p-3 bg-whiteOne rounded-[6px] outline-none"
                placeholder="Confirm Password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <button
                onClick={updatePassword}
                className="rounded-[8px] p-3 bg-primary text-white"
              >
                {isloading && (
                  <div className="animate-spin flex items-center justify-center">
                    {whiteLoader}
                  </div>
                )}
                {!isloading && "Save Password"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
