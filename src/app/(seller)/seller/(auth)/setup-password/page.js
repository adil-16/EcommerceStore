"use client";
import React, { useState } from "react";
import { whiteLoader } from "@/svgs"; // Import your loader SVG
import PasswordField from "@/components/fields/PasswordField";
import { useRouter } from "next/navigation";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const navigateToProfileScreen = () => {
    router.push("/seller/setup-profile");
  };

  return (
    <div className="mx-auto p-5 lg:px-16 flex flex-col gap-5">
      <img className="w-[160px] h-[60px]" src="/ausrum.png" />
      <h3 className="text-3xl font-bold">Create Password</h3>
      <p className="text-grayDark text-lg">
        Create a password with 8+ characters using letters, numbers.
      </p>
      <hr className="border-grayLight" />

      <div className="flex flex-col gap-5">
        <PasswordField
          label="Password"
          name="password"
          placeholder="Enter password"
          password={password}
          setPassword={(e) => setPassword(e.target.value)}
        />
        <PasswordField
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Enter password"
          password={confirmPassword}
          setPassword={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button
        onClick={navigateToProfileScreen}
        className="flex justify-center transform active:translate-y-1 transition-all shadow-buttonShadow bg-primary text-white font-semibold py-2 rounded hover:bg-primaryHover gap-2 lg:w-[100%] relative"
        // disabled={loading}
      >
        {loading && <div className="animate-spin">{whiteLoader}</div>}
        {!loading && "Continue"} {/* Show "Login" text only when not loading */}
      </button>
    </div>
  );
};

export default Page;
