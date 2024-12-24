import React, { useState } from "react";
import OrderList from "./OrderList";
import ReturnOrderList from "./ReturnOrderList";
import OrderDetails from "./OrderDetails";
import ReturnAndRefund from "./ReturnAndRefund";
import RefundBill from "./RefundBill";
import RefundDetails from "./RefundDetails";
import RefundFileUpload from "./RefundFileUpload";
import ReverseDetails from "./ReverseDetails";
import OrderDetailPacked from "./OrderDetailPacked";
import LoadMoreButton from "@/components/buttons/LoadMoreButton";

const Orders = () => {
  const [state, setState] = useState("list");

  return (
    <div>
      <div className="flex w-full flex-col my-10 border shadow-md rounded-[12px] px-5 py-5 md:pb-20 gap-[30px]">
        {state === "list" && <OrderList setState={setState} />}
        {state === "detailsPacked" && <OrderDetailPacked setState={setState} />}
        {/* <ReturnOrderList /> */}
        {state === "details" && <OrderDetails setState={setState} />}
        {state === "return" && <ReturnAndRefund setState={setState} />}
        {state === "bill" && <RefundBill setState={setState} />}
        {state === "refundDetails" && <RefundDetails setState={setState} />}
        {state === "upload" && <RefundFileUpload setState={setState} />}
        {state === "reverse" && <ReverseDetails />}
      </div>
      {/* <LoadMoreButton /> */}
    </div>
  );
};

export default Orders;
