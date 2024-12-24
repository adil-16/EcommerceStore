"use client";
import React from "react";
import Card from "./Card";

const CardsRow = ({
  totalUsers,
  totalPosts,
  percentageUsers,
  percentagePosts,
}) => {
  return (
    <div className="hidden lg:flex flex-col lg:flex-row lg:w-[100%]">
      <div className="flex flex-col gap-5 lg:w-[100%]">
        <Card
          title={totalUsers}
          content={"Total orders"}
          percentage={percentageUsers}
        />
        <Card
          title={totalPosts}
          content={"Pending orders"}
          percentage={percentagePosts}
        />
      </div>
    </div>
  );
};

export default CardsRow;
