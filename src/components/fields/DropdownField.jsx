import { Field, Label, Select } from "@headlessui/react";
import React from "react";

const DropdownField = (props) => {
  return (
    <div className="flex w-full flex-col gap-y-2">
      <label className="text-base font-medium text-black" htmlFor="email">
        {props.label}
      </label>
      <Field>
        <Select
          onChange={(e) => props.setValue(e.target.value)}
          value={props.value}
          className="block w-full rounded-md border focus:outline-placeholder px-4 py-3 text-xs text-black placeholder:text-placeholder font-medium"
          name="Select Account Type"
        >
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 3</option>
          <option>Option 3</option>
          <option>Option 3</option>
        </Select>
      </Field>
    </div>
  );
};

export default DropdownField;
