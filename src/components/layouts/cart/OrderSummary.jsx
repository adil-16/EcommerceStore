"use client";
import RoundedButton from "@/components/buttons/RoundedButton";
import PromoField from "@/components/fields/PromoField";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import EmailSuccessPopup from "@/components/progress/OrderProgressPopup";
import { clearCart } from "@/store/slices/productSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const banks = [
  "/images/bkash.png",
  "/images/visa.png",
  "/images/master.png",
  "/images/nagad.png",
];

const OrderSummary = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const [payment, setPayment] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [subtotal, setSubtotal] = React.useState(0);
  const [isSucessPopupOpen, setIsSucessPopupOpen] = React.useState(false);
  const cart = useSelector((state) => state.product.cart);

  const calculateTotals = () => {
    const sub = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountAmount = sub * 0.2;
    const finalTotal = sub - discountAmount;

    setSubtotal(sub);
    setDiscount(discountAmount);
    setTotal(finalTotal);
  };

  React.useEffect(() => {
    calculateTotals();
  }, [cart]);

  const handleButton = () => {
    if (cart.length === 0) {
      toast.error("Please add product to cart");
      return;
    }
    if (step === 1) {
      setStep(2);
    } else {
      dispatch(clearCart());
      setIsSucessPopupOpen(true);
      setStep(1);
    }
  };
  return (
    <div className="flex flex-col py-5 px-6 md:w-[43%] w-full rounded-[20px] border border-black border-opacity-10 gap-y-6 h-fit">
      <h2 className="font-bold text-2xl">Order Summary</h2>

      <div className="flex flex-col gap-y-5 w-full">
        <div className="flex flex-row items-center justify-between">
          <p className="opacity-60 text-lg">Subtotal</p>
          <p className="font-bold text-lg">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p className="opacity-60 text-lg">Discount (-20%)</p>
          <p className="font-bold text-lg text-redColor">
            {" "}
            -${discount.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between border-b border-b-black border-opacity-10 pb-5">
          <p className="opacity-60 text-lg">Delivery Fee</p>
          <p className="font-bold text-sm">Free Delivery</p>
        </div>
        <div className="flex flex-row items-center justify-between ">
          <p className="text-xl">Total</p>
          <p className="font-bold text-2xl">${total.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex flex-row gap-x-3">
        <PromoField />

        <div className="w-[30%]">
          <RoundedButton
            label="Apply"
            className=" bg-black border-black text-white font-medium px-6 py-3.5"
          />
        </div>
      </div>

      {step === 2 && (
        <div className="flex flex-col gap-y-6">
          <p>Choose Payment Method</p>
          <div
            onClick={() => setPayment(0)}
            className="flex flex-row items-center justify-between cursor-pointer"
          >
            <div className=" flex flex-row items-center gap-x-4">
              <div className="w-6 h-6 bgtra rounded-full border-2 border-black flex justify-center items-center">
                {payment == 0 && (
                  <div className="min-w-3.5 min-h-3.5 rounded-full bg-black"></div>
                )}
              </div>

              <p>Bank</p>
            </div>
            {/* Banks  */}

            <div className="flex flex-row gap-x-2">
              {banks.map((bank, index) => (
                <div
                  key={index}
                  className="flex w-[42px] h-[28px] justify-center items-center"
                >
                  <Image src={bank} width={38} height={11} alt="banks" />
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => setPayment(1)}
            className="flex flex-row items-center justify-between cursor-pointer"
          >
            <div className=" flex flex-row items-center gap-x-4">
              <div className="w-6 h-6 bgtra rounded-full border-2 border-black flex justify-center items-center">
                {payment == 1 && (
                  <div className="min-w-3.5 min-h-3.5 rounded-full bg-black"></div>
                )}
              </div>

              <p>Cash on delivery</p>
            </div>
          </div>
        </div>
      )}

      <RoundedButton
        onClick={handleButton}
        // label="Go to Checkout"
        label={step === 1 ? "Go to Checkout" : "Place Order"}
        className=" bg-primary border-primary text-white font-medium px-6 py-3.5"
      />
      <EmailSuccessPopup
        isOpen={isSucessPopupOpen}
        onClose={() => setIsSucessPopupOpen(false)}
      />
    </div>
  );
};

export default OrderSummary;
