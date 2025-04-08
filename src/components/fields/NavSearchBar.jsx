import { searchIcon } from "@/utils/Svgs";
import React, { useState } from "react";
import Dropdown from "../search/SearchDropdown";
import { useSelector } from "react-redux";

const NavSearchBar = ({ search, setSearch }) => {
  const products = useSelector((state) => state.product.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

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

  return (
    <div className="relative sm:flex flex-row bg-searchBarBg rounded-[62px] px-4 py-3 w-[50%] hidden">
      {searchIcon}
      <input
        type="text"
        placeholder="Search for products..."
        onChange={handleSearchChange}
        value={search}
        className="bg-transparent outline-none border-none ml-3 w-full placeholder:text-black placeholder:text-opacity-40"
      />
      {filteredProducts.length > 0 && (
        <Dropdown products={filteredProducts} setSearch={setSearch} />
      )}
    </div>
  );
};

export default NavSearchBar;
