import { IoIosClose } from "react-icons/io";

const EmailSuccessPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm md:max-w-md p-6 relative text-center">
        <IoIosClose
          className="absolute top-3 right-3 h-6 w-6 text-custom-gray cursor-pointer"
          onClick={onClose}
        />

        {/* <img src="landingLogo.png" alt="logo" className="mx-auto mb-2" /> */}

        <img
          src="/images/compareReq.png"
          alt="Compare Requested"
          className="mx-auto mb-6 w-36"
        />

        <h2 className="text-xl font-semibold text-custom-black mb-2">
          Congratulations!
        </h2>
        <p className="text-gray-600 mb-8">
          You have successfully places an order. We will send you an email with
          the details of your order shortly.
        </p>

        <button
          onClick={onClose}
          className="bg-primary text-white rounded-full px-6 py-3 w-full max-w-xs mx-auto"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default EmailSuccessPopup;
