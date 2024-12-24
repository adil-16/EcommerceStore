"use client";
import React from "react";
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";
import Link from "next/link";
import CommonButton from "../buttons/CommonButton";
import DropdownField from "../fields/DropdownField";
import CountryField from "../fields/CountryField";
import TextField from "../fields/TextField";
import { useRouter } from "next/navigation";

const ProfileSetupForm = () => {
  const router = useRouter();
  const [type, setType] = React.useState("");
  const [value, setValue] = React.useState("");
  const [id, setId] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleVerify = () => {
    router.push("/complete-profile");
  };

  return (
    <div className="flex flex-col mt-5 gap-y-5">
      <DropdownField
        label="Account Type"
        name="country"
        value={type}
        setValue={setType}
      />

      <CountryField
        label="Country"
        name="country"
        value={value}
        setValue={setValue}
      />

      <TextField
        label="Country ID"
        name="Country ID"
        placeholder="Enter Country ID"
        text={id}
        setText={(e) => setId(e.target.value)}
      />

      <CommonButton
        type="submit"
        label="Verify"
        className="py-3 mt-6 text-base "
        disabled={loading}
        onClick={handleVerify}
      />
    </div>
  );
};

export default ProfileSetupForm;
