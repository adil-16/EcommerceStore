"use client";
import { Field, Select } from "@headlessui/react";
import React, { useState } from "react";
import Header from "./utils/Header";
import ProductCard from "@/components/cards/ProductCard";
import FilterModal from "./FilterModal";
import Pagination from "./Pagination";
import { products } from "@/utils/products";

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [totalProducts, setTotalProducts] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(9);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-row sm:w-[calc(100%-200px)] w-full flex-wrap gap-x-6 justify-between gap-y-6">
      <Header openModal={() => setIsOpen(true)} />

      <div className="flex flex-row w-full flex-wrap gap-x-6 justify-start gap-y-6">
        {products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>

      <Pagination
        perPage={perPage}
        totalData={totalProducts}
        paginate={paginate}
        currentPage={currentPage}
      />

      <FilterModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
};

export default ProductList;
