"use client";
import React, { useState, useEffect } from "react";
import Dropdown from "../search/SearchDropdown";
import { useSelector } from "react-redux";

const NavSearchBar = ({ search, setSearch, isMobile = false, onClose, setOpen }) => {
  const products = useSelector((state) => state.product.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [inputFocused, setInputFocused] = useState(false);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    setDebounceTimeout(
      setTimeout(() => {
        filterSearch(event.target.value);
      }, 300)
    );
  };

  const filterSearch = (query) => {
    if (!query) {
      setFilteredProducts([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    if (isMobile) {
      const input = document.getElementById("mobile-search-input");
      if (input) {
        input.focus();
      }
    }
  }, [isMobile]);

  return (
    <div className={`relative ${isMobile ? "w-full" : "flex flex-row bg-searchBarBg rounded-[62px] px-4 py-3 w-full"}`}>
      <input
        id={isMobile ? "mobile-search-input" : "desktop-search-input"}
        type="text"
        placeholder="Search for products..."
        onChange={handleSearchChange}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setTimeout(() => setInputFocused(false), 200)}
        value={search}
        className={`bg-transparent outline-none border-none w-full placeholder:text-black placeholder:text-opacity-40 ${
          isMobile ? "border-b border-gray-200 pb-2 focus:border-black" : ""
        }`}
      />
      {(inputFocused || isMobile) && filteredProducts.length > 0 && (
        <Dropdown 
          products={filteredProducts} 
          setSearch={setSearch} 
          onClose={isMobile ? onClose : null}
          setOpen={setOpen}
        />
      )}
    </div>
  );
};

export default NavSearchBar;