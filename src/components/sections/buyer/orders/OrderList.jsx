import OrderField from "@/components/dropdowns/OrderField";
import React from "react";

const OrderList = ({ setState, orders, setOrderId }) => {
  return (
    <div className="flex flex-col gap-5 w-full p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold my-5">My Orders</h1>
        <div className="flex items-center gap-3">
          <p className="text-grayDark">Status</p>
          <OrderField />
        </div>
      </div>
      <hr />
      {orders?.length === 0 ? (
        <div className="flex justify-center items-center w-full h-full">
          <p className="text-grayDark">No orders found</p>
        </div>
      ) : (
        orders?.map((order, index) => (
          <div
            key={order.orderId || index}
            onClick={() => setState("details")} // you can customize this per order status
            className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 w-full"
          >
            <div className="flex justify-between items-center w-full h-[90px]">
              <div className="flex gap-3 items-center">
                <div>
                  <img
                    className="w-[90px] h-[90px] object-cover rounded-[10px]"
                    src={
                      order?.products[0].images[0] ||
                      "/images/order-avatar.jpeg"
                    }
                    alt="order"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-medium">Order # {order.orderId}</p>
                  <p className="text-sm">
                    {order.products.map((item) => item.title).join(", ")}
                  </p>
                  <div className="px-5 py-1 bg-tagGray border rounded-[30px] border-borderTag">
                    {order.status}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between h-full">
                <div className="rounded-[4px] px-3 py-1 bg-whiteLight">
                  {order.products.length} items
                </div>
                <button
                  className="rounded-[4px] bg-buttonGradient px-8 py-2 text-white"
                  onClick={() => setOrderId(order.orderId)}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderList;
