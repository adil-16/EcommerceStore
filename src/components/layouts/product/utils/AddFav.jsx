"use client";
import { favIcon } from "@/utils/Svgs";
import React from "react";

const AddFav = () => {
  const [isFav, setIsFav] = React.useState(false);
  return (
    <div
      onClick={() => setIsFav(!isFav)}
      className={`w-10 h-10 rounded-full cursor-pointer flex justify-center items-center transition-all duration-300 ease-in-out min-w-10 min-h-10 ${
        isFav
          ? "bg-redColor bg-opacity-10 text-redColor"
          : "bg-grayMid text-grayMid bg-opacity-10 "
      }hover:bg-redColor hover:bg-opacity-10 hover:text-redColor`}
    >
      {favIcon}
    </div>
  );
};

export default AddFav;
