"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";
import { calendarIcon } from "@/svgs";

const SetDelieveryDateDrawer = ({ setDrawerOpen, open = true }) => {
  const handleClose = () => {
    setDrawerOpen((state) => !state);
  };
  const router = useRouter();

  const deleteProduct = async () => {};

  const [hour, setHour] = useState(12); // Default to 12-hour format
  const [minute, setMinute] = useState(0); // Default to 0 minutes
  const [isAM, setIsAM] = useState(true); // Default to AM

  // Handle hour change
  const handleHourChange = (e) => {
    const newHour = e.target.value ? parseInt(e.target.value) : 0;
    // Ensure hour stays within 1-12 range for 12-hour format
    if (newHour >= 1 && newHour <= 12) {
      setHour(newHour);
    }
  };

  // Handle minute change
  const handleMinuteChange = (e) => {
    const newMinute = e.target.value ? parseInt(e.target.value) : 0;
    // Ensure minute stays within 0-59 range
    if (newMinute >= 0 && newMinute <= 59) {
      setMinute(newMinute);
    }
  };

  // Toggle AM/PM
  const toggleAMPM = () => {
    setIsAM((prev) => !prev);
  };
  // State to store the date range: [startDate, endDate]
  const [dateRange, setDateRange] = useState([null, null]);
  const [isOpen, setIsOpen] = useState(true); // Track if calendar is open or not

  // Format the date range as "YYYY-MM-DD to YYYY-MM-DD"
  const formatRange = (start, end) => {
    if (start && end) {
      return `${dayjs(start).format("YYYY-MM-DD")} to ${dayjs(end).format(
        "YYYY-MM-DD"
      )}`;
    }
    return "Select Date Range";
  };

  // Handle date range change
  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-[999999]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-300 ease-in-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 overflow-hidden rounded-md">
        <div className="overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 flex w-full max-w-full items-center justify-center">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-[90%] transform transition duration-500 ease-in-out data-[closed]:opacity-0 md:w-[586px]"
            >
              <div className="flex flex-col items-center justify-between rounded-[10px] bg-white px-12 py-12 text-center shadow-xl md:px-[77px] md:py-[50px]">
                <div className="my-5 leading-[30px] flex flex-col gap-3">
                  <p className="text-sm font-medium">Add Time</p>
                  <div className="flex items-center justify-center space-x-3">
                    <input
                      value={hour}
                      onChange={handleHourChange}
                      className="w-[80px] h-[50px] font-bold text-2xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min={1}
                      max={12}
                    />

                    <span className="text-xl">:</span>

                    <input
                      value={"00"}
                      disabled
                      onChange={handleMinuteChange}
                      className="w-[80px] h-[50px] font-bold text-2xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min={0}
                      max={59}
                    />

                    <div className="flex items-center">
                      <button
                        onClick={toggleAMPM}
                        className={`p-3 text-sm font-medium rounded-bl-lg rounded-tl-lg transition-colors duration-200 ${
                          isAM
                            ? "bg-[#2196F3] text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        AM
                      </button>
                      <button
                        onClick={toggleAMPM}
                        className={`p-3 text-sm font-medium rounded-br-lg rounded-tr-lg transition-colors duration-200 ${
                          !isAM
                            ? "bg-[#2196F3] text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        PM
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-medium">Select Date</p>

                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <DatePicker
                        selected={dateRange[0]}
                        onChange={handleDateChange}
                        startDate={dateRange[0]}
                        endDate={dateRange[1]}
                        selectsRange
                        dateFormat="yyyy-MM-dd"
                        className="p-2 border rounded-md w-[300px] mt-2 focus:shadow-datePickerShadow text-grayDark text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholderText="Pick The Date"
                        onClickOutside={() => setIsOpen(false)}
                        isClearable
                      />
                      <div className="absolute top-[40%] right-2">
                        {calendarIcon}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full items-center gap-[19px]">
                  <button
                    onClick={handleClose}
                    className="w-full rounded-[44px] border border-black px-[22px] py-[10px] font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-full rounded-[44px] bg-buttonGradient px-[22px] py-[10px] font-semibold text-white"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SetDelieveryDateDrawer;
