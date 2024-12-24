"use client";
import React, { useState } from "react";
import { chevronRight } from "@/svgs"; // Import your loader SVG
import Link from "next/link";

const Page = () => {
  return (
    <div className="mx-auto p-5 lg:px-16 flex flex-col gap-5 text-center">
      <img className="w-[160px] h-[60px]" src="/images/logo.png" />
      <h3 className="text-3xl font-bold">Account Successfully Created! 🎉</h3>
      <p className="text-grayDark text-lg">
        Welcome to Afriva – Your shopping experience just got better!
        You&apos;ve received a request from the admin to create your seller
        account. Please fill in the necessary details below.
      </p>

      <Link
        href="/seller"
        className="flex cursor-pointer items-center text-primary justify-center gap-[15px] rounded-[44px] px-[22px] py-[10px] text-2xl font-semibold"
      >
        <div>Go To Dashboard</div>
        <div>{chevronRight}</div>
      </Link>
    </div>
  );
};

export default Page;
