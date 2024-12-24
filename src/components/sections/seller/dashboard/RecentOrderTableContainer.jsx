"use client";

import TableUpper from "./TableUpper";

import React, { useEffect, useState } from "react";
import StatusChanger from "@/components/dropdowns/StatusChanger";

const RecentOrderTableContainer = ({ users }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <TableUpper
      // setSearchTerm={setSearchTerm}
      // onFilterChange={handleItemsPerPageChange}
      />
      <div className="no-scrollbar w-full overflow-y-hidden">
        <table className="w-full table-auto overflow-hidden truncate bg-white">
          <thead>
            <tr className="border-b-[1px] border-dashed border-grayOne border-opacity-30 text-sm font-semibold">
              <th className="w-[30%] pb-[18px] pl-2 pt-[18px] text-left">
                ORDER ID
              </th>
              <th className="w-[20%] pb-[18px] pl-2 pt-[18px] text-left">
                CREATED
              </th>
              {/* <th className="pb-[8px] px-2 pt-[18px] text-center">Deal Name</th> */}
              <th className="px-2 pb-[18px] pt-[18px] text-center">CUSTOMER</th>
              <th className="px-2 pb-[18px] pt-[18px] text-center">PRICE</th>
              <th className="px-2 pb-[18px] pt-[18px] text-center">STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="cursor-pointer border-b-[1px] border-dashed border-[#E4E4E4] hover:bg-[#f8f7f7]">
              <td className="w-[17.00%] truncate pl-2 pr-6 md:pr-2">
                <div className="py-3">
                  <div className="flex flex-row items-center gap-x-2">
                    # XHU-463
                  </div>
                </div>
              </td>
              <td className="w-[17.00%] truncate pl-2 pr-6 md:pr-2">
                <div className="py-3">
                  <div className="flex flex-row items-center gap-x-2">
                    <div className="flex flex-col gap-y-1">
                      <p className="overflow-hidden truncate whitespace-nowrap text-sm font-medium">
                        7 min ago
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="truncate px-2 text-center">
                <p className="text-grayThree text-sm font-semibold">
                  Albert Flores
                </p>
              </td>
              <td className="truncate px-2 text-center">
                <p className="text-grayThree text-sm font-semibold">$ 630.00</p>
              </td>

              <td className="items-center justify-center truncate text-center">
                <div
                  className={`bg-notPickedBg text-notPickedText flex justify-center rounded-[4px] p-1 text-xs font-semibold`}
                >
                  <StatusChanger
                    status="active"
                    userId="dummy-id"
                    onStatusChange={() => {}}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RecentOrderTableContainer;
