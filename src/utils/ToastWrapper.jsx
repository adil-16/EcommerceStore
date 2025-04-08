// utils/ToastWrapper.jsx
"use client";
import { Toaster } from "react-hot-toast";

const ToastWrapper = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#363636",
          color: "#fff",
        },
      }}
    />
  );
};

export default ToastWrapper;
