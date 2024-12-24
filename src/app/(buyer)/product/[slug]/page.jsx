import Breadcrumb from "@/components/layouts/product/Breadcrumb";
import OtherDetails from "@/components/layouts/product/OtherDetails";
import ProductWrapper from "@/components/layouts/product/ProductWrapper";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = ({ params }) => {
  const { slug } = params;
  return (
    <div className="flex flex-col">
      <div className="pt-28 lg:px-[100px] md:px-8 px-4 w-full flex flex-col">
        <Breadcrumb category={"T-shirts"} />

        <ProductWrapper />

        <OtherDetails />
      </div>
    </div>
  );
};

export default page;
