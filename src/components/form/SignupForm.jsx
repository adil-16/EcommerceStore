"use client";
import React from "react";
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";
import Link from "next/link";
import CommonButton from "../buttons/CommonButton";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = () => {
    router.push("/email-verification");
  };

  return (
    <div className="flex flex-col mt-5 gap-y-4">
      <EmailField
        label="Email"
        name="email"
        placeholder="Enter email"
        email={email}
        setEmail={(e) => setEmail(e.target.value)}
      />

      <PasswordField
        label="Password"
        name="password"
        placeholder="Enter password"
        password={password}
        setPassword={(e) => setPassword(e.target.value)}
      />

      <PasswordField
        label="Confirm Password"
        name="password"
        placeholder="Enter password"
        password={confirmPassword}
        setPassword={(e) => setConfirmPassword(e.target.value)}
      />

      <CommonButton
        onClick={onSubmit}
        type="submit"
        label="Continue"
        className="py-3 text-base "
        disabled={loading}
      />

      <div className="flex flex-row justify-center gap-x-2">
        <p className="text-secondaryText">
          I already have an account!
          <Link
            href="/login"
            className="cursor-pointer font-medium transition-opacity duration-300 ease-in hover:opacity-75 ml-1"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
