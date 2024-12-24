import React from "react";
import SetupProfile from "./SetupProfile";
import UpdatePassword from "./UpdatePassword";
import DeleteAccount from "./DeleteAccount";

const Settings = () => {
  return (
    <div className="flex w-full flex-col gap-[30px]">
      <SetupProfile />
      <UpdatePassword />
      <DeleteAccount />
    </div>
  );
};

export default Settings;
