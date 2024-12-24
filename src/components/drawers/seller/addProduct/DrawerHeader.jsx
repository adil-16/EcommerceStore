import { crossIcon } from "@/svgs";
import React from "react";

const DrawerHeader = ({ handleClose }) => {
  return (
    <>
      <div className="text-2xl font-semibold">Add Product</div>
      <button
        onClick={handleClose}
        className="flex justify-between gap-2 rounded text-center font-semibold text-black"
      >
        {crossIcon}
      </button>
    </>
  );
};

export default DrawerHeader;
