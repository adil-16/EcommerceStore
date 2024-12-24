"use client";
import AddProductDrawer from "@/components/drawers/seller/addProduct/AddProductDrawer";
import ProductCard from "@/components/sections/seller/products/ProductCard";
import { addProductIcon } from "@/svgs";
import React, { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openAddProductDrawer = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div className="flex flex-col w-[100%] p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold my-5">Product</h1>
        <button
          onClick={openAddProductDrawer}
          className="text-primary flex gap-2 items-center rounded-lg px-3 py-2 bg-[#f8ffed]"
        >
          {addProductIcon}
          Add product
        </button>
      </div>
      <div className="shadow-lg p-5 w-[100%] rounded-xl">
        <h1 className="text-2xl font-bold my-5">Add Product</h1>
        <hr className="border-grayLight p-5" />
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <AddProductDrawer open={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Page;
