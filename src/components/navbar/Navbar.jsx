"use client";
import React, { useEffect } from "react";
import NavSearchBar from "../fields/NavSearchBar";
import Logo from "./utils/Logo";
import Links from "./utils/Links";
import OptionsWrapper from "./utils/OptionsWrapper";
import MobileNav from "./utils/MobileNav";

const Navbar = () => {
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="fixed top-0 bg-white z-50 flex flex-row w-full lg:px-[100px] md:px-8 px-4 pt-4 pb-3 items-center lg:gap-x-10 md:gap-x-7 gap-x-4 justify-between truncate">
      {/* Hamburger */}

      {/* logo */}
      <Logo open={open} setOpen={setOpen} />

      {/* links */}

      <Links />

      {/* search bar */}
      <NavSearchBar search={search} setSearch={setSearch} />

      {/* options */}
      <OptionsWrapper />

      {open && <MobileNav setOpen={setOpen} />}
    </div>
  );
};

export default Navbar;
