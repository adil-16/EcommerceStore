"use client";
import React from "react";
import Breadcrumb from "./Breadcrumb";
import CartProducts from "./CartProducts";
import OrderSummary from "./OrderSummary";
import CartInformation from "./utils/CartInformation";

const CartWrapper = ({ cart }) => {
  const [step, setStep] = React.useState(1);
  return (
    <div className="flex flex-col w-full">
      <Breadcrumb page={""} />

      <h1 className="text-[40px] font-bold">Your cart</h1>

      <div className="flex flex-row w-full gap-5 flex-wrap">
        {step === 1 && <CartProducts cart={cart} />}

        {step === 2 && <CartInformation />}

        <OrderSummary step={step} setStep={setStep} />
      </div>
    </div>
  );
};

export default CartWrapper;
