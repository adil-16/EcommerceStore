"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  const navigateToOrderDetails = () => {
    router.push("/seller/order-return/123");
  };

  return (
    <div className="flex flex-col w-[100%] p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold my-5">Returns</h1>
      </div>
      <div className="shadow-lg p-5 w-[100%] rounded-xl">
        <h1 className="text-2xl font-bold my-5">List Return</h1>
        <h3 className="text-grayDark text-xl font-medium">188 Refund</h3>
        <hr className="border-2 border-grayLight my-5" />

        <div className="no-scrollbar w-full overflow-y-hidden">
          <table className="w-full table-auto overflow-hidden truncate bg-white">
            <thead>
              <tr className="border-b-[1px] border-dashed border-grayOne border-opacity-30 text-sm font-semibold">
                <th className="w-[30%] pb-[18px] pl-2 pt-[18px] text-left">
                  Order ID
                </th>
                <th className="w-[20%] pb-[18px] pl-2 pt-[18px] text-left">
                  Date Return
                </th>
                {/* <th className="pb-[8px] px-2 pt-[18px] text-center">Deal Name</th> */}
                <th className="px-2 pb-[18px] pt-[18px] text-center">
                  Name Customer
                </th>
                <th className="px-2 pb-[18px] pt-[18px] text-center">
                  Address
                </th>
                <th className="px-2 pb-[18px] pt-[18px] text-center">
                  Reason Return
                </th>
              </tr>
            </thead>
            <tbody>
              {/* 2 Dummy rows */}
              <tr
                onClick={navigateToOrderDetails}
                className="cursor-pointer border-b-[1px] border-dashed border-[#E4E4E4] hover:bg-blueLight"
              >
                <td className="w-[17.00%] rounded-tl-full rounded-bl-full truncate pl-2 pr-6 md:pr-2">
                  <div className="py-3">
                    <div className="flex flex-row items-center gap-x-2">
                      ODR-10022024-001
                    </div>
                  </div>
                </td>
                <td className="w-[17.00%] truncate pl-2 pr-6 md:pr-2">
                  <div className="py-3">
                    <div className="flex flex-row items-center gap-x-2">
                      <div className="flex flex-col gap-y-1">
                        <p className="overflow-hidden truncate whitespace-nowrap text-sm font-medium">
                          21, Feb 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="truncate px-2 text-center">
                  <p className="text-grayThree text-sm font-semibold">
                    Kamisato Ayaka
                  </p>
                </td>
                <td className="truncate px-2 text-center">
                  <p className="text-grayThree text-sm font-semibold">
                    123 Main St, Inazuma
                  </p>
                </td>
                <td className="truncate px-2 text-center rounded-tr-full rounded-br-full">
                  <p className="text-grayThree text-sm font-semibold">
                    Poor Product Quality
                  </p>
                </td>
              </tr>
              <tr className="cursor-pointer border-b-[1px] border-dashed border-[#E4E4E4] hover:bg-blueLight">
                <td className="w-[17.00%] rounded-tl-full rounded-bl-full truncate pl-2 pr-6 md:pr-2">
                  <div className="py-3">
                    <div className="flex flex-row items-center gap-x-2">
                      ODR-10022024-001
                    </div>
                  </div>
                </td>
                <td className="w-[17.00%] truncate pl-2 pr-6 md:pr-2">
                  <div className="py-3">
                    <div className="flex flex-row items-center gap-x-2">
                      <div className="flex flex-col gap-y-1">
                        <p className="overflow-hidden truncate whitespace-nowrap text-sm font-medium">
                          21, Feb 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="truncate px-2 text-center">
                  <p className="text-grayThree text-sm font-semibold">
                    Kamisato Ayaka
                  </p>
                </td>
                <td className="truncate px-2 text-center">
                  <p className="text-grayThree text-sm font-semibold">
                    123 Main St, Inazuma
                  </p>
                </td>
                <td className="truncate px-2 text-center rounded-tr-full rounded-br-full">
                  <p className="text-grayThree text-sm font-semibold">
                    Poor Product Quality
                  </p>
                </td>
              </tr>
              <tr
                onClick={navigateToOrderDetails}
                className="cursor-pointer border-b-[1px] border-dashed border-[#E4E4E4] hover:bg-blueLight"
              >
                <td className="w-[17.00%] rounded-tl-full rounded-bl-full truncate pl-2 pr-6 md:pr-2">
                  <div className="py-3">
                    <div className="flex flex-row items-center gap-x-2">
                      ODR-10022024-001
                    </div>
                  </div>
                </td>
                <td className="w-[17.00%] truncate pl-2 pr-6 md:pr-2">
                  <div className="py-3">
                    <div className="flex flex-row items-center gap-x-2">
                      <div className="flex flex-col gap-y-1">
                        <p className="overflow-hidden truncate whitespace-nowrap text-sm font-medium">
                          21, Feb 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="truncate px-2 text-center">
                  <p className="text-grayThree text-sm font-semibold">
                    Kamisato Ayaka
                  </p>
                </td>
                <td className="truncate px-2 text-center">
                  <p className="text-grayThree text-sm font-semibold">
                    123 Main St, Inazuma
                  </p>
                </td>
                <td className="truncate px-2 text-center rounded-tr-full rounded-br-full">
                  <p className="text-grayThree text-sm font-semibold">
                    Poor Product Quality
                  </p>
                </td>
              </tr>
              <tr
                onClick={navigateToOrderDetails}
                className="cursor-pointer border-b-[1px] border-dashed border-[#E4E4E4] hover:bg-blueLight"
              >
                <td className="w-[17.00%] rounded-tl-full rounded-bl-full truncate pl-2 pr-6 md:pr-2">
                  <div className="py-3">
                    <div className="flex flex-row items-center gap-x-2">
                      ODR-10022024-001
                    </div>
                  </div>
                </td>
                <td className="w-[17.00%] truncate pl-2 pr-6 md:pr-2">
                  <div className="py-3">
                    <div className="flex flex-row items-center gap-x-2">
                      <div className="flex flex-col gap-y-1">
                        <p className="overflow-hidden truncate whitespace-nowrap text-sm font-medium">
                          21, Feb 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="truncate px-2 text-center">
                  <p className="text-grayThree text-sm font-semibold">
                    Kamisato Ayaka
                  </p>
                </td>
                <td className="truncate px-2 text-center">
                  <p className="text-grayThree text-sm font-semibold">
                    123 Main St, Inazuma
                  </p>
                </td>
                <td className="truncate px-2 text-center rounded-tr-full rounded-br-full">
                  <p className="text-grayThree text-sm font-semibold">
                    Poor Product Quality
                  </p>
                </td>
              </tr>
              <tr
                onClick={navigateToOrderDetails}
                className="cursor-pointer border-b-[1px] border-dashed border-[#E4E4E4] hover:bg-blueLight"
              >
                <td className="w-[17.00%] rounded-tl-full rounded-bl-full truncate pl-2 pr-6 md:pr-2">
                  <div className="py-3">
                    <div className="flex flex-row items-center gap-x-2">
                      ODR-10022024-001
                    </div>
                  </div>
                </td>
                <td className="w-[17.00%] truncate pl-2 pr-6 md:pr-2">
                  <div className="py-3">
                    <div className="flex flex-row items-center gap-x-2">
                      <div className="flex flex-col gap-y-1">
                        <p className="overflow-hidden truncate whitespace-nowrap text-sm font-medium">
                          21, Feb 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="truncate px-2 text-center">
                  <p className="text-grayThree text-sm font-semibold">
                    Kamisato Ayaka
                  </p>
                </td>
                <td className="truncate px-2 text-center">
                  <p className="text-grayThree text-sm font-semibold">
                    123 Main St, Inazuma
                  </p>
                </td>
                <td className="truncate px-2 text-center rounded-tr-full rounded-br-full">
                  <p className="text-grayThree text-sm font-semibold">
                    Poor Product Quality
                  </p>
                </td>
              </tr>
              <tr
                onClick={navigateToOrderDetails}
                className="cursor-pointer border-b-[1px] border-dashed border-[#E4E4E4] hover:bg-blueLight"
              >
                <td className="w-[17.00%] rounded-tl-full rounded-bl-full truncate pl-2 pr-6 md:pr-2">
                  <div className="py-3">
                    <div className="flex flex-row items-center gap-x-2">
                      ODR-10022024-001
                    </div>
                  </div>
                </td>
                <td className="w-[17.00%] truncate pl-2 pr-6 md:pr-2">
                  <div className="py-3">
                    <div className="flex flex-row items-center gap-x-2">
                      <div className="flex flex-col gap-y-1">
                        <p className="overflow-hidden truncate whitespace-nowrap text-sm font-medium">
                          21, Feb 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="truncate px-2 text-center">
                  <p className="text-grayThree text-sm font-semibold">
                    Kamisato Ayaka
                  </p>
                </td>
                <td className="truncate px-2 text-center">
                  <p className="text-grayThree text-sm font-semibold">
                    123 Main St, Inazuma
                  </p>
                </td>
                <td className="truncate px-2 text-center rounded-tr-full rounded-br-full">
                  <p className="text-grayThree text-sm font-semibold">
                    Poor Product Quality
                  </p>
                </td>
              </tr>
              <tr
                onClick={navigateToOrderDetails}
                className="cursor-pointer border-b-[1px] border-dashed border-[#E4E4E4] hover:bg-blueLight"
              >
                <td className="w-[17.00%] rounded-tl-full rounded-bl-full truncate pl-2 pr-6 md:pr-2">
                  <div className="py-3">
                    <div className="flex flex-row items-center gap-x-2">
                      ODR-10022024-001
                    </div>
                  </div>
                </td>
                <td className="w-[17.00%] truncate pl-2 pr-6 md:pr-2">
                  <div className="py-3">
                    <div className="flex flex-row items-center gap-x-2">
                      <div className="flex flex-col gap-y-1">
                        <p className="overflow-hidden truncate whitespace-nowrap text-sm font-medium">
                          21, Feb 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="truncate px-2 text-center">
                  <p className="text-grayThree text-sm font-semibold">
                    Kamisato Ayaka
                  </p>
                </td>
                <td className="truncate px-2 text-center">
                  <p className="text-grayThree text-sm font-semibold">
                    123 Main St, Inazuma
                  </p>
                </td>
                <td className="truncate px-2 text-center rounded-tr-full rounded-br-full">
                  <p className="text-grayThree text-sm font-semibold">
                    Poor Product Quality
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
