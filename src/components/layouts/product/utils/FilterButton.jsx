import { filterIcon } from "@/utils/Svgs";
import React from "react";

const FilterButton = () => {
  return (
    <div className="w-12 h-12 min-w-12 min-h-12 rounded-full flex justify-center items-center bg-searchBarBg">
      {filterIcon}
    </div>
  );
};

export default FilterButton;
