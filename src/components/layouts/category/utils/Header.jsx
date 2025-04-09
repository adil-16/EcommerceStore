"use client";
import { Field, Select } from "@headlessui/react";
import React from "react";
import ShowFilterButton from "./ShowFilterButton";

const Header = ({ openModal, onSortChange }) => {
  const [value, setValue] = React.useState("Select");

  const handleChange = (e) => {
    setValue(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div className="flex flex-row items-center justify-between gap-1 flex-wrap w-full">
      <p className="font-bold text-3xl">Casual</p>

      <div className="flex flex-row items-center gap-x-3">
        <p className="opacity-60">Showing 1-10 of 100 Products</p>

        <div className="flex flex-row items-center gap-x-1">
          <p className="opacity-60">Sort by:</p>

          <Field>
            <Select
              onChange={handleChange}
              value={value}
              className="block w-full text-black"
              name="Select Account Type"
            >
              <option>Select</option>
              <option>Price</option>
              <option>Ratings</option>
            </Select>
          </Field>
        </div>

        <ShowFilterButton openModal={openModal} />
      </div>
    </div>
  );
};

export default Header;