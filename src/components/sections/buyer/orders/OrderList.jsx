import OrderField from "@/components/dropdowns/OrderField";
import React from "react";

const OrderList = ({ setState }) => {
  return (
    <div className="flex flex-col gap-5 w-[100%] p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold my-5">My Orders</h1>
        <div className="flex items-center gap-3">
          <p className="text-grayDark">Status</p>
          <OrderField />
        </div>
      </div>
      <hr />
      <div
        onClick={() => setState("details")}
        className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 lg:w-[100%]"
      >
        <div className="flex justify-between items-center w-full h-[90px]">
          <div className="flex gap-3 items-center">
            <div>
              <img
                className="w-[90px] h-[90px] object-cover rounded-[10px]"
                src="/images/order-avatar.jpeg"
              />
            </div>
            <div className="flex flex-col gap-1 items-start">
              <p className="font-medium">Order # 9254345</p>
              <p className="text-sm">1 Skirt, 1 Gucci Bag, 1 Glasses</p>
              <div className="px-5 py-1 bg-tagGray border rounded-[30px] border-borderTag">
                Packed
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between h-full">
            <div className="rounded-[4px] px-3 py-1 bg-whiteLight">3 items</div>
            <button
              // onClick={navigateToOrderPage}
              className="rounded-[4px] bg-buttonGradient px-8 py-2 text-white"
            >
              View
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => setState("reverse")}
        className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 lg:w-[100%]"
      >
        <div className="flex justify-between items-center w-full h-[90px]">
          <div className="flex gap-3 items-center">
            <div>
              <img
                className="w-[90px] h-[90px] object-cover rounded-[10px]"
                src="/images/order-avatar.jpeg"
              />
            </div>
            <div className="flex flex-col gap-1 items-start">
              <p className="font-medium">Order # 9254345</p>
              <p className="text-sm">1 Skirt, 1 Gucci Bag, 1 Glasses</p>
              <div className="px-5 py-1 bg-tagGray border rounded-[30px] border-borderTag">
                Packed
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between h-full">
            <div className="rounded-[4px] px-3 py-1 bg-whiteLight">3 items</div>
            <button
              // onClick={navigateToOrderPage}
              className="rounded-[4px] bg-buttonGradient px-8 py-2 text-white"
            >
              View
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => setState("detailsPacked")}
        className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 lg:w-[100%]"
      >
        <div className="flex justify-between items-center w-full h-[90px]">
          <div className="flex gap-3 items-center">
            <div>
              <img
                className="w-[90px] h-[90px] object-cover rounded-[10px]"
                src="/images/order-avatar.jpeg"
              />
            </div>
            <div className="flex flex-col gap-1 items-start">
              <p className="font-medium">Order # 9254345</p>
              <p className="text-sm">1 Skirt, 1 Gucci Bag, 1 Glasses</p>
              <div className="px-5 py-1 bg-tagGray border rounded-[30px] border-borderTag">
                Packed
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between h-full">
            <div className="rounded-[4px] px-3 py-1 bg-whiteLight">3 items</div>
            <button
              // onClick={navigateToOrderPage}
              className="rounded-[4px] bg-buttonGradient px-8 py-2 text-white"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
