"use client";
import React from "react";
import Tabs from "./utils/Tabs";
import DetailTab from "./utils/DetailTab";
import ReviewTab from "./utils/ReviewTab";
import ReturnTab from "./utils/ReturnTab";
import ProductsWrappers from "../homepage/ProductsWrappers";

const OtherDetails = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  return (
    <div className="w-full sm:mt-20 mt-12">
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {selectedTab === 0 && <DetailTab />}

      {selectedTab === 1 && <ReviewTab />}

      {selectedTab === 2 && <ReturnTab />}

      <ProductsWrappers title={"You might also like"} viewAll={false} />
    </div>
  );
};

export default OtherDetails;
