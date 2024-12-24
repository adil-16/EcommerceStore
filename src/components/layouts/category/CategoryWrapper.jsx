import React from "react";
import Filters from "./Filters";
import ProductList from "./ProductList";

const CategoryWrapper = () => {
  return (
    <div className="flex flex-row w-full flex-nowrap mt-10 gap-x-6 justify-start items-start gap-y-6">
      <Filters />

      <ProductList />
      {/* <ProductDetails /> */}
    </div>
  );
};

export default CategoryWrapper;
