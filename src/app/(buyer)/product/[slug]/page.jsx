"use client";

import Breadcrumb from "@/components/layouts/product/Breadcrumb";
import OtherDetails from "@/components/layouts/product/OtherDetails";
import ProductWrapper from "@/components/layouts/product/ProductWrapper";
import Navbar from "@/components/navbar/Navbar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "@/store/slices/productSlice";

const page = ({ params }) => {
  const { slug } = React.use(params);
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.selectedProduct);

  useEffect(() => {
    if (!product || product.id !== parseInt(slug)) {
      dispatch(getProductById(parseInt(slug)));
    }
  }, [slug, dispatch, product]);

  return (
    <div className="flex flex-col">
      <div className="pt-28 lg:px-[100px] md:px-8 px-4 w-full flex flex-col">
        <Breadcrumb category={"T-shirts"} />

        <ProductWrapper product={product} />

        <OtherDetails product={product} />
      </div>
    </div>
  );
};

export default page;
