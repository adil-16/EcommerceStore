import { arrowDownGray } from "@/svgs";
import { useState } from "react";

const OrderField = ({ onFilterChange }) => {
  const [typeFilter, setTypeFilter] = useState("all");

  return (
    <form className="flex w-[150px] items-center rounded-md border border-fieldBorder">
      <div className="relative h-full w-full">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-grayFive text-grayThree block h-full w-full appearance-none rounded-lg bg-backgroundSecondary px-4 py-3 text-xs focus:border-grayTwo focus:ring-grayTwo"
        >
          <option value="" className="text-base">
            Active order
          </option>
          <option value="pending" className="text-base">
            Complete orders
          </option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {arrowDownGray}
        </div>
      </div>
    </form>
  );
};

export default OrderField;
