"use client";

import React from "react";
import TextField from "../fields/TextField";
import CommonButton from "../buttons/CommonButton";
import { useRouter } from "next/navigation";
import ProfilePicker from "../fields/ProfilePicker";

const CompleteProfileForm = () => {
  const router = useRouter();
  const [profile, setProfile] = React.useState(null);
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleComplete = () => {
    router.push("/success");
  };

  return (
    <div className="flex flex-col mt-5 gap-y-5">
      <div className="w-full justify-center flex">
        <ProfilePicker setProfile={setProfile} profile={profile} />
      </div>
      <TextField
        label="User name"
        name="User name"
        placeholder="Enter brand name"
        text={name}
        setText={(e) => setName(e.target.value)}
      />

      <TextField
        label="Phone number"
        name="Phone number"
        placeholder="Enter number"
        text={number}
        setText={(e) => setNumber(e.target.value)}
      />

      <CommonButton
        type="submit"
        label="Complete"
        className="py-3 mt-6 text-base "
        disabled={loading}
        onClick={handleComplete}
      />
    </div>
  );
};

export default CompleteProfileForm;
