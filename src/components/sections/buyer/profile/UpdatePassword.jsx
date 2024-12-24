import React, { useState } from "react";

const UpdatePassword = () => {
  const [updatePassword, setUpdatePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [restricted, setRestricted] = useState(false);

  return (
    <div className="w-full rounded-[12px] bg-white px-[24px] py-[40px] shadow-md">
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-2xl font-semibold">Update Password</h1>
        <p className="my-3 font-semibold">
          {updatePassword
            ? "Enter new password"
            : "Please enter your old password."}
        </p>
        {!updatePassword && (
          <div className="flex w-full flex-col gap-1">
            <div className="relative flex w-full items-center md:w-1/2">
              <input
                type="password"
                placeholder="**********"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="h-[38px] w-full rounded-[5px] border border-[#B9B9C3] bg-backgroundSecondary py-[8px] pl-[15px] pr-[10px] disabled:bg-grayOne"
              />
              <button
                onClick={() => setUpdatePassword(true)}
                className="absolute right-2 top-1/2 -translate-y-1/2 transform text-base font-semibold underline"
              >
                Send Code
              </button>
            </div>
          </div>
        )}
      </div>
      {updatePassword && (
        <form className="flex flex-col gap-[20px]">
          <div className="flex w-full flex-col gap-1">
            <div className="flex w-1/2 items-center">
              <input
                type="password"
                placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="h-[38px] w-full rounded-[5px] border border-[#B9B9C3] bg-backgroundSecondary py-[8px] pl-[15px] pr-[10px] disabled:bg-grayOne"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-1">
            <div className="flex w-1/2 items-center">
              <input
                type="password"
                placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="h-[38px] w-full rounded-[5px] border border-[#B9B9C3] bg-backgroundSecondary py-[8px] pl-[15px] pr-[10px] disabled:bg-grayOne"
              />
            </div>
          </div>
          <button
            onClick={() => setUpdatePassword(false)}
            className="w-[172px] rounded-[5px] text-white bg-primary px-[22px] py-[10px]"
          >
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdatePassword;
