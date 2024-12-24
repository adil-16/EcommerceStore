import SelectField from "@/components/dropdowns/SelectField";
import SearchField from "@/components/fields/SearchField";
import React from "react";

const TableUpper = ({ setSearchTerm, onFilterChange }) => {
  return (
    <div className="flex flex-row items-center justify-between gap-2 truncate bg-white px-2 py-[20px] md:flex-row md:gap-0 lg:gap-0">
      <div>
        <h3 className="font-semibold text-lg">Product Orders</h3>
        <p className="text-grayDark font-semibold text-sm">
          Avg.57 order per day
        </p>
      </div>
      <div className="flex flex-row justify-end items-center gap-2 lg:gap-3">
        <SelectField onFilterChange={onFilterChange} />
        <SearchField setSearchTerm={setSearchTerm} placeholder={"Search"} />
      </div>
    </div>
  );
};

export default TableUpper;
