"use client";
import { Field, Select } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import Header from "./utils/Header";
import ProductCard from "@/components/cards/ProductCard";
import FilterModal from "./FilterModal";
import Pagination from "./Pagination";
import { products } from "@/utils/products";

const ProductList = ({ appliedFilters }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isOpen, setIsOpen] = useState(false);
  const [totalProducts, setTotalProducts] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(9);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    let updated = products;
    const { selectedColor, selectedSize } = appliedFilters;

    // Price filter
    if (appliedFilters?.priceRange) {
      const [minPrice, maxPrice] = appliedFilters.priceRange;
      updated = updated.filter(
        (product) => product?.price >= minPrice && product?.price <= maxPrice
      );
    }

    // Color filter
    if (selectedColor) {
      updated = updated.filter((product) =>
        product.colors?.some(
          (color) => color.toLowerCase() === selectedColor.toLowerCase()
        )
      );
    }

    // Size filter
    if (selectedSize) {
      updated = updated.filter((product) =>
        product.sizes?.some(
          (size) => size.toLowerCase() === selectedSize.toLowerCase()
        )
      );
    }

    setFilteredProducts(updated);
  }, [appliedFilters, products]);

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="flex flex-row sm:w-[calc(100%-200px)] w-full flex-wrap gap-x-6 justify-between gap-y-6">
      <Header openModal={() => setIsOpen(true)} />

      <div className="flex flex-row w-full flex-wrap gap-x-6 justify-start gap-y-6">
        {currentProducts.length ? (
          currentProducts.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))
        ) : (
          <p className="text-lg text-gray-500">No products found</p>
        )}
      </div>

      <Pagination
        perPage={perPage}
        totalData={filteredProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      <FilterModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
};

export default ProductList;
