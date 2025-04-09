"use client";
import React, { useEffect } from "react";
import NavSearchBar from "../fields/NavSearchBar";
import Logo from "./utils/Logo";
import Links from "./utils/Links";
import OptionsWrapper from "./utils/OptionsWrapper";
import MobileNav from "./utils/MobileNav";
import { searchIcon } from "@/utils/Svgs";

const Navbar = () => {
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [showMobileSearch, setShowMobileSearch] = React.useState(false);

  useEffect(() => {
    if (open || showMobileSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, showMobileSearch]);

  return (
    <>
      <div className="fixed top-0 bg-white z-50 flex flex-row w-full lg:px-[100px] md:px-8 px-4 pt-4 pb-3 items-center lg:gap-x-10 md:gap-x-7 gap-x-4 justify-between whitespace-nowrap">
        {/* Hamburger */}
        {/* logo */}
        <Logo open={open} setOpen={setOpen} />

        {/* links */}
        <Links />

        {/* search bar - desktop (hidden on mobile) */}
        <div className="hidden sm:block w-[50%]">
          <NavSearchBar search={search} setSearch={setSearch} />
        </div>

        {/* mobile search icon (hidden on desktop) */}
        <div className="sm:hidden flex items-center">
          <button onClick={() => setShowMobileSearch(true)}>
            {searchIcon}
          </button>
        </div>

        {/* options - hidden on mobile since they'll be in MobileNav */}
        <div className="hidden sm:flex">
          <OptionsWrapper />
        </div>

        {open && <MobileNav setOpen={setOpen} />}
      </div>

      {/* Mobile search overlay */}
      {showMobileSearch && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 pt-4 px-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => setShowMobileSearch(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h2 className="text-lg font-semibold">Search</h2>
            <div className="w-6"></div>
          </div>
          <NavSearchBar 
            search={search} 
            setSearch={setSearch} 
            isMobile={true}
            onClose={() => setShowMobileSearch(false)}
            setOpen={setOpen}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;