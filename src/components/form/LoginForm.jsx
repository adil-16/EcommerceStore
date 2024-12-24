"use client";
import React from "react";
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";
import Link from "next/link";
import CommonButton from "../buttons/CommonButton";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

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

      <div className="flex w-full flex-row justify-end">
        <Link
          href="/forget-password"
          className="cursor-pointer text-xs font-medium text-black transition-opacity duration-300 ease-in hover:opacity-75"
        >
          Forgot Password?
        </Link>
      </div>

      <CommonButton
        type="submit"
        label="Log In"
        className="py-3 text-base "
        disabled={loading}
      />

      <div className="flex flex-row justify-center gap-x-2">
        <p className="text-secondaryText">
          Don’t have an account?
          <Link
            href="/signup"
            className="cursor-pointer font-medium transition-opacity duration-300 ease-in hover:opacity-75 ml-1"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
