import { searchIcon } from "@/utils/Svgs";
import React from "react";

const NavSearchBar = ({ search, setSearch }) => {
  return (
    <div className="sm:flex flex-row bg-searchBarBg rounded-[62px] px-4 py-3 w-[50%] hidden">
      {searchIcon}
      <input
        type="text"
        placeholder="Search for products..."
        className="bg-transparent outline-none border-none ml-3 w-full placeholder:text-black placeholder:text-opacity-40"
      />
    </div>
  );
};

export default NavSearchBar;
