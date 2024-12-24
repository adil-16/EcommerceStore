"use client";
import { Select } from "@headlessui/react";
import React, { useMemo, useState } from "react";
import countryList from "react-select-country-list";

const CountryField = (props) => {
  const options = useMemo(() => countryList().getData(), []);

  return (
    <div className="flex w-full flex-col gap-y-2">
      <label className="text-base font-medium text-black" htmlFor="email">
        {props.label}
      </label>
      <Select
        onChange={(e) => props.setValue(e.target.value)}
        value={props.value}
        className="block w-full rounded-md border focus:outline-placeholder px-4 py-3 text-xs text-black placeholder:text-placeholder font-medium"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default CountryField;
