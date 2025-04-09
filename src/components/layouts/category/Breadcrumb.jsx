import { breadCrumbArrowIcon } from "@/utils/Svgs";
import React from "react";
import Link from "next/link";

const Breadcrumb = ({ category }) => {
  return (
    <div className="flex flex-row items-center gap-x-3 flex-nowrap border-t border-t-black border-opacity-10 pt-6">
      <div className="flex flex-row gap-x-1 flex-nowrap items-center">
        <Link href="/">
          <p className="opacity-60 cursor-pointer">Home</p>
        </Link>
        <div className="p-4">{breadCrumbArrowIcon}</div>
      </div>
      <div className="flex flex-row gap-x-1 flex-nowrap items-center">
        <p>{category}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
