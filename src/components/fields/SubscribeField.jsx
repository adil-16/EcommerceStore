import { subEmail } from "@/utils/Svgs";
import React from "react";

const SubscribeField = ({ search, setSearch }) => {
  return (
    <div className="flex flex-row bg-white rounded-full px-3 items-center">
      {subEmail}
      <input
        type="email"
        placeholder="Enter your email"
        className="bg-transparent outline-none border-none ml-3 placeholder:text-black placeholder:text-opacity-40 "
      />
    </div>
  );
};

export default SubscribeField;
