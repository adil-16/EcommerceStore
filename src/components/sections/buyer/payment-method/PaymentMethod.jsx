import AddPaymentMethodDrawer from "@/components/drawers/buyer/add-payment-method/AddPaymentMethodDrawer";
import RemovePaymentMethodDrawer from "@/components/drawers/buyer/remove-payment-method/RemovePaymentMethodDrawer";
import Image from "next/image";
import React, { useState } from "react";

const PaymentMethod = () => {
  const [openRemoveMethod, setOpenRemoveMethod] = useState(false);
  const [openAddCard, setOpenAddCard] = useState(false);

  const removePaymentMethod = () => {
    setOpenRemoveMethod(true);
  };

  const addPaymentMethod = () => {
    setOpenAddCard(true);
  };

  return (
    <div className="flex flex-col mt-4 p-3">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-2xl text-blackTwo mb-2">
          Payment Methods
        </h1>
        <button
          onClick={addPaymentMethod}
          className="rounded-[44px] bg-primary text-white px-[15px] py-[10px] text-base font-semibold md:px-[36.5px] md:py-[14px]"
        >
          New Payment Method
        </button>
      </div>
      <hr className="my-6" />
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <p className="font-semibold text-lg">Marcus Morris</p>
              <div
                className={`bg-whiteLightest font-semibold text-greenText rounded-[6px] text-xs px-4 py-1`}
              >
                Primary
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="rounded-[6px] p-1 bg-whiteDark">
                <Image
                  src="/images/visa-logo.png"
                  className="md:w-[40px] w-[30px] h-auto"
                  width={40}
                  height={40}
                  alt="Visa"
                />
              </div>
              <div>
                <p className="font-semibold">Mastercard **** 1290</p>
                <p className="text-grayDark font-semibold">
                  Card expires at 09/24
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={removePaymentMethod}
              className="bg-whiteLightest font-bold rounded-[6px] text-xs px-3 py-2"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <p className="font-semibold text-lg">Marcus Morris</p>
              <div
                className={`bg-whiteLightest font-semibold rounded-[6px] text-xs px-4 py-1`}
              >
                primary
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/images/visa-logo.png"
                width={50}
                height={50}
                alt="Visa"
              />
              <div>
                <p className="font-semibold">Mastercard **** 1290</p>
                <p className="text-grayDark font-semibold">
                  Card expires at 09/24
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-whiteLightest font-bold rounded-[6px] text-xs px-3 py-2">
              Remove
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <p className="font-semibold text-lg">Marcus Morris</p>
              <div
                className={`bg-whiteLightest font-semibold rounded-[6px] text-xs px-4 py-1`}
              >
                primary
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/images/visa-logo.png"
                width={50}
                height={50}
                alt="Visa"
              />
              <div>
                <p className="font-semibold">Mastercard **** 1290</p>
                <p className="text-grayDark font-semibold">
                  Card expires at 09/24
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-whiteLightest font-bold rounded-[6px] text-xs px-3 py-2">
              Remove
            </button>
          </div>
        </div>
      </div>

      <hr className="my-6" />

      <AddPaymentMethodDrawer
        setDrawerOpen={setOpenAddCard}
        open={openAddCard}
      />
      <RemovePaymentMethodDrawer
        setDrawerOpen={setOpenRemoveMethod}
        open={openRemoveMethod}
      />
    </div>
  );
};

export default PaymentMethod;
